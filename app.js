const argv = require('./conf/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


const comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then(datos => {
            console.log(datos);
        }).catch(error => console.log(error));
        break;
    case 'crear':
        crearArchivo(argv.base).then(archivo => {
            console.log(`Archivo creado ${archivo}`);
        }).catch((error) => console.log(error));
        break;
    default:
        console.log('Comando no reconocido');
}

//console.log(argv.limite);