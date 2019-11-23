import React, { Component } from 'react';
import { Text } from 'react-native';
// import { HolidayContainer, DayContainer, Day, Date, OccasionContainer, Occasion } from '../../../screens/feed/StyledComponents';

// const Holiday = ({ day, date, occasion }) => {
//     return (
//         <HolidayContainer>
//             <DayContainer>
//                 <Day>{day}</Day>
//                 <Date>{date}</Date>
//             </DayContainer>
//             <OccasionContainer>
//                 <Occasion>{occasion}</Occasion>
//             </OccasionContainer>
//         </HolidayContainer>
//     );
// }

// const Holidays = ({ holidays, month, year }) => {


//     <FlatList
//         data={data}
//         renderItem={({ item }) =>
//             <Holiday day={item.day} date={item.date} occasion={item.occasion} />
//         }
//         flexGrow={0}
//         keyExtractor={item => item.occasion}
//     />
// }

// <Holiday day={'SUN'} date={'24'} occasion={"Guru Tegh Bahadur's Martyrdom Day"} />
//             <Holiday day={'WED'} date={'27'} occasion={"National Jukebox Day"} />

class Holidays extends Component {
    constructor(props) {
        super(props);
        let date = new Date();
        this.state = { month: date.getMonth() + 1, year: date.getFullYear() };
    }

    updateMonthYear = (_month, _year) => {
        this.setState({ month: _month, year: _year });
    }

    render() {
        return (
            <Text>{this.state.month}</Text>
        );
    }
}

export default Holidays;
