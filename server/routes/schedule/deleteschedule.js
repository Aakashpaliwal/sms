var express = require('express');
var router = express.Router();
var func = require('../func.js');
// var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{
  var schedule_id=req.query.id;
  // req.checkQuery('id', 'id must be a number').optional().isNumber();
  req.checkQuery('id', 'id must be a number').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    con.query("update schedule set ? where schedule_id= ? and status=1 ",[{'status':0},schedule_id],function(err,scheduleresult,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false});
      }
      else
      { 
        if(scheduleresult["affectedRows"]==1)
        res.json({"success":true,'msg':'schedule deleted'});
        else
        res.json({"success":false,'msg':'invalid operation'});    
      }      
    });  
  }       
});


module.exports = router;