# Convert `.pem` to `id_rsa` and `id_rsa.pub`

These instructions guide you through the process of converting a `.pem` private key file to `id_rsa` and `id_rsa.pub` files for SSH authentication on both Windows and macOS.

## Windows:

1. Open a Command Prompt.

2. Navigate to the directory where your `.pem` file is located.

3. Run the following commands:

   ```bash
   puttygen your-key.pem -o id_rsa.ppk
   ```

   This command uses `puttygen` to convert the `.pem` private key to a PuTTY Private Key (.ppk) format.

   **Note:** If you don't have `puttygen` installed, you can download it from the [PuTTY website](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html).

4. You can now use the generated `id_rsa.ppk` file with PuTTY or other PuTTY-based tools.

## macOS:

1. Open a Terminal on your Mac.

2. Navigate to the directory where your `.pem` file is located.

3. Run the following commands:

   ```bash
   openssl rsa -in your-key.pem -outform PEM -out id_rsa
   chmod 600 id_rsa
   ssh-keygen -y -f your-key.pem > id_rsa.pub
   ```

   These commands use `openssl` to convert the private key to the correct format (`id_rsa`), set the correct permissions, and then use `ssh-keygen` to extract the public key (`id_rsa.pub`) from the `.pem` file.

After running these commands on both Windows and macOS, you should have the `id_rsa` (private key) and `id_rsa.pub` (public key) files in the same directory as your original `.pem` file.

Remember to replace `your-key.pem` with the actual name of your `.pem` file.
