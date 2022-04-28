var exp = require('express');
var cors = require('cors');   
var bp = require('body-parser');

var app = exp();

app.use(cors());      

app.use(bp.json()) 

app.listen(8081,function(){
	console.log("server started on 8081");
});
con.connect(function(err){
	if(!err)
		console.log('connected');
	else
		console.log(err.toString());
})


app.post('/bfhl',function(req,res){
        var[] udet=req.body;
      
        let alpha = "";
        let num = "";
        
        for (let i=0; i<udet.length; i++)
        {
            if (!isNaN(String(udet[i]) * 1))
                num+=udet[i];
            else if((udet[i] >= 'A' && udet[i] <= 'Z') ||
             (udet[i] >= 'a' && udet[i] <= 'z'))
                alpha+=udet[i];
        }

    str='{"is_success": true,
	"user_id": "john_doe_17091999",
	“email” : “john@xyz.com”,
	“roll_number”:”ABCD123”,
	"numbers": "'+num+'",
	"alphabets": "'+alpha+'"}';
		res.json(str);
        
});

app.all('*',function(req,res){
	res.send('Invalid URL');
})

