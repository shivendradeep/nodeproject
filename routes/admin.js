const express=require("express");

const path=require('path');

const router=express.Router();

const rootDir=require("../util/root");
const products=[];

//localhost:3000/admin/add-products=>GET
router.get("/add-products", (req, res, next) => {
 res.render('add-products', {
    pageTitle: 'Add Products',
    path: '/admin/add-products',
    formsCSS: false,
    productCSS: false,
    activeAddProduct: false
  });
});
//localhost:3000/admin/add-product=>POST
router.post("/add-products", (req, res, next) => {
  products.push({'title':req.body.title});
  res.redirect("/");
});

exports.routes = router;
exports.products = products;