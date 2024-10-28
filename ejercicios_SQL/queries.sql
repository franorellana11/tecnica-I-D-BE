-- Mostrar los nombres de los empleados ordenados alfabéticamente (Z...A) 

SELECT nombres
FROM Empleados
ORDER BY nombres DESC;


-- Seleccionar el nombre, el puesto y la localidad donde trabajan los empleados con puesto de ‘Soporte’.


SELECT 
    e.nombres AS nombre_empleado,
    p.puesto AS nombre_puesto,
    l.localidad AS localidad_trabajo
FROM 
    empleados e
JOIN 
    puestos p ON e.puesto_id = p.puesto_id
JOIN 
    departamentos d ON e.departamento_id = d.departamentos_id
JOIN 
    localidades l ON d.localidad = l.localidades_id
WHERE 
    p.puesto = 'Soporte';


-- Listar los nombres de los empleados cuyo nombre termine con la letra ‘o’.

SELECT 
    nombres 
FROM 
    empleados 
WHERE 
    nombres LIKE '%o';


-- Seleccionar el nombre, el puesto y sueldo de los empleados que trabajan en la localidad Carlos Paz.


SELECT 
    e.nombres AS nombre_empleado,
    p.puesto AS nombre_puesto,
    e.sueldo AS sueldo_empleado
FROM 
    empleados e
JOIN 
    puestos p ON e.puesto_id = p.puesto_id
JOIN 
    departamentos d ON e.departamento_id = d.departamentos_id
JOIN 
    localidades l ON d.localidad = l.localidades_id
WHERE 
    l.localidad = 'Carlos Paz';


-- Seleccionar el nombre, sueldo y localidad donde trabajan de los empleados que tengan un sueldo entre 10000 y 13000.


SELECT 
    e.nombres AS nombre_empleado,
    e.sueldo AS sueldo_empleado,
    l.localidad AS localidad_trabajo
FROM 
    empleados e
JOIN 
    departamentos d ON e.departamento_id = d.departamentos_id
JOIN 
    localidades l ON d.localidad = l.localidades_id
WHERE 
    e.sueldo BETWEEN 10000 AND 13000;



-- Visualizar los departamentos con más de 5 empleados


SELECT 
    d.denominacion AS nombre_departamento,
    COUNT(e.empleado_id) AS total_empleados
FROM 
    departamentos d
JOIN 
    empleados e ON d.departamentos_id = e.departamento_id
GROUP BY 
    d.denominacion
HAVING 
    COUNT(e.empleado_id) > 5;



-- Nombre de los empleados que trabajan en Córdoba y cuyo puesto sea ‘Analista’ o ‘Programador’.


SELECT 
    e.nombres AS nombre_empleado
FROM 
    empleados e
JOIN 
    puestos p ON e.puesto_id = p.puesto_id
JOIN 
    departamentos d ON e.departamento_id = d.departamentos_id
JOIN 
    localidades l ON d.localidad = l.localidades_id
WHERE 
    l.localidad = 'Córdoba'
    AND (p.puesto = 'Analista' OR p.puesto = 'Programador');



-- Calcula el sueldo medio de todos los empleados.

SELECT 
    AVG(sueldo) AS sueldo_medio
FROM 
    empleados;


-- ¿Cuál es el máximo sueldo de los empleados del departamento 10?


SELECT 
    MAX(sueldo) AS sueldo_maximo
FROM 
    empleados
WHERE 
    departamento_id = 10;


-- Calcula el sueldo mínimo de los empleados del departamento ‘Soporte’.



SELECT 
    MIN(e.sueldo) AS sueldo_minimo
FROM 
    empleados e
JOIN 
    departamentos d ON e.departamento_id = d.departamentos_id
WHERE 
    d.denominacion = 'Soporte';


-- Para cada puesto obtener la suma de sueldos.


SELECT 
    p.puesto AS nombre_puesto,
    SUM(e.sueldo) AS suma_sueldos
FROM 
    empleados e
JOIN 
    puestos p ON e.puesto_id = p.puesto_id
GROUP BY 
    p.puesto;






