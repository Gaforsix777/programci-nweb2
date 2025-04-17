import {clientService} from "../service/client-service.js";
const formulario = document.querySelector("[data-form]");

const obtenerInfo =()=>{
    const url = new URL(window.location);
    const id = (url.searchParams.get("id"));
    if(id==null){
        window.location.href="../screens/error.html";}
        const nombre = document.querySelector("[data-nombre]");
        const email = document.querySelector("[data-email]");

clienteService.clientes(id).then((perfil)=>{
    nombre.value= perfil.nombre;
    email.value= perfil.email;  
});
};

obtenerInfo();
formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault(); //evita que se recargue la pagina
    const url = new URL(window.location);
    const id = (url.searchParams.get("id"));
    const nombre = document.querySelector("[data-nombre]").value;  
    const email = document.querySelector("[data-email]").value;
    clienteService.actualizarCliente(nombre,email,id).then(()=>{
        window.location.href="../screens/edicion_concluida.html"; //redirecciona a la pagina de edicion concluida
    }).catch((error)=>alert("No existe conexion"));
});
