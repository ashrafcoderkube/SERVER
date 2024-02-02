Step 1: Log in to the server using ssh client of your choice using the private key.
ssh -i your-key.pem username@ip_address
Step 2: Setup a password for the user using passwd command along with the username.
sudo passwd ec2-user
Step 3: Open the sshd_config file.
sudo vi /etc/ssh/sshd_config
Step 3: Find the Line containing “PasswordAuthentication” parameter and change its value from “no” to “yes”
PasswordAuthentication yes
If you want to set up “root” login, find “PermitRootLogin” parameter and change its value from “prohibit-password” to “yes”
Step 5: Now, restart the “sshd” service using the following command.
sudo service sshd restart
Step 6: Now you can log out and log in using the password you set for the user.
ssh ec2-user@ip_address 
// ssh ec2-user@15.1.25.40
I hope this article helps. Enjoy :)
