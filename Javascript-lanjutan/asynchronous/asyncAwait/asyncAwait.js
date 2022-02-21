// asynchronous function menggunakan promise ----------------------------------------

// const newPromise = new Promise( resolve =>{ 
    
//     setTimeout( () =>{
//         resolve('berhasil resolve')
//     }, 2000);
// });

// newPromise.then(x => console.log('hasil = ' + x));


// promise di dalam function --------------------------------------------------

function cobaPromise(){
    return newPromise = new Promise( (resolve, reject ) =>{ 
        let waktu = 4000;
        if(waktu < 3000){
        setTimeout( () =>{
            resolve('berhasil resolve')
        }, waktu);

        }else{
            setTimeout( () =>{
                reject('gagal resolve')
            }, waktu);
            }
        
    })
}

// const coba = cobaPromise();
// coba.then(x => console.log(x)).catch(x => console.log(x));




// async -----------------------------------------------------------------

async function cobaAsync(){
    try{
        const coba = await cobaPromise();
        console.log(coba);
    }catch (err){
        console.log(err);
//              console.error(err);
    }
}

cobaAsync();













