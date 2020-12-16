import styled from 'styled-components/native';
import { BadgeColor } from '../../common/Constants';

export const SectionWrapper = styled.View`
    margin-bottom: 10px; 
    justify-content: center;
`;

export const SectionDateWrapper = styled.View`
    flex-direction: row; 
    justify-content: center; 
    align-items: center; 
    margin-top: 20px;
`;

export const HeaderWrapper = styled.View`
    justify-content: center;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    padding: 10px;
    padding-left: 15px;
    border-radius: 10px;
    background-color: #EFF0F8;
`;

export const TitleWrapper = styled.View`
    flex-direction: row; 
    justify-content: space-between; 
    align-items: center;
`;

export const Name = styled.Text`
    font-family: open-sans-regular;
    font-size: 18px;
    padding-bottom: 2px;
`;

export const Reason = styled.Text`
    font-family: montserrat-light;
    font-size: 16px;
    padding-bottom: 5px;
    margin-bottom: 5px;
    margin-top: 8px;
`;

export const BadgeWrapper = styled.View`
    flex-direction: row; 
    align-items: center;
    justify-content: center;
`;

export const StyledBadge = styled.View`
    width: 10px;
    height: 10px;
    border-radius: 2px;
    border-width: 1px;
    border-color: ${props => BadgeColor[props.half]}; 
    margin: 1px;
    background-color: ${props => BadgeColor[props.half]};
`;

export const NoActivityWrapper = styled.View`
    align-items: center;
    margin-top: 200px;
`;

export const NoActivityLabel = styled.Text`
    font-family: open-sans-light;
    color: #E2E2E2;
    font-size: 16px; 
`;
