import Tabla from "./Tabla.js";
import Cita from "./Consulta.js";

class Main{
    constructor(){
        let tabla = new Tabla (document.querySelector("#table"),document.querySelector("#info"));

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");

            if (form.checkValidity() === true){
                let nombre = document.querySelector("#name").value;
                let hora = document.querySelector("#hora").value;
                let fecha = document.querySelector("#fecha").value;

                
                fecha = fecha.split("-");
                let dFecha = new Date(fecha[0],fecha[1] - 1,fecha[2]);

                
                let obCita = {
                    nombre: nombre,
                    hora: hora,
                    fecha: dFecha
                }

                let cita = new Cita(obCita);
                tabla.addCita(cita);
            }
        });
    }
}

let m = new Main;