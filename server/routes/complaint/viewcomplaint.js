var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',func.auth2,function(req, res, next) 
{         
  con.query("select * from complaint c inner join site s on c.site_id=s.site_id inner join location s.location_id=l.location_id inner join zone z on z.location_id=l.location_id  where status=1",req.decoded.aid,function(err,complaintresult,fields)
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
      res.json({"success":true,'msg':'all complaint list ','complaintdata':complaintresult});    
    }      
  });           
});


module.exports = router;