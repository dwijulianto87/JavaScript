// pengkondisian/percabangan
// let angka = 4;

// 1. pengkondisian/percabangan -> if ////////////////////

// jika kondisi bernilai true jalankan aksi, jika false kluar dr blok
// if(kondisi){
//    aksi
// }

// let angka = 4;
// if(angka % 2 == 0){
//     alert("angka " + angka + " bilangan genap");
// }
// if(angka % 2 == 1){
//     alert("angka " + angka + " bilangan ganjil");
// }


// 2. pengkondisian/percabangan -> if else ////////////////////

// jika kondisi bernilai true jalankan aksi 1, jika false jalankan aksi 2
// if(kondisi){
//    aksi 1
// } else {
//    aksi 2
// }


// let angka = 4;
// if(angka % 2 == 0){
//     alert("angka " + angka + " bilangan genap");
// } else {
//     alert("angka " + angka + " bilangan ganjil");
// }



// 3. pengkondisian/percabangan -> else if ////////////////////

// jika kondisi 1 bernilai true jalankan aksi 1, 
// jika kondisi 2 bernilai true jalankan aksi 2, 
// jika kondisi 2 false jalankan aksi berikutnya dst

// if(kondisi 1){
//    aksi 1
// } if else(kondisi 2) {
//    aksi 2
// } else {
//    aksi 3
// }

// let angka = prompt('masukan angka :');
// console.log(typeof(angka));
// if(angka % 2 == 0 ){
//     alert("angka " + angka + " bilangan genap");
// } else if(angka % 2 == 1 ){
//     alert("angka " + angka + " bilangan ganjil");
// } else {
//     alert("silahkan masukan angka");
// }


// 4. pengkondisian/percabangan -> swich ////////////////////
// let angka = 3;
// let angka = parseInt(prompt('masukan angka 1 - 3 : '));
// switch(angka){
//     case 1 :
//         console.log('angka 1');
//         break;
//     case 2 :
//         console.log('angka 2');
//         break;
//     case 3 :
//         console.log('angka 3');
//         break;
//     default:
//         console.log('masukan angka 1 - 3');
//         break;
// }



// let tanya = true;
// while (tanya) {
// let x = prompt('masukan pilihan berikut \nkucing, kambing, sapi, bebek, ayam, burung' );

//     switch(x){
//         case 'kucing':
//         case 'kambing':
//         case 'sapi':
//             alert('beranak');
//             break;
//         case 'bebek':
//         case 'burung':
//         case 'ayam':
//             alert('bertelur');
//             break;
//         default:
//             alert('masukan nama hewan berikut\nkucing, kambing, sapi, bebek, ayam, burung');
//             break;
//         }
    
// tanya = confirm('lagi ?');
// }

// alert('terima kasih');