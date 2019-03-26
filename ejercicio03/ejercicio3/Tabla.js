import Gasto from "./Gasto.js";
export default class Tabla{
    constructor(tabla,info){
        this._tabla = tabla;
        this._info = info;
        this._gastosHospedaje = 0;
        this._gastosAlimento = 0;
        this._gastosTrasporte = 0;
        this._gastosOtros = 0;
        this._gasto = [];
        this._iniciarTablas();
        
    }

    _iniciarTablas(){
        //localStorage.removeItem("gastos")
        let gasto = JSON.parse(localStorage.getItem("gastos"));
        if(!gasto){
            return;
        }

        gasto.forEach((gasto) => {
            gasto.fecha = new Date(gasto.fecha);
            this._showInTable(new Gasto(gasto));
        })
    }

    _showInTable(gasto){
        let row = this._tabla.insertRow(-1);

        let cellFecha = row.insertCell(0);
        let cellTipo = row.insertCell(1);
        let cellConcepto = row.insertCell(2);
        let cellMonto = row.insertCell(3);

        cellFecha.innerHTML = gasto.getFechaString();
        cellTipo.innerHTML = gasto.tipo;
        cellConcepto.innerHTML = gasto.concepto;
        cellMonto.innerHTML = gasto.monto;

        if((gasto.tipo) === "Transporte"){
            this._gastosTrasporte += parseInt(gasto.monto);
        }else if((gasto.tipo) === "Alimento"){
            this._gastosAlimento += parseInt(gasto.monto);
        }else if((gasto.tipo) === "Hospedaje"){
            this._gastosHospedaje += parseInt(gasto.monto);
        }else if((gasto.tipo) === "Otros"){
            this._gastosOtros += parseInt(gasto.monto);
        }
        

        this._info.rows[0].cells[1].innerHTML = this._gastosTrasporte;
        this._info.rows[1].cells[1].innerHTML = this._gastosHospedaje;
        this._info.rows[2].cells[1].innerHTML = this._gastosAlimento;
        this._info.rows[3].cells[1].innerHTML = this._gastosOtros;

        let obGasto = {
            tipo: gasto.tipo,
            concepto: gasto.concepto,
            monto: gasto.monto,
            fecha: gasto.getFechaString(),
        }
        this._gasto.push(obGasto);
    
    }

    addGasto(gasto){
        this._showInTable(gasto);
        localStorage.setItem("gastos",JSON.stringify(this._gasto));
        console.log(localStorage.getItem("gastos"));
    }

}