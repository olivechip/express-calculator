const express = require('express');
const math = require('./helpers');

const app = express();

app.use(express.json());

app.get('/', function(req, res){
    res.send('Hello World!');
    console.log(req.headers)
})

app.get('/mean', function(req, res){
    if (!req.query['nums']){
        res.status(400).json('nums are required');
    }
    nums = req.query.nums.split(",").map((num) => Number(num));
    if (nums.includes(NaN)){
        res.status(400).json('query must be all nums')
    }
    let mean = math.mean(nums);
    let response = {
        response: {
            operation: "mean",
            value: mean
        }
    }
    res.send(response);
    
    if (req.query['save'] === 'true'){
        math.writeToFile('results.json', JSON.stringify(response));
    }
});

app.get('/median', function(req, res){
    if (!req.query['nums']){
        res.status(400).json('nums are required');
    }
    nums = req.query.nums.split(",").map((num) => Number(num));
    if (nums.includes(NaN)){
        res.status(400).json('query must be all nums')
    }    
    let median = math.median(nums);
    let response = {
        response: {
            operation: "median",
            value: median
        }
    }
    res.send(response);

    if (req.query['save'] === 'true'){
        math.writeToFile('results.json', JSON.stringify(response));
    }
});

app.get('/mode', function(req, res){
    nums = req.query.nums.split(",").map((num) => Number(num));
    let mode = math.mode(nums);
    let response = {
        response: {
            operation: "mode",
            value: mode
        }
    }
    res.send(response);

    if (req.query['save'] === 'true'){
        math.writeToFile('results.json', JSON.stringify(response));
    }
});

app.get('/all', function(req, res){
    if (!req.query['nums']){
        res.status(400).json('nums are required');
    }
    nums = req.query.nums.split(",").map((num) => Number(num));
    if (nums.includes(NaN)){
        res.status(400).json('query must be all nums')
    }    
    let mean = math.mean(nums);
    let median = math.median(nums);
    let mode = math.mode(nums);
    let response = {
        response: {
            operation: "all",
            mean: mean,
            median: median, 
            mode: mode
        }
    }
    res.send(response);

    if (req.query['save'] === 'true'){
        math.writeToFile('results.json', JSON.stringify(response));
    }
});

app.listen(port=3000, function(){
    console.log(`Server started on port: ${port}`);
})