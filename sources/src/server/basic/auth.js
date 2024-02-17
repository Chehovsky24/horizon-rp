mp.events.add('playerReady', (player) => {
    player.call('guiReady');
});