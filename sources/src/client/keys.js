mp.keys.bind(192, false, () => {
    mp.gui.cursor.visible = !mp.gui.cursor.visible;
});

var hudHidden = false;

mp.keys.bind(48, false, () => {
    if (hudHidden) {
        callCef('hud', '{"type": "show"}');
        hudHidden = false;
    } else {
        callCef('hud', '{"type": "hide"}');
        hudHidden = true;
    }
});