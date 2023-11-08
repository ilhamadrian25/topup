import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import ProductModel from "./ProductModel.js";

const NominalModel = db.define('nominal', {
    name: {
        type: DataTypes.INTEGER,
    },
    productId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'product',
            key: 'id'
        }
    }
},[])

export default NominalModel
