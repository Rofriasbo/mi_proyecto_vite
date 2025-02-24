/* NOTA 3.10 */
function MyFetchAPIsBlob(){
    //instanciamos los dos componentes de
    //imagen de la pagina index.html
    let img1 = document.getElementById("IdImg1");
    let img2 = document.getElementById("IdImg2");
    //Fetch con codigo de promesa simplificada.
    fetch('../images/pwa-01.png')
    .then(resp => resp.blob())
    .then(image => {
        console.log(image);
        //instancia para imagen 1
        var imgPath1 = URL.createObjectURL(image);
        img1.src = imgPath1;
    });
    //Fetch con codigo de promesa normal.
    fetch('../images/Mazinger.png')
    .then(resp => {
        return resp.blob();
    })
    .then(image => {
        console.log(image);
        //instancia para imagen 2
        var imgPath2 = URL.createObjectURL(image);
        img2.src = imgPath2;
    });
    return(
        <>
            <div>
                <h1>
                    Programa para FETCH API BLOB
                </h1>
            </div>
        </>
    );
};
export default MyFetchAPIsBlob;