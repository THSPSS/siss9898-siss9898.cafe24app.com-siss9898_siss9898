import express from "express";
import { getRecords , getRecord , addRecord , getRecordCount, getStampRecord } from "../controllers/record.js";

const router = express.Router();

router.get("/", getRecords);
router.get("/:member_no", getRecord);
router.get("/count/:member_no", getRecordCount);
router.get("/stamp/:member_no", getStampRecord);
router.post("/", addRecord);

export default router;