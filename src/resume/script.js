function turningRight(){

    document.getElementById("folhaFrente").className = "folhaForwardFrenteAnimated";
    document.getElementById("folhaTras").className = "folhaForwardTrasAnimated";

    document.getElementById("buttonNext").style.visibility = "hidden";
    document.getElementById("buttonPrevious").style.visibility = "visible";

}

function turningLeft(){

    document.getElementById("buttonPrevious").style.visibility = "hidden";
    document.getElementById("buttonNext").style.visibility = "visible";

    document.getElementById("folhaTras").className = "folhaBackwardsTrasAnimated";
    document.getElementById("folhaFrente").className = "folhaBackwardsFrenteAnimated";

}