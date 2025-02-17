function PromesasEnCadena(){
    function getData(){
        return  new Promise((resolve,reject)=>{
            setTimeout(
                ()=>resolve("datos obtenidos")
            ,100);
        });
    }
    function processData(){
        return  new Promise((resolve,reject)=>{
            setTimeout(
                ()=>resolve('Procesando :${data}')
            ,100);
        });
    };
    function displayData(){
        return  new Promise((resolve,reject)=>{
            setTimeout(
                ()=>resolve('Mostrando :${data}')
            ,100);
        });
    }
getData()
.then(data=>processData(data))
.then(data=>displayData(processData))
.then(finalOutput=>console.log(finalOutput))
.catch(error=>console.error(error))
    return (
        <>
            <div>
                <h1>
                    Programa de Promesas En Cadena
                </h1>
            </div>
        </>
    );
}
export default PromesasEnCadena;