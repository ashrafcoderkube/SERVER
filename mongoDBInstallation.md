# Installing MongoDB on Linux

To install MongoDB on a Linux system, you can follow these general steps. The specific commands may vary based on your Linux distribution. I'll provide instructions for Debian-based systems (e.g., Ubuntu) and Red Hat-based systems (e.g., CentOS).

### For Debian-based systems (e.g., Ubuntu):

1. **Import the MongoDB GPG key:**
   ```bash
   wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
   ```

2. **Add the MongoDB repository:**
   ```bash
   echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
   ```

   Replace `focal` with the codename of your Ubuntu release.

3. **Update the package index:**
   ```bash
   sudo apt update
   ```

4. **Install MongoDB:**
   ```bash
   sudo apt install -y mongodb-org
   ```

5. **Start the MongoDB service:**
   ```bash
   sudo systemctl start mongod
   ```

6. **Enable MongoDB to start on boot:**
   ```bash
   sudo systemctl enable mongod
   ```

### For Red Hat-based systems (e.g., CentOS):

1. **Create a MongoDB repository file:**
   ```bash
   sudo vi /etc/yum.repos.d/mongodb-org-5.0.repo
   ```

2. **Add the following content to the file:**
   ```plaintext
   [mongodb-org-5.0]
   name=MongoDB Repository
   baseurl=https://repo.mongodb.org/yum/redhat/8/mongodb-org/5.0/x86_64/
   gpgcheck=1
   enabled=1
   gpgkey=https://www.mongodb.org/static/pgp/server-5.0.asc
   ```

   Adjust the `baseurl` to match your Linux distribution version.

3. **Install MongoDB:**
   ```bash
   sudo yum install -y mongodb-org
   ```

4. **Start the MongoDB service:**
   ```bash
   sudo systemctl start mongod
   ```

5. **Enable MongoDB to start on boot:**
   ```bash
   sudo systemctl enable mongod
   ```

### Common commands for both:

1. **Check the status of MongoDB:**
   ```bash
   sudo systemctl status mongod
   ```

2. **Access the MongoDB shell:**
   ```bash
   mongo
   ```

3. **Stop the MongoDB service:**
   ```bash
   sudo systemctl stop mongod
   ```

After installation, MongoDB should be running on your system. Ensure to check the official MongoDB documentation for any additional configuration steps or security considerations based on your specific requirements.
