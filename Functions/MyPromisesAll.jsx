function MyPromisesAll() {
    function fcnSumarUno( numero ){
        var promesa = new Promise(function(resolve, reject){
            if (numero >= 7 ){
                reject('El numero ya es muy alto');
            }
            setTimeout(function(){
                resolve( numero + 1 );
                }, 800);
        });
    return promesa;
    };
    function fcnSumarLento( numero ){
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve( numero + 1 );
                }, 800);
        });
    };
    let fcnSumarRapido = (numero)=>{
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve( numero + 1 );
                }, 300);
        });
    };
    fcnSumarLento(5)
    .then(respuesta=>{
        console.log('Respuesta Lenta:', respuesta);
    });
    fcnSumarRapido(10)
    .then(respuesta=>{
        console.log('Respuesta Rapida:', respuesta);
    });
    let arregloVarios = [fcnSumarLento(5), fcnSumarRapido(10), true, '¡Hola Mundo!'];
    Promise.all(arregloVarios)
    .then(respuestas =>{
        console.log('Respuestas:', respuestas);
    })
    .catch(error=>{
        console.log("Error en todas las promesas: ", error);
    });
    return (
        <>
            <div>
                <h1>
                    Programa de Funciones con Promesas ALL
                </h1>
            </div>
    
        </>
    );
};
export default MyPromisesAll;