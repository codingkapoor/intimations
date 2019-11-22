import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Footer = () => {
    return (
        <View style={{ flexDirection: 'row', marginBottom: 10, justifyContent:'center' }}>
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

export default Footer;
