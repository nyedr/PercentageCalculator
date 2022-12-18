function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

function formatNum(num) {
    num % 1 != 0 ? num.toFixed(2) : num
    num > 999 ? numberWithCommas(num) : num
    return num
}

document.getElementById("calculateOne").onclick = function(){
    percentOfNum = +document.getElementById("percentOfNum").value;
    numPercent = +document.getElementById("numPercent").value;
    
    resultOne = (percentOfNum/100)*numPercent

    document.getElementById("resultOne").value = formatNum(resultOne);
}

document.getElementById("calculateTwo").onclick = function(){
    whatPercent = +document.getElementById("whatPercent").value;
    percentOfNum = +document.getElementById("percentNum").value;

    resultTwo = (whatPercent/percentOfNum)*100

    document.getElementById("resultTwo").value = formatNum(resultTwo);
}

document.getElementById("calculateThree").onclick = function(){
    from = +document.getElementById("from").value;
    to = +document.getElementById("to").value;

    resultThree = ((to-from)/from)*100

    document.getElementById("resultThree").value = formatNum(resultThree);
}
