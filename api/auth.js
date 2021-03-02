const express = require('express');
const router = express.Router();

router.post('/api/auth.js',async (request, response) => {

	let user = request.body;
	console.log(user)
    if (user.pass == '111') {
        console.log('Log in approved')
        response.json(user);
    } else {
        response.json({});
    }
	
});

module.exports = router;