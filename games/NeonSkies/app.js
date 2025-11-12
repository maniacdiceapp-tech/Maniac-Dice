function sling(){
    let num = parseInt(document.getElementById("quan").value) ||1;

    let results = []
    let foundMax = false;

    for (let i =0; i <num; i++){
        let roll = Math.floor(Math.random() * 6) +1;

        results.push(`${roll}`);

        if(roll === 6){
            foundMax = true;
        }
    }
document.body.style.background = foundMax ? "fuchsia" : "white";

document.getElementById("result").innerHTML = results
    .map((r, i) => `Sling ${i + 1}: ${r}`)
    .join("<br>");
}