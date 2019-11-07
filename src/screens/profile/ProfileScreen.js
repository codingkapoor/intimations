import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Henry, James, Luke, Oliver } from '../../common/svg-components/avatars';
import { Ellie, Lily, Maya, Zoey } from '../../common/svg-components/avatars';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { SpinnerWrapper } from '../../common/StyledComponents';
import { Wrapper, StyledProfile, IdWrapper, DOJWrapper, DateWrapper, LocationWrapper, ContactInfoWrapper, PhoneWrapper, EmailWrapper, AvatarWrapper, AboutWrapper } from './StyledComponents';
import { Id, Name, Designation, StyledDate, StyledMonth, StyledYear, Company, Ordinal, Location, Phone, Email } from './StyledComponents';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProfileScreen = ({ employeeDetails, navigation }) => {

    if (!employeeDetails.leaves)
        return (
            <SpinnerWrapper>
                <ActivityIndicator size="large" color="#000000" />
            </SpinnerWrapper>
        );

    let id = employeeDetails.id;
    let name = employeeDetails.name;
    let gender = employeeDetails.gender;
    let designation = employeeDetails.designation;
    let city = employeeDetails.location.city;
    let country = employeeDetails.location.country;
    let phone = employeeDetails.contactInfo.phone;
    let email = employeeDetails.contactInfo.email;
    let doj = new Date(employeeDetails.doj);

    return (
        <>
            <AboutWrapper>
                <TouchableOpacity onPress={() => navigation.navigate('About')}>
                    <FontAwesomeIcon icon='info-circle' size={19} style={{ marginTop: 50, textAlign: 'right' }} />
                </TouchableOpacity>
            </AboutWrapper>
            <Wrapper>
                <StyledProfile>
                    <AvatarWrapper>
                        {_getRamdonlyPickedAvator(gender)}
                    </AvatarWrapper>

                    <IdWrapper>
                        <FontAwesomeIcon icon='id-badge' size={18} />
                        <Id>  {id}</Id>
                    </IdWrapper>

                    <Name>{name}</Name>
                    <Designation>{designation}</Designation>

                    <DOJWrapper>
                        <Company>@glassbeam </Company>

                        <FontAwesomeIcon icon='business-time' size={18} />

                        <StyledMonth> {MONTH_NAMES[doj.getMonth()]} </StyledMonth>
                        <DateWrapper>
                            <StyledDate>{doj.getDate()}</StyledDate>
                            <Ordinal>{_getOrdinal(doj.getDate())}</Ordinal>
                        </DateWrapper>
                        <StyledYear>, {doj.getFullYear()}</StyledYear>
                    </DOJWrapper>

                    <LocationWrapper>
                        <FontAwesomeIcon icon='map-marker-alt' size={18} />
                        <Location>  {city}, {country}</Location>
                    </LocationWrapper>

                    <ContactInfoWrapper>
                        <PhoneWrapper>
                            <FontAwesomeIcon icon='phone-square-alt' size={17} />
                            <Phone>  {phone}</Phone>
                        </PhoneWrapper>

                        <EmailWrapper>
                            <FontAwesomeIcon icon='envelope' size={17} />
                            <Email>  {email}</Email>
                        </EmailWrapper>
                    </ContactInfoWrapper>
                </StyledProfile>
            </Wrapper>
        </>
    );
};

ProfileScreen.navigationOptions = {
    header: null
}

const maleAvatars = [<Henry />, <James />, <Luke />, <Oliver />];
const femaleAvatars = [<Ellie />, <Lily />, <Maya />, <Zoey />];

const _getRamdonlyPickedAvator = gender => {
    switch (gender) {
        case 'M':
            return maleAvatars[Math.floor(Math.random() * maleAvatars.length)];
        case 'F':
            return femaleAvatars[Math.floor(Math.random() * femaleAvatars.length)];
        default:
            return null;
    }
}

const _getOrdinal = n => {
    return (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
}

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

export default ProfileScreen;
