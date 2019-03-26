import Cita from "./Consulta.js";
export default class Tabla{
    constructor(tabla,info){
        this._tabla = tabla;
        this._info = info;
        this._diaSemana = 0;
        this._domingo = 0;
        this._lunes = 0;
        this._martes = 0;
        this._miercoles = 0;
        this._jueves = 0;
        this._viernes = 0;
        this._sabado = 0;
        this._cita = [];
        this._iniciarTablas();
        
    }

    _iniciarTablas(){

        let cita = JSON.parse(localStorage.getItem("citas"));
        if(!cita){
            return;
        }

        cita.forEach((cita) => {
            cita.fecha = new Date(cita.fecha);
            this._showInTable(new Cita(cita));
        })
    }

    _showInTable(cita){
        let row = this._tabla.insertRow(-1);

        let cellFecha = row.insertCell(0);
        let cellHora = row.insertCell(1);
        let cellNombre = row.insertCell(2);
        let cellDias = row.insertCell(3);

        cellFecha.innerHTML = cita.getFechaString();
        cellHora.innerHTML = cita.hora;
        cellNombre.innerHTML = cita.nombre;

        if((cita.getDiferencia()) >= 1){
            cellDias.innerHTML = cita.getDiferencia();
        }else if ((cita.getDiferencia()) < 1){
            cellDias.innerHTML = "-";
        }
        
        this._diaSemana = cita.fecha.getDay();
        switch (this._diaSemana) {
            case 0:
                this._domingo++;
                break;
            case 1:
                this._lunes++;
                break;
            case 2:
                this._martes++;
                break;
            case 3:
                this._miercoles++;
                break;
            case 4:
                this._jueves++;
                break;
            case 5:
                this._viernes++;
                break;
            case 6:
                this._sabado++;
                break;
            default:
                break;
        }


        this._info.rows[0].cells[1].innerHTML = this._lunes;
        this._info.rows[1].cells[1].innerHTML = this._martes;
        this._info.rows[2].cells[1].innerHTML = this._miercoles;
        this._info.rows[3].cells[1].innerHTML = this._jueves;
        this._info.rows[4].cells[1].innerHTML = this._viernes;
        this._info.rows[5].cells[1].innerHTML = this._sabado;
        this._info.rows[6].cells[1].innerHTML = this._domingo;

        let obCita = {
            nombre: cita.nombre,
            hora: cita.hora,
            fecha: cita.getFechaString()
        }

        this._cita.push(obCita);
    }

    addCita(cita){
        this._showInTable(cita);
        localStorage.setItem("citas",JSON.stringify(this._cita));
        console.log(localStorage.getItem("citas"))
    }

}