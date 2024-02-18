import React from 'react';
import DeathButton from './components/DeathButton';
import EventManager from '../../EventManager';

class Death extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false,
			killer: 'Kwert Developer (ID: 887) #DEV',
			deathChoosen: false,
			timeout: 299,
		}
	}

	componentDidMount() {
		EventManager.addHandler('death', (value) => {
			if (value.type === 'show') {
				this.setState({show: true})
			} else if (value.type === 'hide') {
				this.setState({show: false})
			} else if (value.type === 'updateItems') {
				try {
					this.setState({show: true})
					this.setState({name: value.name})
					this.setState({qustion: value.qustion})
					this.setState({buttons: value.buttons})
				} catch (e) {}
			}
		});
	}

	getTimeLeft() {
		var sec_num = parseInt(this.state.timeout, 10)
		var hours = Math.floor(sec_num / 3600)
		var minutes = Math.floor(sec_num / 60) % 60
		var seconds = sec_num % 60

		return [hours, minutes, seconds]
			.map((v) => (v < 10 ? '0' + v : v))
			.filter((v, i) => v !== '00' || i > 0)
			.join(':')
	}

	componentWillUnmount() {
		EventManager.removeHandler('death')
	}

	render() {
		if (!this.state.show) {
			return null
		}
		return (
			<div className='death'>
				<div className='background-blackout-1' />
				<div className='background-blackout-2' />
				<div className='background-blackout-3' />
				<div className='death__container'>
					<div className='death__content'>
						<svg
							width='124'
							height='136'
							viewBox='0 0 124 136'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M61.8179 0.000608048C45.5193 -0.0717911 29.8576 6.32375 18.2685 17.7842C6.67948 29.2446 0.109531 44.834 8.08453e-06 61.1323C-0.00447576 69.8071 1.85621 78.3816 5.45593 86.2743C9.05565 94.167 14.3103 101.194 20.8635 106.878V116.076C20.8913 121.381 23.0223 126.457 26.7888 130.193C30.5553 133.928 35.6498 136.016 40.9543 136H82.6814C87.9849 136.016 93.0784 133.929 96.8447 130.195C100.611 126.461 102.743 121.386 102.772 116.082V106.884C109.326 101.199 114.581 94.1715 118.181 86.2777C121.781 78.3838 123.641 69.8082 123.636 61.1323C123.526 44.834 116.956 29.2446 105.367 17.7842C93.7781 6.32375 78.1164 -0.0717911 61.8179 0.000608048ZM92.7268 99.1441C91.9961 99.723 91.4058 100.46 91.0001 101.299C90.5944 102.138 90.3837 103.058 90.3839 103.991V116.082C90.3578 118.103 89.5332 120.032 88.0901 121.447C86.647 122.863 84.7026 123.65 82.6814 123.636H80.3632V105.091C80.3632 103.451 79.7119 101.879 78.5526 100.72C77.3933 99.5605 75.8209 98.9092 74.1814 98.9092C72.5419 98.9092 70.9696 99.5605 69.8102 100.72C68.6509 101.879 67.9996 103.451 67.9996 105.091V123.636H55.6361V105.091C55.6361 103.451 54.9848 101.879 53.8255 100.72C52.6662 99.5605 51.0938 98.9092 49.4543 98.9092C47.8148 98.9092 46.2424 99.5605 45.0831 100.72C43.9238 101.879 43.2725 103.451 43.2725 105.091V123.636H40.9543C38.9288 123.656 36.9781 122.872 35.5296 121.456C34.0812 120.04 33.2532 118.108 33.2271 116.082V103.991C33.2302 103.06 33.0234 102.142 32.622 101.302C32.2207 100.463 31.6351 99.7255 30.9089 99.1441C25.1374 94.6294 20.4685 88.861 17.2555 82.2755C14.0425 75.69 12.3697 68.4598 12.3636 61.1323C12.3636 48.0162 17.5739 35.4373 26.8484 26.1628C36.1229 16.8883 48.7018 11.678 61.8179 11.678C74.934 11.678 87.5128 16.8883 96.7873 26.1628C106.062 35.4373 111.272 48.0162 111.272 61.1323C111.266 68.4598 109.593 75.69 106.38 82.2755C103.167 88.861 98.4983 94.6294 92.7268 99.1441Z'
								fill='white'
							/>
							<path
								d='M43.2728 86.5456C50.101 86.5456 55.6363 81.0102 55.6363 74.182C55.6363 67.3538 50.101 61.8184 43.2728 61.8184C36.4445 61.8184 30.9092 67.3538 30.9092 74.182C30.9092 81.0102 36.4445 86.5456 43.2728 86.5456Z'
								fill='white'
							/>
							<path
								d='M80.3631 86.5456C87.1913 86.5456 92.7267 81.0102 92.7267 74.182C92.7267 67.3538 87.1913 61.8184 80.3631 61.8184C73.5349 61.8184 67.9995 67.3538 67.9995 74.182C67.9995 81.0102 73.5349 86.5456 80.3631 86.5456Z'
								fill='white'
							/>
						</svg>
						<span className='death__content__title'>Вы без сознания</span>
						<span className='death__content__killer'>Вас убил {this.state.killer}</span>
						<div className='death__content__buttons'>
							<DeathButton
								text='Умереть'
								type='death'
								disable={this.state.deathChoosen}
							/>
						</div>
						<div className='death__content__timeout'>
							До смерти осталось{' '}
							<span className='death__content__timeout__left'>{this.getTimeLeft(this)}</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Death;