import Empleado from "./Empleado.js";
export default class Tabla{
    constructor(tabla,info){
        this._tabla = tabla;
        this._info = info;
        this._numEmpleados = 0;
        this._sumSueldos = 0;
        this._sumEdades = 0;
        this._empleadosDiezMil = 0;
        this._empleadosMayorDiezMil = 0;
        this._empleadosMayorVeinteMil = 0;
        this._promedioSueldo = 0;
        this._promedioEdad = 0;
        this._empleados = [];
        this._iniciarTablas();
    }

    _iniciarTablas(){
        //localStorage.removeItem("empleados")
        let empleado = JSON.parse(localStorage.getItem("empleados"));
        if(!empleado){
            return;
        }

        empleado.forEach((empleado) => {
            empleado.dContratacion = new Date (empleado.dContratacion);
            empleado.dBirthday = new Date (empleado.dBirthday);
            this._showInTable(new Empleado(empleado));
        })
    }

    _showInTable(empleado){
        let row = this._tabla.insertRow(-1);

        let cellNumEmpl = row.insertCell(0);
        let cellNombre = row.insertCell(1);
        let cellSueldo = row.insertCell(2);
        let cellContratacion = row.insertCell(3);
        let cellBirthday = row.insertCell(4);
        let cellEdad = row.insertCell(5);
        let cellAntiguedad = row.insertCell(6);

        cellNumEmpl.innerHTML = empleado.numEmpl;
        cellNombre.innerHTML = empleado.nombre;
        cellSueldo.innerHTML = empleado.sueldo;
        cellContratacion.innerHTML = empleado.getContratacionString();
        cellBirthday.innerHTML = empleado.getBirthdayString();
        cellEdad.innerHTML = empleado.getEdad();
        cellAntiguedad.innerHTML = empleado.getAntiguedad();

        this._sumSueldos += parseInt(empleado.sueldo);
        this._sumEdades += parseInt(empleado.getEdad());
        this._numEmpleados++;
        if((empleado.sueldo) <= 10000){
            this._empleadosDiezMil++;
        }else if((empleado.sueldo > 10000) && (empleado.sueldo <= 20000)){
            this._empleadosMayorDiezMil++;
        }else if(empleado.sueldo > 20000){
            this._empleadosMayorVeinteMil++;
        }

        this._promedioSueldo = this._sumSueldos / this._numEmpleados;
        this._promedioEdad = this._sumEdades / this._numEmpleados;

        this._info.rows[0].cells[1].innerHTML = this._empleadosDiezMil;
        this._info.rows[1].cells[1].innerHTML = this._empleadosMayorDiezMil;
        this._info.rows[2].cells[1].innerHTML = this._empleadosMayorVeinteMil;
        this._info.rows[3].cells[1].innerHTML = this._promedioSueldo;
        this._info.rows[4].cells[1].innerHTML = this._promedioEdad;

        let obEmpleado = {
            nombre: empleado.nombre,
            sueldo: empleado.sueldo,
            numEmpl: empleado.numEmpl,
            dBirthday: empleado.dBirthday,
            dContratacion: empleado.getContratacionString()
        }

        this._empleados.push(obEmpleado);
    }

    addEmpleado(empleado){
        this._showInTable(empleado);
        localStorage.setItem("empleados",JSON.stringify(this._empleados));
        console.log(localStorage.getItem("empleados"))
    }

}