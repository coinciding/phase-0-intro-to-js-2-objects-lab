// Write your solution in this file!
const employee = {
    name: "Justin", 
    streetAddress: "123 Justin Drive",
};

function updateEmployeeWithKeyAndValue(object, key, value) {
    // const newObj = {...object};
    // newObj[key] = value;
    // return newObj;

    // -----REFACTORED-----
    return {
        ...object,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    object[key] = value;
    return object;
}

function deleteFromEmployeeByKey(object, key) {
    const newObj = {...object};
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key];
    return object;
}