function roll(sides){
    let mod = parseInt(document.getElementById("modifier").value) || 0;
    let num = parseInt(document.getElementById("quan").value) ||1;

    let total = 0;
    let rolls = [];
    let foundMax = false;

    for (let i = 0; i < num; i++) {
        let d =Math.floor(Math.random() * sides) +1;
        rolls.push(d);
        total += d;
        if (d === sides) foundMax = true;
    }
    total += mod;

    document.body.style.background = foundMax ? "goldenrod" : "red";
    document.getElementById("result").textContent =
    `${rolls.join(" + ")} + ${mod} = ${total} `;
}

function rollPD(){
    let d10 = Math.floor(Math.random() *10) +1;
    let pd = Math.floor(Math.random() *10) +1;
    let result;

    if (pd === 10 && d10 === 10){
        result = 100
    } else if (pd === 10) {
        result = d10;
    } else if (d10 === 10) {
        result = pd*10;
    }else {
        result = (pd*10) + d10;
    }

    document.body.style.background = (pd === 10 && d10 === 10) ? "goldenrod" : "red"
    document.getElementById("result").textContent = `Percentile: ${result}` ;

    return result;
}

function rollAD(){
    let mod = parseInt(document.getElementById("modifier").value) || 0;
    let d1 = Math.floor(Math.random() *20) +1;
    let d2 = Math.floor(Math.random() *20) +1;
    
    let adv = Math.max(d1, d2);
    let dis = Math.min(d1, d2)

    let advTotal = adv + mod;
    let disTotal = dis + mod;

    document.body.style.background = (adv === 20) ? "goldenrod" : "red";

    document.getElementById("result").textContent =
        `Advantage: ${adv} + ${mod} = ${advTotal}\n` +
        `Disadvantage: ${dis} + ${mod} = ${disTotal}`;

}