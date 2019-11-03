import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const ProfileScreen = ({employeeDetails}) => {

    if (!employeeDetails.leaves)
        return (
            <View style={styles.spinner}>
                <ActivityIndicator size="large" color="#000000" />
            </View>
        );

    let id = employeeDetails.id;
    let name = employeeDetails.name;
    let designation = employeeDetails.designation;
    let city = employeeDetails.location.city;
    let country = employeeDetails.location.country;
    let phone = employeeDetails.contactInfo.phone;
    let email = employeeDetails.contactInfo.email;
    let doj = new Date(employeeDetails.doj);

    return (
        <View style={styles.parent}>
            <View style={styles.info}>
                <View style={styles.contact}>
                    <FontAwesomeIcon icon='id-badge' size={16} />
                    <Text style={styles.label}>  {id}</Text>
                </View>
                <Text style={{ fontSize: 20, marginTop: 10 }}>{name}</Text>
                <Text style={{ fontSize: 20, marginBottom: 10 }}>{designation}</Text>
                <View style={styles.contact}>
                    <Text style={styles.label}>@glassbeam </Text>
                    <FontAwesomeIcon icon='business-time' size={16} />
                    <Text style={styles.label}> {MONTH_NAMES[doj.getMonth()]} </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 16, lineHeight: 30 }}>{doj.getDate()}</Text>
                        <Text style={{ fontSize: 11, lineHeight: 18 }}>{_getOrdinal(doj.getDate())}</Text>
                    </View>
                    <Text>, {doj.getFullYear()}</Text>
                </View>
                <View style={styles.contact}>
                    <FontAwesomeIcon icon='map-marker-alt' size={16} />
                    <Text style={styles.label}>  {city}, {country}</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.contact}>
                        <FontAwesomeIcon icon='phone-square-alt' size={16} />
                        <Text style={styles.label}>  {phone}</Text>
                    </View>
                    <View style={styles.contact}>
                        <FontAwesomeIcon icon='envelope' size={16} />
                        <Text style={styles.label}>  {email}</Text>
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

const _getOrdinal = n => {
    return (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
  }

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

export default ProfileScreen;
