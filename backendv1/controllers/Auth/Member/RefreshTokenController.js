import MemberModel from "../../../models/MemberModel.js"
import jwt from 'jsonwebtoken'

export const RefreshToken = async (req, res) => {
    try {
        const token = req.cookies.refreshToken
        const { id } = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)
        const user = await MemberModel.findOne({ where: { id: id } })
        if(!user) return res.status(404).json({ message: 'Refresh token is invalid' })
        const accessToken = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '20s' })
        return res.status(200).json({accessToken: accessToken})
    } catch (error) {
        console.log(error);
    }
}