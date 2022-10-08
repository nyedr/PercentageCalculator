function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

document.getElementById("calculateOne").onclick = function(){
    percentOfNum = document.getElementById("percentOfNum").value;
    numPercent = document.getElementById("numPercent").value;

    percentOfNum = Number(percentOfNum)
    numPercent = Number(numPercent)

    resultOne = (percentOfNum/100)*numPercent

    if (resultOne%1 != 0){
        resultOne = resultOne.toFixed(2)
    }

    if (resultOne > 999){
        resultOne = numberWithCommas(resultOne)
    }

    document.getElementById("resultOne").value = resultOne;
}

document.getElementById("calculateTwo").onclick = function(){
    whatPercent = document.getElementById("whatPercent").value;
    percentOfNum = document.getElementById("percentNum").value;

    whatPercent = Number(whatPercent)
    percentOfNum = Number(percentOfNum)

    resultTwo = (whatPercent/percentOfNum)*100

    if (resultTwo%1 != 0){
        resultTwo = resultTwo.toFixed(2)
    }

    if (resultTwo > 999){
        resultTwo = numberWithCommas(resultTwo)
    }

    document.getElementById("resultTwo").value = resultTwo;
}

document.getElementById("calculateThree").onclick = function(){
    from = document.getElementById("from").value;
    to = document.getElementById("to").value;

    from = Number(from)
    to = Number(to)

    resultThree = ((to-from)/from)*100

    if (resultThree%1 != 0){
        resultThree = resultThree.toFixed(2)
    }

    if (resultThree > 999){
        resultThree = numberWithCommas(resultThree)
    }
    

    document.getElementById("resultThree").value = resultThree;
}