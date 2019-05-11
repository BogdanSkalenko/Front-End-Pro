const mainObj = {
    name: 'Bogdan',
    age: '29',
    adress: {
        country: 'UA',
        city: 'Dnipro'
    }
};

function clone(obj) {
    let newObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if(typeof obj[key] === "object"){
            newObj[key] = clone(obj[key]);
        }else{
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

const objCopy = clone(mainObj);

objCopy.name = 'Alex';
objCopy.age = '33';
objCopy.adress.city = 'Kiev';

console.log(mainObj);
console.log(objCopy);