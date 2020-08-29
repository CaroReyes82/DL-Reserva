let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validando);

let patronRut= /^0*(\d{1,3}(\.?\d{3})*)\-?([\dkK])$/gmi;
let patronNombre = /[.0-9\W_]/gim;
let rut = document.getElementsByClassName("rut").value;
let nombre = document.getElementsByClassName("nombre").value;
let error = document.getElementById("error");
let email = document.getElementsByClassName("email");
let patronEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let apellido = document.getElementsByClassName("apellido").value;
let edad = document.getElementsByClassName("edad").value;
let patronEdad= /[18-100]/gim;
let fecha = document.getElementsByClassName ("fecha").value;
let patronFecha = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/gmi;


function validando(event){
    event.preventDefault();
    error.className = "";
    error.innerHTML = "";
   
    if (patronRut.test( patronRut,rut)){
        error.className = "alerta";
        error.innerHTML = "Ingrese datos válidos";

    }else if( !nombre || patronLetras.test(nombre)){
        error.className = "alerta";
        error.innerHTML = "Ingrese datos válidos";

    

    }else if( !apellido || patronLetras.test(apellido)){
    error.className = "alerta";
    error.innerHTML = "Ingrese datos válidos";
    
    }else if( !Edad || patronEdad.test(edad)){
        error.className = "alerta";
        error.innerHTML = "Ingrese datos válidos";
    
    }else if( !email || patronEmail.match(email)){
        error.className = "alerta";
        error.innerHTML = "Ingrese datos válidos";


    }else if( !fecha || patronFecha.test(fecha)){ 
               
        error.className = "alerta";
        error.innerHTML = "Ingrese datos válidos";

   







    }else{

        alert(`Estimado(a): ${nombre} ${apellido} su hora para ${especialidad} ha sido reservada para el
        día ${fecha} a las ${hora}. Además, se le envió un mensaje a su correo ${email} con el detalle de su cita.
        Gracias por preferirnos`)

    }
    
};

function validacion(patron, dato) {
    return patron.test(dato);
};

console.log (formulario);


