# SSH Commands Reference

This guide provides a reference for common SSH commands on both Unix-based systems (Mac/Linux) and Windows. Ensure you have the necessary permissions and configurations for successful SSH connections.

## Common SSH Commands (Mac/Linux):

1. **Connect to a remote server:**
   ```bash
   ssh username@remote_host
   ```

2. **Connect with a specific port:**
   ```bash
   ssh -p port_number username@remote_host
   ```

3. **Specify private key file:**
   ```bash
   ssh -i /path/to/private_key username@remote_host
   ```

4. **Copy files from local to remote:**
   ```bash
   scp /path/to/local/file username@remote_host:/path/to/remote/location
   ```

5. **Copy files from remote to local:**
   ```bash
   scp username@remote_host:/path/to/remote/file /path/to/local/location
   ```

6. **Secure copy entire directory:**
   ```bash
   scp -r /path/to/local/directory username@remote_host:/path/to/remote/location
   ```

7. **Remote port forwarding:**
   ```bash
   ssh -L local_port:destination_host:remote_port username@remote_host
   ```

8. **Remote command execution:**
   ```bash
   ssh username@remote_host "command_to_execute"
   ```

9. **Terminate SSH session:**
   ```bash
   exit
   ```

## Common SSH Commands (Windows using OpenSSH):

1. **Connect to a remote server:**
   ```bash
   ssh username@remote_host
   ```

2. **Connect with a specific port:**
   ```bash
   ssh -p port_number username@remote_host
   ```

3. **Specify private key file:**
   ```bash
   ssh -i C:\path\to\private_key username@remote_host
   ```

4. **Copy files from local to remote:**
   ```bash
   scp C:\path\to\local\file username@remote_host:/path/to/remote/location
   ```

5. **Copy files from remote to local:**
   ```bash
   scp username@remote_host:/path/to/remote/file C:\path\to\local\location
   ```

6. **Secure copy entire directory:**
   ```bash
   scp -r C:\path\to\local\directory username@remote_host:/path/to/remote/location
   ```

7. **Remote port forwarding:**
   ```bash
   ssh -L local_port:destination_host:remote_port username@remote_host
   ```

8. **Remote command execution:**
   ```bash
   ssh username@remote_host "command_to_execute"
   ```

9. **Terminate SSH session:**
   ```bash
   exit
   ```

## Common SSH Commands (Windows using PuTTY):

For PuTTY, use the graphical interface for most commands. File transfers can be done using `pscp`:

1. **Copy files from local to remote:**
   ```bash
   pscp C:\path\to\local\file username@remote_host:/path/to/remote/location
   ```

2. **Copy files from remote to local:**
   ```bash
   pscp username@remote_host:/path/to/remote/file C:\path\to\local\location
   ```

Remember to replace placeholders like `username`, `remote_host`, `port_number`, `/path/to/...`, etc., with your actual values.
