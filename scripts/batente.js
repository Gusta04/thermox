const heightBatente = document.getElementById('height__batente');
const widthBatente = document.getElementById('width__batente');
const typeBatente = document.getElementById('type__batente');
const densityBatente = document.getElementById('density__batente');
const relationPoliolBatente = document.getElementById('relation__poliol__batente');
const relationIsoBatente = document.getElementById('relation__iso__batente');

const arrayInfosBatente = [heightBatente, widthBatente, typeBatente, densityBatente, relationIsoBatente, relationPoliolBatente];

const pesoTotalQuiloBatente = document.getElementById('massa__total--quilo__batente');
const pesoTotalGramaBatente = document.getElementById('massa__total--grama__batente');
const pesoPoliolQuiloBatente = document.getElementById('massa__poliol--quilo__batente');
const pesoPoliolGramaBatente = document.getElementById('massa__poliol--grama__batente');
const pesoIsoQuiloBatente = document.getElementById('massa__mdi--quilo__batente');
const pesoIsoGramaBatente = document.getElementById('massa__mdi--grama__batente');

const btnCalculateBatente = document.getElementById('calculate__batente');
const btnClearBatente = document.getElementById('clear__batente');


function calculateHeightBatente(){
    let heightMts = transformInMetersBatente(parseInt(heightBatente.value));

    if(typeBatente.value == 3){
        heightMts += 0.15;
    }else{
        heightMts += 0.2;
    }

    return (heightMts * 2);
}

function calculateWidthBatente(){
    let widthMts = transformInMetersBatente(parseInt(widthBatente.value));

    if(typeBatente.value == 4){
        widthMts *= 2;
    }

    return widthMts;
}

function calculateMassaTotalBatente(){
    let lenghtBatente = calculateHeightBatente() + calculateWidthBatente();

    console.log(lenghtBatente);
    let massaTotal = (lenghtBatente * 0.10 * 0.045 * parseInt(densityBatente.value)).toFixed(3);

    return massaTotal;
}

function MassaTotalBatente(){
    pesoTotalQuiloBatente.textContent = calculateMassaTotalBatente().replace(".", ",");
    pesoTotalGramaBatente.textContent = (calculateMassaTotalBatente() * 1000).toLocaleString('pt-Br');
}

function MassaPoliolBatente(){
    let massaPoliolTotal = calculateRelationBatente(relationPoliolBatente.value) * calculateMassaTotalBatente();
    let massaPoliolGrama = Math.round(massaPoliolTotal * 1000);

    pesoPoliolQuiloBatente.textContent = massaPoliolTotal.toLocaleString('pt-Br');
    pesoPoliolGramaBatente.textContent = massaPoliolGrama.toLocaleString('pt-Br');
}

function MassaIsoBatente(){
    let massaIsoTotal = calculateRelationBatente(relationIsoBatente.value) * calculateMassaTotalBatente();
    let massaIsoGrama = Math.round(massaIsoTotal * 1000);

    pesoIsoQuiloBatente.textContent = massaIsoTotal.toLocaleString('pt-Br');
    pesoIsoGramaBatente.textContent = massaIsoGrama.toLocaleString('pt-Br');
}

function calculateRelationBatente(relation){
    let relationTotal = parseFloat(relationPoliolBatente.value) + parseFloat(relationIsoBatente.value);

    return (relation / relationTotal);
}

function transformInMetersBatente(value){
    return value / 1000;
}

function clearFieldsBatente(){
    heightBatente.value = '';
    widthBatente.value = '';

    pesoTotalQuiloBatente.textContent = '';
    pesoTotalGramaBatente.textContent = '';
    pesoPoliolQuiloBatente.textContent = '';
    pesoPoliolGramaBatente.textContent = '';
    pesoIsoQuiloBatente.textContent = '';
    pesoIsoGramaBatente.textContent = '';
}

document.addEventListener("DOMContentLoaded", function() {

    btnCalculateBatente.addEventListener('click', function(){
        MassaTotalBatente();
        MassaPoliolBatente();
        MassaIsoBatente();
    });

    btnClearBatente.addEventListener('click', function(){
        clearFieldsBatente();
    })
});