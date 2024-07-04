/**
 * CONFIGURAR RUTAS Y CONEXION BD, ENTRE OTRAS COSAS DEL SERVICIO
 */

import express, { Application } from 'express';

import pacienteRoutes from './routes/pacienteRoutes';

import medicoRoutes from './routes/medicoRoutes';

import servicioRoutes from './routes/servicioRoutes';

import citaRoutes from './routes/citaRoutes';

// import carreraRoutes from './routes/carreraRoutes';



const app: Application = express();

//Database

//Midlewares
app.use(express.json());

//Routes
app.use('/api/v1/paciente',pacienteRoutes);

app.use('/api/v1/medico',medicoRoutes);

app.use('/api/v1/servicio',servicioRoutes);

app.use('/api/v1/cita',citaRoutes);

// app.use('/api/v1/carrera',carreraRoutes);

export default app;
