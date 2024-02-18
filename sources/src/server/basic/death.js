mp.events.add('playerDeath', (player) => {
    player.call('death');
});

mp.events.add('sendDataToDeathSpawn', (player) => {
    player.spawn(new mp.Vector3(-425.517, 1123.620, 325.8544));
    player.health = 50;
});