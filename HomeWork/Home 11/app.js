"use strict";

function Student(name, marksArr) {
  this.name = name;
  this.marksArr = marksArr;
  this.averageMark = averageMark;
  this.workDone = workDone;
  this.addMark = addMark;
}

function workDone(){
  return this.marksArr.filter((item) => item > 0).length;
}


function averageMark(){
  let sum = 0;
  for(let i = 0; i < this.marksArr.length; i++){
    sum += this.marksArr[i];
  }
  return sum / this.marksArr.length;
}

function addMark(mark){
  this.marksArr.push(mark);
}

function averageMarkGroup(){
    let averageMarkArr = [];
    let totalMark = 0;
    for(let i = 0; i < students.length; i++) {
        averageMarkArr.push(students[i].averageMark());
        totalMark += averageMarkArr[i];
    }
    return totalMark / averageMarkArr.length;
}


function completePercent(){
  let WorkStudentDone = 0;
  let allStudentWork = 0;
  for(let i = 0; i < students.length; i++){
    WorkStudentDone += students[i].workDone();
    allStudentWork += students[i].marksArr.length;
    
  }
  return (WorkStudentDone * 100 ) / allStudentWork;
}


const students = [ 
  new Student('Student 1', [10,9,8,0,10]), 
  new Student('Student 12', [10,0,8,0,3,4])
 ];


console.log(students[0].workDone());
console.log(students[1].workDone());
console.log(students[0].averageMark());
console.log(students[1].averageMark());
console.log(completePercent());



