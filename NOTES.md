## ORM - Object Relational Mapping:

- Acts as a bridge between MySQL syntax and Object Oriented Syntax.
- provides an interface to write Object Oriented Code, which will be internally and automatically converted to SQL based Code and it will execute the SQL.
- There are multiple ORMs.

- Rails based ORM is very powerful.

### Sequelize ORM:

- Modern Typescript and Node.js ORM for Oracle,
  Postgres, MySQL, MariaDB, SQLite and SQL server.
- Features solid transaction support, relations, eager and lazy loading, read application and more.
- It helps you define Schema and Model as well.
- It gives us a promise based syntax with async, await.
- It helps you to do data modelling, associations, soft deletion.

```bash
npm install sequelize
```

- Apart from installing sequelize, you also have to install a driver.

```bash
npm install <driver-name>
```

- `Drivers` : mysql2 (MySQL), mariadb (Maria DB), sqlite3 (SQLite), tedious (MS SQL server), oracledb (oracle DB), pg pg-hstore (postgres).

- Every database might have different way of optimizations and different ways of QUERY writing.

- Drivers inform sequelize about which DB to connect and how to connect.

### Sequelize CLI

- It provides bunch of commands and these commands are consistent with commands of other frameworks as well.
- Auto generates a lot of Files, Schemas and Models as well.
- It removes the hassle of writing our own database configuration by automatically generating it internally.

```bash
  npm install sequelize-cli
```

```bash
  sequelize <command>
```

- Refer [Github repository of sequelize-cli](https://github.com/sequelize/cli) for more detailed information.

### Setting up sequelize-cli

- Initializing sequelize-cli project

```bash
cd src
npx sequelize init
```

- When we run above command, it created a `/src/config/config.json` file. (We already had config folder, just
  needed the config.json file)

- It created a `/src/models/index.js` file, containing the configuration code inside `index.js` file. (We didn't have models file inside src)

- It also created a `src/seeders` folder.

### `config.json` :

- It gives us configuration for 3 environments i.e., development, test and production.

`Development environment` : Database created for developers to work on. There is a major risk of making and breaking stuff during development So, a seperate database is created for development, to restrict developers from using the end-users database and spoiling it.

`Test environment` : Database created for QA folks, to test the feature created by developers. Maybe while testing the feature, they may encounter bugs. So, to refrain them from using development or production enviroment while testing, test environment is created.

`Production enviroment` : Once development, testing is done, the feature is released on production database for end-users to connect and interact.

```bash
"dialect": "mysql"
```

- It indicates that, this project's ORM sequelize is going to connect to mysql database.
- Sequelize automatically detected that we are going to connect with mysql using package.json.
- If there are multiple drivers, it might put some default database in dialect, then we have to change it manually to whichever database we are using.

```bash
"host": "127.0.0.1"
```

- It fetches the URL of server, where the mysql database has been deployed/hosted.
- Our system by default runs the mysql server at localhost, as we know `localhost` can be replaced with `127.0.0.1` .
- The default port of mysql is `3306`, if there is any change in default port, then only its mentioned with host address, else it's not required.

```bash
"username": "your_username",
"password": "your_password",
"database": "database_name",
```

- The username, password, database are simple to setup.
- Database name might be among development, test, production.

- `config.json` file contains sensitive information, so hide it out using gitignore.
- Put up the dummy format of `config.json` file in README file for others to understand.
