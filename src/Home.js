import React, { Component } from 'react';
import { SelectField, MenuItem } from 'material-ui';
import { Row, Col } from 'react-flexbox-grid';

const url = 'https://embed.spotify.com/follow/1/?uri='
const theme = '&size=detail&theme=dark'
const rappers = [
	'spotify:artist:55Aa2cqylxrFIXC767Z865',
	'spotify:artist:20sxb77xiYeusSH8cVdatc',
	'spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg',
	'spotify:artist:7dGJo4pcD2V6oG8kP0tJRR'
]
const djs = [
	'spotify:artist:6M7RdR9ZP52h2mfNLmiHtU',
	'spotify:artist:25jGdT0Q5ld9D9Lajg8JpD',
	'spotify:artist:0SfsnGyD8FpIN4U4WCkBZ5'
]

class Home extends Component {
  state = {
    value: null,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <h1>Trending Artists</h1>
        <SelectField
          floatingLabelText="Genre"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={'Hip-Hop'} primaryText="Hip-Hop" />
          <MenuItem value={'EDM'} primaryText="EDM" />
        </SelectField>
        <br />

        {this.state.value == 'Hip-Hop' && 
	      	rappers.map((artist, i) =>
		        <iframe className="paddingTop" key={'artist_' + i} src={url + artist + theme} 
		        width="300" height="56" scrolling="no" frameBorder="0" style={{border:'none'}, {overflow:'hidden'}} allowtransparency="true">
		        </iframe>
	      	)
      	}
        {this.state.value == 'EDM' && 
	      	djs.map((artist, i) =>
		        <iframe className="paddingTop" key={'artist_' + i} src={url + artist + theme} 
		        width="300" height="56" scrolling="no" frameBorder="0" style={{border:'none'}, {overflow:'hidden'}} allowtransparency="true">
		        </iframe>
	      	)
      	}

      </div>
    );
  }
}

export default Home;