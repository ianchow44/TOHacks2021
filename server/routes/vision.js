const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();

router.route("/post").post((req, res) => {
  const url =
    "https://vision.googleapis.com/v1/images:annotateAIzaSyCdcjIRF3feDpFJh3WuRG3OjVJ-cZgLNgY";
  console.log(req.body);
  axios
    .post(url, req.body)
    .then((response) => {
      res.status(200);
      res.send(JSON.stringify(response.data));
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
});

module.exports = router;
