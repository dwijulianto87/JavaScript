const h3 = document.getElementsByTagName('h3')[0];
h3.innerHTML = ' Event Bubbling ';



// // Event Bubbling ----------------------------------------------->
// // menghentikan aksi event yg lain yg masih satu parent
// // e.stopPropagation();

// // memberikan event pada class close ---------------------------->
// const closes = document.querySelectorAll('.close');
// closes.forEach(function(close){
//     close.addEventListener('click', function(e){
//         e.target.parentElement.style.display='none';
//         e.preventDefault();
//         e.stopPropagation();
//     });
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card, index){
//     card.addEventListener('click', function(){
//         alert('card ke ' + (index + 1));
//     });
// });


// memberikan event pada class container ------------------------>

const container = document.getElementsByClassName('container')[0];
container.addEventListener('click', function(e){

    if(e.target.className == 'close'){
        e.target.parentElement.style.display = 'none';
    }
    e.preventDefault();
});