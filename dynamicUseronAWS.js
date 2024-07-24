const AWS = require('aws-sdk');
const { Client } = require('ssh2');
const fs = require('fs');

// You only need to specify the region
AWS.config.update({ region: 'eu-north-1' });

const ec2 = new AWS.EC2();

async function getInstanceDetails(instanceId) {
  try {
    const data = await ec2.describeInstances({ InstanceIds: [instanceId] }).promise();
    return data.Reservations[0].Instances[0];
  } catch (err) {
    console.error('Error fetching instance details:', err);
    throw err;
  }
}

async function createUserOnInstance(instanceId, username, password) {
  try {
    const instanceDetails = await getInstanceDetails(instanceId);
    const { PublicIpAddress } = instanceDetails;

    const conn = new Client();
    
    return new Promise((resolve, reject) => {
      conn.on('ready', () => {
        console.log('SSH connection established');
        conn.exec(`sudo adduser ${username}`, (err, stream) => {
          if (err) reject(err);
          stream.on('close', (code, signal) => {
            console.log(`Command executed with code ${code}`);
            // Set password for the new user
            conn.exec(`sudo echo "${username}:${password}" | sudo chpasswd`, (err, stream) => {
              if (err) reject(err);
              stream.on('close', (code, signal) => {
                console.log(`Password set for ${username}`);
                conn.end();
                resolve();
              }).on('data', (data) => {
                console.log('OUTPUT: ' + data);
              }).stderr.on('data', (data) => {
                console.error('STDERR: ' + data);
              });
            });
          }).on('data', (data) => {
            console.log('OUTPUT: ' + data);
          }).stderr.on('data', (data) => {
            console.error('STDERR: ' + data);
          });
        });
      }).connect({
        host: "13.49.226.101",
        port: 22,
        username: 'ec2-user',
        password: 'Welcome@007'
      });
    });
  } catch (error) {
    console.error('Error in createUserOnInstance:', error);
    throw error;
  }
}

async function main() {
  const instanceId = 'i-05c23wdesgf71d67degeg213ewr3';
  const username = 'newuser';
  const password = 'MyNewPassword'; // Set a password for the new user

  try {
    await createUserOnInstance(instanceId, username, password);
    console.log('User created successfully');
  } catch (error) {
    console.error('Failed to create user:', error);
  }
}

main();
