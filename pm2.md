# Using PM2 for Node.js Application Management

[PM2](https://pm2.io/) is a process manager for Node.js applications, designed to help manage and deploy Node.js applications in production environments. Below are common PM2 commands to assist you in managing your Node.js applications.

## 1. Install PM2 globally:

```bash
npm install pm2 -g
```

## 2. Start a Node.js application:

```bash
pm2 start app.js
```

Replace `app.js` with the entry file of your Node.js application.

## 3. Start a Node.js application with a specific name:

```bash
pm2 start app.js --name "my-app"
```

## 4. List all running processes managed by PM2:

```bash
pm2 list
```

## 5. Show detailed information about a specific process:

```bash
pm2 show <process_id_or_name>
```

## 6. Monitor application and view real-time logs:

```bash
pm2 monit
```

## 7. Restart a process by name or ID:

```bash
pm2 restart <process_id_or_name>
```

## 8. Stop a process by name or ID:

```bash
pm2 stop <process_id_or_name>
```

## 9. Stop all processes managed by PM2:

```bash
pm2 stop all
```

## 10. Delete a process from PM2:

```bash
pm2 delete <process_id_or_name>
```

## 11. Delete all processes from PM2:

```bash
pm2 delete all
```

## 12. View logs for a specific process:

```bash
pm2 logs <process_id_or_name>
```

## 13. View logs for all processes:

```bash
pm2 logs
```

## 14. Display PM2 version:

```bash
pm2 -v
```

## 15. Update PM2 to the latest version:

```bash
pm2 update
```

## 16. Save the current list of processes to automatically restart on system boot:

```bash
pm2 save
```

## 17. Generate a startup script to configure PM2 to start on system boot:

```bash
pm2 startup
```

Follow the instructions provided after running this command, as they will vary depending on your operating system.

These commands cover basic PM2 functionality. PM2 offers many more features and options for process management, logging, clustering, and deployment. Refer to the [official PM2 documentation](https://pm2.keymetrics.io/docs/usage/quick-start/) for more in-depth information and advanced usage.
