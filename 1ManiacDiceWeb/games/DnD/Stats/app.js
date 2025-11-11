function rollStats(){
    const NUM_STATS = 6;
    let results = [];
    let foundMax = false;

    for (let i=0; i<NUM_STATS; i++){
        // roll 4d6
        let rolls = [];
            for (let j = 0; j < 4; j++) {
                rolls.push(Math.floor(Math.random() * 6) +1);

            }
            rolls.sort((a,b) => b-a);
            let stat = rolls[0] + rolls[1] + rolls[2];
            results.push(`${rolls.join(", ")} final stat ${stat}`);
            if(stat === 18){
                foundMax = true;
            }
        }
document.body.style.background = foundMax ? "goldenrod" : "red";

document.getElementById("result").innerHTML = results
    .map((r, i) => `Stat ${1 + 1}: ${r}`)
    .join("<br>");
}