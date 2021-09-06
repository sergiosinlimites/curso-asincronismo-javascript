// a partir de aqui se usa ES6

const smthWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Done!');
        } else {
            reject('Ups');
        }
    })
};

smthWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const smthWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('Whoops!'); // si aplicamos esto en lugar del típico reject("Whoops") nos va a dar más información sobre el cómo se produjo el error.
            reject(error);
        }
    })
}

smthWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

Promise.all([smthWillHappen(), smthWillHappen2()])
    .then(response => console.log('Array of results', response))
    .catch(err => console.error(err));

    