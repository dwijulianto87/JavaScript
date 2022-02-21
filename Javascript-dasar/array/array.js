// // Array ----------------------------->
// // variable yg bisa menampung nilai lebih dari satu dengan menggunakan index yg dimulai dari index 0 yg bertype object
// // contoh -> let data=[]; data[10, 'deny', true];

// // deklarasi ---------------------------->
// let mhs = [];

// // mengisi
// mhs = [30, 
//     'Deny', 
//     true, 
//     [60, 70, 80 ,90],
//     function hallo(){
//         return 'hallo ';
//     }];

// // menambah -------------------------------->
// mhs[5] = 'informatika';

// // menghapus ------------------------------>
// mhs[5] = undefined;

// // menampilkan isi array -------------------------->
// for( let i = 0; i<mhs.length;i++){
//    console.log('index ke '+i+'. '+mhs[i] ); 
// }

// // method --------------------------------------------->
// // length, join, push, pop, shift, unshift, slice, splice, foreach, map, sort

// let nama = ['rizki','deny','rendy','danang','sigit'];
// // join -> menggabungkan dan mengubahnya jd string yg sblmnya object
// console.log(mhs.join(' \n'));

// // push -> menambahkan elemen di index terakhir ---------->
// let nama = ['rizki','deny','rendy','danang','sigit'];
// nama.push('reza','agung');
// console.log(mhs.join(' \n'));

// // pop -> menghilangkan elemen terakhir ---------->
// let nama = ['rizki','deny','rendy','danang','sigit'];
// nama.pop();
// console.log(mhs.join(' \n'));

// // unshift -> menambahkan element diawal ---------------->
// let nama = ['rizki','deny','rendy','danang','sigit'];
// nama.unshift('santoso','budi');
// console.log(mhs.join(' \n'));

// // pop -> menghilangkan elemen pertama ---------->
// let nama = ['rizki','deny','rendy','danang','sigit'];
// nama.shift();
// console.log(mhs.join(' \n'));

// // splice -> menyisipkan elemen ditengah
// // splice(indexAwal, dhapus brpa, elemenBaru1, elemenBaru2,....)
// let nama = ['rizki','deny','rendy','danang','sigit'];
// nama.splice(1,2, 'dedy','joko')
// console.log(mhs.join(' \n'));

// // slice -> mengiris elemen
// // slice(awal, akhir)
// let nama = ['rizki','deny','rendy','danang','sigit'];

// console.log('sebelum diiris\n');
// console.log(nama.join(' \n'));

// let nama2 = nama.slice(1,4);
// console.log('\nsetelah diiris');
// console.log(nama2.join(' \n'));

// // foreach ------------------------------>
// // loopingnya array
// let nama = ['rizki','deny','rendy','danang','sigit'];
// nama.forEach(function(list, idx){
//     console.log('no.' + (idx+1) + ' ' + list);
// });

// // map -------------------------------------------->
// // sama seperti forEach tp bisa mengembalikan nilai
// let angka = [1,2,3,4,5,6,7,8,9]
// let angka2 = angka.map(function(listAngka){
//     return listAngka * 2;
// });
// console.log(angka2.join('\n'));

// // sort -------------------------------------------->
// let angka = [5,2,9,4,1,6,7,8,3];
// console.log(angka.sort().join('\n'));

// let angka2 = [5,10,2,9,40,4,1,6,40,7,8,3,20];
// let angkaUrut = angka2.sort(function(kecil, besar){
//     return besar-kecil;
// });
// console.log(angkaUrut.join('\n'));

// // filter & find
// // filter mengembalikan lebih dari 1 nilai(array)
// let angka = [5,10,2,9,40,4,1,6,40,7,8,3,20];
// let filterAngka = angka.filter(function(cari){
//     return cari < 40;
//     // return cari == 40;
// });
// console.log(filterAngka.join('\n'));

// find -> mengembalikan 1 nilai
// let angka = [5,2,1,9,40,4,1,6,10,7,8,3,20];
// let filterFindAngka = angka.find(function(cari){
//     return cari === 20;
// });
// console.log(filterFindAngka);
