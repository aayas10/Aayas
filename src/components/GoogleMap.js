import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// import { Margin, MarginOutlined } from '@mui/icons-material';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div style={{height: '100px', width: '100px'}}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={10}
          style={{height: '100px', width: '100px', marginLeft:"20px"}}
        >
          <AnyReactComponent
            lat={27.749007}
            lng={85.330601}
            text={'Google Map'}
          />
         
        </GoogleMapReact>
      </div>
    );
  }
}
GoogleMap.defaultProps = {
  center: {lat: 27.749007, lng: 85.330601},
  zoom: 10
  
};

export default GoogleMap;