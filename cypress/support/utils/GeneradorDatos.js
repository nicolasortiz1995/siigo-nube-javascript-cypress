import { faker } from "@faker-js/faker";

export class GeneradorDatos {

  generarNumeroIdentificacion() {
    const parteAleatoria = faker.number.int({ min: 0, max: 999999999 }).toString().padStart(9, '0');
    return `1${parteAleatoria}`;
  }

  generarCodigoDeLaSucursal() {
    const primerDigito = faker.number.int({ min: 1, max: 9 });
    const segundoDigito = faker.number.int({ min: 0, max: 9 });
    const tercerDigito = faker.number.int({ min: 0, max: 9 });
    return `${primerDigito}${segundoDigito}${tercerDigito}`;
  }

  generarNombreCompleto(){
    return `${faker.person.firstName()} ${faker.person.lastName()}`;
  }

  generarApellidosCompletos(){
    return `${faker.person.lastName()} ${faker.person.lastName()}`;
  }

  generarNombreComercial(){
    return faker.company.name();
  }

  generarDireccion(){
    return faker.location.streetAddress();
  }

  generarIndicativo(){
    return faker.number.int({ min: 111, max: 999 });
  }

  generarNumeroTelefono(){
    return faker.phone.number().replace(/\D/g, '').slice(0, 10);
  }

  generarExtension(){
  return faker.number.int({ min: 1000, max: 9999 });
  }

  generarCorreoElectronico(){
    return faker.internet.email();
  }

  generarTipoDeRegimenIVA(){
    return faker.helpers.arrayElement(['Responsable de IVA', 'No responsable de IVA']);
  }

  generarCodigoPostal(){
    return faker.location.zipCode().replace(/\D/g, '');
  }

  generarNombreContacto(){
    return faker.person.firstName();
  }

  generarApellidoContacto(){
    return faker.person.lastName();
  }
  
  generarCargo(){
    return faker.person.jobTitle();
  }

  generarObservacion(){
    return faker.lorem.paragraph().slice(0, 20);
  }

  
  

}

export const generadorDatos = new GeneradorDatos();