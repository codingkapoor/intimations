import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from '../Styles';

export default ({ stageIntimationIsDirty, checkoutFromActiveIntimation }) => {
	if (!stageIntimationIsDirty)
		return null;

	return (
		<TouchableOpacity
			style={Styles.resetWrapper}
			onPress={() => checkoutFromActiveIntimation()}
		>
			<Text style={Styles.reset}>Reset</Text>
		</TouchableOpacity>
	);
}
