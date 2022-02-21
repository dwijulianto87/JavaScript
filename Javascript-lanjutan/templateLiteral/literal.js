// // Template literal ( ` ` ) ------------------------------
// // Multi-line string ( baris baru ) ---------------------------

// console.log(`ini dibaris pertama 
// ini dibaris kedua
// `);




// // Embedded Expression -----------------------------------------------

// let nama = 'Dwi julianto',
//     telp = 0888888888,
//     email = 'keong@gmail.com';

// console.log(`nama : ${nama}
// telp : ${telp}
// email : ${email}`);
// console.log(`value dari attribute nama, telp dan email diatas hasil dari embedded expression template literal`);

// console.log(`${alert('hallo')}`);
// let angka = 105;
// console.log(`${(angka % 2 === 0) ? 'genap !!' : 'Ganjil !!'}`);






// // HTML Fragments -----------------------------------------------------

// const biodata = {
//     nama: 'Dwi julianto',
//     telp : 0888888888,
//     email : 'keong@gmail.com'
// }

// const divBiodata = document.querySelector('div.biodata');

// let elementBaru =`<h2>${biodata.nama}</h2>
//     <p class="telp">${biodata.telp}</p>
//     <p class="email">${biodata.email}</p>`;

// divBiodata.innerHTML = elementBaru;





// // Expression interpolation --------------------------------------------

// let a = 5;
// let b = 6;

// console.log(`angka ${ a + b } adalah hasil "expression interpolation" template literal dari penjumlahan 5+6`)





// looping 1 ---------------------------------------------------------------

// const matkul = ['matematika', 'kimia', 'ips', 'ipa'];
// const elMatkul = `<ul> ${matkul.map(e => `<li>${e}</li>`).join('') } </ul>`;

// const divBiodata = document.querySelector('.biodata');
// divBiodata.innerHTML = elMatkul;





// looping 2 ---------------------------------------------------------------

// const mhs = [
//     {nama: 'doni', alamat:'jogja'},
//     {nama: 'dwi', alamat:'klaten'},
//     {nama: 'riki', alamat:'solo'}
// ];

// const elMhs =`${mhs.map(m => `<ul>
// <li>${m.nama}</li>
// <li>${m.alamat}</li>
// </ul>`).join('')}`


// const divBiodata = document.querySelector('.biodata');
// divBiodata.innerHTML = elMhs;





// // conditional -----------------------------------------------------------
// // ternari
// const lagu = {
//     judul: 'dalan liyane',
//     penyanyi: 'deni caknan',
//     feat:'nella karisma'
// }

// const elLagu = `<ul>
// <li>${lagu.judul}</li>
// <li>${lagu.feat ? `${lagu.penyanyi} feat ${lagu.feat}` : `${lagu.penyanyi}`}</li>
// </ul>`

// const divBiodata = document.querySelector('.biodata');
// divBiodata.innerHTML = elLagu;



// // nested (bersarang) -----------------------------------------------------------
// const mhs = {
//     nama: 'Dwi julianto',
//     telp: '0888888888',
//     email: 'keong@gmail.com',
//     matkul: ['matematika', 'kimia', 'tehnik komputer', 'ipa', 'ips']
// };

// function mataKuliyah(m){
// return `
// <ol> 
// ${m.map(mk => `<li>${mk}</li>`).join('')} 
// </ol>`
// }

// const elMhs = `<h3>Nama : ${mhs.nama}</h3>
// <h5>Telp : ${mhs.telp}</h5>
// <h5>Email : ${mhs.email}</h5>
// <h5>Mata kuliyah :</h5>
// ${mataKuliyah(mhs.matkul)}`;

// const container = document.querySelector('.biodata');
// container.innerHTML = elMhs;




// // Tagged Template -----------------------------------------------------------------
// // bentuk yg lebih kompleks dari template literals, 
// // memungkinkan kita utk membaca template literals melalui sebuah function


// // contoh 1 --------------------------------------------------------------------

// let nama = 'Andi';
// let umur = 26;

// function coba(strings, ...values){
//     let hasil = '';

//     return strings.reduce((hasil, str, i) => `${hasil}${str}${values[i] ||''}`,'');
// }

// let data = coba`nama saya adalah ${nama}, dan umur saya ${umur} tahun`;
// console.log(data);


// contoh 2 highlight ---------------------------------------------------------------

let nama = 'Andi';
let umur = 26;
let alamat = 'klaten';

function highlight(strings, ...values){
    let hasil = '';

    return strings.reduce((hasil, str, i) => 
    `${hasil}${str}<span class ='hl'>${values[i] ||''}</span>`,'');
}

let data = highlight`nama saya adalah ${nama}, umur saya ${umur} tahun, dan saya tinggal di ${alamat}`;

const elMhs = `<h5>${data}</h5>`;
const container = document.querySelector('.biodata');
container.innerHTML = elMhs;