const express = require("express");
const router = express.Router();

router.post("/", function (rq, res, next) {
  res.status(200).json({
    message: "Order placed Successfully",
  });
});

router.get("/", function (req, res, next) {
  res.status(201).json({
    message: " Order fetched !!",
  });
});

router.get("/:orderId", function (req, res, next) {
  // const oId=req.params.orderId;
  res.status(200).json({
    message: " Order Details",
  });
});

router.delete("/:orderId", function (req, res, next) {
  res.status(200).json({
    message: " Order Deleted",
  });
});

router.patch("/:orderId", function (req, res, next) {
  res.status(200).json({
    message: "Order Updated",
  });
});

module.exports = router;
