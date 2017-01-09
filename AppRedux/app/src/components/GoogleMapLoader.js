import React from 'react' 
import {GoogleMapLoader, GoogleMap} from 'react-google-maps'

export default (props) => {
    console.log(props)
    return (
        <GoogleMapLoader 
            containerElement = {<div style={{height: '100%'}}/>} 
            googleMapElement={

                <GoogleMap  defaultZooom={12} 
                            defualtCenter={{lat: props.lat, lng: props.lon}} 
                />

            }
        />
    )
}


// key AIzaSyD_b0k1ncwEWLU434hQR80pobq82e2W_T0