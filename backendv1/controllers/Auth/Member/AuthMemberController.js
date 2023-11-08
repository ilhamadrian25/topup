import bcrypt from 'bcrypt'
import MemberModel from "../../../models/MemberModel.js"
import jwt from 'jsonwebtoken'

export const Register = async (req, res) => {
    const { name, email, password, confPassword } = req.body
    if (!name || !email || !password) return res.status(400).json({ message: 'The field cannot be empty' }) 
    if (password !== confPassword) return res.status(400).json({ message: 'Email or Password does not match1' })
    const user = await MemberModel.findOne({ where: { email: email } })
    if (user) return res.status(400).json({ message: 'Email or Password does not match' })
    const salt = await bcrypt.genSalt()
    const newPassword = await bcrypt.hash(password, salt)
    try {
        await MemberModel.create({
            name: name,
            email: email,
            password: newPassword
        });
        return res.status(200).json({ message: 'User has been created' })
    } catch (error) {
        console.log(error);
    }
}

export const Login = async (req, res) => {
    try {
    const { email, password } = req.body

    const user = await MemberModel.findOne({ where: { email: email } })
    if(!user) return res.status(404).json({ message: 'Email or Password does not match' })
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) return res.status(404).json({ message: 'Email or Password does not match' })
    const refreshToken = jwt.sign({ id: user.id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' })
    const accessToken = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '20s' })
    await user.update({ refreshToken: refreshToken })
    res.cookie('refreshToken', refreshToken,{
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    });
    return res.status(200).json({accessToken: accessToken})
    } catch (error) {
        console.log(error);
    }
}