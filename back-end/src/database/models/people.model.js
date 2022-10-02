const PeopleModel = (sequelize, DataTypes) => {
    const People = sequelize.define('User', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      birthDate: DataTypes.STRING,
      telephone: DataTypes.STRING,
    });
  
    return People;
  };
  
  module.exports = PeopleModel;