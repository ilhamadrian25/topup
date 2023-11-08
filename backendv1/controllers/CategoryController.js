import categoryModel from "../models/CategoryModel.js";

export const createCategory = async (req, res) => {
    try {
        const { name, slug } = req.body
        await categoryModel.create({
            name: name,
            slug: slug
        });
        return res.status(200).json({ message: 'Data has been created!' })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server error please wait' })
    }
}