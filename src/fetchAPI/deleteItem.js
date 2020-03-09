export default function deleteItem (para){
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3001/items/' + para;
        console.log(`thông tin file url trong deleteItem.js: ${url}`);
        fetch(url, {
            method: 'DELETE',
            headers: {"Content-type":"application/json"},

        })
        .then((response) => response.json())
        .then((res) => {
            resolve(res);
           console.log(res);
        })
        .catch((error) => {
            reject(error);
        });
    });
}