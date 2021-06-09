-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-06-2021 a las 02:22:35
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba_muelitas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `documento` varchar(100) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `estado` enum('Activo','Desactivado') NOT NULL,
  `created_ad` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `documento`, `nombre`, `direccion`, `telefono`, `email`, `estado`, `created_ad`) VALUES
(1, '1140901894', 'Erick Fernando Alarcon Duran ', 'Cll46g Crr1E', '3232853878', 'erickfernando_20@hotmail.com', 'Desactivado', '2021-06-08 20:08:19'),
(3, '11', 'er', 'ss', '3232853878', 'erewrew', 'Activo', '2021-06-08 21:01:50'),
(4, '1140901894', 'Erick Duran', 'Estadio Metropolitano', '3232853878', 'erickfernando_20@hotmail.com', 'Activo', '2021-06-08 21:32:35'),
(5, '99032313627', 'fer alarcon', 'Estadio Metropolitano', '3232853878', 'erickpufi@gmail.com ', 'Desactivado', '2021-06-08 21:49:35'),
(6, '123456789', 'German Mesa De las Torres', 'Bucaramanga', '3232853878', 'german@gmail.com', 'Activo', '2021-06-09 00:03:49');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
