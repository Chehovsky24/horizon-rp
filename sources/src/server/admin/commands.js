mp.events.addCommand('veh', (player, model) => {
    mp.vehicles.new(mp.joaat(model), new mp.Vector3(player.position.x, player.position.y, player.position.z));
});

mp.events.addCommand('repair', (player) => {
    player.vehicle.repair();
});

mp.events.addCommand('delveh', (player) => {
    if (player.vehicle) {
        player.vehicle.destroy();
    } else {
        player.notify('~r~Вы не находитесь в машине.');
    }
});

mp.events.addCommand('dl', (player) => {
    if (player.getVariable('dl_info')) {
        player.setVariable('dl_info', false);
    } else {
        player.setVariable('dl_info', true);
    }
});