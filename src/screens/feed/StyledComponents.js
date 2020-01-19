import styled from 'styled-components/native';
import { BadgeColor } from '../../common/Constants';

export const SectionWrapper = styled.View`
    margin-bottom: 10; 
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
    border-width: 1;
    border-color: #D8DADA;
    border-radius: 10px;
    background-color: white;
`;

export const TitleWrapper = styled.View`
    flex-direction: row; 
    justify-content: space-between; 
    align-items: center;
`;

export const Name = styled.Text`
    font-weight: bold;
    font-size: 18px;
    padding-bottom: 2px;
`;

export const Reason = styled.Text`
    font-size: 16;
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
    width: 10;
    height: 10;
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
    color: #E2E2E2;
    font-size: 16px; 
`;
