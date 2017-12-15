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

const songs = [
'https://open.spotify.com/embed?uri=spotify:track:3YU6vJbjYUG0tiJyXf9x5V&theme=white',
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
				<h1>Evan's Music Picks</h1>

				<Row>
				<Col xs={1} />
				<Col xs={12} sm={10}>
			  <Tabs>

			    <Tab label="Playlist of the Week" >
			      <div className="padding center">
							<iframe src="https://open.spotify.com/embed?uri=spotify:user:ehaala:playlist:1mY8fd3qlARXsORGoZucBw&theme=white" 
							width="90%" height="500px" frameBorder="0" allowtransparency="true">
							</iframe>
							<br />
							<RaisedButton label="Click Me!" primary={true} onClick={this.alert}/>
			      </div>
			    </Tab>

			    <Tab label="Songs of the Day" >
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
			  <Col xs={1} />
			  </Row>

			</div>
		);
	}
}

export default Music;