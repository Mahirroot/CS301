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
  function username() { 
let cem = 0
for ( let i = 0 ; i < arr.length ; i ++){
cem = cem + arr[i]
console.log(cem); 
}                                             
}
username() 
                    
//6) arrayda tekrar olunan reqemleri artan sira ile duzun
// let arr2= arr.sort((a,b) => a-b)
// console.log(arr2)
// for ( let i=0 ; i <arr2.length ; i ++){
//   if (arr2[i]= arr2[i+1]){
//     console.log(arr2[i])
//   }
// }

//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
//     let max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
//     for (let i = 0 ;i < arr.length ; i ++) {
//         if (arr[i]==max)
//         {
//             console.log(arr[i])
//           }
//         }
// console.log(max);

//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
// let username ="Mahir"
// let x = username.length
// console.log(arr.includes(x));

//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
// let a=0 
// for(let i = 0 ; i <arr.length ; i ++){
//   if (arr[i]%3==2)
//   a=arr[i]

// }
// console.log(a);
//10) arraydaki en boyuk reqemin ilk indexini tapin
// for(let i = 0 ; i <arr.length ; i ++){
// if(arr[i])

//   a=arr[i]
// }
// console.log(arr.indexOf(a));
  

  //11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
// for(let i=0; i<arr.length; i++){
//     if (arr[i] === 4) {
//         console.log(arr.lastIndexOf(arr[i], i));
//       }
//     }
    
    
    //12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
    // for(let i=0; i<arr.length; i++){
    //   if (arr[i] === 5) {
    // a = arr.lastIndexOf(arr[i])
    // b= arr.indexOf(arr[i])
    //   }
    // }
    // console.log(a);
    // console.log(b);
    
    //13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
    // console.log(arr.filter(num => num > 2), 
    // arr.length-arr.filter(num => num > 2).length);
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


// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
// function a(arr2) {
//   return arr2.filter(obj => obj.name.startsWith('t') && obj.name.endsWith('t')).length;
// }
// console.log(a(arr2));
// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
// function a(arr2) {
//   return arr2.filter(obj => obj.name.startsWith('t') && obj.name.endsWith('t')).reduce((sum, obj) => sum + obj.key, 0)  //sondaki 0-ın əhəmiyyətini anlamadım
// }
// console.log(a(arr2));
// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
// function a(arr2) {
//   return arr2.map(obj => obj.name.endsWith('e') ? { ...obj, name: 'SuperDev' } : obj);
// }
// console.log(a(arr2)); 
// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
// function a(arr2) {
//   const b = arr2.reduce((longest, obj) => obj.name.length > longest.name.length ? obj : longest);
//   return b.key;
// }
// console.log(a(arr2));
// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
// function a(arr2) {
//   const b = arr2.findIndex(obj => obj.name.length === Math.max(...arr2.map(o => o.name.length)));
//   return b ** 2;
// }
// console.log(a(arr2)); 
// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
// function a(arr2) {
//   return arr2.filter(obj => obj.name.length === 4);
// }
// console.log(a(arr2));
// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin

// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.

// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.


