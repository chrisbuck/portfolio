import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconLink = (props) => {
    return(
        <div className="iconLinkWrapper">
            <a className="iconLink" href={props.link}><FontAwesomeIcon className={props.name} icon={props.icon} /></a>
        </div>
    );
};

export default IconLink;