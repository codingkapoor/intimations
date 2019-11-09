import React from 'react';
import { View } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

export default ({ children, style }) => {
    const safeAreaInsets = useSafeArea();

    return (
        <View
            style={
                {
                    paddingTop: safeAreaInsets.top,
                    paddingBottom: safeAreaInsets.bottom,
                    paddingLeft: safeAreaInsets.left,
                    paddingRight: safeAreaInsets.right,
                    ...style
                }
            }
        >
            {children}
        </View>
    );
};
