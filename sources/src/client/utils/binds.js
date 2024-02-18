let menuVisible = false;

mp.keys.bind(77, false, () => {
    if (!menuVisible) {
        browser(true);
        callCef('death', '{"type": "show"}');
        menuVisible = true;
    } else {
        browser(false);
        callCef('death', '{"type": "hide"}');
        menuVisible = false;
    }
});