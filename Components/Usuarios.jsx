import { useEffect, useState, useRef } from "react";
import reqRespApi from "../api/reqRes";

export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const ficRefPage = useRef(0);

  const ficFnCargaUsuarios = async () => {
    const ficResponse = await reqRespApi
      .get("/users", {
        params: {
          page: ficRefPage.current,
        },
      })
      .then((resp) => {
        // console.log(resp);
        // console.log(resp.data);
        // console.log(resp.data.data);
        // console.log(resp.data.data[0].first_name);
        // console.log(resp.data.data);
        if (resp.data.data.length > 0) {
          setUsuarios(resp.data.data);
          ficRefPage.current++;
        } else {
          alert("No hay más registros");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    //FIC: llamar función de carga de usuarios.
    ficFnCargaUsuarios();
  }, []);

  const renderItem = (usuario) => (
    <tr key={usuario.id}>
      <td>
        <img
          src={usuario.avatar}
          alt={usuario.first_name}
          style={{ width: 50, borderRadius: 100 }}
        />
      </td>
      <td>
        {usuario.first_name} {usuario.last_name}
      </td>
      <td>{usuario.email}</td>
    </tr>
  );

  return (
    <div style={{ padding: 20 }}>
      <h1>Introducción a JavaScript</h1>
      <hr></hr>
      <h3>Usuarios</h3>
      <table
        className="table"
        border="1"
        cellPadding="10"
        style={{ width: "100%", textAlign: "center" }}
      >
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.length > 0 ? (
            usuarios.map((usuario) => renderItem(usuario))
          ) : (
            <tr>
              <td colSpan="3">Cargando usuarios...</td>
            </tr>
          )}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={ficFnCargaUsuarios}>
        Siguiente
      </button>
    </div>
  );
};