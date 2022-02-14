import {Icon} from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert'

const Locationmarker = ( {lat, lng, onCLick} ) => {
    return (
        <div className='location-marker' onClick={onCLick}>
            <Icon icon={locationIcon} className="location-icon"/>
            
        </div>
    );
}

export default Locationmarker;
