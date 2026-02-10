import { Sequelize } from 'sequelize';

const mysqlUrl = process.env.MYSQL_URL || (() => {
  const user = process.env.DB_USER || 'root';
  const pass = process.env.DB_PASS || 'password';
  const host = process.env.DB_HOST || '127.0.0.1';
  const port = process.env.DB_PORT || '3306';
  const db = process.env.DB_NAME || 'emergency_system';
  return `mysql://${user}:${pass}@${host}:${port}/${db}`;
})();

export const sequelize = new Sequelize(mysqlUrl, {
  dialect: 'mysql',
  logging: false,
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('MySQL connected successfully');
  } catch (error) {
    console.error('MySQL connection error:', error.message);
    process.exit(1);
  }
};
