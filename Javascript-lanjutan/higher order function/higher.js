// higher order function
// contoh 1 ---------------------------------------------------------------------
// kerjakanTugas() -> higher order function
// selesai() -> callback

// function kerjakanTugas(matkul, selesai){
//     console.log(`mulai kerjakan tugas ${matkul} ...`);

//     selesai();
// }

// function selesai(){
//     console.log('selesai !!');
// }

// kerjakanTugas('kimia', selesai);

// // contoh 2 ---------------------------------------------------------------------
// function ulang(n, aksi){
//     for(let i = 0; i< n; i++){
//         aksi(i);
//     }
// }

// ulang(10, console.log);

// // contoh 3 ---------------------------------------------------------------------
// const angka = [4,2,3,1,6,5,10,9,7,8];

// // menggunakan for
// let hasil = [];
// for(let i =0; i<angka.length; i++){
//     if(angka[i] >= 5){
//         hasil.push(angka[i]);
//     }
// }

// // Method filter -----------------------------------------------
// const angka = [4,2,3,1,6,5,10,9,7,8];

// const hasilFilter = angka.filter(function(a){ return a >= 5 });
// console.log(hasilFilter);



// // Method map ------------------------------------------------------------------
// const angka = [2,3,1,4,5,8,6,9]; 
// const hasilMap = angka.map(function(ak){
//     return ak * 2;
// });

// console.log(hasilMap);




// // Method reduce ------------------------------------------------------------------
// const angka = [2,3,1,4,5,8,6,9]; 

// const hasilReduce = angka.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue;
//     // const angka = 2 + 3 + 1 + 4 + 5 + 8 + 6 + 9; // 38
// },0);
// // nilai 0 adalah default utk nilai awal (opsional)

// console.log(hasilReduce);



// // Method Chaining ------------------------------------------------------------------
// const angka = [2,3,1,4,5,8,6,9]; 

// const hasil = angka.filter(a => a > 5) // 8, 6, 9
// .map(a => a * 2) // 16, 12, 18
// .reduce((ak, cur) => ak + cur); // 16 + 12 + 18 = 46

// console.log(hasil); // hasil = 46