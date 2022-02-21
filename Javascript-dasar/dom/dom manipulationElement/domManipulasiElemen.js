// manipulation element ---------------------------------------------->

// 1. innerHTML ------------------------------------------------------>
// element.innerHTML =' ';
const judul = document.getElementById('judul');
judul.innerHTML = '<h2>Judul utama</h2>';

// 2. style ---------------------------------------------------------->
// element.style.<property> = 'value'; 
judul.style.backgroundColor = 'green';

// 3. setAttribute --------------------------------------------------->
// element.setAttribute('attribute','value');
judul.setAttribute('class', 'judul-utama');

// 4. getAttribute --------------------------------------------------->
// element.getAttribute('attribute');
const a = document.querySelector('section#a a')
alert(a.getAttribute('href'));

// 5. removeAttribute ------------------------------------------------>
// element.removeAttribute('attribute');
const a = document.querySelector('section#a a')
alert(a.removeAttribute('href'));


// 6. classList ------------------------------------------------------>

// 6.1 classList.add() ----------------------------------------------->
// element.classList.add('class-baru'); /////////
// menambah class baru
judul.classList.add('class-baru');

// 6.2 classList.remove() -------------------------------------------->
// element.classList.remove()////////////
// menghapus class 
judul.classList.remove('judul-utama');

// 6.3 classList.toggle() -------------------------------------------->
// jika belum ada (tambahkan), jika sudah ada (hapus)
// element.classList.toggle('value')////////
const sectionA = document.getElementById('a');
sectionA.classList.toggle('merah');

// 6.4 classList.item() ---------------------------------------------->
// element.classList.item(2) 
//-> utk mengecek class berdasarkan index ////////
alert(judul.classList.item(2));


// 6.5 classList.contains() ------------------------------------------>
// element.classList.contains('tiga');  /////
//-> utk mengecek class true/ false ////////
alert(judul.classList.contains('tiga'));

// 6.6 classList.replace() ------------------------------------------->
// element.classList.replace('class-lama','class-baru')  ////
// -> utk mengganti class yg sudah ada dgn class baru////
judul.classList.replace('judul-lama','judul-baru');
