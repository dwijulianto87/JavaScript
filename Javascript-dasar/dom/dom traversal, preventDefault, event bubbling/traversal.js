const h3 = document.getElementsByTagName('h3')[0];
h3.innerHTML = 'Dom Traversal (Penelusuran Dom)';

// //event handling ------------------------------------------------>
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');
// close.addEventListener('click', function(){
//     card.style.display = 'none';
// });

// // event handling ----------------------------------------------->
// const closes = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');
// for(let i = 0; i< closes.length; i++){
//     closes[i].addEventListener('click', function(){
//         card[i].style.display ='none';
//     });
    
// }

// // Dom traversal --------------------------------------------------->
// // # parentNode -> node
// // # parentElement -> element
// // # nextSibling -> node
// // # nextElementSibling -> element
// // # privousSibling -> node
// // # privousElementSibling -> element

// const closes = document.querySelectorAll('.close');
// for(let i = 0; i< closes.length; i++){
//     closes[i].addEventListener('click', function(e){
//         closes[i].parentElement.style.display='none';
// });
// }


// const closes = document.querySelectorAll('.close');
// closes.forEach(function(close){
//     close.addEventListener('click', function(e){
//         e.target.parentElement.style.display='none';
//     });
// });



