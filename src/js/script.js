const button = document.getElementById('button_submit')

const computerModel = document.getElementById('computer-model')
const clienteName = document.getElementById('client-name')
const phoneNumber = document.getElementById('phone-number')
const waningModel = document.getElementById('warning-model')
const clienteRequirement = document.getElementById('client-requirement')


button.addEventListener('click', ()=>{
    if(computerModel.value.lenght == 0){
        alert(`
            Nome do cliente: ${clienteName.value}
            Número do cliente: ${phoneNumber.value}
            Avisos: ${waningModel.value}
            Requisitos do cliente: ${clienteRequirement.value}
            `)
    } else{
        alert(`
            Modelo do computador: ${computerModel.value}
            Nome do cliente: ${clienteName.value}
            Número do cliente: ${phoneNumber.value}
            Avisos: ${waningModel.value}
            Requisitos do cliente: ${clienteRequirement.value}
            `)
    }
    
})