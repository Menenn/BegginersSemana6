//Máscara de validação do RG
function mascara(t, mask) {
    var i = t.value.length;
    var saida = mask.substring(1, 0);
    var texto = mask.substring(i)
    if (texto.substring(0, 1) != saida) {
        t.value += texto.substring(0, 1);
    }
}

function validarrg() {
    var rg = document.getElementById("rg");

    if (rg.value.length == 12) {
        alert("RG Válido!")
    } else {
        alert("RG Inválido!")
    }
}

//Verifica o campo do CPF se está válido ou não
function ValidaCPF() {
    var cpf = document.getElementById("cpf").value;
    var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
    if (cpfValido.test(cpf) == true) {
        alert("CPF Válido");
    } else {
        alert("CPF Inválido");
    }
}

function validarcep() {
    var cep = document.getElementById("cep");

    if (cep.value.length == 9) {
        alert("CEP Válido!")
    } else {
        alert("CEP Inválido!")
    }
}

function fMasc(objeto, mascara) {
    obj = objeto
    masc = mascara
    setTimeout("fMascEx()", 1)
}

function fMascEx() {
    obj.value = masc(obj.value)
}

function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf
}

//Pega o número do CEP e completa os outros campos
function getDadosEnderecoCEP(cep) {

    let xhr = new XMLHttpRequest()

    let url = 'https://viacep.com.br/ws/' + cep + '/json/unicode/'

    xhr.open('GET', url, true)

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
            let dadosJSONText = xhr.responseText
            let dadosJSONObj = JSON.parse(dadosJSONText)

                document.getElementById('rua').value = dadosJSONObj.logradouro
                document.getElementById('bairro').value = dadosJSONObj.bairro
                document.getElementById('cidade').value = dadosJSONObj.localidade
                document.getElementById('estado').value = dadosJSONObj.uf
            }
        }
    }
    xhr.send();
}

function checarcampos(){
    var nome = document.getElementById('nome').value
    var cpf = document.getElementById('cpf').value
    var rg = document.getElementById('rg').value
    var datanasc = document.getElementById('datanasc').value
    var tipocnh = document.getElementById('tipocnh').value
    var estadocivil = document.getElementById('estadocivil').value
    var cep = document.getElementById('cep').value
    var numero = document.getElementById('num').value

    var soma = 0;

    if(nome == ""){
        alert('Por favor, complete o campo Nome corretamente')
    }else{
        soma += 1;
    }

    if(cpf == ""){
        alert('Por favor, complete o campo CPF corretamente')
    }else{
        soma += 1;
    }

    if(rg == ""){
        alert('Por favor, complete o campo RG corretamente')
    }else{
        soma += 1;
    }

    if(datanasc == ""){
        alert('Por favor, complete o campo Data de Nascimento corretamente')
    }else{
        soma += 1;
    }

    if(tipocnh == ""){
        alert('Por favor, complete o campo Tipo CNH corretamente')
    }else{
        soma += 1;
    }

    if(estadocivil == ""){
        alert('Por favor, complete o campo Estado Civil corretamente')
    }else{
        soma += 1;
    }

    if(cep == ""){
        alert('Por favor, complete o campo CEP corretamente')
    }else{
        soma += 1;
    }

    if(numero == ""){
        alert('Por favor, complete o campo Numero corretamente')
    }else{
        soma += 1;
    }

    if (soma == 8){
        alert('Funcionario registrado com sucesso! Pressione OK para registrar um novo funcionário')
        window.location.reload();
    }
}