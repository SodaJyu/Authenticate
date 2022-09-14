# Authenticate
## Authentication API

This ongoing project is a personal exploration of authentication practices and general security.

The API currently accepts user details in the form of a username and a password.
Before storing the password in the database, it is salted and hashed for data security purposes.

The Argon2 package was used for the hashing. 
This hashing function generates its own salt, however a separate package (crypto) was also used to generate cryptographically random salt.
While this second salt is not currently being used with the hashing function, I felt it was useful to understand how salt is generated and stored.


## Future Additions
I would like to continue exploring this field and plan to add the following over time:
- Combine generated salt with the hashing function.
- Generate session tokens for true authentication.
- Add JWT style authentication for comparison.

# Getting Started

First and foremost, create a ```.env``` file and add the following:

```
DB_USER=<postgres user>
DB_PASSWORD=<password>
DB_NAME=planout
DB_PORT=<desired port number>
```

### Setup Commands

To run the project locally:
``` npm run dev ```

Compile files into JavaScript and store in the ```dist``` directory:
``` npm run build ```