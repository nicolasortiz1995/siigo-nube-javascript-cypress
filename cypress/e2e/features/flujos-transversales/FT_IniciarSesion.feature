Feature: Iniciar sesión en Siigo Nube
    Como QA Engineer
    Quiero poder iniciar sesión en la aplicación web de Siigo Nube
    Para poder acceder a la plataforma y realizar tareas de gestión de la empresa

    @e2e @inicio-sesion @flujo-transversal @happy-path
    Scenario: Iniciar sesión correctamente
        Given que estoy en la pantalla de inicio de sesión
        When ingreso correctamente mis credenciales de acceso
        Then debería poder iniciar sesión correctamente y acceder a la plataforma
