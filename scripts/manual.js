const heightManual = document.getElementById('height__manual');
const widthManual = document.getElementById('width__manual');
const thicknessManual = document.getElementById('thickness__manual');
const densityManual = document.getElementById('density__manual');
const relationPoliolManual = document.getElementById('relation__poliol__manual');
const relationIsoManual = document.getElementById('relation__iso__manual');

const arrayInfosManual = [heightManual, widthManual, thicknessManual, densityManual, relationIsoManual, relationPoliolManual];

const pesoTotalQuiloManual = document.getElementById('massa__total--quilo__manual');
const pesoTotalGramaManual = document.getElementById('massa__total--grama__manual');
const pesoPoliolQuiloManual = document.getElementById('massa__poliol--quilo__manual');
const pesoPoliolGramaManual = document.getElementById('massa__poliol--grama__manual');
const pesoIsoQuiloManual = document.getElementById('massa__mdi--quilo__manual');
const pesoIsoGramaManual = document.getElementById('massa__mdi--grama__manual');

const btnCalculateManual = document.getElementById('calculate__manual');
const btnClearManual = document.getElementById('clear__manual');


function calculateMassaTotalManual(){
    let heightMts = transformInMetersManual(parseInt(heightManual.value));
    let widthMts = transformInMetersManual(parseInt(widthManual.value));
    let thicknessMts = transformInMetersManual(parseInt(thicknessManual.value));

    let massaTotal = (heightMts * widthMts * thicknessMts * parseInt(densityManual.textContent)).toFixed(3);

    return massaTotal;
}

function MassaTotalManual(){
    pesoTotalQuiloManual.textContent = calculateMassaTotalManual().replace(".", ",");
    pesoTotalGramaManual.textContent = (calculateMassaTotalManual() * 1000).toLocaleString('pt-Br');
}

function MassaPoliolManual(){
    let massaPoliolTotal = calculateRelationManual(relationPoliolManual.value) * calculateMassaTotalManual();
    let massaPoliolGrama = Math.round(massaPoliolTotal * 1000);

    pesoPoliolQuiloManual.textContent = massaPoliolTotal.toLocaleString('pt-Br');
    pesoPoliolGramaManual.textContent = massaPoliolGrama.toLocaleString('pt-Br');
}

function MassaIsoManual(){
    let massaIsoTotal = calculateRelationManual(relationIsoManual.value) * calculateMassaTotalManual();
    let massaIsoGrama = Math.round(massaIsoTotal * 1000);

    pesoIsoQuiloManual.textContent = massaIsoTotal.toLocaleString('pt-Br');
    pesoIsoGramaManual.textContent = massaIsoGrama.toLocaleString('pt-Br');
}

function calculateRelationManual(relation){
    let relationTotal = parseFloat(relationPoliolManual.value) + parseFloat(relationIsoManual.value);

    return (relation / relationTotal);
}

function transformInMetersManual(value){
    return value / 1000;
}

function clearFieldsManual(){
    heightManual.value = '';
    widthManual.value = '';

    pesoTotalQuiloManual.textContent = '';
    pesoTotalGramaManual.textContent = '';
    pesoPoliolQuiloManual.textContent = '';
    pesoPoliolGramaManual.textContent = '';
    pesoIsoQuiloManual.textContent = '';
    pesoIsoGramaManual.textContent = '';
}

document.addEventListener("DOMContentLoaded", function() {

    btnCalculateManual.addEventListener('click', function(){
        MassaTotalManual();
        MassaPoliolManual();
        MassaIsoManual();
    });

    btnClearManual.addEventListener('click', function(){
        clearFieldsManual();
    })
});