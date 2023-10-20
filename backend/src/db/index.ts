import { Sequelize } from 'sequelize';

export const AppDB = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite', // This is the name of the SQLite database file
});
