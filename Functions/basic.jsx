function PromesasBasicas(){
    const miPromesa= new Promise(function(resolve,reject){
        setTimeout(function(){
            const error=true;
            if(!error){
                resolve({data:"Datos recibidos"});
            }else{
                reject("Error al obtener los datos");
            }
        },2000);
    });
    miPromesa.then(
    function (resultado){
        console.log(resultado);
        console.log(miPromesa);
    }
).catch(
    function (error){
        console.log(error);
    }
);
    return (
        <>
            <div>
                <h1>
                    Programa de Promesas Basicas
                </h1>
            </div>
        </>
    );
}
export default PromesasBasicas;