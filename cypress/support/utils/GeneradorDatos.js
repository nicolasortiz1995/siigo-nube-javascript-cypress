// Importación de la librería faker para generación de datos aleatorios
import { faker } from "@faker-js/faker";

// Clase responsable de generar distintos tipos de datos dinámicos para pruebas automatizadas
export class GeneradorDatos {

  // ========== MÉTODOS FUNCIONALES ==========

  // Genera un número de identificación de 10 dígitos comenzando en 1
  generarNumeroIdentificacion() {
    const parteAleatoria = faker.number.int({ min: 0, max: 999999999 }).toString().padStart(9, '0');
    return `1${parteAleatoria}`;
  }

  // Genera un código de sucursal compuesto por 3 dígitos
  generarCodigoDeLaSucursal() {
    const primerDigito = faker.number.int({ min: 1, max: 9 });
    const segundoDigito = faker.number.int({ min: 0, max: 9 });
    const tercerDigito = faker.number.int({ min: 0, max: 9 });
    return `${primerDigito}${segundoDigito}${tercerDigito}`;
  }

  // Genera un nombre completo con nombre y apellido
  generarNombreCompleto(){
    return `${faker.person.firstName()} ${faker.person.lastName()}`;
  }

  // Genera dos apellidos (puede ser útil para casos donde se requieran ambos)
  generarApellidosCompletos(){
    return `${faker.person.lastName()} ${faker.person.lastName()}`;
  }

  // Genera un nombre comercial de empresa
  generarNombreComercial(){
    return faker.company.name();
  }

  // Genera una dirección aleatoria
  generarDireccion(){
    return faker.location.streetAddress();
  }

  // Genera un número de indicativo (3 dígitos)
  generarIndicativo(){
    return faker.number.int({ min: 111, max: 999 });
  }

  // Genera un número de teléfono de máximo 10 dígitos
  generarNumeroTelefono(){
    return faker.phone.number().replace(/\D/g, '').slice(0, 10);
  }

  // Genera un número de extensión de 4 dígitos
  generarExtension(){
    return faker.number.int({ min: 1000, max: 9999 });
  }

  // Genera un correo electrónico válido
  generarCorreoElectronico(){
    return faker.internet.email();
  }

  // Genera un tipo de régimen de IVA aleatoriamente
  generarTipoDeRegimenIVA(){
    return faker.helpers.arrayElement(['Responsable de IVA', 'No responsable de IVA']);
  }

  // Genera un código postal numérico
  generarCodigoPostal(){
    return faker.location.zipCode().replace(/\D/g, '');
  }

  // Genera el nombre del contacto
  generarNombreContacto(){
    return faker.person.firstName();
  }

  // Genera el apellido del contacto
  generarApellidoContacto(){
    return faker.person.lastName();
  }

  // Genera el cargo del contacto o empleado
  generarCargo(){
    return faker.person.jobTitle();
  }

  // Genera una observación corta (máximo 20 caracteres)
  generarObservacion(){
    return faker.lorem.paragraph().slice(0, 20);
  }

}

// Exportación de una instancia única de la clase para ser utilizada globalmente
export const generadorDatos = new GeneradorDatos();
