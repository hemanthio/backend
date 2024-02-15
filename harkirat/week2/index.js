const fs = require("fs")
const express = require("express")

function callback(err,data){
    console.log(data)
}

fs.readFile("a.txt","utf-8",callback)

function calculate(counter) {
    var sum=0;
    for(var i=0;i<counter;i++){
        sum = sum + i;
    }
    return sum
}

const sumofCalculate=calculate(100);
console.log(sumofCalculate);