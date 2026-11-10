# CV-001 — cierre acotado de activación (02/11/2026 ART)

## Unidad cerrada
Habilitar solicitud por correo en los sitios existentes, conservando verificación
y PDF privados. Se detienen pruebas adicionales por instrucción del titular.

## Resultado efectivo
- GitHub Pages: https://lankamar.github.io/cv/
- Hostinger: https://teal-gnat-607186.hostingersite.com/cv/
- Ambos formularios apuntan al backend HTTPS de Hostinger y tienen el botón activo.
- Backend ejecutado con PHP 8.3.36; configuración, SQLite y los tres PDF están en
  cv-private, fuera de public_html. Gmail autenticado con STARTTLS.
- Tres correos de prueba recibidos en Gmail: Tecnología, Salud y Académico.
- Tecnología y Académico: descarga HTTPS, SHA-256 igual al original y reutilización
  rechazada con 410. Confirmación de Salud visible; su descarga automática en Chrome
  fue rechazada por el control de permisos y quedó pendiente. No se eludió el rechazo.
- Solicitudes reales por UI desde GitHub Pages y Hostinger llegaron a aceptación.
- Seis rutas históricas de PDF: 404. Los antiguos PDF de Hostinger se movieron a
  cv-private/old-public/documentos; no se destruyeron ni se restaurarán como públicos.
- Retención diaria programada: cron nrBXV1GRxO, 15 3 * * *, cleanup.php de la aplicación
  privada. Primera ejecución pendiente de comprobación.
- Tarea temporal de extracción dMyLE2HEdk retirada. El controlador de activación
  de una ejecución se restauró automáticamente al controlador normal al finalizar.
- La clave no fue impresa ni versionada. El ZIP de instalación se movió a
  cv-private/installation-package.zip, modo 0600.

## Correcciones de despliegue
El paquete inicial omitía mail_transport. Se fijó SMTP en el bootstrap privado y
se corrigió el generador local del paquete. La configuración privada fue completada
sin mostrar la clave. La instalación conserva imágenes y páginas de credenciales.

El workflow FTP heredado informó éxito sin actualizar el webroot real. Se deja
solo manual (workflow_dispatch) hasta revisar su destino, para evitar despliegues
inadvertidos o regresiones. No se configura un destino FTP nuevo por suposición.

## Pendiente, fuera de este cierre
1. QA final de descarga en Chrome con permiso del titular y versión Salud.
2. Revisión final móvil en los dos sitios, expiración en producción y límites.
3. Verificar primera ejecución del cron y política de logs/CDN.
4. Versionar de forma revisada el backend y pruebas locales existentes, que se
   conservan en cv-api; nunca incluir private ni la clave en Git.
5. Historial Git y cachés históricos requieren tratamiento aparte; 404 actual
   no implica revocación de copias obtenidas con anterioridad.

Estado: PUBLICADO Y HABILITADO; QA FINAL PARCIAL. No se afirma certificación
completa de producción. Los enlaces de los correos usados en QA ya fueron consumidos.
