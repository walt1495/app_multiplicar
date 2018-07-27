const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`Base ingresado ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`Limite ingresado ${limite} no es un número`);
            return;
        }

        let datos = '';
        for (let i = 0; i <= limite; i++) {
            datos += `${base} * ${i} = ${base * i}\n`;
        }

        resolve(datos);

    });
};


let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`Base ingresado ${base} no es un número`);
            return
        }
        let data = '';
        for (let i = 0; i <= 10; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }
        fs.writeFile(`archivos/tabla-${base}.txt`, data, (error) => {
            if (error) {
                reject(error);
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};