import Tabla from "./Tabla.js";
import Empleado from "./Empleado.js";

class Main{
    constructor(){
        let tabla = new Tabla (document.querySelector("#table"),document.querySelector("#info"));

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");

           
           
            if (form.checkValidity() === true){
                let nombre = document.querySelector("#name").value;
                let sueldo = document.querySelector("#sueldo").value;
                let numEmpl = document.querySelector("#numEmpl").value;

              
                let birthday = document.querySelector("#birthday").value;
                birthday = birthday.split("-");
                let dBirthday = new Date(birthday[0],birthday[1] - 1,birthday[2]);

                let contratacion = document.querySelector("#contratacion").value;
                contratacion = contratacion.split("-");
                let dContratacion = new Date(contratacion[0],contratacion[1] - 1,contratacion[2]);
                
                let obEmpleado = {
                    nombre: nombre,
                    sueldo: sueldo,
                    numEmpl: numEmpl,
                    dBirthday: dBirthday,
                    dContratacion: dContratacion
                }

                let empleado = new Empleado(obEmpleado);
                tabla.addEmpleado(empleado);
            }
        });
    }
}

let m = new Main;