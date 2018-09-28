import React from 'react';
import './index.less';
class FlavorForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			pass: '',
			isLogin: false
		};

		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeVal = this.handleChangeVal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeName(event) {
		this.setState({ name: event.target.value });
	}

	handleChangeVal(event) {
		this.setState({ pass: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({logined: true});
	}

	render() {
		if(this.props.isLogin) {			
		    return	<Redirect to="./home"/>;		
		} else {
			return (									
				<form onSubmit={this.handleSubmit}>
					<label>登录名：<input type="text" placeholder="请输入姓名" onChange={this.handleChangeName} /></label>
					<label>登录名：<input type="text" placeholder="请输入密码" onChange={this.handleChangeVal} /></label>
					<div><input type="submit" value="Submit" /></div>
				</form>
			)		
		}
	}
}
export default FlavorForm