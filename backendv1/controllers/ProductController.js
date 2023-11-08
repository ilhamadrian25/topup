import ProductModel from "../models/ProductModel.js"

export const createProduct = async (req, res) => {
    // console.log(req.file, 'sini');
    // const imageName = req.file.filename
    const { name, description, image, slug, price, stock, categoryId } = req.body
    await ProductModel.create({
        name,
        slug,
        description,
        image,
        price,
        stock,
        categoryId
    });
    return res.status(200).json({ message: 'Data has been insert' })
}

export const getProductBySlug = async (req, res) => {
    try {
        const response = await ProductModel.findOne({
            where: {
                slug: req.params.slug
            }
        })
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({ message: 'error server' })
    }
}

export const getAllProduct = async (req, res) => {
    try {
        const response = await ProductModel.findAll()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({ message: 'error server' })
    }
}