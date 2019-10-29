import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Directions } from 'react-native-gesture-handler';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.label}>Shivam Kapoor</Text>
                <Text style={styles.label}>Sr. Big Data Developer</Text>
                <Text style={styles.label}>@glassbeam since Jan 16th, 2017</Text>
                <View style={styles.contact}><Icon name='phone' type='font-awesome' size={16} /><Text style={styles.label}>  +91-9663006554</Text></View>
                <View style={styles.contact}><Icon name='envelope' type='font-awesome' size={16} /><Text style={styles.label}>  mailtoshivamk@gmail.com</Text></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly'
    },
    info: {
        alignItems: 'center'
    },
    contact: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    label: {
        fontSize: 16
    }
});

export default ProfileScreen;
