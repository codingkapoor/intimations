import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const ProfileScreen = () => {
    return (
        <View style={styles.parent}>
            <View style={styles.info}>
                <View style={styles.contact}>
                    <FontAwesomeIcon icon='id-badge' size={16} />
                    <Text style={styles.label}>  128</Text>
                </View>
                <Text style={{ fontSize: 20, marginTop: 10 }}>Shivam Kapoor</Text>
                <Text style={{ fontSize: 20, marginBottom: 10 }}>Sr. Big Data Developer</Text>
                <View style={styles.contact}>
                    <Text style={styles.label}>@glassbeam </Text>
                    <FontAwesomeIcon icon='business-time' size={16} />
                    <Text style={styles.label}> Jan </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 16, lineHeight: 30 }}>16</Text>
                        <Text style={{ fontSize: 11, lineHeight: 18 }}>th</Text>
                    </View>
                    <Text>, 2017</Text>
                </View>
                <View style={styles.contact}>
                    <FontAwesomeIcon icon='map-marker-alt' size={16} />
                    <Text style={styles.label}>  Bangalore, India</Text>
                </View>
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
