// Función para convertir JSON en objeto de usuario
export function toReqRespUsuarioListado(json) {
    return JSON.parse(json);
}

// Función para convertir objeto de usuario a JSON
export function reqRespUsuarioListadoToJson(value) {
    return JSON.stringify(value, null, 2);
}

// Definición de estructura esperada
export const typeMap = {
    "Usuario": {
        id: 0,
        email: "",
        first_name: "",
        last_name: "",
        avatar: ""
    },
};

// Exportación correcta para ESModules
export default {
    toReqRespUsuarioListado,
    reqRespUsuarioListadoToJson
};