import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Text, View } from 'react-native';

const NoActivity = () => {
   return (
      <View style={{alignItems: 'center', marginTop: 200}}>
         <FontAwesomeIcon icon={'bell'} size={44} color={'#E2E2E2'} />
         <Text style={{color: '#E2E2E2', fontSize: 18}}>No Activity</Text>
      </View>
   );

}

export default NoActivity;
