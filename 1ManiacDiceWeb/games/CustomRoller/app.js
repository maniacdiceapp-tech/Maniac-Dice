function roll (){
    let mod = parseInt(document.getElementById("modifier").value) ||0;
    let num = parseInt(document.getElementById("quan").value) ||1;
    let sides = parseInt(document.getElementById("sides").value) ||2;

    let total = 0
    let rolls = []
    let foundMax = false

    for (let i =0; i < num; i++) {
        let d =Math.floor(Math.random() * sides) +1;
        rolls.push(d);
        total += d;
        if (d === sides) foundMax = true;
    }
    total += mod;
    document.body.style.background = foundMax ? "goldenrod" : "black"
    document.getElementById("result").textContent =
    `${rolls.join(" + ")} + ${mod} = ${total} `;
}