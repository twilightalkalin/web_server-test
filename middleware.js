var middleWare= {
	requireAunthentication:function(req,res,next){
		console.log('private router hit');
		next();

	},
	
	logger: function(req,res,next){
		console.log(new Date().toString()+'request: '+req.method + ' '+ req.originalUrl);
		next();
	 
	}
};




module.exports= middleWare;