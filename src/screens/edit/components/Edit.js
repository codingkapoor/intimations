import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default () => {
    return (
        <TouchableOpacity
            style={
                {
                    alignItems: 'center',
                    backgroundColor: '#2282D3',
                    padding: 20,
                    width: 200,
                    borderRadius: 3,
                    marginTop: 30,
                    marginBottom: 20
                }
            }
        >
            <Text style={{ color: 'white', fontSize: 16 }}>Create</Text>
        </TouchableOpacity>
    );
}
