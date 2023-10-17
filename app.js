const express = require('express');
const math = require('./helpers');

const app = express();

app.use(express.json());

app.get('/', function(req, res){
    res.send('Hello World!');
})

app.get('/mean', function(req, res){
    nums = req.query.nums.split(",").map((num) => Number(num));
    let mean = math.mean(nums);
    res.send({
        response: {
            operation: "mean",
            value: mean
        }
    });
});

app.get('/median', function(req, res){
    nums = req.query.nums.split(",").map((num) => Number(num));
    let median = math.median(nums);
    res.send({
        response: {
            operation: "median",
            value: median
        }
    });
});

app.get('/mode', function(req, res){
    nums = req.query.nums.split(",").map((num) => Number(num));
    let mode = math.mode(nums);
    res.send({
        response: {
            operation: "mode",
            value: mode
        }
    });
});

app.listen(port=3000, function(){
    console.log(`Server started on port: ${port}`);
})