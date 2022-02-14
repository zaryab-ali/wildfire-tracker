import GoogleMapReact from 'google-map-react';
import Locationmarker from './LocationMarker';

const Maps = ({ center , zoom }) => {
    return (
        <div className="map">
        <GoogleMapReact
            bootstrapURLKeys={{key: 'AIzaSyBidvOJBGUKkZ3bny6Ewt-0mvMdfL5bPEg'}}
            defaultCenter={center}
            defaultZoom={ zoom }
        
        >
            <Locationmarker lat={center.lat} lng={center.lng}/>
            
        </GoogleMapReact>
        
            
        </div>
    );
}

Maps.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom:6
}

export default Maps;
