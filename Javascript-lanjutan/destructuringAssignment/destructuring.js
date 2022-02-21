const container = document.querySelector('.container');

// // A. Destructuring Assignment object ---------------------------------------
// const biodataObj = {
//     nama: 'Antok',
//     alamat: 'Bantul',
//     umur: 28
// }

// const {nama, umur, alamat} = biodataObj; // nama variable harus sesuai nama properti object

// console.log(alamat);
// console.log(umur);
// console.log(nama);





// // Assignment tanpa deklarasi object -------------------------------------------

// // const {nama, umur, alamat} = { nama: 'Antok', umur: 28 };
// ({nama, umur, alamat} = { nama: 'Antok', umur: 28 });

// console.log(`hay nama saya ${nama}, umur saya ${umur} tahun`);




// // Assignment ke variable baru -------------------------------------------------------

// const biodataObj = {
//     nama: 'Antok',
//     alamat: 'Bantul',
//     umur: 28
// }

// const {nama: n, umur: u, alamat: al} = biodataObj; 

// console.log(u);
// console.log(n);
// console.log(al);





// // memberikan default valus -------------------------------------------------------

// const biodataObj = {
//     nama: 'Antok',
//     umur: 28
// }

// const {nama: n, umur: u, email: e ='email@gmail.com'} = biodataObj; // value email default

// console.log(n);
// console.log(u);
// console.log(e);





// // Rest parameter -------------------------------------------------------

// const biodataObj = {
//     nama: 'Antok',
//     umur: 28, 
//     email: 'email@gmail.com'
// }

// const {nama: n, ...values} = biodataObj; // value email default

// console.log(n);
// console.log(values);





// // B. Destructuring Assignment array ---------------------------------------

// const biodataArray = [ 'Antok', 'Bantul', 28, 088888, 'keong@email.com' ];

// const [satuNAma, duaAlamat, tigaUmur, ,limaEmail] = biodataArray;

// console.log(limaEmail);
// console.log(satuNAma);
// console.log(duaAlamat);



// // Swap items array ---------------------------------------------------------

// let indexSatu = 'satu';
// let indexDua = 2;

// [indexDua, indexSatu] = [indexSatu, indexDua];

// console.log(indexSatu);
// console.log(indexDua);




// // return value pada function ---------------------------------------------------------

// function coba(){
//     return [1, 2];
// }

// const [a, b] = coba();
// console.log(a)
// console.log(b)





// // Rest parameter ------------------------------------------------------------------------

// const [a, b, ...values] = [1,2,3,4,5];

// console.log(a)
// console.log(b)

// console.log(values)






// Contoh kasus 1 ---------------------------------------------------------------------

// // Destructuring properti object pada function ------------------------------------------------------------
// // mengambil field pada object, setelah dikirim sebagai parameter utk function

// function getData(data){ // function deklaration dengan 1 parameter object
//     return `${data.id}, ${data.nama}, ${data.umur}, ${data.email}`
// }

// function getData({id, nama, umur, email}){ // tanpa menyertakan awalan object (lngsung mengarag ke properti)
//     return `${id}, ${nama}, ${umur}`
// }

// const biodataObj = {
//     id: 12345,
//     nama: 'Antok',
//     umur: 28, 
//     email: 'email@gmail.com'
// }

// console.log(getData(biodataObj)); // argumen yg diminta object




// // Destructuring function arguments ------------------------------------------------------------

const mhs1 = {
    nama: 'Antok',
    umur: 28, 
    email: 'email@gmail.com', 
    nilai: {
        uas: 80, 
        tugas: 85, 
        upm: 75
    }
}

function cetak({nama, umur, email, nilai:{uas, upm, tugas}}){ 
    return `
    DATA MAHASISWA :

    nama   : ${nama}
    umur   : ${umur}
    email  : ${email}

    Nilai :
    tugas : ${tugas}
    uas   : ${uas}
    upm   : ${upm}
    `}

console.log(cetak(mhs1));




// // Contoh kasus 2 ---------------------------------------------------------------------
// // function return array ----------------------------------------------------

// function kalkulasi(a, b){
//     return [a + b, a - b, a * b, a / b];
// }

// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(8, 2); // penamaan variable destructuring harus urut sesuai return value

// console.log(bagi) // 4
// console.log(tambah) // 10
// console.log(kurang) // 6
// console.log(kali) // 16





// // function return object -----------------------------------------------------------

// function kalkulasi(a, b){
//     return {
//         tambah: a + b, 
//         kurang: a - b, 
//         kali: a * b, 
//         bagi: a / b
//     };
// }

// const { kali, kurang, tambah, bagi = 'tidak ada' } = kalkulasi(8, 2); // penamaan variable destructuring tidak harus urut sesuai return value

// console.log(kurang) // 6
// console.log(tambah) // 10
// console.log(kali) // 16
// console.log(bagi) // 4





