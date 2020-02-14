import React from 'react';
import * as WebBrowser from 'expo-web-browser';

import { StyledAsset } from '../StyledComponents';
import { platformEndPoint } from '../../../config';

const Asset = ({ title, slug }) => {

    const _onPress = async () => {
        await WebBrowser.openBrowserAsync(`http://${platformEndPoint.interface}/assets/${slug}.pdf`);
    }

    return (
        <StyledAsset onPress={_onPress}>{title}</StyledAsset>
    );
}

export default Asset;
