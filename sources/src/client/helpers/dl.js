mp.events.add('render', () => {
    if(mp.players.local.getVariable("dl_info")) {
        mp.vehicles.forEachInStreamRange(
            (veh) => {
                if(mp.game.gameplay.getDistanceBetweenCoords(mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z, veh.position.x, veh.position.y, veh.position.z, true) > 15)
                mp.game.graphics.drawText(`ID ${veh.id} - MODEL: ${mp.game.vehicle.getDisplayNameFromVehicleModel(veh.getModel())}\nX: ${veh.position.x.toFixed(3)} Y: ${veh.position.y.toFixed(3)} Z: ${veh.position.z.toFixed(3)}`, [veh.position.x, veh.position.y, veh.position.z], {
                    font: 4,
                    color: [255, 255, 255, 185],
                    scale: [0.5, 0.5]
                });
            }
        )
    }
});