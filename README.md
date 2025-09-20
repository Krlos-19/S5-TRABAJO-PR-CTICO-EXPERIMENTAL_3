# 🚀 Formulario React con Bootstrap y Validaciones

Un formulario de registro desarrollado en React con Bootstrap y validaciones dinámicas en tiempo real.

## 📋 Características

- ✅ **Validación en tiempo real** mientras escribes
- ✅ **Validación visual** con colores (verde=válido, rojo=error)
- ✅ **Diseño responsivo** con Bootstrap
- ✅ **Campos validados**: Nombre, Correo Electrónico y Contraseña
- ✅ **Mensajes de error dinámicos**

## 🛠️ Tecnologías Utilizadas

- **React** 18+
- **Bootstrap** 5
- **JavaScript ES6+**
- **CSS3**

## 📦 Instalación

### Prerrequisitos
- Node.js versión 14 o superior
- npm (incluido con Node.js)

### Pasos de Instalación

1. **Clonar o descargar** este proyecto
2. **Abrir terminal** en la carpeta del proyecto
3. **Instalar dependencias**:
   ```bash
   npm install
   ```

## 🚀 Ejecución

Para ejecutar el proyecto en modo desarrollo:

```bash
npm start
```

- Se abrirá automáticamente en: `http://localhost:3000`
- La página se recarga automáticamente cuando haces cambios

## 🧪 Cómo Probar las Validaciones

### Campo Nombre
- ❌ **Error**: Menos de 2 caracteres
- ✅ **Válido**: 2 o más caracteres

### Campo Correo
- ❌ **Error**: `abc`, `correo@`, `@gmail.com`
- ✅ **Válido**: `usuario@ejemplo.com`

### Campo Contraseña
- ❌ **Error**: Menos de 8 caracteres
- ✅ **Válido**: 8 o más caracteres

### Envío del Formulario
- Solo se envía si **todos los campos son válidos**
- Muestra alerta de confirmación
- Limpia el formulario después del envío

## 📁 Estructura del Proyecto

```
formulario-react/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js          # Componente principal del formulario
│   ├── index.js        # Punto de entrada (incluye Bootstrap)
│   ├── App.css
│   └── index.css
├── package.json
└── README.md
```

## 🎯 Funcionalidades Implementadas

### Sesión 1 - React Básico
- [x] Proyecto creado con `create-react-app`
- [x] Componente App.js estructurado
- [x] Estados para Nombre, Correo y Contraseña

### Sesión 2 - Bootstrap
- [x] Bootstrap instalado con `npm install bootstrap`
- [x] Estilos importados en `index.js`
- [x] Clases aplicadas: `container`, `row`, `col-md-6`, `card`, `form-control`, `btn`
- [x] Diseño completamente responsivo

### Sesión 3 - Validaciones
- [x] `useState` para controlar inputs y errores
- [x] Validación en tiempo real
- [x] Validación de correo con regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- [x] Validación de contraseña (8+ caracteres)
- [x] Mensajes de error dinámicos bajo cada campo
- [x] Clases `is-valid` e `is-invalid` de Bootstrap

## 🎨 Personalización

### Cambiar Colores
En `src/App.js`, busca las clases de Bootstrap:
- `bg-primary` → Cambia el color del header
- `btn-primary` → Cambia el color del botón

### Modificar Validaciones
En las funciones de validación:
- `validateName()` → Cambia requisitos del nombre
- `validateEmail()` → Modifica regex del correo
- `validatePassword()` → Ajusta longitud de contraseña

## 🐛 Solución de Problemas

### Error: "npm no se reconoce"
**Solución**: Instala Node.js desde https://nodejs.org

### Error: Bootstrap no se muestra
**Solución**: Verifica que agregaste `import 'bootstrap/dist/css/bootstrap.min.css';` en `src/index.js`

### Error: Página en blanco
**Solución**: Revisa la consola del navegador (F12) para ver errores de JavaScript

## 📱 Compatibilidad

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Dispositivos móviles (responsive)

## 📝 Comandos Útiles

```bash
# Ejecutar en desarrollo
npm start

# Crear build de producción
npm run build

# Ejecutar tests
npm test

# Instalar nueva dependencia
npm install nombre-paquete

# Ver dependencias instaladas
npm list
```

## 👨‍💻 Desarrollo

Este proyecto fue desarrollado como ejercicio de aprendizaje de React, implementando:

1. **Hooks de React** (`useState`)
2. **Manejo de eventos** (`onChange`, `onBlur`, `onSubmit`)
3. **Validaciones de formularios**
4. **Integración con Bootstrap**
5. **Desarrollo por sesiones** (progresivo)

## 📄 Licencia

Este proyecto es de uso educativo y libre.
