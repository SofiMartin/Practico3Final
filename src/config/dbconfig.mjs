import mongoose from 'mongoose';

// Conexión a MongoDB
export async function connect() {
    try {
        await mongoose.connect('mongodb+srv://grupo-02:grupo02@cursadanodejs.ls9ii.mongodb.net/Node-js', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexión exitosa a MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);

        process.exit(1);
    }
}
