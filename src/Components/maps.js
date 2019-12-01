import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
	width: '50%',
	height: '50%'
};

export class MapContainer extends Component {
	state = {
		showingInfoWindow: false, //Hides or the shows the infoWindow
		activeMarker: {}, //Shows the active marker upon click
		selectedPlace: {} //Shows the info to the selected place upon a marker
	};
	onMarkerClick = (props, marker, e) =>
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		});

	onClose = (props) => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			});
		}
	};
	render() {
		return (
			<Map
				google={this.props.google}
				zoom={16}
				style={mapStyles}
				initialCenter={{
					lat: -1.2884,
					lng: 36.8233
				}}
			/>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyAJC2JNZo0Xvo5SjA-wqSddGFeP9xP-WE8'
})(MapContainer);
