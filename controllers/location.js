import {db} from "../db.js"

export const getLocations = (req,res)=>{
   const q = "SELECT * FROM location";

   db.query(q, (err,data)=>{
    if(err) return res.send(err)

    return res.status(200).json(data);
   })
}

export const getLocationsCount = (req,res)=>{
    const q = "SELECT COUNT(*) AS total FROM location";
 
    db.query(q, (err,data)=>{
     if(err) return res.send(err)
 
     return res.status(200).json(data);
    })
 }
 

export const getLocation = (req,res)=>{
    res.json("from controller")
}

export const addLocation = (req,res)=>{
    res.json("from controller")
}

export const deleteLocation = (req,res)=>{
    res.json("from controller")
}

export const updateLocation = (req,res)=>{
    res.json("from controller")
}

// async function getLocationId(req, res, next) {
//     let location
//     try{
//         location = await Location.findById(req.params.id)
//         if (location === null) {
//             return res.status(404).json("Cannot find location")
//         }
//     } catch (err) {
//         return res.status(500).json(err)
//     }

//     res.location = location
//     next()
// }