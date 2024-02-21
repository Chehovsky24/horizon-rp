mp.events.add('notifications', () => {
    callCef('notifications', '{"type": "show"}');
});