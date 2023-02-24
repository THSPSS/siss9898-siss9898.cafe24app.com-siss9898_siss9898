import {db} from "../db.js"

export const getRanks = (req,res)=>{
   const q = "SELECT * FROM member_rank";

   db.query(q, (err,data)=>{
    if(err) return res.send(err)

    return res.status(200).json(data);
   })
}
