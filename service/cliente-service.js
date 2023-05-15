const http = new XMLHttpRequest();

//Abrir http(metodo.url)

//CRUD  - Metodos http
//CREATE -  POST
//READ - GET
//UPDATE - PUT/PATCH
//DELETE - DELETE

http.open("GET", "http://localhost:3000/perfil")
http.send();
http.onload = () => {
    const data = http.response;
    console.log(data)
}

