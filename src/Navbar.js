import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Drawer, MenuItem } from 'material-ui';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		}

		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle() {
		this.setState({
			open: !this.state.open
		})
	}

	handleClose = () => this.setState({open: false});

	render() {
		return (
				<div>
				  <AppBar
				    title=""
				    iconClassNameRight="muidocs-icon-navigation-expand-more"
				    onLeftIconButtonClick={this.handleToggle}
				  />
	        <Drawer
	          docked={false}
	          width={200}
	          open={this.state.open}
	          onRequestChange={(open) => this.setState({open})}
	        >
	          <MenuItem onClick={this.handleClose}>
	          	<Link className="tab" to="/">Home</Link>
	          </MenuItem>
	          <MenuItem onClick={this.handleClose}>
	          	<Link className="tab" to="/music">Music</Link>
	          </MenuItem>
	        </Drawer>
			  </div>
			)
	}
}

export default Navbar;