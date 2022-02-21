// // ---------------------------------------------------------------------
// // menambahkan method di function declaration tidak efisien memori
// function Mahasiswa(nama, energi){

//     let mhs = {};
//     mhs.nama = nama;
//     mhs.energi = energi;

//     // tidak efisien karena setiap pembuatan object baru function jg ikut dibuat
//     mhs.makan = function(mkn){
//         this.energi += mkn;
//         return console.log(`halo ${this.nama}, selamat makan`);
//     }

//     return mhs;
// }

// const dwi = Mahasiswa('dwi julianto',10);
// const angga = Mahasiswa('Angga',15);


// // --------------------------------------------------------------------
// // menambahkan method menggunakan object(efisien memori)
// // kelemahan harus mendaftarkan method baru ke function declaration

// // object yg berisi method method
// const MethodMahasiswa = {
//     makan : function(mkn){
//         this.energi += mkn;
//         return console.log(`halo ${this.nama}, selamat makan`);
//     }, 

//     main : function(jam){
//         this.energi -= jam;
//         return console.log(`halo ${this.nama}, selamat main`);
//     }
// };

// function Mahasiswa(nama, energi){
    
//     let mhs = {};

//     mhs.nama = nama;
//     mhs.energi = energi;
//     mhs.makan = MethodMahasiswa.makan;
//     mhs.main = MethodMahasiswa.main;

//     return mhs;
// }

// const dwi = new Mahasiswa('dwi julianto',10);
// const angga = new Mahasiswa('Angga',15);


// // --------------------------------------------------------------------
// // menambahkan method menggunakan object.create()(efisien memori)

// // object yg berisi method method
// const MethodMahasiswa = {
//     makan : function(mkn){
//         this.energi += mkn;
//         return console.log(`halo ${this.nama}, selamat makan`);
//     }, 

//     main : function(jam){
//         this.energi -= jam;
//         return console.log(`halo ${this.nama}, selamat main`);
//     },
    
//     tidur : function(jam){
//         this.energi += jam;
//         return console.log(`halo ${this.nama}, selamat tidur`);
//     }
// };

// function Mahasiswa(nama, energi){
    
//     // object.create()
//     let mhs = Object.create(MethodMahasiswa);

//     mhs.nama = nama;
//     mhs.energi = energi;

//     return mhs;
// }

// const erik = new Mahasiswa('erik',10);
// const angga = new Mahasiswa('Angga',15);


// // prototype -------------------------------------------------------

// // Rumus Array
// let angka = new Array();
// function Array(){
//     let this = Object.create(Array.prototype);
// }


// function Mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi;
//     return console.log(`halo ${this.nama} selamat makan`);
// }

//     Mahasiswa.prototype.main = function(jam){
//         this.energi -= jam;
//         return console.log(`halo ${this.nama}, selamat main`);
//     }
// const joko = new Mahasiswa('joko', 12);


// // Versi Class ------------------------------------------------------

// class Mahasiswa{
//     constructor(nama, energi){
//         this.nama = nama;
//         this.energi = energi;
//     }

//     makan(porsi){
//         this.energi += porsi;
//         return `halo ${this.nama}, selamat makan`;
//     }

//     main(jam){
//         this.energi -= jam;
//         return console.log(`halo ${this.nama}, selamat main`);
//     }
// }

// const joko = new Mahasiswa('joko', 22);


