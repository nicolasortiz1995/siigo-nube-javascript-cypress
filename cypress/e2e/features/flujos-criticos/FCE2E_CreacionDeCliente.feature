Feature: Creación de Clientes - E2E
    Como QA Engineer
    Quiero poder crear un cliente en la aplicación end-to-end
    Para asegurar que todo el flujo completo de creación de clientes funciona correctamente

    Background:
        Given que estoy en la pantalla de inicio de sesión
        When ingreso correctamente mis credenciales de acceso
        Then debería poder iniciar sesión correctamente y acceder a la plataforma
    
    @e2e @crear-cliente @flujo-critico @happy-path
    Scenario: Crear un cliente con datos válidos end-to-end
        When hago clic en el botón superior "+ Crear"
        When selecciono la opción "Clientes"
        When completo el formulario de Datos básicos con datos válidos
        When completo el formulario de Datos para facturación y envío con datos válidos
        When completo el formulario de Contactos con datos válidos
        When completo el formulario de Vendedor y cobrador con datos válidos
        When completo el formulario de Observaciones con datos válidos
        When hago clic en "Guardar"
        Then el sistema muestra un mensaje de éxito "Tercero guardado exitosamente"
        Then puedo visualizar el "Perfil del tercero"
