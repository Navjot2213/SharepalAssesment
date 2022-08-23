const mongoose = require('mongoose');
const dbUrl = 'mongodb://127.0.0.1:27017/Project';

mongoose.connect(dbUrl, { 
	useNewUrlParser: true , 
	useUnifiedTopology: true 
	}).then(()=> {
		console.log(`Database Connected Successfully`)
	}).catch((error)=>{
		console.log(`Database Connected Successfully`) 
	});
