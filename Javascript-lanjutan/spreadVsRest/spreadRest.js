// // const container = document.querySelector('.container');

// // Spread operator ---------------------------------------------------------------

// const mahasiswa = ['Dwi', 'Tyas', 'Arumdani'];
// // console.log(...mahasiswa); // Dwi Tyas Arumdani
// // console.log(...mahasiswa[0]); // D w i

// const dosen = ['Mulyono', 'Mulyanto', 'Suroto'];





// // menggabungkan dua array atau lebih ---------------------------------------------
// // const orang = [...mahasiswa, ...dosen]; // cara lain -> const orang = mahasiswa.concat(dosen);
// // console.log(orang); // ['Dwi', 'Tyas', 'Arumdani', 'Mulyono', 'Mulyanto', 'Suroto'];

// const orang = [...mahasiswa, 'Aji', ...dosen];
// console.log(orang); // ['Dwi', 'Tyas', 'Arumdani', 'Aji', 'Mulyono', 'Mulyanto', 'Suroto'];





// // mengcopy Array ------------------------------------------------------------------
// const mahasiswa = ['Dwi', 'Tyas', 'Arumdani'];
// const tambahMahasiswa = [...mahasiswa]; // variable tambahMahasiswa mengcopy isi array mahasiswa
// tambahMahasiswa[3] = 'Dika'; // variable tambahMahasiswa menambahkan index dan nilainya
// console.log(mahasiswa); // console.log array mahasiswa -> isinya masih sama
// console.log(tambahMahasiswa); // console.log array tambahMahasiswa -> indexnya bertambah






// // mengcopy nilai dari element li list dan memasukan ke variable array baru -----------------

// const itemLi = document.querySelectorAll('.item');
// // const arrayNew =[];
// // for(it of itemLi){arrayNew.push(it.textContent)}; // menggunakan for of

// const arrayNew = [...itemLi].map(it => it.innerHTML); // petakan list li dengan map, dan kembalikan value dari element li ke variable arrayNew
// console.log(arrayNew)




// // Latihan mengcopy nilai dari element h1, dari string ke charakter dan disimpan ke dalam variable array
// const angka = document.querySelector('.angka');
// const str = [...angka.innerHTML].map(s => `<span>${s}</span>`).join('');
// angka.innerHTML = str;













// // Rest parameter ---------------------------------------------------------------
// function myFunc(...args){
//     return args;
// }
// console.log(myFunc(1,2,3,4,5));

// ------------------------------------------------------------------
// function penjumlahan(...angka){
//     // let jumlah = 0;
//     // for(const a of angka){ jumlah += a; }
//     // return jumlah;

//     return angka.reduce((jml, a) => jml + a);
// }

// console.log(penjumlahan(1,2,3,4,5));





// // Array destructuring ----------------------------------------------------------
// const kelompok = ['Dwi', 'Julianto', 'Tyas', 'Arumdani', 'Akid', 'Yudhistira'];
// const [ketua, wakil, sekretaris, ...anggota] = kelompok;

// console.log(ketua);
// console.log(wakil);
// console.log(sekretaris);
// console.log(anggota);




// // Object destructuring ----------------------------------------------------------
// const team = {
//     pm: 'Dwi', 
//     frontEnd1: 'Julianto', 
//     frontEnd2: 'Tyas', 
//     backEnd: 'Arumdani', 
//     ux: 'Akid', 
//     devOps: 'Yudhistira'
// };

// const { pm, ...myTeam } = team;

// console.log(pm);
// console.log(myTeam);





// // Filtering -----------------------------------------------------------------------

// function filter(type, ...values){
//     // const arr = [];
//     // for(i of values){ (typeof(i) === type )? arr.push(i) : '';
//     // return arr;

//     return values.filter(a => (typeof a === type));
// }

// console.log(filter('string', 1, 2, 'yudhistira', false, 10, true, 'danianto'));










