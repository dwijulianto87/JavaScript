// // Synchronous Ajax vanila javascript ----------------------------------------------------------
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

// getDataMhs('http://www.omdbapi.com/?apikey=c36d76f8&s=naruto', s => {
    
//     const data = JSON.parse(s); // parse dari json ke object
//         console.log(data)
//      }, 
//     () => { console.log('ada masalah gaess !!')} );

// console.log('selesai !!');





// Asynchronous Callback ----------------------------------------------------------
// Callback JQuery -------------------------------------------------------

// console.log('mulai !!');

// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=c36d76f8&s=naruto',
//     success: data => {console.log(data)}
// })

// console.log('selesai !!');





// // Asynchronous Callback ----------------------------------------------------------

// console.log('mulai !!');

// fetch('http://www.omdbapi.com/?apikey=c36d76f8&s=naruto')
//     .then(data => data.json() )
//     .then(data => console.log(data));

// console.log('selesai !!');














// // Promise ------------------------------------------------------------

// // contoh 1 -------------------------------------------------------

// let ditepati = true;

// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati){
//         resolve('janji ditepati')
//      }else{ 
//         reject('tidak ditepati')
//      }
// });

// console.log('mulai !!');

// janji1
//     .then(hasil => console.log('ok !!' + hasil)) // resolve
//     .catch(hasil => console.log('not ok !!' + hasil)); //reject

// console.log('selesai !!');





// // contoh 2 -------------------------------------------------------

// let ditepati = false;

// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati){
//        setTimeout(() => {
//         resolve('janji ditepati');
//        }, 3000);
//      }else{ 
//          setTimeout(() => {
             
//          reject('tidak ditepati');
//          }, 5000);
//      }
// });

// console.log('mulai !!');

// console.log(janji2.then(() => console.log(janji2))); // untuk mengetahui status promise
// // janji2
// //     .finally(() => console.log('selesai menunggu !!')) // akan berjalan sebelum then/catch (utk anaimasi loading)
// //     .then(hasil => console.log('ok !!' + hasil)) // resolve
// //     .catch(hasil => console.log('not ok !!' + hasil)); //reject

// console.log('selesai !!');





// // Promise.all() -------------------------------------------------------

// const film = new Promise(resolve => {
//     setTimeout(() => {
//         resolve([{
//             judul : "sidoel",
//             sutradara: 'rano karno'
//         }])
//        }, 3000);
// });


// const cuaca = new Promise(resolve => {
//     setTimeout(() => {
//         resolve([{
//             kota: 'Bandung',
//             kondisi: 'hujan'
//         }])
//     }, 1000);
// });


// // film.then(response => console.log(response));
// // cuaca.then(response => console.log(response));


// Promise.all([film, cuaca])
//     // .then(response => console.log(response));
//     .then(response => {
//         const [film, cuaca] = response;
//         console.log(film);
//         console.log(cuaca);
//     });