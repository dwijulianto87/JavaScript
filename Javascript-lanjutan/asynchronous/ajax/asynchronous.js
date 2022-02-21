// // Synchronous Callback ----------------------------------------------------------
// // contoh 1 -------------------------------------------------------

// function tampilPesan(callBack){
//     const nama = prompt('Masukan nama :');
//     callBack(nama);
// }

// tampilPesan(nama => alert(`Hallo ${nama}`)); 



// // contoh 2 -------------------------------------------------------

// const mhs = [
//     {
//         nama: "Dwi Julianto", 
//         semester: 6,
//         alamat: 'Klaten'
//     }, 
//     {
//         nama: "Tyas arumdani", 
//         semester: 7,
//         alamat: 'Surakarta'
//     }, 
//     {
//         nama: "Yudhistira", 
//         semester: 8,
//         alamat: 'Yogyakarta'
//     }
// ];


// console.log('Mulai !!');

// mhs.forEach( (m) => {
//     for(let i = 0; i < 10000000; i++){
//         let date = new Date();
// }
//     console.log(m.nama)
// });

// console.log('Selesai !!');





// // Asynchronous Callback ----------------------------------------------------------
// // Callback vanila javascript -------------------------------------------------------
// // XMLHttpRequest() // object ajax -------------------------------------------------------

// function getDataMhs(url, success, error){
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function(){
//         // perubahan state itu dari 0 - 4 // 4 adl state terakir (siap/ ready)
//         if(xhr.readyState === 4){
//             // 200 artinya ok
//             if(xhr.status === 200){
//                 success(xhr.response);
//             }else if(xhr.status === 404){
//                 error();
//             }
//         }
//     }
//     xhr.open('GET', url);
//     xhr.send();
// }

// console.log('mulai !!');

// getDataMhs('data/dataMhs.json', s => {
    
//     const mhs = JSON.parse(s); // parse dari json ke object
//     mhs.forEach( m => console.log(m.nama))
//      }, 
//     () => { console.log('ada masalah gaess !!')} );

// console.log('selesai !!');





// // Asynchronous Callback ----------------------------------------------------------
// // Callback JQuery -------------------------------------------------------

// console.log('mulai !!');

// $.ajax({url: 'data/dataMhs.json',               // argument url

// success: data => {                              // argument success
//         for(mhs of data){
//             console.log(mhs.nama)
//         }

// },
// error: (e) =>{         
//     console.log(e.responseText)                           // argument error
//     // console.log('ada masalah coy !!') 
// }
// });

// console.log('selesai !!');
