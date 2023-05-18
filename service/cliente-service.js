const crearNuevaLinea = (nombre,email) => {
    const linea = document.createElement('tr');
    const contenido = `<tr>
    <td class="td" data-td>
    ${nombre}</td>
    <td>
    ${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html"
            class="simple-button simple-button--edit"
            >Editar</a
          >
        </li>
        <li>
          <button
            class="simple-button simple-button--delete"
            type="button"
          >
            Eliminar
          </button>
        </li>
      </ul>
    </td>
  </tr>`
  linea.innerHTML = contenido;
  return linea
};

const table = document.querySelector("data-table")
const http = new XMLHttpRequest();
//console.log(http);

//Abrir http(metodo.url)

//CRUD  - Metodos http
//CREATE -  POST
//READ - GET
//UPDATE - PUT/PATCH
//DELETE - DELETE

http.open("GET", "http://localhost:3000/perfil");

http.send();

http.onload = () => {
  const data = JSON.parse(http.response);
  console.log(data);
  data.forEach((perfil) => {
    const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
    table.appendChild(nuevaLinea);
  });
};



