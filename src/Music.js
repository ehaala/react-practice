import React, { Component } from 'react';
import Trending from './Trending.js';
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

const songs = [
'https://open.spotify.com/embed?uri=spotify:track:02DGz57a3TK3jNiibbnxaK&theme=white',
'https://open.spotify.com/embed?uri=spotify:track:6mVjlizvk7mq58DJl7pQ2j&theme=white',
'https://open.spotify.com/embed?uri=spotify:track:3whrwq4DtvucphBPUogRuJ&theme=white'
]

class Music extends Component {
	alert() {
		alert('WASSUP');
	}

	render() {
		return (
			<div>

				<Row>
				<Col xs={12}>
				  <Tabs>
				    <Tab label="Artists">
				    	<div className="padding center">
				      	<Trending />
				      </div>
				    </Tab>
				    <Tab label="Songs" >
				      <Row>
				      	{songs.map((song, i) =>
						      <Col xs={12} sm={6} key={'song_' + i}>
							      <div className="padding center">
							        <iframe src={song} 
							        width="90%" height="380" frameBorder="0" allowtransparency="true">
							        </iframe>
							      </div>
							    </Col>
				      	)}
				      </Row>
				    </Tab>
				  </Tabs>
			  </Col>
			  </Row>

			</div>
		);
	}
}

export default Music;