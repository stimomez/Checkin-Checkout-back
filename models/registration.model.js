const { db, DataTypes } = require("../utils/database.util");

const Registration = db.define("registration", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  entranceTime: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  exitTime: {
    allowNull: true,
    type: DataTypes.DATE,
  },
  status: {
    allowNull: false,
    type: DataTypes.STRING,
    // defaultValue: 'out',
  },
});

module.exports = { Registration };
