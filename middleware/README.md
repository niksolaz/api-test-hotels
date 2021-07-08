### get private key
openssl genrsa -out rsa.key 1024

### get public key
openssl rsa -in rsa.key -out rsa.pem -pubout -outform PEM