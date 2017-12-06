import React, { Component } from 'react';
import { RaisedButton, Tabs, Tab } from 'material-ui';
import { Row, Col } from 'react-flexbox-grid';
import Slider from 'material-ui/Slider';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class Home extends Component {
	render() {
		return (
			<div>
				<h1>Welcome</h1>

				<Row>
				<Col sm={1} />
				<Col sm={10}>
			  <Tabs>
			    <Tab label="Item One" >
			      <div>
			        <h2 style={styles.headline}>Tab One</h2>
			        <p>
			          This is an example tab.
			        </p>
			      </div>
			    </Tab>
			    <Tab label="Item Two" >
			      <div>
			        <h2 style={styles.headline}>Tab Two</h2>
			        <p>
			          This is another example tab.
			        </p>
			      </div>
			    </Tab>
			  </Tabs>
			  </Col>
			  <Col sm={1} />
			  </Row>

			</div>
		);
	}
}

export default Home;