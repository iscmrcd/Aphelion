# Confirmación del formulario de contacto

- Añadir `/gracias` con confirmación ES/EN, respuesta prevista en menos de 24 horas, WhatsApp opcional y regreso al inicio, usando el estilo existente.
- Tras éxito confirmado de `/contacto`, registrar el mismo Lead y navegar a `/gracias` conservando el idioma, sin datos personales en la URL. Errores y validación no redirigen ni registran Lead.
- No cambiar diagnóstico, chat, campañas, credenciales, CAPI ni publicar.

## Detalles técnicos
- Mantener el bloqueo de doble envío y deduplicación por intento; `/gracias` no dispara Lead por visita o recarga.
- Metadata propia bilingüe con `noindex, follow` y exclusión del sitemap existente.
- Pruebas aisladas y de navegador con respuestas simuladas para `/contacto`, `?lang=es` y `?lang=en`, éxito/fallo/validación y visitas/recargas a `/gracias`.
- Actualizar `docs/meta-pixel.md` y reportar verificaciones automáticas y limitaciones.