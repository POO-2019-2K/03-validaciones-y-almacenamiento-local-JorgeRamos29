export default class Empleado{
    constructor(obEmpleado){
        this._nombre = obEmpleado.nombre.toUpperCase();
        this._sueldo = obEmpleado.sueldo;
        this._numEmpl = obEmpleado.numEmpl;
        this._birthday = obEmpleado.dBirthday;
        this._contratacion = obEmpleado.dContratacion;
        this._months = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
    }

    get nombre(){
        return this._nombre
    }
    get sueldo(){
        return this._sueldo
    }
    get numEmpl(){
        return this._numEmpl
    }
    get dBirthday(){
        return this._birthday
    }
    get dContratacion(){
        return this._contratacion
    }

    getBirthdayString(){
        let cadena = this._birthday.getDate() + "/" + this._months[this._birthday.getMonth()] + "/" + this._birthday.getFullYear();
        return cadena; 
    }

    getContratacionString(){
        let cadena = this._contratacion.getDate() + "/" + this._months[this._contratacion.getMonth()] + "/" + this._contratacion.getFullYear();
        return cadena; 
    }

    getEdad(){
        let unDia = 24 * 60 * 60 * 1000;
        let unAño = 365 * unDia;
        let diferencia = new Date() - this._birthday;
        let edad = Math.trunc(diferencia / unAño);

        return edad;
    }

    getAntiguedad(){
        let unDia = 24 * 60 * 60 * 1000;
        let unAño = 365 * unDia;
        let diferencia = new Date() - this._contratacion;
        let anti = Math.trunc(diferencia/unAño);

        return anti;
    }
}