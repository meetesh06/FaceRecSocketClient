const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');


router.get('/', function (req,res) {
	
  res.send("hello world");
  
});

router.post("/process-image", (req, res)=> {
  console.log(req.body.file);
});



  
  module.exports = router;