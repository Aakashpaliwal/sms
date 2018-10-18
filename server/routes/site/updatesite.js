var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

// router.get('/',func.auth,function(req, res, next) 
// {
// 	res.json({"success":true,'msg':'add site page'});     
// });

router.post('/',func.auth2,function(req, res, next) 
{
  console.log(req.body);
  req.check('dummy','invalid dummy').isLength({min:1,max:100});

  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    var site = 
    {
      dummy:req.body.dummy,
    };
    con.query("update site SET ? where site_id=? and status=1 ;",[site,req.body.id],function(err,siteresult,fields)
    {
      if(err)
      {
        console.log(sql,err);
        res.json({success:false,msg: 'something went wrong',});
      }
      else
      {
        if(siteresult["affectedRows"]==1)
        res.json({"success":true,'msg':'site updated'});
        else
        res.json({"success":false,'msg':'invalid operation'}); 
        
      }
    });
  }		   
});


module.exports = router;