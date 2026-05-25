/*
    Crie uma lista de pacientes

    Cada paciente deverá conter
        nome
        idade
        peso
        altura

    Esvreva uma lista contendo o nome dos pacientes
*/

// const patients = [
//     {
//         name: "Luiz",
//         age: 20,
//         weight: 100,
//         height: 190,
//     },
//     {
//         name: "Alexandra",
//         age: 27,
//         weight: 70,
//         height: 170,
//     },
//     {
//         name: "Carlos",
//         age: 42,
//         weight: 90,
//         height: 180,
//     },
// ]

// let patientsNames = []

// for(let patient of patients) {
//     patientsNames.push(patient.name)
// }

// alert(patientsNames)

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

let patientsNames = []

for(let patient of patients) {

    let article = patient.sex == "male"
        ? "O paciente"
        : "A paciente"

        let message = `${article} ${patient.name} tem ${patient.age} anos, pesa ${patient.weight} kgs e tem ${patient.height} cms de altura`
             
        patientsNames.push(message)


    // if(patient.sex == "male") {
    //     let message = `O paciente ${patient.name} tem ${patient.age} anos, pesa ${patient.weight} kgs e tem ${patient.height} cms de altura`
    //     patientsNames.push(message)
    // } else {
    //     let message = `A paciente ${patient.name} tem ${patient.age} anos, pesa ${patient.weight} kgs e tem ${patient.height} cms de altura`
    //     patientsNames.push(message)
    // }  
   
}

alert(patientsNames.join("\n"))

// let patientsAge = []
// let patientsWeight = []
// let patientsHeight = []


//  patientsAge.push(patient.age)
//  patientsWeight.push(patient.weight)
//  patientsHeight.push(patient.height)

//terminar a lista do alert certo



