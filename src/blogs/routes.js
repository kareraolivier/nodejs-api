const express = require("express");
const router = express.Router();

const blogsController = require("./controllers");

router.get("/", blogsController.getAllblogs);
// router.post("/", blogsController.createblog);
// router.get("/:id", blogsController.getblogById);
// router.put("/:id", blogsController.updateblog);
// router.delete("/:id", blogsController.deleteblog);

module.exports = router;
