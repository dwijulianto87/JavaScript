// // function ///////////

// // 1. function declaration ---------------------------->
// // keyword nameFunction(listParameter){ return;}

// function tambah(a,b){
//     return a + b;
// }

// function kali(a,b){
//     return a * b;
// }

// let w = 2, x = 2,  y = 3, z = 4;

// let hasil = tambah(kali(w,x),tambah(y,z) );
// alert(hasil);


// // 2. function expression ----------------------------->

// // let nameFunction = keyword(listParameter){return;};

// let tampilkanPesan = function(nama){
//     alert('Hallo '+ nama + ' \nselamat datang');
// }
// let nama = prompt('Silahkan masukan nama anda :');
// tampilkanPesan(nama);



// // arguments --------------------------------------> 
// // array yg berisi nilai yg dikirimkan saat fungsi dipanggil

// function fungsi(){
//     let hasil = 0;
//     for(let i = 0; i < arguments.length; i++){
//         hasil += arguments[i];
//     }
//     return hasil;
// }
// console.log(fungsi(1,2,3,4,5));


// // 4. rekursif ---------------------------------------------> 
// // sebuah fungsi yg memanggil dirinya sendiri --------->
// // base case -> kondisi akhir dari rekursif yg menghasilkan nilai -> 
// // if(n === 0){ return;}   atau if(n === 0) return;

// // contoh 1
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12];

// function arra(n){
//     if(n === arr.length)return;
//     console.log('arr index ke ' + n +" -> "+ arr[n]);
//     arra(n+1);
// }
// arra(0);

// // contoh 2 :
// function rekursifCetakAngka(n){
//     if(n === 0){ return;}
//     console.log(n);
//     rekursifCetakAngka(n-1);
// }
// rekursifCetakAngka(10);

// // contoh 3 :
// // rekursif FAktorial ---------------------------------->

// function rekursifFaktorial(n){
//     if(n === 0) return 10;
//     return n * rekursifFaktorial(n-1);
// }

// console.log(rekursifFaktorial(5));

// // 5! = 5x4x3x2x1
// // 5 * faktorial(4)
// // 5 * (4 * faktorial(3))
// // 5 * (4 * (3 * faktorial(2)))
// // 5 * (4 * (3 * (2 * faktorial(1))))
// // 5 * (4 * (3 * (2 * 1)))
// // 5 * (4 * (3 * 2))
// // 5 * (4 * 6)
// // 5 * 24
// // 120