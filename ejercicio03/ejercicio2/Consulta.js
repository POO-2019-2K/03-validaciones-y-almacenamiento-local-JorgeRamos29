export default class Cita{
    constructor(obCita){
        this._nombre = obCita.nombre.toUpperCase();
        this._hora = obCita.hora;
        this._fecha = obCita.fecha;
        this._months = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
    }

    get nombre(){
        return this._nombre
    }
    get hora(){
        return this._hora
    }

    get fecha(){
        return this._fecha
    }
   

    getFechaString(){
        let cadena = this._fecha.getDate() + "/" + this._months[this._fecha.getMonth()] + "/" + this._fecha.getFullYear();
        return cadena; 
    }


    getDiferencia(){
        let unDia = 24 * 60 * 60 * 1000;
        let diferencia = this._fecha - new Date();
        let fecha = Math.trunc(diferencia / unDia);
        console.log(fecha);
        return fecha;
    }

}