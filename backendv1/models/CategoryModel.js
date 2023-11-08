import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const categoryModel = db.define('category',{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
}, {
    freezeTableName: true
})

export default categoryModel