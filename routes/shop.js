const express=require("express")
const path=require("path");
const rootDir = require("../util/root");
const router=express.Router();
const adminData=require('./admin')


router.get("/", (req, res, next) => {
  //admin will add data and this has to be shown on the shop view 
  const products=adminData.products
  res.render("shop", {
    prods: products,
    pageTitle:'shop',
    hasproducts:products.length>0,
    activeShop:true,
    productCSS:true
  });
});

module.exports=router;
