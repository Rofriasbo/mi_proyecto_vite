function MyFetchAPIsp() { 
    let usuario = {
    nombre: 'Toño',
    edad: 25
}
fetch('https://reqres.in/api/users/', {
    method: 'POST',
    body: JSON.stringify(usuario), //data a enviar
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(resp => resp.json())
.then(console.log)
.catch(error => {
    console.log('Error en la peticion API POST');
    console.log(error);
});
    return (
        <>
            <div>
                <h1>
                    Programa para FETCH API POST
                </h1>
            </div>
       
        </>
    );

    };
export default MyFetchAPIsp;