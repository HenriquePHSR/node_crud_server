const express = require('express');
const path = require('path');
const server = express();
const url = require('url');
const fs = require('fs');
const apiRoutes = require('./api/auth');
const formRoutes = require('./api/formHandler');

require('dotenv').config();

folder_ignore = ['node_modules', '.env', 'server.js', 'api'];
extension_ignore = ['json'];

// archive same thing with npm install recursive-readdir
var fileStructure = function(dir) {
    var results = [];
    list = fs.readdirSync(dir)
    list = list.filter(x => !folder_ignore.includes(x));

    list.forEach(function(file) {

        file = dir+'/'+file;
        var stat = fs.statSync(file);

        if (stat && stat.isDirectory()) {
            results = results.concat(fileStructure(file))
        } else {
            file = file.replace(__dirname, '');
            if (!extension_ignore.includes(file.split('.')[1])) results.push(file);
        };

    });
    return results;
};

var results = fileStructure(__dirname);

const port = Number(process.env.MY_PORT) || 1200;

server.listen(port, () => {
    console.log(`server running at port ${port}`);
})
server.use(express.json({ limit: '1mb' }));

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
})

// build handlers for static content
results.forEach(function (file) {
    server.get(file,function (req, res) {
        res.sendFile(path.join(__dirname+file));
    })
})

server.use(apiRoutes);
server.use(formRoutes);

