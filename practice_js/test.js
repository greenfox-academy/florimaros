//create a Class constructor,
//create a method called mothersLove. It return a value by the users average of grades. 4<avr. = 500, 3<avr. = 400 and so on... set this new parameter(motherslove), to every kid as its new parameter.
// create a method that increments every kid's money, according to the mothersLove method, and whe the money updated, set the mothersLove parameter to 0.
// create a method that gives the oldest of the richest and the poorest kid.
// create a method that can delete a kid by their age.

'use strict';

function Class (kids) {
  this.kids = kids
  this.mothersLove = function () {
    for(var i=0; i<this.kids.length; i++) {
      if (this.kids[i].grade>4) {
        this.kids[i]["mothersLove"] = 500;
      }
      else if (this.kids[i].grade>3) {
        this.kids[i]["mothersLove"] = 400;
      }
      else if (this.kids[i].grade>2) {
        this.kids[i]["mothersLove"] = 300;
      }
      else if (this.kids[i].grade>1) {
        this.kids[i]["mothersLove"] = 200;
      }
      else {
        this.kids[i]["mothersLove"] = 100;
      }
    }
  }
  this.updateMoney = function () {
    for (var i=0; i<this.kids.length; i++) {
      this.kids[i].money += this.kids[i].mothersLove;
      this.kids[i].mothersLove = 0;
    }
  }
  this.whoIsTheOldest = function () {
    var oldest = this.kids[0];
    for (var i=1; i<this.kids.length; i++) {
      if(this.kids[i].age>oldest.age) {
        oldest = this.kids[i];
      }
    }
    var youngest = this.kids[0];
    for(var i=1; i<this.kids.length; i++) {
      if(this.kids[i].age<youngest.age) {
        youngest = this.kids[i];
      }
    }
    if (oldest.money < youngest.money) {
      return youngest;
    }
    else {
      return oldest;
    }
  }
  this.removeByAge = function (age) {
    var filtered_list = [];
    for(var i=0; i<this.kids.length; i++) {
      if(this.kids[i].age !== age) {
        filtered_list.push(this.kids[i])
      }
    }  this.kids = filtered_list
  }
}


var kids = [
    {name: 'Gyurka', age: 12, money: 100, grade: 5},
    {name: 'Lilla', age: 18, money: 100, grade: 4},
    {name: 'Evi', age: 20, money: 100, grade: 2},
    {name: 'Balesz', age: 13, money: 100, grade: 1},
    {name: 'Kristof', age: 18, money: 100, grade: 3},
    {name: 'Edus', age: 8, money: 100, grade: 5},
    {name: 'Atus', age: 20, money: 100, grade: 4}
]

var firstTableClass = new Class(kids);


firstTableClass.mothersLove();
console.log(firstTableClass.kids) // {name: 'Gyurka', age: 12, money: 100, grades: [3,5,4,4,2], mothersLove: 400} and so on....
firstTableClass.updateMoney();
console.log(firstTableClass.kids) // {name: 'Gyurka', age: 12, money: 500, grades: [3,5,4,4,2], mothersLove: 0} and so on....
// // console.log(whoIsTheOldest) // Balesz
// firstTableClass.removeByAge(18)
// console.log(firstTableClass.kids) // {name: 'Gyurka', age: 12, money: 100, grades: [3,5,4,4,2]}
//                                   // {name: 'Evi', age: 20, money: 100, grades: [4,3,5,5,2]}
//                                   // {name: 'Balesz', age: 13, money: 100, grades: [5,5,4,3,1]}
//                                   // {name: 'Edus', age: 8, money: 100, grades: [5,5,5,4,4]}
                                  // {name: 'Atus', age: 20, money: 100, grades: [2,5,4,3,2]}

console.log(firstTableClass.whoIsTheOldest());
