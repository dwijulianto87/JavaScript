// // ---------------------------------------------------------------------
// function init(){ //  parent function
//     let nama = 'Dwi julianto'; // local variable
//     let umur = 16; // local variable

//     function tampilNama(){ // inner function 
//         // inner function merupakan closure karna mengakses 2 lokal variable parent function
//         console.log(nama); // akse ke parent variable (variable nama)
//         console.log(umur); // akse ke parent variable (variable umur)
//     }

//     tampilNama();
//     // console.dir(tampilNama); // menampilkan object function
// }

// init();


// ---------------------------------------------------------------------
// function init(){ //  parent function

//     return function(nama){ // inner function 
//         // inner function merupakan closure karna mengakses 2 lokal variable parent function
//         console.log(nama); // akse ke parent variable (variable nama)
//     }

//     // return tampilNama;
// }

// let data = init();// menjalankan setengag function
// data('Dody');


// // --------------------------------------------------------------------
// function salam(waktu){ //  parent function

//         return function(nama){ // inner function 
//             return console.log(`halo ${nama}, selamat ${waktu}`)
//         }
    
//         // return tampilNama;
//     }
    
//     let malam = salam('malam');// menjalankan setengag function
//     let siang = salam('siang');// menjalankan setengag function
//     let pagi = salam('pagi');// menjalankan setengag function
    
//     pagi('dwi');
//     siang('Dody');
//     malam('Erik');

//     console.dir(malam)


// privat method -------------------------------------------------------
// // cara 1 --------------------
// menambahkan variable untuk menampung function yg berjalan setengah

// function add(){
//     let klik = 0;
//     return function(){
//         return ++klik;
//     }
// }

// let klick = add(); // function yg berjalan setengah

// console.log(klick());
// console.log(klick());
// console.log(klick());


// // cara 1----------------------------
// // immediately invoked function expression 
// // let variable = ( function(){} )();
// let add = (function(){
//     let klik = 0;
//     return function(){
//         return ++klik;
//     }
// })();

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());