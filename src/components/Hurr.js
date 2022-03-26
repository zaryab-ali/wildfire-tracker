import {Icon} from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert'

import React from 'react';

const Hurr = ({lat,lng}) => {
    return (
        <div className='stormyy'>
            <Icon icon="noto:cloud-with-lightning-and-rain" />
        </div>
    );
}

export default Hurr;
