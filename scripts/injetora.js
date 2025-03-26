const height = document.getElementById('height');
const width = document.getElementById('width');
const thickness = document.getElementById('thickness');
const density = document.getElementById('density');
const relationPoliol = document.getElementById('relation__poliol');
const relationIso = document.getElementById('relation__iso');
const vazao = document.getElementById('vazao');

const arrayInfos = [height, width, thickness, density, relationIso, relationPoliol, vazao];

const pesoTotalQuilo = document.getElementById('massa__total--quilo');
const pesoTotalGrama = document.getElementById('massa__total--grama');
const pesoPoliolQuilo = document.getElementById('massa__poliol--quilo');
const pesoPoliolGrama = document.getElementById('massa__poliol--grama');
const pesoIsoQuilo = document.getElementById('massa__mdi--quilo');
const pesoIsoGrama = document.getElementById('massa__mdi--grama');

const btnCalculate = document.getElementById('calculate');
const btnClear = document.getElementById('clear');

const segundosInjection = document.getElementById('time-injection');

function calculateMassaTotal(){
    let heightMts = transformInMeters(parseInt(height.value));
    let widthMts = transformInMeters(parseInt(width.value));
    let thicknessMts = transformInMeters(parseInt(thickness.value));

    let massaTotal = (heightMts * widthMts * thicknessMts * parseInt(density.textContent)).toFixed(3);

    return massaTotal;
}

function MassaTotal(){
    pesoTotalQuilo.textContent = calculateMassaTotal().replace(".", ",");
    pesoTotalGrama.textContent = (calculateMassaTotal() * 1000).toLocaleString('pt-Br');
}

function MassaPoliol(){
    let massaPoliolTotal = calculateRelation(relationPoliol.value) * calculateMassaTotal();
    let massaPoliolGrama = Math.round(massaPoliolTotal * 1000);

    pesoPoliolQuilo.textContent = massaPoliolTotal.toLocaleString('pt-Br');
    pesoPoliolGrama.textContent = massaPoliolGrama.toLocaleString('pt-Br');
}

function MassaIso(){
    let massaIsoTotal = calculateRelation(relationIso.value) * calculateMassaTotal();
    let massaIsoGrama = Math.round(massaIsoTotal * 1000);

    pesoIsoQuilo.textContent = massaIsoTotal.toLocaleString('pt-Br');
    pesoIsoGrama.textContent = massaIsoGrama.toLocaleString('pt-Br');
}

function calculateRelation(relation){
    let relationTotal = parseFloat(relationPoliol.value) + parseFloat(relationIso.value);

    return (relation / relationTotal);
}

function calculateSecondsInjection(){
    let seconds = calculateMassaTotal() / (parseFloat(vazao.value) / 1000);

    segundosInjection.textContent = seconds.toFixed(2).replace(".", ",");
}

function transformInMeters(value){
    return value / 1000;
}

function clearFields(){
    height.value = '';
    width.value = '';
    vazao.value = '';

    pesoTotalQuilo.textContent = '';
    pesoTotalGrama.textContent = '';
    pesoPoliolQuilo.textContent = '';
    pesoPoliolGrama.textContent = '';
    pesoIsoQuilo.textContent = '';
    pesoIsoGrama.textContent = '';
    segundosInjection.textContent = '';
}

document.addEventListener("DOMContentLoaded", function() {

    btnCalculate.addEventListener('click', function(){
        MassaTotal();
        MassaPoliol();
        MassaIso();
        calculateSecondsInjection();
    });

    btnClear.addEventListener('click', function(){
        clearFields();
    })
});