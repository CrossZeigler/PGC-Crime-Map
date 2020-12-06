import React from 'react'
import {MapContainer, ContentTitle} from './MapElements'
import GoogleMapReact from 'google-map-react';

class Map extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data: null,
            isLoaded: false,
            crimeList:  {    
                positions: [
                ],
                options: {   
                  radius: 20,   
                  opacity: 0.6,
              }
        }}; 
    }

    async componentDidMount(){
        try{
            const response = await fetch('https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json');
            const value = await response.json();
            const crimes = [];
            value.forEach(element => {
                //crimePoints.push([element['location']['latitude'], element['location']['longitude']]);
                //crimes.push([element['clearance_code_inc_type'], element['location']['latitude'], element['location']['longitude']]);
                crimes.push({lat:element['location']['latitude'], lng:element['location']['longitude']});
            })
            this.setState({
                isLoaded: true,
                data: crimes
            })
            console.log('Did Component Mount', crimes);
        } catch(err){
            console.log(err);
        }
    }

    render() {
        const crimeList = this.state.data;
        return(
        <MapContainer id="map">
            <ContentTitle>Price George County</ContentTitle>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAZ8RBpp3vhVQbAv_WZTWu-FQhH8EOTtTM', libraries:['visualization']}}
                defaultCenter={{lat: 38.98, lng: -76.94}}
                defaultZoom={15}       
                yesIWantToUseGoogleMapApiInternals
                options={{mapTypeId:"satellite"}}
                onGoogleApiLoaded={({map, maps}) => {
                    const heatmap = new maps.visualization.HeatmapLayer({
                      data: crimeList?.map(point => (
                        {location: new maps.LatLng(point['lat'], point['lng']), weight:3}))
                    ,radius: 20
                        
                    });
                    heatmap.setMap(map);
                  }}
                >
            </GoogleMapReact>
        </MapContainer>
        )}
}

export default Map
