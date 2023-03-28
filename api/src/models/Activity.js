const { DataTypes, Sequelize } = require("sequelize");
// We our function define the model
module.exports = (sequelize) => {
    // Define model
    sequelize.define("activity", {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty:{
            type: DataTypes.ENUM('1', '2', '3', '4', '5'),
            allowNull: false
        },
        duration:{
            type: DataTypes.STRING
        },
        season:{
            type: DataTypes.ENUM('Winter', 'Autumn', 'Summer', 'Spring'),
            allowNull:false
        }
    }, 
    {
        timestamps: false
    })
};