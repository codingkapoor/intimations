import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default () => {
    return (
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Text>Made with </Text>
            <FontAwesomeIcon icon='heart' size={16} color={'#393939'} />
            <Text> by </Text>
            <Text style={{ color: 'blue' }}
                onPress={() => Linking.openURL('https://github.com/codingkapoor')}>
                codingkapoor
            </Text>
        </View>
    );
}
