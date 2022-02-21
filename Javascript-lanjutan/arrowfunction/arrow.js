// //  exspression function --------------------------------------------------
// const nama = function(nama){ 
//     return console.log(`halo ${nama}`) 
// };
// nama('dony');



// // arrow function --------------------------------------------------
// // tanpa parameter (wajib pake kurung) ----------------------------------------------------
// const helloWordl = () => { 
//     return console.log(`Hello Wordl`);
// };
// helloWordl();




// // implisit return -------------------------------------------------------
// // bila return cuma satu baris ga perlu keyword return dan kurung kurawal
// const nama = nama =>  console.log(`halo ${nama}`);
// nama('dony');



// // kalau parameter lebih dari satu wajib pakai kurung ---------------------

// const salam = (nama, waktu) => { 
//     return console.log(`halo ${nama}, selamat ${waktu}`) 
// }
// salam('Agus', 'Malam');


// //  memetakan array dgn arrow -----------------------------------------------------
// let namas = ['adi', 'dika', 'dheki'];
// let jmlHuruf = namas.map (nama => nama.length );

// console.log(jmlHuruf);


// // mengembalikan object dari array menggunakan arrow -----------------------------------------------------
// // ({})
// let namas = ['adi', 'dika', 'dheki'];
// let jmlHuruf = namas.map (nama => ({ nama: nama, Jumlah: nama.length}) );

// console.table(jmlHuruf);












// this dalam arrow function --------------------------------------------

// const Mahasiswa = function(nama, nik){
//     this.nama = nama;
//     this.nik = nik;
// }


// -----------------------------------------------------------------------
// // arrow function tidak bisa diterapkan di constraktor object karena dalam arrow tidak memiliki konsep this
// const Mahasiswa = (nama, nik) => {
//     this.nama = nama;
//     this.nik = nik;
// }
// const doni = new Mahasiswa('Doni', 20100);

// contoh -------------------------------------------
// let Mahasiswa =  {
    
//     nama : 'Dody',
//     nik : 88,
//     // panggil : () => { // undefined
//     panggil : function()  { 
//         return console.log(`nama saya ${this.nama}`);
//         }
// }



// // Latihan ----------------------------------------------------------------

// const box = document.querySelector('.box');

// box.addEventListener('click', function(){

//     let classA = 'besar';
//     let classB = 'warna';

//     if(this.classList.contains(classA)){
//         // let a = classA;
//         // classA = classB;
//         // classB = a;

//         [classA, classB] = [classB, classA];
//     }

//     this.classList.toggle(classA);

//     // harus pake arrow agar this mengacu pada parent scope
//     // kalau pake function anonim, lexical scope akan mengacu ke window
//     setTimeout(() => {
//         this.classList.toggle(classB);
//     }, 1000);

// });
