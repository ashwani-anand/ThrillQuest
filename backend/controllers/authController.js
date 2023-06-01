import User from "../models/User.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


//registration for user
export const register = async (req, res) => {

    try {
        //passwd hashing
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);


        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo
        })


        await newUser.save()

        res.status(200).json({ success: true, message: "Successfully Created" })


    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to Create! Try Again" })


    }
}

export const login = async (req, res) => {
    const email = req.body.email;
    try {

        const user = await User.findOne({ email })

        //if doesnt exist
        if (!user) {
            return res.status(404).json({ success: false, message: "User Not Found" })
        }

        //if exist, then check passwd or comp
        const checkCorrectpasswd = await bcrypt.compare(req.body.password, user.password);

        //if passwd is incorrect 
        if (!checkCorrectpasswd) {
            return res.status(401).json({ success: false, message: "Incorrect Email or Password" })
        }

        const { password, role, ...rest } = user._doc


        //create jwt token
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY
            , { expiresIn: "15d" })

        //set token in the browser cookies and send response to clients
        res.cookie('token', token, {
            httpOnly: true,
            expires: token.expiresIn
        }).status(200).json({ token,success: true, message: 'successfully login', data: { ...rest },role })

    } catch (error) {

        res.status(401).json({ success: false, message: "Failed To Login" })



    }
}