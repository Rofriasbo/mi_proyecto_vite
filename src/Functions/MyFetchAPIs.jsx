function MyFetchsAPIs() {
    console.log("¡Hola Mundo!");
    console.log("¡Hola Mundo!");
    var request = new XMLHttpRequest();
    request.open('GET', 'https://reqres.in/api/users', true );
    request.send(null);
    request.onreadystatechange = function( state ){
        if (request.readyState === 4) {
            var resp = request.response;
            var respObj = JSON.parse(resp);
            console.log( respObj );
            console.log( respObj.page );
            console.log( respObj.data );

        } 
        
    }
    
    return (
        <>
            <div>
                <h1>
                    Programa para FETCH APIs
                </h1>
            </div>
        
        </>
    );
};
export default MyFetchsAPIs;