import React from 'react'
import {Link} from "react-router-dom";

import ManchesterCityLogo from '../../Resources/images/logos/manchester_city_logo.png';

export const LogoIcon = (props) => {
    const template = <div className='img_cover'
        style={{
            width: props.width,
            height: props.height,
            background: `url(${ManchesterCityLogo}) no-repeat`
        }}
    />

    if(props.link){
        return <Link exact={props.exact} to={props.toLink} className="link_logo">
            {template}
        </Link>
    }else{
        return template
    }
}