mp.events.add('guiReady', () => {
    browser(true);
    callCef('authorization', '{"type": "show"}');
});