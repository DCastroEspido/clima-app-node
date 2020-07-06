const clima = require('./clima/clima');
const argv = require('yargs').options({
	direccion: {
		alias: 'd',
		desc: 'Dirección de la ciudad para obtener el tiempo',
		demand: true,
	},
}).argv;
console.log(`Buscando el tiempo de: ${argv.direccion}`);

clima
	.getClima(argv.direccion)
	.then((resp) => {
		console.log(`La temperatura en ${argv.direccion} es de ${resp}ºC`);
	})
	.catch((err) => {
        console.log('No se puede determinar el clima de ', argv.direccion)
        if (err.response && err.response.status){
        console.log('ERROR ',err.response.status);
        }else{
            console.log('Unhandled error: ',err);
        }
	});
