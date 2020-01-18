import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { NoActivityWrapper, NoActivityLabel } from '../StyledComponents';

const NoActivity = () => {
   return (
      <NoActivityWrapper>
         <FontAwesomeIcon icon={'bell'} size={44} color={'#E2E2E2'} />
         <NoActivityLabel>No Activity</NoActivityLabel>
      </NoActivityWrapper>
   );

}

export default NoActivity;
