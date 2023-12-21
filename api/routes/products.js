const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "handling Get Request",
  });
});

router.get("/:prodId", function (req, res, next) {
  const id = req.params.prodId;
  if (id === "504") {
    res.status(200).json({
      message: "hello Karan (55)",
    });
  }

  if (id < 0) {
    res.status(400).json({
      message: "Bad Request",
    });
  }
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    
    message: " Handling Post Requests",
  });
});

router.patch("/", (req, res, next) => {
  res.status(200).json({
    message: " Handling Patch Requests",
  });
});
router.delete("/", (req, res, next) => {
  res.status(200).json({
    message: " Handling Delete Requests",
  });
});

module.exports = router;
