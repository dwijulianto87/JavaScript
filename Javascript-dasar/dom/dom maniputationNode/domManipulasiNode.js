// 3. manipulasi node >>>>>>>>>>>>>>>>>>>>>>>

// A. menambahkan node ////////////

// A.1 menambahkan elemen baru ke akhir parent---------
// membuat element baru--------
const pBaru = document.createElement('p');
// membuat textbaru-----
const textPBaru = document.createTextNode('paragraf baru');
//memasukan text baru ke elemen baru-------
pBaru.appendChild(textPBaru);
//menangkap element parent--------
const sectionA = document.getElementById('a');
// memasukan elemen baru ke akhir parent---------
sectionA.appendChild(pBaru);

// A.2 menambahkan elemen baru ke sebelum akhir parent-------
// membuat element baru------
const liBaru = document.createElement('li');

// membuat text baru--------
const textLiBaru = document.createTextNode('item baru');

// memasukan text baru ke elemen baru--------
liBaru.appendChild(textLiBaru);

//menangkap element parent-----------
const ul = document.querySelector('section#b ul');

//menangkap element terakhir dalam parent---------
const liAkhir = ul.querySelector('li:nth-child(3)');

//memasukan li baru sebelum li ke 3----------
ul.insertBefore(liBaru, liAkhir);

// A.3 parentNode.removeChild()-----
const a = sectionA.getElementsByTagName('a')[0];
sectionA.removeChild(a);

// A.4 parentNode.replaceChild(nodeBaru, nodeLama)---------
const sectionB = document.getElementById('b');

//seleksi elemen yg akan diganti
const p4 = sectionB.getElementsByTagName('p')[0];

// membuat element baru & text baru -------
const judulBaru = document.createElement('h2');
const textBaru = document.createTextNode('Judul baru');

judulBaru.appendChild(textBaru);

sectionB.replaceChild(judulBaru, p4);



