  import { RangoFechas } from './modelos/RangoFechas.js'
/* const { EstadoReserva } = require('../enums/EstadoReserva.js')
const { Reserva } = require('./Reserva.js')   */
/* import * as enums from './enums/EstadoReserva.js'
import * as Clases from './modelos'; */


const fechaInicio = new RangoFechas(new Date(2023, 10, 1), new Date(2023, 10, 5)); 

console.log('Inicio: ' + fechaInicio.fechaInicio + 'Fin:' + fechaInicio.fechaFin);

console.log(fechaInicio.seSuperponeCon(new RangoFechas(new Date(2023, 9, 22), new Date(2023, 9, 30)))); // true

// 2023-11-01T00:00:00.000Z

