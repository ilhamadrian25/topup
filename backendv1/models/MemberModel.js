import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const MemberModel = db.define('member', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    refreshToken: 
    {
        type: DataTypes.TEXT,
        allowNull: true,
    }
}, {
    freezeTableName: true
}) 

export default MemberModel