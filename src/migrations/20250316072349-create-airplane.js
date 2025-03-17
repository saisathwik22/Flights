// 2:19:00
"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Airplanes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      modelNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      capacity: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Airplanes");
  },
};

/* When migration added, async up func is applied. When migration removed using undo, async down func is applied.
  Migration can add a table and alter a table also.
  Example, a dev added a table in a migration. How can other 4 devs can access the same table?
  They just do `git pull` and they will run `npx sequelize db:migrate`, whatever the pending migrations are there in their system will shoot up. THATS HOW VERSIONS OF MODELS & DB ARE MAINTAINED !!!

  Sequelize gives us support for establishing all these without migrations also.
  Whenever you actually create a model, and do the setup using raw sequelize, you can actually use commands like `db.sync()`, or `sequelize.sync()` to make changes to the tables. Only issue is this doesn't maintain any versions of DB schema.Incremental changes not possible. Identifying bugs across different tables is not possible. Can't move back in time to make changes.
  
  Raw Queries:
  [results, metadata] = await sequelize.query("UPDATE users SET y = 42 WHERE x = 12")
  
  !!! *** REFER SEQUELIZE DOCS FOR WIDE RANGE OF INFORMATION *** !!!
 */
