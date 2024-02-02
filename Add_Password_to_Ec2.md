# SSH Setup Guide

This guide provides steps to set up SSH access on a server.

### Step 1: Log in to the Server

Log in to the server using your preferred SSH client and the private key.

```bash
ssh -i your-key.pem username@ip_address
```

### Step 2: Set Up Password for the User

Set up a password for the user using the `passwd` command along with the username.

```bash
sudo passwd ec2-user
```

### Step 3: Open the SSH Configuration File

Open the `sshd_config` file using a text editor (e.g., vi).

```bash
sudo vi /etc/ssh/sshd_config
```

### Step 4: Update SSH Configuration

Find the line containing the `PasswordAuthentication` parameter and change its value from `no` to `yes`.

```bash
PasswordAuthentication yes
```

If you wish to enable root login, find the `PermitRootLogin` parameter and change its value from `prohibit-password` to `yes`.

### Step 5: Restart the SSH Service

Restart the SSH service to apply the changes.

```bash
sudo service sshd restart
```

### Step 6: Log In Using Password

Now you can log out and log in using the password you set for the user.

```bash
ssh ec2-user@ip_address
```

or

```bash
ssh ec2-user@15.1.25.40
```

Enjoy your SSH setup!

I hope this guide helps. Happy coding! :)
