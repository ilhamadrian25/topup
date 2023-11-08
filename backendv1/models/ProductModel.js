import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import categoryModel from "./CategoryModel.js";
import nominalModel from "./NominalModel.js";

const ProductModel = db.define('product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'category',
            key: 'id'
        }
    },
}, {
    freezeTableName: true
});

ProductModel.belongsTo(categoryModel, {foreignKey: 'categoryId'})

export default ProductModel;