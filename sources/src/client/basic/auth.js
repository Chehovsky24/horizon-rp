let sceneryCamera = mp.cameras.new('default', new mp.Vector3(-485, 1095.75, 323.85), new mp.Vector3(0,0,0), 40);

sceneryCamera.pointAtCoord(402.8664, -996.4108, -98.5);

mp.events.add('auth', () => {
    browser(true);
    callCef('authorization', '{"type": "show"}')
	sceneryCamera.setActive(true);
    mp.game.cam.renderScriptCams(true, false, 0, true, false);;
});

mp.events.add('signin', (username, pass) => {
    username = username.toLowerCase();
	username = username.replace(/[^a-zA-Z0-9\s]/gi, '');
	if (username === '') {
		mp.console.logInfo('Логин - поле не заполнено');
		return
	}
	if (pass === '') {
		mp.console.logInfo('Пароль - поле не заполнено');
		return
	}

	mp.events.callRemote('sendDataToAuthorization', username, pass);
});

mp.events.add('signup', (email, loginReg, pass1, pass2, promo) => {
	if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase())) {
		mp.console.logInfo('Email - не валидный адрес');
		return
	}
	email = email.toLowerCase();
	loginReg = loginReg.toLowerCase();
	loginReg = loginReg.replace(/[^a-zA-Z0-9\s]/gi, '');
	if (loginReg === '') {
		mp.console.logInfo('Логин - поле не заполнено');
		return
	}
	if (pass1 === '') {
		mp.console.logInfo('Пароль - поле не заполнено');
		return
	}
	if (pass1 !== pass2) {
		mp.console.logInfo('Пароли не совпадают');
		return
	}

	mp.events.callRemote('sendDataToRegister', email, loginReg, pass1, promo);
});

mp.events.add('Ready', () => {
	browser(false);
    callCef('authorization', '{"type": "hide"}');
	sceneryCamera.setActive(false);
    mp.game.cam.renderScriptCams(false, false, 0, true, false);
});