import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const register = async (req, res) => {
    const {email, password, username} = req.body

    try {

        const passwordHash = await bcrypt.hash(password, 10) //entra el hash y se encripta
        
        const newUser = new User({
            username,
            email,
            password: passwordHash,
        }) //se crea el nuevo usuario
    
        const userSaved = await newUser.save(); //se guarda el usuario

        
    
    res.cookie('token', token)
    res.json({
        message: "User created successfully",
    })// se crea el token


        // res.json({
        //     id: userSaved._id,
        //     username: userSaved.username,
        //     email: userSaved.email,
        //     createdAt: userSaved.createdAt,
        //     updatedAt: userSaved.updatedAt,
        // })
    } catch (error) {
        console.log(error)        
    }
}
export const login = (req, res) => res.send("login");