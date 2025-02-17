const A = 'Susi is going to codingschool'
// console.log(A.indexOf("school"));

//  Susi
console.log(A.slice(0,4));

//  is
console.log(A.slice(5,8));

// is going to school
console.log(A.slice(5,17)+A.slice(23));

//  school - start with position x
console.log(A.slice(23));

//  Susi is school
console.log(A.slice(0,8)+A.slice(23));

