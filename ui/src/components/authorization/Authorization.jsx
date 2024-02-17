import React from 'react';
import {CSSTransition} from 'react-transition-group';

import logo from './images/logo.png';
import list_row from './images/list_row.svg';
import user from './images/user.svg';
import lock from './images/lock.svg';
import email from './images/email.svg';
import promo from './images/promo.svg';

import EventManager from '../../EventManager';

class Authorization extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false,
			activeForm: 'login',

			username: '',
			password: '',
			email: '',
			promo: '',
			pass1: '',
			pass2: '',
			pagePlayer: '',

			recoveryCode1: '',
			recoveryInput1: undefined,
			recoveryCode2: '',
			recoveryInput2: undefined,
			recoveryCode3: '',
			recoveryInput3: undefined,
			recoveryCode4: '',
			recoveryInput4: undefined,
			recoveryCode5: '',
			recoveryInput5: undefined,
		}
	}

	componentDidCatch(error, errorInfo) {
		mp.trigger('client:ui:debug', 'Authorization.jsx', error, errorInfo); // eslint-disable-line
	}

	handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			if (this.state.showAuto) this.clickLogin()
			else this.clickReg()
		}
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress)

		EventManager.addHandler('authorization', (value) => {
			if (value.type === 'show') {
				this.setState({show: true})
			} else if (value.type === 'hide') {
				this.setState({show: false})
			} else if (value.type === 'activeForm') {
				this.handleChange(value.value)
			} else return
		})
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress)
		EventManager.removeHandler('authorization')
	}

	handleChange(name) {
		this.setState(() => ({activeForm: undefined}))

		setTimeout(() => this.setState(() => ({activeForm: name})), 200)
	}

	valueLogin(event) {
		this.setState({username: event.target.value.replace(/[^a-zA-Z0-9]+/g, '')})
	}

	valuePassword(event) {
		this.setState({pass: event.target.value.replace(/[^a-zA-Z0-9]+/g, '')})
	}

	valueMailReg(event) {
		this.setState({email: event.target.value})
	}

	valuePromocodeReg(event) {
		this.setState({promo: event.target.value})
	}

	valueLoginReg(event) {
		this.setState({loginReg: event.target.value.replace(/[^a-zA-Z0-9]+/g, '')})
	}

	valuePasswordReg(event) {
		this.setState({pass1: event.target.value.replace(/[^a-zA-Z0-9]+/g, '')})
	}

	valuePasswordRegCheck(event) {
		this.setState({pass2: event.target.value.replace(/[^a-zA-Z0-9]+/g, '')})
	}

	recoveryCode1(event) {
		this.setState({recoveryCode1: event.target.value})
		if (event.target.value != '') {
			if (this.state.recoveryInput2 != undefined) {
				this.state.recoveryInput2.focus()
			}
		}
	}

	recoveryCode2(event) {
		this.setState({recoveryCode2: event.target.value})
		if (event.target.value != '') {
			if (this.state.recoveryInput3 != undefined) {
				this.state.recoveryInput3.focus()
			}
		} else {
			if (this.state.recoveryInput1 != undefined) {
				this.state.recoveryInput1.focus()
			}
		}
	}

	recoveryCode3(event) {
		this.setState({recoveryCode3: event.target.value})
		if (event.target.value != '') {
			if (this.state.recoveryInput4 != undefined) {
				this.state.recoveryInput4.focus()
			}
		} else {
			if (this.state.recoveryInput2 != undefined) {
				this.state.recoveryInput2.focus()
			}
		}
	}

	recoveryCode4(event) {
		this.setState({recoveryCode4: event.target.value})
		if (event.target.value != '') {
			if (this.state.recoveryInput5 != undefined) {
				this.state.recoveryInput5.focus()
			}
		} else {
			if (this.state.recoveryInput3 != undefined) {
				this.state.recoveryInput3.focus()
			}
		}
	}

	recoveryCode5(event) {
		this.setState({recoveryCode5: event.target.value})
		if (event.target.value != '') {
		} else {
			if (this.state.recoveryInput4 != undefined) {
				this.state.recoveryInput4.focus()
			}
		}
	}

	clickLogin() {
		try {
			if (!this.state.login) {
				mp.trigger('signin', this.state.username, this.state.pass); // eslint-disable-line
			} else {
				mp.trigger('signin', this.state.username, this.state.pass); // eslint-disable-line
			}
		} catch (e) {
			console.log(e)
		}
	}

	clickReg() {
		try {
			mp.trigger('signup', this.state.email, this.state.username, this.state.pass1, this.state.pass2, this.state.promo); // eslint-disable-line
		} catch (e) {
			console.log(e)
		}
	}

	render() {
		if (!this.state.show) {
			return null
		}

		return (
			<React.Fragment>
				<div className='background-blackout-auth' />
				<div className='auth-main__left-top'>
					<div className='auth-main__logo'>
						<img src={logo} />
					</div>
					<div className='auth-main__name'>
						<div className='auth-main__title'>Exsight</div>
						<div className='auth-main__subtitle'>Role Play</div>
					</div>
				</div>

				<div className='auth-main__left'>
					<div className='auth-main__left-row'>
						<img src={list_row} />

						<div className='auth-main__left-row-wrapper'>
							<div className='auth-main__left-row-title'>Уникальный мод</div>
							<div className='auth-main__left-row-text'>
								Наша команда разработчиков очень старалась над нашим
								<br />
								игровым модом, мы написали около +100 тыс. строчек
								<br />
								кода, на нашем моде множество уникальных систем и<br />
								механик.
							</div>
						</div>
					</div>

					<div className='auth-main__left-row'>
						<img src={list_row} />

						<div className='auth-main__left-row-wrapper'>
							<div className='auth-main__left-row-title'>Стильный дизайн</div>
							<div className='auth-main__left-row-text'>
								Мы сделали уникальный - стильный, современный дизайн.
								<br />
								Каждый интерфейс максимально удобен и красивый, наш
								<br />
								дизайн сделан командой профисионалных дизайнеров.
							</div>
						</div>
					</div>

					<div className='auth-main__left-row'>
						<img src={list_row} />

						<div className='auth-main__left-row-wrapper'>
							<div className='auth-main__left-row-title'>Уникальные системы</div>
							<div className='auth-main__left-row-text'>
								Мы прошли через многое что бы сделать наш проект был
								<br />
								№1 среди всех проектов GTA V, мы делаем нилучшие системы
								<br />и мехники которые вы не найдёте на других проектах...
							</div>
						</div>
					</div>
				</div>
				<CSSTransition in={!!this.state.activeForm} timeout={200} classNames='alert'>
					<div className='auth-main_wrapper'>
						{this.state.activeForm == 'login' ? (
							<div className='flex-row'>
								<div className='auth-main'>
									<React.Fragment>
										<div className='header-title'>Авторизация</div>
										<div className='header-text'>C возвращением!</div>
										<div className='auth-input'>
											<img src={user} />
											<input
												type='text'
												pattern='[a-zA-Z0-9]*'
												placeholder='Введите логин'
												name='login-auth'
												className='auth-input-style'
												defaultValue={this.state.username}
												onChange={this.valueLogin.bind(this)}
											/>
										</div>
										<div className='auth-input'>
											<img src={lock} />
											<input
												type={this.state.passwordShown ? 'text' : 'password'}
												pattern='[a-zA-Z0-9]*'
												placeholder='Введите пароль'
												name='password-auth'
												className='auth-input-style'
												value={this.state.pass}
												onChange={this.valuePassword.bind(this)}
											/>
										</div>

										<div className='recovery-wrapper'>
											<div className='recovery-text'>Забыли пароль?</div>
											<a
												className='recovery-link'
												onClick={() => {
													this.handleChange('recovery-email')
												}}>
												Восстанови его!
											</a>
										</div>

										<div className='button-auth primary' onClick={this.clickLogin.bind(this)}>
											Войти
										</div>

										<div className='reg-buttons-wrapper'>
											<div className='reg-text'>Нет аккаунта?</div>
											<div
												className='button-auth primary reg-button'
												onClick={() => {
													this.handleChange('register')
												}}>
												Зарегистрироваться
											</div>
										</div>
									</React.Fragment>
								</div>
							</div>
						) : null}
						{this.state.activeForm == 'register' ? (
							<div className='auth-main'>
								<React.Fragment>
									<div className='header-title'>Регистрация</div>
									<div className='header-text'>Заполните данные для регистрации</div>
									<div className='auth-input'>
										<img src={user} />
										<input
											type='text'
											pattern='[a-zA-Z0-9]*'
											placeholder='Придумайте логин'
											name='create-login'
											className='reg-input-style'
											defaultValue={this.state.username}
											onChange={this.valueLoginReg.bind(this)}
										/>
									</div>
									<div className='auth-input'>
										<img src={email} />
										<input
											type='text'
											placeholder='Введите свой E-mail'
											name='create-email'
											className='reg-input-style'
											value={this.state.email}
											onChange={this.valueMailReg.bind(this)}
										/>
									</div>
									<div className='auth-input'>
										<img src={lock} />
										<input
											type='password'
											pattern='[a-zA-Z0-9]*'
											placeholder='Придумайте пароль'
											value={this.state.pass1}
											name='create-password'
											className='reg-input-style'
											onChange={this.valuePasswordReg.bind(this)}
										/>
									</div>
									<div className='auth-input'>
										<img src={lock} />
										<input
											type='password'
											pattern='[a-zA-Z0-9]*'
											placeholder='Повторите пароль'
											value={this.state.passwordRegCheck}
											name='create-password-repeat'
											className='reg-input-style'
											onChange={this.valuePasswordRegCheck.bind(this)}
										/>
									</div>
									<div className='auth-input'>
										<img src={promo} />
										<input
											type='text'
											pattern='[a-zA-Z0-9]*'
											placeholder='Введите промокод (не обязательно)'
											value={this.state.promo}
											name='create-promocode'
											className='reg-input-style'
											onChange={this.valuePromocodeReg.bind(this)}
										/>
									</div>
									<div className='button-auth primary' onClick={this.clickReg.bind(this)}>
										Готово
									</div>

									<div className='reg-buttons-wrapper'>
										<div className='reg-text'>Уже есть аккаунт?</div>
										<div
											className='button-auth primary reg-button'
											onClick={() => {
												this.handleChange('login')
											}}>
											Войти
										</div>
									</div>
								</React.Fragment>
							</div>
						) : null}
						{this.state.activeForm == 'recovery-email' ? (
							<div className='auth-main'>
								<React.Fragment>
									<div className='header-title'>Восстановление</div>
									<div className='header-text'>Не забывайте ваш пароль!</div>
									<div className='auth-input'>
										<img src={email} />
										<input
											type='text'
											placeholder='Введите свой E-mail'
											name='create-email'
											className='reg-input-style'
											value={this.state.email}
											onChange={this.valueMailReg.bind(this)}
										/>
									</div>
									<div
										className='button-auth primary'
										onClick={() => {
											mp.trigger('client.auth.restorePassword', 0, this.state.email) // eslint-disable-line
										}}>
										Отправить код
									</div>

									<div className='reg-buttons-wrapper'>
										<div className='reg-text'>Вспомнили пароль?</div>
										<div
											className='button-auth primary reg-button'
											onClick={() => {
												this.handleChange('username')
											}}>
											Войти
										</div>
									</div>
								</React.Fragment>
							</div>
						) : null}

						{this.state.activeForm == 'recovery-code' ? (
							<div className='auth-main'>
								<React.Fragment>
									<div className='header-title'>Восстановление</div>
									<div className='header-text'>Не забывайте ваш пароль!</div>
									<div className='recovery-inputs'>
										<div className='auth-input'>
											<input
												ref={(input) => {
													this.state.recoveryInput1 = input
												}}
												type='value'
												maxLength={1}
												name='recovery-code1'
												className='reg-input-style'
												value={this.state.recoveryCode1}
												onChange={this.recoveryCode1.bind(this)}
											/>
										</div>
										<div className='auth-input'>
											<input
												ref={(input) => {
													this.state.recoveryInput2 = input
												}}
												type='value'
												maxLength={1}
												name='recovery-code2'
												className='reg-input-style'
												value={this.state.recoveryCode2}
												onChange={this.recoveryCode2.bind(this)}
											/>
										</div>
										<div className='auth-input'>
											<input
												ref={(input) => {
													this.state.recoveryInput3 = input
												}}
												type='value'
												maxLength={1}
												name='recovery-code3'
												className='reg-input-style'
												value={this.state.recoveryCode3}
												onChange={this.recoveryCode3.bind(this)}
											/>
										</div>
										<div className='auth-input'>
											<input
												ref={(input) => {
													this.state.recoveryInput4 = input
												}}
												type='value'
												maxLength={1}
												name='recovery-code4'
												className='reg-input-style'
												value={this.state.recoveryCode4}
												onChange={this.recoveryCode4.bind(this)}
											/>
										</div>
										<div className='auth-input'>
											<input
												ref={(input) => {
													this.state.recoveryInput5 = input
												}}
												type='value'
												maxLength={1}
												name='recovery-code5'
												className='reg-input-style'
												value={this.state.recoveryCode5}
												onChange={this.recoveryCode5.bind(this)}
											/>
										</div>
									</div>
									<div
										className='button-auth primary'
										onClick={() => {
											this.handleChange('recovery-code')
										}}>
										{' '}
										{/* TODO */}
										Отправить код
									</div>

									<div className='reg-buttons-wrapper'>
										<div className='reg-text'>Вспомнили пароль?</div>
										<div
											className='button-auth primary reg-button'
											onClick={() => {
												this.handleChange('login')
											}}>
											Войти
										</div>
									</div>
								</React.Fragment>
							</div>
						) : null}
					</div>
				</CSSTransition>
			</React.Fragment>
		)
	}
}

export default Authorization
