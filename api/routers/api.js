const router=require('express').Router()
const Regr=require('../controllers/regcontroller')
const Productsr=require('../controllers/Productscontoller')
router.post('/reg',Regr.Regshow)

router.post('/login',Regr.login)

router.post('/products',Productsr.Productshow)
router.get('/productsall',Productsr.Productsall)
router.get('/singleproductupdate/:id',Productsr.productupdate)
router.put('/productupdateall/:id',Productsr.productupdateall)
router.get('/productfor',Productsr.productfornted)
router.post('/productsids',Productsr.productis)
module.exports=router