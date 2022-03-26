import GoogleMapReact from 'google-map-react';
import Hurr from './Hurr';
import Locationmarker from './LocationMarker';
import Volcano from './volcano';

const Maps = ({ eventData, center , zoom }) => {

    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8){
            return <Locationmarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}/>
        }
        else if(ev.categories[0].id === 12){
            return <Volcano lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}/>
        }
        else if(ev.categories[0].id === 10 || ev.categories[0].id === 9){
            return <Hurr lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}/>

        }
        return null
    })



    return (
        <div className="map">
        <GoogleMapReact
            bootstrapURLKeys={{key: 'AIzaSyBidvOJBGUKkZ3bny6Ewt-0mvMdfL5bPEg'}}
            defaultCenter={center}
            defaultZoom={ zoom }
        
        >
            {markers}
            
            
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
