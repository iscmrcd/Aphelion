# Conversiones y CRM

## Captación

El formulario, diagnóstico y chat conservan la base de leads como registro principal. Después de persistir el registro, el servidor lo sincroniza con HubSpot. Una caída del CRM no cambia el resultado exitoso de la captación local ni expone credenciales al navegador.

- Contactos nuevos: nombre proporcionado, email, teléfono y empresa, estado `NEW`, ciclo de vida `lead` y propietario configurado.
- Contactos existentes: se rellenan campos vacíos; no se reinician el propietario, el estado ni los datos escritos por el equipo.
- Cada solicitud tiene una nota asociada con fecha original, origen, servicio, página y mensaje. No se copia el transcript completo del chat, las respuestas del diagnóstico ni el hash de IP.
- El email se compara sin distinguir mayúsculas y el teléfono por sus dígitos, sin inventar un país. Los teléfonos compartidos o coincidencias ambiguas necesitan revisión.
- Una captura conserva su identificador al reintentar. El registro de sincronización guarda IDs de contacto y nota. Los envíos remotos de resultado incierto se detienen para revisión, sin repetir escrituras a ciegas.
- Las pruebas explícitas se identifican y se omiten de la captación comercial automática. Los registros históricos se importan según el alcance confirmado por el usuario.

No se instala el script de seguimiento de HubSpot ni otro píxel de Meta. No se crean suscripciones de marketing, campañas, negocios con importes estimados ni anuncios.

## Activación

1. Aplicar `supabase/hubspot.sql`. Las tablas y funciones de sincronización sólo son accesibles por `service_role`; no se habilitan lecturas para visitantes ni usuarios autenticados.
2. Crear una clave de servicio en la cuenta HubSpot Aphelion `52269872`, con `crm.objects.contacts.read` y `crm.objects.contacts.write` para gestionar contactos y sus notas. Esta creación requiere confirmación del propietario en el paso de permisos.
3. Guardar la clave exclusivamente en los secretos del servidor de Lovable como `HUBSPOT_SERVICE_KEY`, con `HUBSPOT_OWNER_ID=102715109` y `HUBSPOT_SYNC_ENABLED=true`. No guardar la clave en Git, archivos locales ni parámetros del navegador.
4. Publicar el código revisado y ejecutar una prueba de captación autorizada, comprobando el registro local, la nota/contacto y el evento Meta.

El flag de sincronización está apagado por defecto. Las solicitudes nuevas se registran en `hubspot_lead_sync`; `pending` y `error` se reintentan de forma acotada después de otra entrega exitosa. `retryPendingHubSpotLeads` permite reintento administrativo. No hay un proceso programado añadido: si no llegan solicitudes nuevas, los pendientes requieren ejecución administrativa. `review` requiere comprobar el resultado en HubSpot antes de autorizar otro intento. Tres intentos es el límite automático.

## Verificación de producción · 6 de noviembre de 2026

- La cuenta de HubSpot Aphelion usa `hola@aphelion.mx`. La clave se creó con autorización del propietario y quedó guardada en los secretos de Lovable con el propietario y la sincronización habilitada.
- Se importaron dos contactos y cuatro notas anteriores con fechas originales. Los registros internos quedaron clasificados como internos y el registro ficticio fue excluido. El registro privado conserva los IDs importados.
- La prueba autorizada del formulario conservó una sola solicitud local. Tras recuperar la entrega, HubSpot confirmó una nota en el contacto interno existente, sin modificar su clasificación ni sus datos.
- La primera entrega encontró una incompatibilidad con el servidor: Cloudflare Workers rechaza `redirect: "error"` al construir la petición. Se usa `manual` y se rechazan respuestas 3xx para impedir el reenvío de credenciales. [Contrato de Request en Workers](https://developers.cloudflare.com/workers/runtime-apis/request/).
- La recuperación conservó el identificador de captura. Los reintentos de capturas persistidas continúan la entrega al CRM y omiten nuevos avisos de correo/SMS.
- Pasaron 17 pruebas del CRM, incluidas compatibilidad con Workers, rechazo de redirecciones y recuperación sin notificaciones duplicadas, además de las 14 pruebas del píxel. TypeScript, ESLint y la compilación de producción fueron correctos.

## Auditoría Meta · 6 de noviembre de 2026

Se revisó en el Administrador de eventos el dataset CRM Aphelion `2813619889012734`, dentro del portfolio Identidad Studio. Se observaron `PageView`, `Contact` y `Lead` activos. `Lead` y `Contact` mostraban calidad de coincidencia 7.8/10 y el diagnóstico indicaba que no había errores activos.

El informe de deduplicación de Lead indicaba «Seguimos analizando tus datos». Eso no confirma ni descarta duplicación. La muestra histórica incluía una recepción por navegador y otra por la API alojada de Meta. No se cambia esa API ni se agrega una segunda integración de conversiones desde HubSpot.

En el sitio público se observó una instalación de `fbevents.js`, la configuración del píxel correcto y un `PageView` con identificador generado por el SDK. Las pruebas aisladas verifican que sólo un resultado de captación exitoso genera Lead, que la página de gracias no genera otro y que los clics de contacto permanecen separados de los leads.

La captación controlada quedó comprobada en el sitio y en HubSpot. Meta también confirmó el Lead del 6 de noviembre, con una recepción por navegador y otra por su API alojada en el horario de la prueba. Esto no permite concluir que haya dos conversiones únicas: el informe de deduplicación sigue indicando «Seguimos analizando tus datos». El diagnóstico no muestra errores activos.

## Validación

`node scripts/test-meta-pixel.mjs` y `node scripts/test-hubspot.mjs` ejecutan pruebas sin tráfico a Meta, HubSpot, correo ni SMS. La prueba de formulario sustituye las funciones de servidor y la red; las pruebas del CRM cubren contactos existentes, teléfonos compartidos, conflictos de email, escrituras inciertas, notas e identificadores de reintento.
