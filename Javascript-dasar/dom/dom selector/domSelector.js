// Dom selection -------------------------------------------------------->


// 1. getElementById ---------------------------------------------------->
// document.getElementById (mengembalikan element) 
const judul = document.getElementById('judul');
judul.innerHTML = 'Ganti judul';



// 2. getElementsByClassName -------------------------------------------->
// document.getElementsByClassName (mengembalikan HTMLcolection)
const classP1 = document.getElementsByClassName('p1')[0];
classP1.style.backgroundColor = 'lightblue';



// 3. getElementsByTagName ----------------------------------------------> 
// document.getElementsByTagName (mengembalikan HTMLcolection)
let tagP = document.getElementsByTagName('p');
tagP[0].style.color = '#1a1';
tagP[1].style.color = '#1a1';
tagP[2].style.color = '#1a1';
tagP[3].style.color = '#1a1';



// 4. querySelector ----------------------------------------------------->
// document.querySelector (mengembalikan element)
let li = document.querySelector('section#b ul li:nth-child(2)');
li.style.color = 'blue';



// 5. querySelectorAll --------------------------------------------------> 
// document.querySelectorAll (mengembalikan NodeList)
let listLi = document.querySelectorAll('li');

// for(let i = 0; i<listLi.length; i++){
//     listLi[i].innerHTML = 'ini item '+ (i+1);
// }

listLi.forEach(function(itemLi, i){
    itemLi.innerHTML = 'ini item '+ (i+1);
});


// 6. mengubah node root ------------------------------------------------>
const sectionB = document.getElementById('b');
const p4 = sectionB.getElementsByTagName('p');
p4[0].innerHTML=('ini paragraf 4 diganti dari javascript');


