/*
    Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

    "Paciente X possui o IMC de : Y"

    Onde X é o nome do paciente e Y é o IMC desse paciente

    Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

const patients = [
    {
        name: "Renato",
        sex: "male",
        age: 38,
        weight: 74,
        height: 168,
    },
    {
        name: "Jéssica",
        sex: "female",
        age: 38,
        weight: 100,
        height: 170,
    },
    {
        name: "Alice",
        sex: "female",
        age: 10,
        weight: 35,
        height: 135,
    },
]

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {

    let article = patient.sex == "male"
    ? "O paciente"
    : "A paciente"    

    return `${article} ${patient.name} possui o IMC de : ${IMC(patient.weight, patient.height)}`
}

for (let patient of patients) {
    let IMCmessege = printPatientIMC(patient)
    alert(IMCmessege)
}