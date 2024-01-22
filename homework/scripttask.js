// let fullName = 'Mahir Shamilli Rahim'

// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
// let fullName = 'Mahir Shamilli Rahim'
// console.log(fullName.split('') ) ;
                         //FUNCTION USULU
// function name() {
//     console.log(fullName.split('') ) ;
// }
// name()


// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
// let text = fullName.slice ( 6 ,14 )+" "+ fullName.slice (0, 5) + " "+ fullName.slice(15, 20)
// console.log(text);
                         //FUNCTION USULU
// function name() {
//    let text =  fullName.slice ( 6 ,14 )+" "+ fullName.slice (0, 5) + " "+ fullName.slice(15, 20)
//     console.log(text);
// }
// name()


// 3) Alinan yeni arrayi stringe cevirin(join)
// string = text.split()
// console.log(string);
                        //FUNCTION USULU
// function firstname() {
//     string = text.split()
//     console.log(string);
// }
// firstname()

let arr = [ 4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7, ];

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
// for (let i = 0 ;i < arr.length ; i ++) {
//       if (arr[i]==5)
//       {
//             console.log(arr[i])
//           }
//         }
        //diger usul 
  // let result = arr.filter((item, index) => item == 5) 
  // console.log(result);                                          
                              // function   usulu
//  function username() { 
//   let result = arr.filter((item, index) => item == 5)
//   console.log(result); 
// }                                             
// username()                                                

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapincd
// let cem = 0
// for ( let i = 0 ; i < arr.length ; i ++){
// cem = cem + arr[i]
// {
//   console.log(cem)
// }
// }
                     //function usulu
// function sayHello() {
// let cem = 0
// for (let i = 0; i < arr.length; i++) {
//     cem = cem + arr[i]
// }
// console.log(cem)
// }

// sayHello();
                    
//6) arrayda tekrar olunan reqemleri artan sira ile duzun
// let arr2= arr.sort((a,b) => a-b)
// console.log(arr2)
// for ( let i=0 ; i <arr2.length ; i ++){
//   if (arr2[i]= arr2[i+1]){
//     console.log(arr2[i])
//   }
// }


// function sayHello() {
// arr.sort()
// console.log(arr)}

// sayHello();

//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
//     let max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
//     for (let i = 0 ;i < arr.length ; i ++) {
//         if (arr[i]==max)
//         {
//             console.log(arr[i])
//           }
//         }
// console.log(max);


// function sayHello() {
// console.log(Math.max(...arr))
// }

// sayHello();

//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
// let username ="Mahir"
// let x = username.length
// console.log(arr.includes(x));

// function sayHello() {
// let myName= "Macid"
// let myNamelengthYes = "Yes"
// for(let i=0; i<arr.length; i++){
//       if(myName.length === arr[i]){
//         myNamelengthYes = "true"
//       }
// }
// console.log("Var?    :" , myNamelengthYes)
// }

// sayHello();

//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
// let a=0 
// for(let i = 0 ; i <arr.length ; i ++){
//   if (arr[i]%3==2)
//   a=arr[i]

// }
// console.log(a);

// let sayHello = function() {
// for(let i=0; i<arr.length; i++){
//     if (arr[i] % 3 === 2) {
//         console.log("Bu eded:",arr[i], " ", "Bu index:", i);
//         break;
//       }
// }
// }

// sayHello();


//10) arraydaki en boyuk reqemin ilk indexini tapin
// for(let i = 0 ; i <arr.length ; i ++){
// if(arr[i])

//   a=arr[i]
// }
// console.log(arr.indexOf(a));
  
// let sayHello = function() {
// for(let i=0; i<arr.length; i++){
//     if (arr[i] === Math.max(...arr)) {
//         console.log(i)
//         break;
//     }
// }
// }
// sayHello();

  //11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
// for(let i=0; i<arr.length; i++){
//     if (arr[i] === 4) {
//         console.log(arr.lastIndexOf(arr[i], i));
//       }
//     }
    
    
// let sayHello = function() {
// for(let i=0; i < arr.length; i++){
//      if (arr[i] === 4) {
//          console.log(i)
//      }
// }
// }
// sayHello();


    //12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
    // for(let i=0; i<arr.length; i++){
    //   if (arr[i] === 5) {
    // a = arr.lastIndexOf(arr[i])
    // b= arr.indexOf(arr[i])
    //   }
    // }
    // console.log(a);
    // console.log(b);
    

    // let saybye = function() {

// let indexMaxMin = [];
// for (let i=0; i < arr.length; i++) {
//       if (arr[i] === 5) {
//           indexMaxMin.push(i);

//       }
    
// }
// console.log(indexMaxMin);
// console.log( "Minimum Indexi:",Math.min(...indexMaxMin) + " " +  "Maksimum indexi: ", Math.max(...indexMaxMin));
// }
// saybye();


    //13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
    // console.log(arr.filter(num => num > 2), 
    // arr.length-arr.filter(num => num > 2).length);


// let saybye = function() {
// newArr = [];
// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] > 2) {
//         newArr.push(arr[i])
//     }
// }
// console.log(arr.length - newArr.length)
// }

// saybye();


    //14) 7 reqeminin indexleri cemini tapin.
// let a= arr.reduce((indices, num, index) => {
//   if (num === 7) indices.push(index);
//   return indices;
// },[]);
// let b = a.reduce((sum, index) => sum + index);
// console.log(b);
                  //diger yol
// let a=0
// for(let i=0; i<arr.length; i++){
//     if (arr[i] === 7) {
//       a +=i
//     }
//   }
//   console.log(a);
  
  // let saybye = function() {
// cem = 0;
// for(let i = 0; i <  arr.length; i++) {

//     if (arr[i] === 7) {
//         cem = cem + arr[i];
//     }
// }
// console.log(cem)}

// saybye();
    

// let arr2 = [
//     {
//           name: 'test',
//           key: 1
//   },
//   {
//       name: 'task',
//       key: 2
//   },
//   {
//       name: 'tanqo',
//       key: 3
//   },
//   {
//       name: 'like',
//       key: 4
//   },
//   {
//       name: 'task',
//       key: 5
//   },
//   {
//       name: 'trust',
//       key: 6
//   },
//   {
//       name: 'test',
//       key: 7
//   },
//   {
//       name: 'last',
//       key: 8
//   },
//   {
//       name: 'tanqo',
//       key: 9
//   },
//   {
//       name: 'elephant',
//       key: 10
//   },
//   {
//       name: 'love',
//       key: 11
//   },
//   {
//       name: 'small',
//       key: 12
//   },
//   {
//       name: 'little',
//       key: 13
//   },
// ]

//Aşağıdakı hər bir taskı function icərisində yazın.

//QEYD Bu tasklarda arr2 istifade edilecekdir
// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
// function a(arr2) {
//   return arr2.filter(obj => obj.name.startsWith('t'));
// }
// console.log(a(arr2));

// for (i = 0; i < arr2.length; i++) {
//     if(arr2[i].name.slice(0,1) === 't') {
//         newarr.push(arr2[i])
//     } 
// }
// console.log(newarr)}

// saybye();


// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
// function a(arr2) {
//   return arr2.filter(obj => obj.name.startsWith('t') && obj.name.endsWith('t')).length;
// }
// console.log(a(arr2));

// let sayHello = () => {
// for(i = 0; i < arr2.length; i++){
//     let wordl=0
//     wordl == arr2[i].name.length - 1
//         if (arr2[i].name.slice(0,1) === 't' &&  arr2[i].name.slice(wordl-1) === 't')
//         { 
//             console.log(arr2[i].name)
//         } 
// }}

// sayHello()

// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
// function a(arr2) {
//   return arr2.filter(obj => obj.name.startsWith('t') && obj.name.endsWith('t')).reduce((sum, obj) => sum + obj.key, 0)  //sondaki 0-ın əhəmiyyətini anlamadım
// }
// console.log(a(arr2));

// let sayHello = () =>{
// keycem = 0
// for(i = 0; i < arr2.length; i++){
//         let wordl=0
//         wordl == arr2[i].name.length - 1
//             if (arr2[i].name.slice(0,1) === 't' &&  arr2[i].name.slice(wordl-1) === 't')
//             { 
//                 console.log(arr2[i].name)
//                 keycem = keycem + arr2[i].key
//             } 
//     }
//     console.log(keycem)}
// sayHello();

// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
// function a(arr2) {
//   return arr2.map(obj => obj.name.endsWith('e') ? { ...obj, name: 'SuperDev' } : obj);
// }
// console.log(a(arr2)); 

// let sayHello = () =>{
// for(i = 0; i < arr2.length; i++){
//             let wordl=0
//             wordl == arr2[i].name.length - 1
//                 if (arr2[i].name.slice(wordl-1) === 'e')
//                 { 
//                     arr2[i].name = "SuperDev"
//                 } 
//         }
// console.log(arr2)}

// sayHello();

// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
// function a(arr2) {
//   const b = arr2.reduce((longest, obj) => obj.name.length > longest.name.length ? obj : longest);
//   return b.key;
// }
// console.log(a(arr2));

// let sayHello = () =>{
// for(i = 0; i < arr2.length; i++){

//                 if (arr2[i].name.length == 8)
//                 { 
//                     console.log(arr2[i].key)
//                 } 
//         }
//     }
    
// sayHello();

// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
// function a(arr2) {
//   const b = arr2.findIndex(obj => obj.name.length === Math.max(...arr2.map(o => o.name.length)));
//   return b ** 2;
// }
// console.log(a(arr2)); 

// let sayHello = () =>{
// for(i = 0; i < arr2.length; i++){

//                 if (arr2[i].name.length == 8)
//                 { 
//                     console.log(i);
//                 } 
                
//          }
//     }
// sayHello();

// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
// function a(arr2) {
//   return arr2.filter(obj => obj.name.length === 4);
// }
// console.log(a(arr2));
// let sayHello = () =>{
// let newrrr = []
// for(i = 0; i < arr2.length; i++){

//                     if (arr2[i].name.length == 4)
//                     { 
//                         newrrr.push(arr2[i])
//                     } 
                    
//              }
// console.log(newrrr)}

// sayHello();

// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin

// let sayHello = () =>{
//  for(i = 0; i < arr2.length; i++){

//                     if (arr2[i].key == 13)
//                     { 
//                         console.log(arr2[i].name)
//                     }    
// }}

// sayHello();

// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.

// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.


