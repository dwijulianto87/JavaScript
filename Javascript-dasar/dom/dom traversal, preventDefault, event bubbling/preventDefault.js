const h3 = document.getElementsByTagName('h3')[0];
h3.innerHTML = 'Prevent Default';



// // Prevent Default --------------------------------------------------->
// // menghentikan aksi default pada element
// // contoh close menggunakan tag <a href> 
// // e.preventDefault();

const closes = document.querySelectorAll('.close');
closes.forEach(function(close){
    close.addEventListener('click', function(e){
        e.target.parentElement.style.display='none';
        e.preventDefault();
    });
});



