// object ------------------------------------------>
// 1. Object literal ------------------------------->
// let mhs = {};
// mhs = {
//     nama : 'eko nugroho',
//     nim : '33102612',
//     nilai : [80,90,85],
//     jurusan : 'informatika',
    // alamat : {
    //     dukuh : 'keringan',
    //     desa : 'wanglu',
    //     kec : 'trucuk',
    //     kab : 'klaten'
    // }
// }
// // 2. Object function declaration ------------------>
// // function tamplate
// function buatMahasiswa(nama, nim, nilai, jurusan, alamat){
//     const mhs = {};
//     mhs.nama = nama;
//     mhs.nim = nim;
//     mhs.nilai = nilai;
//     mhs.jurusan = jurusan;
//     mhs.alamat = alamat;

//     return mhs; }

// // mengisi nilai function tamplate
// const mhs1 = buatMahasiswa(
//     'Dody',
//     '12345',
//     [70,80,90],
//     'kimia',
//     'klaten');

// // 3. Object constructor function (keyword new) ---->
// function MhsBaru(nama, nim, nilai, jurusan, alamat, negara){

//     this.nama = nama;
//     this.nim = nim;
//     this.nilai = nilai;
//     this.jurusan = jurusan;
//     this.alamat = alamat;
//     this.negara = negara = function (x) {
//         if(x == 'indonesia'){
//         console.log('selamat pagi '+ this.nama);
//         }else{
//         console.log('good morning '+ this.nama);
//         }
//     }
//     };

// // mengisi nilai function tamplate
// const mhs3 = new MhsBaru(
//     'irfan',
//     '54321',
//     [90,80,85],
//     'Bhs inggris',
//     {
//         dukuh : 'keringan',
//         desa : 'wanglu',
//         kec : 'trucuk',
//         kab : 'klaten'
//     }
//     );


// 4. object.create() ------------------------------>