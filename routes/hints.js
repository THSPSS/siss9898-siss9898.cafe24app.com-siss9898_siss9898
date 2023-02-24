import express from "express"
import { getHints, getHint} from "../controllers/hint.js"

const router = express.Router()

router.get("/", getHints);
router.get("/:location_no", getHint);


export default router