import React from 'react';
import { useUserStore } from '../../context/guardarIdYRol';
import { useNavigate } from "react-router-dom";
import { LOGINPAGE } from '../../routes/rutas';
import '../../styles/Header.css'; 

const HeaderAlumnos = () => {
  const { limpiarUsuario } = useUserStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    limpiarUsuario();
    localStorage.removeItem("usuario");
    navigate(LOGINPAGE);
  };

  const handleLogoClick = () => {
    navigate(-1); // Retrocede a la página anterior
  };

  return (
    <header className="header-alumno">
      <div className="logo-alumno-container">
        <div className="logo-alumno" onClick={handleLogoClick} style={{ cursor: 'pointer' }} />
        <a onClick={handleLogoClick} className="inicio-link">Ir al inicio</a>
      </div>

      <div className="titulo-container">
        <p className="titulo-header">SmartLab Educación Digital</p>
      </div>

      <div className="logout-container">
        <button className="logout-btn" onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </header>

  );
};

export default HeaderAlumnos;
