import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const LeavesStatusScreen = () => {
    return (
        <View style={styles.parent}>
            <View style={styles.container}>
                <Text style={styles.figure}>23</Text>
                <Text style={styles.label}>Earned Leaves</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.figure}>11</Text>
                <Text style={styles.label}>Sick Leaves</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        justifyContent: 'space-around'

    },
    container: {
        alignItems: 'center'
    },
    figure: {
        fontSize: 110
    },
    label: {
        fontSize: 24
    }
});

export default LeavesStatusScreen;
