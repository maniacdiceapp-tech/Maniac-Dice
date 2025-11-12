function roll(sides){
    let mod = parseInt(document.getElementById("modifier").value) || 0;
    let num = parseInt(document.getElementById("quan").value) || 1;

    let total = 0;
    let rolls = [];
    let foundMax = false;

    for (let i = 0; i < num; i++) {
        let d = Math.floor(Math.random() * sides) +1;
        rolls.push(d);
        total += d;
        if (d === sides) foundMax = true;
    }
    total += mod;

    document.body.style.backgroundColor = foundMax ? "goldenrod" : "#00bfff";
    document.getElementById("result").textContent =
        `${rolls.join(" + ")} + ${mod} = ${total} `;
}

function rollPD(){
    let d10 = Math.floor(Math.random() *10) +1;
    let pd = Math.floor(Math.random() *10) +1;
    let result;
    
    if (pd === 10 && d10 === 10) {
        result = 100;
    } else if (pd === 10) {
        result = d10;
    } else if (d10 === 10) {
        result = pd*10;
    }else {
        result = (pd*10) + d10;
    }

    document.body.style.backgroundColor = (pd === 10 && d10 === 10) ? "goldenrod" : "#00bfff";
    document.getElementById("result").textContent =`Percentile: ${result}` ;

    return result;
}

function rollDuality() {
    let mod = parseInt(document.getElementById("modifier").value)  || 0;
    let H = Math.floor(Math.random() * 12) + 1;
    let F = Math.floor(Math.random() * 12) + 1;
    let total = H + F + mod;

    if (H > F){
        document.body.style.backgroundColor = "yellow";
        document.getElementById("result").textContent = `${H} + ${F} + ${mod} = ${total} with hope!`;
    } else if (F > H) {
        document.body.style.backgroundColor = "blueviolet";
        document.getElementById("result").textContent = `${H} + ${F} + ${mod} = ${total} with FEAR.`;
    } else {
        document.body.style.backgroundColor = "goldenrod";
        document.getElementById("result").textContent = `${H} + ${F} + ${mod} = ${total} CRITICAL SUCCESS!!!`
    }
}