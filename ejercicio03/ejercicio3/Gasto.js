export default class Gasto{
    constructor(obGasto){
        this._tipo = obGasto.tipo;
        this._concepto = obGasto.concepto;
        this._fecha = obGasto.fecha;
        this._monto = obGasto.monto;
        this._months = [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic"
        ];
    }

    get tipo(){
        return this._tipo
    }
    get concepto(){
        return this._concepto
    }

    get monto(){
        return this._monto
    }

    get fecha(){
        return this._fecha
    }
   

    getFechaString(){
        let cadena = this._fecha.getDate() + "/" + this._months[this._fecha.getMonth()] + "/" + this._fecha.getFullYear();
        return cadena; 
    }
    
}