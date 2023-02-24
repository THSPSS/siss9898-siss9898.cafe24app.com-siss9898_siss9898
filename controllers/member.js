import {db} from "../db.js"

export const getMembers = (req,res)=>{

   const id = req.query.id

   const q = id ? "SELECT id FROM member WHERE id = ? " : "SELECT id,point FROM member" 

   db.query(q,[id], (err,data)=>{
    if(err) return res.send(err);

    return res.status(200).json(data);
   })
}

