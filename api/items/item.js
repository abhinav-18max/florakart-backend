 const Item =require('../models/items')
 const {model} = require("mongoose");

 const Items ={
    add: async function (req,res){
        const {
            name,
            category,
            price,
            link,
            description
        }=req.body
        if((!name) ||(!category) ||(!price) ||(!link) ||(!description)){
            res.status(400).send({
                sucess:false,
                msg:'enter all fields'
            })
        }
        const newItem =Item({
            name:name,
            category:category,
            price:price,
            link:link,
            description:description
        })
        newItem.save((err,newItem)=>{
            if(!err){
                res.status(200).send({
                    sucess:true,
                    data:newItem
                })
            }
            else {
                console.log(err)
                res.status(400).send({
                    sucess:false,
                    err
                })
            }
        })
    },
    categ: async function (req,res){
        // console.log(req.params);
        Item.find({
            category:req.params.category
        },(err,arrdata)=>{
            if(err){
            res.status(400).send({
                    sucess: false
                }
            )
            }
            else{
                res.status(400).send({
                        sucess:true,
                        data:arrdata
                    }
                )
            }
            }

        )
    },
     id:async function (req,res){
         // console.log(req.params);
         Item.findById({
                 _id:req.params.id
             },(err,arrdata)=>{
                 if(err){
                     res.status(400).send({
                             sucess: false
                         }
                     )
                 }
                 else{
                     res.status(400).send({
                             sucess:true,
                             data:arrdata
                         }
                     )
                 }
             }

         )
     }
 }

 module.exports =Items