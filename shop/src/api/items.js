export function getItems() {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:3001/item')
        .then(result => {
            return result.json()
        })
        .then(items => {
            resolve(items);
        })
        .catch(err => {
            reject(err);
        })
    })
}
export function getItem(id) {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:3001/item?id=${id}`)
        .then(result => {
            return result.json()
        })
        .then(items => {
            resolve(items);
        })
        .catch(err => {
            reject(err);
        })
    })
}