import {Icon} from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert'

const Volcano = ({lat,lng}) => {
    return (
        <div className='volco'>
            <Icon icon="noto-v1:volcano" />
        </div>
    );
}

export default Volcano;