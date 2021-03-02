const express = require('express');
const router = express.Router();
/*
const url = require('url');

router.get('/api/formHandler.js',async (request, response) => {

	let form = url.parse(request.url, true);
	console.log(form)
    
	
});
*/
router.post('/api/formHandler.js',async (request, response) => {

	let form = url.parse(request.url, true);
	console.log(form)
    
	
});
module.exports = router;