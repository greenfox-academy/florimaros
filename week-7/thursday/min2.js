"use strict";

var numbers = [7, 8, -1, 4, 3, 12];

var min = numbers[0];

for ( var i = 1 ; i < numbers.length; i++ )  {
    min = numbers [i] < min ? numbers[i] : min;

}
console.log(min);
