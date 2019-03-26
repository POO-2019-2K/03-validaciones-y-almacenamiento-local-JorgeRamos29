import Tabla from "./Tabla.js";
import Gasto from "./Gasto.js";

class Main{
    constructor(){
        let tabla = new Tabla (document.querySelector("#table"),document.querySelector("#info"));

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");

            if (form.checkValidity() === true){
                let tipo = document.querySelector("#tipo").value;
                let concepto = document.querySelector("#concepto").value;
                let fecha = document.querySelector("#fecha").value;
                let monto = document.querySelector("#monto").value;

                fecha = fecha.split("-");
                let dFecha = new Date(fecha[0],fecha[1] - 1,fecha[2]);
                
                let obGasto = {
                    tipo: tipo,
                    concepto: concepto,
                    monto: monto,
                    fecha: dFecha
                }

                let gasto = new Gasto(obGasto);
                tabla.addGasto(gasto);
            }
        });
    }
}

let m = new Main;