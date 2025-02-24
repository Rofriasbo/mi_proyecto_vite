function MyPromisesRace() {
    function fcnSumarLento( numero ){
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve( numero + 1 );
                }, 1000);
        });
    };
    let fcnSumarRapido = (numero)=>{
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                reject('Error en la promesa de la funcion Sumar Rapido');
            }, 1000);
        });
    };
    Promise.race([fcnSumarLento(10), fcnSumarRapido(10)])
    .then(respuesta =>{ console.log('Respuesta:', respuesta);
    })
    .catch(error=>{console.log("Error en la respuesta de la promesa: ", error);
    });
    return (
        <>
            <div>
                <h1>
                    Programa de Funciones con Promesas RACE
                </h1>
            </div>
        </>
    );
};
export default MyPromisesRace;