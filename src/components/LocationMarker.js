import {Icon} from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert'

const Locationmarker = ( {lat, lng, onCLick} ) => {
    return (
        <div className='location-icon' onClick={onCLick}>
          <Icon icon="noto:fire" />
            
        </div>
    );
}

export default Locationmarker;
