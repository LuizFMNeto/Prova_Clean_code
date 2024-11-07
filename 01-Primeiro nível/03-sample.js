let data1 = "2024-01-01";
let data2 = "2024-12-31";

function calculaDiferencaDeData(data1, data2) {
    return new Date(data2) - new Date(data1);
}

let diferencaDeDatas = calculaDiferencaDeData(data1, data2);
console.log(diferencaDeDatas);
