import React from "react"
import { ToastContainer, toast } from 'react-toastify';
import EventManager from '../../EventManager';

import 'react-toastify/dist/ReactToastify.min.css';

class Notifications extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false,
		}
	}

    componentDidMount() {
		EventManager.addHandler('notifications', (value) => {
			if (value.type === 'show') {
				this.setState({show: true})
			} else if (value.type === 'hide') {
				this.setState({show: false})
			}
		});
	}

    componentDidCatch(error, errorInfo) {
		mp.trigger("client:ui:debug", "Notifications.jsx", error, errorInfo) // eslint-disable-line
	}

    componentWillUnmount() {
		EventManager.removeHandler('notifications')
	}

    sendNotification(text) {
		toast.warn(text);
        toast.success(text);
        toast.error(text);
        toast.info(text);
	}

    render() {
		if (!this.state.show) {
			return null
		}

		return (
			<React.Fragment>
                <div>
                    <button onClick={() => {
                        mp.trigger('client:death:btn', 'death')
                    }}>Notify death!</button>
                    <button onClick={() => {
                        mp.trigger('client:death:btn', 'hospital')
                    }}>Notify hospital!</button>
                    <button onClick={() => {
                        mp.trigger('client:death:btn', 'jail')
                    }}>Notify jail!</button>
                    <ToastContainer autoClose={5000} position="bottom-left" limit={4} />
                </div>
            </React.Fragment>
        )
    }
}

export default Notifications;