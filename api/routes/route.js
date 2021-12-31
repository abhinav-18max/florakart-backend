const express =require('express')
const router = express.Router()
const item =require('../items/item')

router.post('/item/add',item.add)
router.get('/items/category/:category',item.categ)
router.get('/item/id/:id',item.id)

module.exports=router