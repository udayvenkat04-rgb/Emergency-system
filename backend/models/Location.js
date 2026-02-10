import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const Location = sequelize.define('Location', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  latitude: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  shareId: {
    type: DataTypes.STRING,
    unique: true,
  },
  isShared: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  expiresAt: DataTypes.DATE,
}, {
  timestamps: true,
});

export default Location;
