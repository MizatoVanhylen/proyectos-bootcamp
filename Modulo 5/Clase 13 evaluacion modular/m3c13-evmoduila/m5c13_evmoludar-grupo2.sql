CREATE DATABASE m5c13_ev_modular;

\c m5c13_ev_modular;

-- Creación de tablas

CREATE TABLE dueño (
  id_dueño SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  direccion VARCHAR(200),
  telefono VARCHAR(20)
);

CREATE TABLE profesional (
  id_profesional SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  especialidad VARCHAR(100)
);

CREATE TABLE mascota (
  id_mascota SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  tipo VARCHAR(50),
  fecha_nacimiento DATE,
  id_dueño INT,
  CONSTRAINT fk_dueño
  FOREIGN KEY (id_dueño)
  REFERENCES dueño(id_dueño)
  ON DELETE CASCADE
);

CREATE TABLE atencion (
  id_atencion SERIAL PRIMARY KEY,
  fecha_atencion DATE,
  descripcion TEXT,
  id_mascota INT,
  id_profesional INT,
  CONSTRAINT fk_mascota
  FOREIGN KEY (id_mascota)
  REFERENCES mascota(id_mascota),
  CONSTRAINT fk_profesional
  FOREIGN KEY (id_profesional)
  REFERENCES profesional(id_profesional)
  );

-- Inserción de datos

INSERT INTO dueño (nombre, direccion, telefono)VALUES
('Juan Pérez','Calle Falsa 123', '555-1234'),
('Ana Gómez','Avenida Siempre Viva 456', '555-5678'),
('Carlos Ruiz','Calle 8 de Octubre 789', '555-8765');

INSERT INTO mascota (nombre, tipo, fecha_nacimiento, id_dueño)VALUES
('Rex','PERRO', '2020-05-10',1),
('Luna','Gato', '2019-02-20',2),
('Fido','Perro', '2021-03-15',3);

INSERT INTO profesiona(nombre,especialidad)VALUES
('Dr. Martínez','Veterinario'),
('Dr. Perez','Especialista en dermatología'),
('Dr. López','Cardiólogo veterinario');

INSERT INTO atencion(fecha_atencion, descripcion, id_mascota,id_profecional)VALUES
('2025-03-01','Chequeo general',1,1),
('2025-03-05','Tratamiento dermatológico',2,2),
('2025-03-07','Consulta cardiológica',3,3);

-- Consultas
-- 1.- Obtener todos los dueños y sus mascotas

SELECT 
  dueño.nombre AS nombre_dueño,
  mascota.nombre AS nombre_mascota
FROM dueño
JOIN mascota ON dueño.id_dueño = mascota.id_mascota;

-- 2.-	Obtener las atenciones realizadas a las mascotas con los detalles del profesional que la atendió.

SELECT
  mascota.nombre AS nombre_mascota,
  profesional.nombre AS nombre_profesional,
  atencion.descripcion AS descripcion_atencion
FROM atencion
JOIN mascota ON atencion.id_mascota = mascota.id_mascota
JOIN profesional ON atencion.id_profesional = profesional.id_profesional;

-- 3.- Contar la cantidad de atenciones por profesional:

SELECT 
  profesional.nombre AS nombre_profesional,
  COUNT(atencion.id_atencion) AS total_atenciones
FROM profesional
LEFT JOIN atencion ON profesional.id_profesional = atencion.id_profesional
GROUP BY profesional.nombre;

-- 4.-	Actualizar la dirección de un dueño.

