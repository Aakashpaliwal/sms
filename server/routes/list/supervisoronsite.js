var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{ 
  console.log(req.query);
  req.check('site_id', 'invalid site_id').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({success:false,msg: verrs[0].msg,});
  }
  else
  {
   con.query("select e.name as supervisor,me.* from supervisor e inner join mysupervisor me on e.mysupervisor_id=me.mysupervisor_id where e.status=1 and e.site_id=?",req.query.site_id,function(err,result,fields)
  {
    if(err)
    {
      console.log(err);
      res.json({'success':false});
    }
    // else if(result.length==0)
    // {
    //   res.json({"success":true,'msg':'Data Not Available'});
    // }
    else
    {
      res.json({"success":true,'msg':'supervisor list ','data':result});    
    }      
  }); 
}             
});


module.exports = router;