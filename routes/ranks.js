import express from "express"
import { getRanks } from "../controllers/rank.js"

const router = express.Router()

router.get("/", getRanks)


export default router