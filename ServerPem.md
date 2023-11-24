# Server pem file to private and public key 

server pem file to convert into server private key
use this cmd this of only macOs

## openssl rsa -in /Users/ashraf/Downloads/ck-user.pem -out private.key

this command used for create public SSH key for login server with SSH key file 
it's also work in only macos

## sudo ssh-keygen -f /Users/ashraf/Downloads/ck-user.pem -y > pbcopy.pub

