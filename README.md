# Reclamos Legales Argentina - WhatsApp AI System

Sistema de reclamos legales por WhatsApp para consumidores argentinos. Permite a los usuarios hacer reclamos de manera conversacional y recibir asistencia profesional automatizada.

## 🎯 Descripción

Este proyecto facilita que los consumidores argentinos generen y envíen reclamos legales válidos a través de WhatsApp, utilizando AI para la intake inicial y operaciones humanas para el manejo end-to-end.

### ✨ Características principales

- **Interfaz conversacional**: Chat natural por WhatsApp sin formularios complicados
- **AI-powered intake**: Recolección inteligente de información del reclamo
- **Generación automática**: Documentos legales profesionales en español argentino
- **Seguimiento completo**: Updates de estado y progreso via WhatsApp
- **Modelo de éxito**: Solo se paga si se consigue una resolución

## 🚀 Stack Tecnológico

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Automatización**: n8n workflows
- **AI**: ChatGPT API con prompts específicos para Argentina
- **Comunicación**: WhatsApp Business API
- **Hosting**: Netlify/Vercel (estático)

## 📁 Estructura del Proyecto

```
/
├── index.html              # Landing page principal
├── styles.css              # Estilos responsive mobile-first
├── script.js               # Interacciones y animaciones
├── tasks/                  # Documentación de desarrollo
│   ├── prd-*.md           # Product Requirements Document
│   └── tasks-*.md         # Lista de tareas detallada
└── rules/                  # Reglas de desarrollo y PRD
```

## 🏃‍♂️ Inicio Rápido

### Desarrollo local

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/[username]/reclamos-legales-argentina.git
   cd reclamos-legales-argentina
   ```

2. **Abrir en navegador**
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js
   npx http-server
   
   # O simplemente abrir index.html en tu navegador
   ```

3. **Ver en:** `http://localhost:8000`

### Deploy automático

El proyecto se despliega automáticamente en cada push a `main` branch via:
- **Netlify**: Para la landing page estática
- **n8n Cloud**: Para los workflows de automatización

## 🎨 Diseño y UX

- **Mobile-first**: Optimizado para usuarios argentinos que usan principalmente móvil
- **WhatsApp branding**: Colores y patrones familiares (#25D366, #128C7E)
- **Conversational tone**: Lenguaje empático siguiendo principios de AirHelp
- **Clear hierarchy**: Tipografía y espaciado optimizados para confianza

## 📋 Roadmap

### ✅ Fase 1 - Landing Page (Completada)
- [x] Landing page responsive
- [x] Sección hero con pain points
- [x] Value proposition clara
- [x] "Cómo funciona" con cards alineadas
- [x] CTAs prominentes de WhatsApp

### 🔧 Fase 2 - Bot Integration (En progreso)
- [ ] WhatsApp webhook setup
- [ ] ChatGPT API integration
- [ ] Conversational flow design
- [ ] File attachment handling

### 📊 Fase 3 - Operations Dashboard
- [ ] Claims management interface
- [ ] Status tracking system
- [ ] Document generation pipeline
- [ ] Email sending functionality

## 🌟 Contribuir

Este proyecto sigue el framework de desarrollo documentado en `/rules/`:

1. Lee el PRD en `/tasks/prd-argentine-legal-claims-whatsapp-ai.md`
2. Revisa las tareas en `/tasks/tasks-prd-argentine-legal-claims-whatsapp-ai.md`
3. Crea feature branches desde `main`
4. Mantén el código mobile-first y accessibility-friendly

## 📞 Contacto

Para consultas sobre el proyecto o colaboraciones:
- **WhatsApp Demo**: [+54 9 11 2345-6789](https://wa.me/+5491123456789?text=Hola,%20necesito%20ayuda%20con%20un%20reclamo)

## 📄 Licencia

Este proyecto está bajo licencia MIT. Ver `LICENSE` para más detalles.

---

**Hecho con ❤️ para consumidores argentinos que merecen que sus reclamos sean escuchados.** 