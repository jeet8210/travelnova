import express from "express";
import {
  getPackages,
  getPackageById,
  createPackage,
  updatePackage,
  deletePackage,
} from "../controllers/packageController.js";
import { protect, admin } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPackages);
router.get("/:id", getPackageById);
router.post("/", protect, admin, createPackage);
router.put("/:id", protect, admin, updatePackage);
router.delete("/:id", protect, admin, deletePackage);

export default router;
