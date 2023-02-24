import {db} from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res)=>{

    //CHECK EXISTING USER
    const q = "SELECT * FROM member WHERE id = ?";

    db.query(q,[req.body.id], (err,data)=>{
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("id already exist!");

        //Hash the password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.pass, salt);

        const q = "INSERT INTO member(`id`,`pass`) VALUES (?)"
        const values = [
            req.body.id,
            hash,
        ]

        db.query(q, [values], (err,data)=>{
            if(err) return res.json(err);
            return res.status(201).json("User has been created.")
        })
    });

};

export const login = (req, res)=>{

    const q = "SELECT * FROM member WHERE id = ?"

    db.query(q,[req.body.id], (err,data)=>{
        if(err) return res.json(err);
        if(data.length === 0 ) return res.status(404).json("User not found!");

        //CHECK password
        const idPasswordCorrect = bcrypt.compareSync(req.body.pass, data[0].pass);

        if(!idPasswordCorrect) 
            return res.status(400).json("Wrong username or password!")

        const token = jwt.sign({id:data[0].id},"jwtkey");
        const {pass,...other} = data[0]

        res.cookie("access_token", token, { httpOnly: true });
        res.status(200).json(other);

    });
    
};

export const logout = (req, res) => {
    res.clearCookie("access_token",{
      sameSite:"none",
      secure:true
    }).status(200).json({msg:"User has been logged out."})
  };