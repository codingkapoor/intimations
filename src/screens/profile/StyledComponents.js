import styled from 'styled-components/native';

export const AboutWrapper = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 20px;
`;

export const StyledProfile = styled.View`
    align-items: center;
    justify-content: center;
    padding-top: 10%;
`;

export const AvatarWrapper = styled.View`
    aspect-ratio: 1; 
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    margin-bottom: 7%;
`;

export const IdWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Id = styled.Text`
    font-family: merriweather-light;
    font-size: 16px;
`;

export const Name = styled.Text`
    font-family: merriweather-bold;
    font-size: 20px;
    margin-top: 10px;
`;

export const Designation = styled.Text`
    font-family: quick-sand-light;
    font-size: 20px;
    margin-bottom: 10px;
`;

export const DOJWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Company = styled.Text`
    font-family: merriweather-light;
    font-size: 16px;
`;

export const LocationWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Location = styled.Text`
    font-family: merriweather-light;
    font-size: 16px;
`;

export const ContactInfoWrapper = styled.View`
    margin-top: 12%;
`;

export const PhoneWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Phone = styled.Text`
    font-family: quick-sand-light;
    font-size: 18px;
`;

export const EmailWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 2px;
`;

export const Email = styled.Text`
    font-family: quick-sand-light;
    font-size: 18px;
`;

export const Logout = styled.Text`
    color: white; 
    font-size: 16;
    font-family: open-sans-light;
`;
