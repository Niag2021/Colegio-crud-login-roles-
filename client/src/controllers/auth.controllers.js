import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import config from '../config.js';
import Role from '../models/Role.js';

export const signUp = async (req, res) => {
    //Registro de usuario.
    const {username, email, password, roles} = req.body;

    const newUser = new User({
        username,
        email, 
        password: await User.encryptPassword(password)
    })

    if(roles){
        const foundRoles = await Role.find({name: {$in: roles}})
        newUser.roles = foundRoles.map(role => role._id)
    }else{
        const role = await Role.findOne({name: "user"})
        newUser.roles = [role._id];
    }

    //Para guardarlo. 
    const savedUser = await newUser.save();
    console.log(savedUser)

    const token = jwt.sign({id: savedUser._id}, config.SECRET, {
        expiresIn: 86400 //En segundo son 24 horas.
    })

    res.status(200).json({token})
    //res.json('signup'); 
}

export const signIn = async (req, res) => {
    res.json('signin');    
}