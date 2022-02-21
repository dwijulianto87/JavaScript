// // web pencarian film dan detail film menggunakan callback ajax library JQuery dan bootstrap

$('.btn-search').on('click', function(){
    
    $.ajax({

        // parameter pertama url/ sumber data // callback 1 //////////////////////////////////////////////////////////////////
        url:'http://www.omdbapi.com/?apikey=c36d76f8&s=' + $('.input-search').val(),
    
        // parameter kedua status success dan aksi selanjutnya // callback 1 /////////////////////////////////////////////////
        success: (objVideos) => { 
    
            let containerVideos = '';
    
            let videos = objVideos.Search;
    
            videos.forEach( video => { containerVideos += showMovies(video) });
        
            $('.container-movies').html(containerVideos);
    
            $('.btn-detail').on('click', function(){
    
                $.ajax({
                    
                    // parameter pertama url/ sumber data // callback 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                    url:'http://www.omdbapi.com/?apikey=c36d76f8&i=' + $(this).data('imdbid'),
                    
                    // parameter kedua status success dan aksi selanjutnya // callback 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                    success: (detail) => { 
                        console.log(detail)
                        let containerDetail = showDetail(detail)
    
                        $('.container-detail-movie').html(containerDetail);
                    },
    
                    // parameter ketiga status error dan aksi selanjutnya // callback 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                    error: () => { alert('ada kesalahan dalam mengakses data !! ')}
                })
                
            })
    
        },
    
        // parameter ketiga status error dan aksi selanjutnya // callback 1 ////////////////////////////////////////////////
        error: (e) => { alert('ada kesalahan dalam mengakses data !! ')}
    
    });
})









// // function yang mengembalikan tempalate item movie

function showMovies(movie){
    return `<div class="col-md-4 my-3">
                <div class="card">          
                    <img src= ${movie.Poster} class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${movie.Title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                                <a href="#" data-bs-toggle="modal" data-imdbid = "${movie.imdbID}" data-bs-target="#detailMovies" class="btn btn-primary btn-detail">Show details</a>
                        </div>
                </div>
            </div>`;
}



// // function yang mengembalikan tempalate detail movie

function showDetail(md){
    return `<div class="container-fluid">
                <div class="row">
                <div class="col-md-3">
                    <img src="${md.Poster}" class="img-fluid" alt="">
                </div>
                <div class="col-md">
                    <ul class="list-group">
                    <li class="list-group-item"><h4>${md.Title}</h4></li>
                    <li class="list-group-item"><strong>Director : </strong> ${md.Director}</li>
                    <li class="list-group-item"><strong>Actors : </strong> ${md.Actors}</li>
                    <li class="list-group-item"><strong>Writer : </strong> ${md.Writer}</li>
                    <li class="list-group-item"><strong>Plot : </strong> <br> ${md.Plot}</li>
                    </ul>
                </div>
                </div>
            </div>`;
}
