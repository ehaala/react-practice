import React, { Component } from 'react';
import { SelectField, MenuItem } from 'material-ui';
import { Row, Col } from 'react-flexbox-grid';

const url = 'https://embed.spotify.com/follow/1/?uri='
const theme = '&size=detail&theme=dark'
const me = 'spotify:user:ehaala'

class Home extends Component {
  state = {
    value: null,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <h1>Evan Haala</h1>
    		<h3>Check out my page for up-to-date playlists!</h3>
      	<iframe className="paddingTop" src={url + me + theme} 
        width="300" height="56" scrolling="no" frameBorder="0" style={{border:'none'}, {overflow:'hidden'}} allowtransparency="true">
        </iframe>
      </div>
    );
  }
}

export default Home;