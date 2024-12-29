const {
  createBuild,
  getAllBuilds,
  deleteBuild,
} = require("../controller/build");
const express = require("express");
const router = express.Router();

router.get("/", getAllBuilds);
router.post("/", createBuild);
router.delete("/:id", deleteBuild);

module.exports = router;
