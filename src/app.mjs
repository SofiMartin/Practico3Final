import express from 'express';
import { connect } from './config/dbconfig.mjs';
import SuperHeroRoutes from './routes/SuperHeroRoutes.mjs';

const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Conexión a MongoDB
connect();

// Configuración de rutas
app.use('/api', SuperHeroRoutes);

// Manejo de errores para rutas no encontradas
app.use((_req,res)=>{
    res.status(404).send({mensaje: "Ruta no encontrada"});
});

// Iniciar el servidor
app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})