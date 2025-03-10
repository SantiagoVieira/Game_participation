let player1 = { name: 'Johnvy', life: 50 };
let player2 = { name: 'El santi', life: 50 };

const randomShoot = () => Math.floor(Math.random() * 10) + 1;

const updateLife = () => {
    document.getElementById("player1-life").textContent = player1.life;
    document.getElementById("player2-life").textContent = player2.life;
};

const fightWithDamage = (player, damage) => {
    player.life -= damage;
    updateLife();
};

const endGame = player => {
    if (player.life <= 0) {
        document.getElementById(player.name === 'Johnvy' ? "player1" : "player2").disabled = true;
        document.getElementById(player.name === 'Johnvy' ? "player1-box" : "player2-box").innerHTML += `<p><strong>${player.name} ha sido derrotado.</strong></p>`;
    }
};

const fight = player => {
    if (player.life <= 0) return;
    let damage = randomShoot();
    if (player === player1) {
        fightWithDamage(player2, damage);
        endGame(player2);
    } else {
        fightWithDamage(player1, damage);
        endGame(player1);
    }
};
