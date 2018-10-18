var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add customer page'});     
// });

router.post('/',func.auth2,function(req, res, next) 
{
  console.log(req.body);
  console.log(req.ip);
  req.check('name','name must have proper value ').isLength({min:3});
  req.check('spoc','spoc must have proper value ').isLength({min:1});
  req.check('email','email must have proper value ').isLength({min:4}).isEmail().trim();
  req.check('mobile','mobile must have proper value ').isLength({min:10,max:10});
  req.check('address','address must have proper value ').isLength({min:3});
  req.check('id', 'id must be a number').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    var customer = 
    {
      name:req.body.name,
      spoc:req.body.spoc,
      email:req.body.email,
      mobile:req.body.mobile,
      address:req.body.address,
    };
    con.query("update customer SET ? where customer_id=? and status=1 ;",[customer,req.body.id],function(err,customerresult,fields)
    {
      if(err)
      {
        console.log(sql,err);
        res.json({success:false,msg: 'something went wrong',});
      }
      else
      {
        if(customerresult["affectedRows"]==1)
        res.json({"success":true,'msg':'customer updated'});
        else
        res.json({"success":false,'msg':'invalid operation'}); 
        
      }
    });
  }		   
});


module.exports = router;