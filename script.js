//Verificar si es número entero
function VNE(a){
    if(Number.isInteger(a)){
        return true
    }
    else{
        alert('Ingrese un número entero por favor')
        return false
    }
}

//Verificar si es número
function VN(a){
    if(!isNaN(a)){
        return true
    }
    else{
        alert('Ingrese un número por favor')
        return false
    }
}

function P1(){
    document.querySelector('#R1').innerHTML= " ";
    let varo = +prompt('Ingrese el número de hombres');
    if(!VNE(varo)){return false}
    let muje = +prompt('Ingrese el número de mujeres');
    if(!VNE(muje)){return false};
    let total = varo + muje;
    varo = (varo/total)*100;
    varo = varo.toFixed(2);
    muje = (muje/total)*100;
    muje = muje.toFixed(2);
    document.getElementById("R1").textContent = `Respuesta: El porcentaje de HOMBRES es del ${varo}% mientras que el de MUJERES es del ${muje}%.`;
}

function P2(){
    document.querySelector('#R2').innerHTML= " ";
    let presu = +prompt('Ingrese el valor del presupuesto');
    if(!VN(presu)){return false};
    presu = presu.toFixed(2);
    let lm = +((presu*35)/100).toFixed(2);
    let ac = +((presu*25)/100).toFixed(2);
    let ju = +((presu*10)/100).toFixed(2);
    let av = +((presu*15)/100).toFixed(2);
    let tc = presu - (lm + ac + ju + av);
    document.getElementById("R2").textContent = `Respuesta: La Mar -> S/${lm} | Abancay -> S/${ac} | 28 de julio -> S/${ju} | Aviación -> S/${av} | Tacna -> S/${tc}`
}

function P3(){
    document.querySelector('#R3').innerHTML= " ";
    let eg = +prompt('Ingrese la cantidad de entradas GENERALES vendidas');
    if(!VNE(eg)){return false};
    let m65 = +prompt('Ingrese la cantidad de entradas PARA MAYORES DE 65 vendidas');
    if(!VNE(m65)){return false};
    let em = +prompt('Ingrese la cantidad de entradas PARA MENORES DE EDAD vendidas');
    if(!VNE(em)){return false};
    eg = eg * 150;
    m65 = m65 * 50;
    em = em * 80;
    let total = eg + m65 + em;
    document.querySelector('#R3').innerHTML= `Respuesta: En entradas GENERALES se generó ${eg} soles ; en entradas PARA MAYORES DE 65 ${m65} soles ; en entradas PARA MENORES DE EDAD ${em} soles. Teniendo así un TOTAL de ${total} soles.`
}