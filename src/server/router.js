const express=require("express");
const work=require("./work");
let router=express.Router();
router.get('/',work.home)
  .get('/data',work.data)
  .get('/show',work.show);

module.exports=router;
