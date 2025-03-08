## ORM - Object Relational Mapping:

- Acts as a bridge between MySQL syntax and Object Oriented Syntax.
- provides an interface to write Object Oriented Code, which will be internally and automatically converted to SQL based Code and it will execute the SQL.
- There are multiple ORMs.

- Rails based ORM is very powerful.

### Sequelize ORM:

- Modern Typescript and Node.js ORM for Oracle, Postgres, MySQL, MariaDB, SQLite and SQL server.
- Features solid transaction support, relations, eager and lazy loading, read application and more.
- It helps you define Schema and Model as well.
- It gives us a promise based syntax with async, await.
- It helps you to do data modelling, associations, soft deletion.

```bash
npm install --save sequelize
```

- Apart from installing sequelize, you also have to install a driver.

```bash
npm install --save <driver-name>
```

- Drivers: mysql2 (MySQL), mariadb (Maria DB), sqlite3 (SQLite), tedious (MS SQL server), oracledb (oracle DB), pg pg-hstore (postgres).

- Every database might have different way of optimizations and different ways of QUERY writing.

- Drivers inform sequelize about which DB to connect and how to connect.
