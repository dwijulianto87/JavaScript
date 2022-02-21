// Events 

// sebuah kejadian yg terjadi didalam DOM
// oleh user (mouse event, keyboard event dll)
// oleh otomatis API (animasi selesai dijalankan, hal selesai di load dll)

// 1. event handler --------------------------------------------------->
// A. inline HTML attribute ------------------------------------------->
// on<event> --> onclick
// <tag onclick="namaFunction()">


function backgroundP1(){
    const p1 = document.querySelector('.p1');
    p1.style.backgroundColor = 'salmon';
};




// B. element method -------------------------------------------------->
// on<event> --> onclick
// elemenSelector.onclick = namaFunction;

const p2 = document.querySelector('.p2');
function backgroundP2(){
    p2.style.backgroundColor = 'green';
};
p2.onclick = backgroundP2;




// 2. addEventListener ------------------------------------------------>
// addEventListener('<event>',aksi)
// elemenSelector.addEventListener('<event>',aksi);

const p4 = document.querySelector('section#b p');
p4.addEventListener('click',function(){

    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const textBaru = document.createTextNode('li baru');
    liBaru.appendChild(textBaru);
    ul.appendChild(liBaru);   
    
});


