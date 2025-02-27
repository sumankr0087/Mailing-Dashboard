const express = require("express");
const authenticate = require("../middleware/authMiddleware");
const { getEmailList, getEmailDetail } = require("../controllers/emailController");

const router = express.Router();

router.get("/emails", authenticate, getEmailList);
router.get("/emails/:id", authenticate, getEmailDetail);

module.exports = router;