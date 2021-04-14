const express = require('express');
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method == 'OPTIONS') {
        res.status(200).send();
    } 
    else {
        next();
    }
});

const fs = require('fs')
const projects_url = 'src/data/projects.json'
const courses_url = 'src/data/courses.json'

app.route('/get-latest-projects')
.post(function(req, res) {
    fs.readFile(projects_url, 'utf-8', function(err, data) {
        if (err) throw err
        data = JSON.parse(data)
        data.sort((a, b) => a['project_id'] - b['project_id'])

        let latest = []
        latest.push(data[data.length-1])
        latest.push(data[data.length-2])

        res.setHeader('Content-Type', 'application/json')
        res.status(200).send(JSON.stringify(latest, null, 2))
    })
})
.all(function(req, res) {
    res.status(405).send();
})

app.route('/get-projects')
.post(function(req, res) {
    fs.readFile(projects_url, 'utf-8', function(err, data) {
        if (err) throw err
        data = JSON.parse(data)
        data.sort((a, b) => b['project_id'] - a['project_id'])

        res.setHeader('Content-Type', 'application/json')
        res.status(200).send(JSON.stringify(data, null, 2))
    })
})
.all(function(req, res) {
    res.status(405).send();
})

app.route('/get-project')
.get(function(req, res) {
    fs.readFile(projects_url, 'utf-8', function(err, data) {
        if (err) throw err
        data = JSON.parse(data)
        let id = req.query['id']

        let project = data.find(element => element['project_id'] === id)
        res.setHeader('Content-Type', 'application/json')
        res.status(200).send(JSON.stringify(project, null, 2))
    })
})
.all(function(req, res) {
    res.status(405).send();
})

app.route('/get-courses')
.post(function(req, res) {
    fs.readFile(courses_url, 'utf-8', function(err, data) {
        if (err) throw err
        data = JSON.parse(data)
        res.setHeader('Content-Type', 'application/json')
        res.status(200).send(JSON.stringify(data.reverse(), null, 2))
    })
})
.all(function(req, res) {
    res.status(405).send();
})

app.use(function(req, res) {
    res.status(404).send();
});

let server = app.listen(3000, () => {
    let port = server.address().port;
    console.log(`Listening on http://localhost:${port}`);
});