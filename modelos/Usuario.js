export class Usuario {
    constructor(nombre, email, tipo) {
      this.nombre = nombre;
      this.email = email;
      this.tipo = tipo;
      this.notificaciones = [];
    }
  
    recibirNotificacion(notificacion) {
      this.notificaciones.push(notificacion);
    }
  }
  