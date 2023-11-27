# Installing Node.js on Linux

To install Node.js on a Linux system, you can use a package manager to simplify the process. Here are the commands for installing Node.js on a Debian-based system (e.g., Ubuntu) and a Red Hat-based system (e.g., CentOS). These commands install both Node.js and npm (Node Package Manager).

### For Debian-based systems (e.g., Ubuntu):

1. **Update the package index:**
   ```bash
   sudo apt update
   ```

2. **Install Node.js and npm:**
   ```bash
   sudo apt install nodejs npm
   ```

3. **Verify the installation:**
   ```bash
   node -v
   npm -v
   ```

### For Red Hat-based systems (e.g., CentOS):

1. **Enable the EPEL repository (Extra Packages for Enterprise Linux):**
   ```bash
   sudo yum install epel-release
   ```

2. **Install Node.js and npm:**
   ```bash
   sudo yum install nodejs npm
   ```

3. **Verify the installation:**
   ```bash
   node -v
   npm -v
   ```

These commands will install the latest version of Node.js available in your distribution's package repository. If you need a specific Node.js version or want to manage multiple Node.js versions, you may consider using a version manager like NVM (Node Version Manager). The following commands demonstrate how to install NVM and then use it to install a specific Node.js version:

### Install NVM:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

### Close and reopen your terminal, or run the following command to start using NVM immediately:

```bash
source ~/.bashrc
```

### Install a specific version of Node.js using NVM:

```bash
nvm install 14.17.6
```

Replace `14.17.6` with the version you want to install.

After installing Node.js, you can use `node -v` and `npm -v` to verify the installation. If you are using NVM, make sure to switch to the desired Node.js version using `nvm use version_number` before running your Node.js applications.
