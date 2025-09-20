import React, { useState } from 'react';

function App() {
  // Estados para los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    contraseña: ''
  });

  // Estados para errores
  const [errors, setErrors] = useState({
    nombre: '',
    correo: '',
    contraseña: ''
  });

  // Estados para campos tocados
  const [touched, setTouched] = useState({
    nombre: false,
    correo: false,
    contraseña: false
  });

  // Funciones de validación
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const validateName = (name) => {
    return name.trim().length >= 2;
  };

  // Manejar cambios en inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validar en tiempo real si ya se tocó el campo
    if (touched[name]) {
      validateField(name, value);
    }
  };

  // Manejar blur (cuando sale del campo)
  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    validateField(name, value);
  };

  // Validar campo específico
  const validateField = (fieldName, value) => {
    let error = '';

    switch (fieldName) {
      case 'nombre':
        if (!validateName(value)) {
          error = 'El nombre debe tener al menos 2 caracteres';
        }
        break;
      case 'correo':
        if (!value) {
          error = 'El correo es requerido';
        } else if (!validateEmail(value)) {
          error = 'Por favor ingresa un correo válido';
        }
        break;
      case 'contraseña':
        if (!value) {
          error = 'La contraseña es requerida';
        } else if (!validatePassword(value)) {
          error = 'La contraseña debe tener al menos 8 caracteres';
        }
        break;
      default:
        break;
    }

    setErrors(prev => ({
      ...prev,
      [fieldName]: error
    }));
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Marcar todos como tocados
    setTouched({
      nombre: true,
      correo: true,
      contraseña: true
    });

    // Validar todos los campos
    validateField('nombre', formData.nombre);
    validateField('correo', formData.correo);
    validateField('contraseña', formData.contraseña);

    // Verificar si hay errores
    const hasErrors = !validateName(formData.nombre) || 
                     !validateEmail(formData.correo) || 
                     !validatePassword(formData.contraseña);

    if (!hasErrors) {
      alert('¡Formulario enviado exitosamente!');
      console.log('Datos del formulario:', formData);
      
      // Limpiar formulario
      setFormData({
        nombre: '',
        correo: '',
        contraseña: ''
      });
      setTouched({
        nombre: false,
        correo: false,
        contraseña: false
      });
      setErrors({
        nombre: '',
        correo: '',
        contraseña: ''
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h3 className="mb-0">Registro de Usuario</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* Campo Nombre */}
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      touched.nombre ? (errors.nombre ? 'is-invalid' : 'is-valid') : ''
                    }`}
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Ingresa tu nombre completo"
                  />
                  {errors.nombre && (
                    <div className="invalid-feedback">
                      {errors.nombre}
                    </div>
                  )}
                </div>

                {/* Campo Correo */}
                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      touched.correo ? (errors.correo ? 'is-invalid' : 'is-valid') : ''
                    }`}
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="ejemplo@correo.com"
                  />
                  {errors.correo && (
                    <div className="invalid-feedback">
                      {errors.correo}
                    </div>
                  )}
                </div>

                {/* Campo Contraseña */}
                <div className="mb-3">
                  <label htmlFor="contraseña" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className={`form-control ${
                      touched.contraseña ? (errors.contraseña ? 'is-invalid' : 'is-valid') : ''
                    }`}
                    id="contraseña"
                    name="contraseña"
                    value={formData.contraseña}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Mínimo 8 caracteres"
                  />
                  {errors.contraseña && (
                    <div className="invalid-feedback">
                      {errors.contraseña}
                    </div>
                  )}
                  <div className="form-text">
                    La contraseña debe tener al menos 8 caracteres
                  </div>
                </div>

                {/* Botón de envío */}
                <div className="d-grid">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg"
                  >
                    Registrarse
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Información del estado actual */}
          <div className="mt-4 p-3 bg-light rounded">
            <h6>Estado del formulario (para desarrollo):</h6>
            <small className="text-muted">
              <strong>Nombre válido:</strong> {touched.nombre && !errors.nombre ? '✅' : '❌'}<br/>
              <strong>Correo válido:</strong> {touched.correo && !errors.correo ? '✅' : '❌'}<br/>
              <strong>Contraseña válida:</strong> {touched.contraseña && !errors.contraseña ? '✅' : '❌'}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
