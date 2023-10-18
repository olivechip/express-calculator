const fs = require('fs');

let nums = [];

function randNums(num){
    // creates an array with (num) random numbers between 0-9
    nums = [];
    for (let i = 0; i < num; i++){
        nums.push(Math.floor(Math.random()*10))
    }
    return nums;
}

function mean(nums){
    // find mean of a nums array
    let sum = 0;
    for (let num of nums){
        sum += num;
    }
    return sum / nums.length
}

function median(nums){
    // sort the array
    nums.sort((a, b) => a - b);

    // find median of a nums array
    if (nums.length % 2 !== 0){
        return nums[Math.floor(nums.length / 2)];
    }
    return mean([nums[nums.length/2],nums[nums.length/2-1]])
}

function mode(nums){
    // create an object with numbers:occurrences
    let set = new Set(nums);
    let obj = {};
    for (let setNum of set){
        obj[setNum] = nums.filter((num) => num == setNum).length;
    }
    
    // create an array w/ the numbers w/ the highest occurences
    let modes = [];
    let count = 0 ;
    let entries = Object.entries(obj);
    entries.forEach(entry => {
        if (entry[1] > count){
            count = entry[1];
            modes = [Number(entry[0])];
        } else if (entry[1] === count){
            modes.push(Number(entry[0]));
        }
    })
    return modes;
}

function writeToFile(path, data){
    // writes data to 'results.json'
    fs.writeFile(path, data + '\n' + `${new Date().toISOString()}` + '\n', {encoding: 'utf8', flag:'a'}, function(err){
        if (err){
            console.log(`Error writing to ${path}: ${err}`)
            process.exit(1)
        }
        console.log(`Successfully wrote data to file!`)
    })
}

// comment this line out for regular jasmine test
module.exports = { nums, randNums, mean, median, mode, writeToFile} ;