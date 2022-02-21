// // For .. Of ----------------------------------------------------

// // Array --------------------------------------------------------
// const iterable = ['String', 
// 'Array', 
// 'Arguments/ NodeList', 
// 'TypedArray', 
// 'Map', 
// 'Set', 
// 'User-defined Iterable'];

// // for(const item of iterable){
// //     console.log(item);
// // }

// // mendapatkan index
// for(const [i, item] of iterable.entries()){
//     console.log(`No ${(i + 1)}. ${item}`);
// }




// // String -------------------------------------------------------
// const nama = 'Dwi julianto';

// for(const n of nama){
//     console.log(n);
// }




// // NodeList ------------------------------------------------------------
// // mendapatkan nilai tag -> textContent/innerHTML ----------------------

// const liItem = document.querySelectorAll('.item');
// // liItem.forEach(e => console.log(e.textContent) );
// for(const item of liItem){
//     console.log(item.innerHTML);
// }




// // Arguments -------------------------------------------------------------
// function tambah(){ 
//     let jumlah = 0;
//         for(const args of arguments){
//             jumlah += args;
//         }
//     return jumlah;
// }

// console.log(tambah(1,2,3,4,5,6));





// // For.. in -------------------------------------------------------------
const biodata = {
    nama: 'Dwi julianto',
    tlp: '08888888',
    alamat: 'klaten'
}

for(const bio in biodata){ 
    console.log(bio); // bio -> properti object
    console.log(biodata[bio]);  // biodata[bio] -> value properti object

}


