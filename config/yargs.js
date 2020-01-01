const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca la tarea como completada o pendiente'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea', opts)
    .command('listar', 'Lista todas las tareas')
    .command('actualizar', 'Actualiza una tarea', opts)
    .command('borrar', 'Borra una tarea', opts)
    .help()
    .argv;

module.exports = {
    argv
}