import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const ProfileScreen = () => {
    return (
        <View style={styles.parent}>
            <View style={styles.info}>
                <Text style={styles.label}>Shivam Kapoor</Text>
                <Text style={styles.label}>Sr. Big Data Developer</Text>
                <Text style={styles.label}>@glassbeam since Jan 16th, 2017</Text>
                <Text style={styles.label}>Bangalore, India</Text>
                <View style={styles.container}>
                    <View style={styles.contact}>
                        <FontAwesomeIcon icon='phone-square-alt' size={16} />
                        <Text style={styles.label}>  +91-9663006554</Text>
                    </View>
                    <View style={styles.contact}>
                        <FontAwesomeIcon icon='envelope' size={16} />
                        <Text style={styles.label}>  mailtoshivamk@gmail.com</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        justifyContent: 'space-evenly'
    },
    container: {
        marginTop: 50
    },
    info: {
        alignItems: 'center'
    },
    contact: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        fontSize: 16
    }
});

ProfileScreen.navigationOptions = {
    title: 'Profile',
    tabBarIcon: <FontAwesomeIcon icon='user-alt' size={20} />
}

export default ProfileScreen;
