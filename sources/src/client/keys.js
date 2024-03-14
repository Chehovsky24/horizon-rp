mp.keys.bind(192, false, () => {
    mp.gui.cursor.visible = !mp.gui.cursor.visible;
});

let hudHidden = false;

mp.keys.bind(48, false, () => {
    if (hudHidden) {
        callCef('hud', '{"type": "show"}');
        hudHidden = false;
    } else {
        callCef('hud', '{"type": "hide"}');
        hudHidden = true;
    }
});

mp.keys.bind(50, false, () => {
    if (mp.players.local.vehicle) {
        if (mp.players.local.vehicle.getIsEngineRunning()) {
            mp.players.local.vehicle.setEngineOn(false, true, true);
        } else {
            mp.players.local.vehicle.setEngineOn(true, true, true);
        }
    }
});