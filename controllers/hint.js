import {db} from "../db.js"

export const getHints = (req,res)=>{
   const q = "SELECT location_no, name, address, description, picture_path, latitude , longitude FROM hint h JOIN location l ON h.location_no = l.no";

   db.query(q, (err,data)=>{
    if(err) return res.send(err)

    return res.status(200).json(data);
   })
}


export const getHint = (req,res)=>{
   const q = "SELECT * FROM hint WHERE location_no = ?";

   db.query(q,[req.params.location_no], (err,data)=>{
    if(err) return res.send(err)

    return res.status(200).json(data);
   })
}