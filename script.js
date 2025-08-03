//let name=("apna collage");
// // // let students=[ "ram","shyam","gautam"];



//  let str=prompt("please enter a string");
//  console.log(`original string =${str}`);
// console.log(`string without spaces=${str.trim()}`);

// // let name =prompt("enter your name");
// // let age =prompt("enter the age");
// // alert (`${name} is ${age} year old`);
// for(let i=1; i<=15;i=i+2){
//     console.log(i);
// }
// console.log("reverse");

// for(let i=15; i>=1; i=i-2){
//     console.log(i);
// }

//for(let i=2;i<=10;i=i+2){
//    console.log(i);
//}
// let n=prompt("print the table");
// n=parseInt(n);
// for(let i=n; i<=n*10;i=i+n){
//     console.log(i);
// }
// for(let i=1;i<=5; i++){
//     for(let j=i; j<=5;j++){
//         console.log(j);
//     }
// }
//---------------------------------------------------------------------
//let i=1;
//while(i<=6){
   // console.log(i);
  //  i++
    
//}
//----------------------------------------------------------------------------

// let favMovies= "parmanu";
// let guess = prompt("enter your fav movies");
// console.log(guess);
//----------------------------------------------------------------------
// function getSum(n){
//   let sum=0;

//   for(i=1; i<=n;i++)
//   {
//     sum= sum+i;
//   }
//    return sum;
// }
//---------------------------------------------------------------------------
//let greet ="Hello";
//function changegreet(){
  //let greet="welcome";
  //console.log(greet);
//}
//console.log(greet);
//changegreet();  
//---------------------------------------------------------------------------
// let arr=[8,9,10,1,2,3,4,5,6,7];
// let num=1;
// function getElements(arr,num) {

//   for(let i=0; i<arr.length; i++){ 

//     if(arr[i]>num){
//       console.log(arr[i]);
//     }
        
//   }
    
// }
// getElements(arr,num);
// ------------------------------------------------------------------------------
const student= {
  name:"gaurav kumar",
  age:24,
  math:99,
  chem:98,

  getAvg(){
    //console.log("print1= ", this);
    const avg=(this.math+this.chem)/2;
    let avgMarks=`print2= , ${this.name} got avg marks = ${avg}`;
    //console.log(`print2= , ${this.name} got avg marks = ${avg}`);
    return avgMarks
    
  }
}
const student1={
  name:student.name,
  age: student.age,
  math: student.math,
  chem:student.chem,
}
console.log("print3= ",student1);
//   {
//   let a=5;
//   let b=6;
//   console.log("sum of two number :" +(a+b));
  

// }

