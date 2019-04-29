Install nvm and node v11.8 if not installed
```
nvm --version # to check if nvm is not installed
# if nvm is not installed run this else skip
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

nvm install 11.8
nvm use 11.8
npm install
```

Install mongodb
```
mongod --version # to check if mongodb is not installed
# if mongod is not installed run this else skip

brew update
brew install 11.6

# Create the “db” directory. This is where the Mongo data files will live. 
mkdir -p /data/db

# Make sure that the /data/db directory has the right permissions by running
sudo chown -R `id -un` /data/db
# Enter your password

mongod
```


To run the project and server in watch node <br>
```
node app.js
```

To see results hit the following api with two arguments, fancy and number. Fancy can have the values yes, in which case, the value of the second argument(number) should be a ten digit number between 1111111111 and 9999999999, and no, in which case you do not need to provide the second argument(number). 
```
http://localhost:3000/:fancy/:number

Example:
http://localhost:3000/yes/4938203829

http://localhost:3000/no/
```
