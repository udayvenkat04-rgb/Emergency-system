import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const Emergency = sequelize.define('Emergency', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  latitude: DataTypes.DOUBLE,
  longitude: DataTypes.DOUBLE,
  contacts: {
    type: DataTypes.JSON,
    defaultValue: [],
  },
  status: {
    type: DataTypes.ENUM('active', 'resolved', 'cancelled'),
    defaultValue: 'active',
  },
}, {
  timestamps: true,
});

export default Emergency;
