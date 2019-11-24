import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Holiday from './Holiday';
import shortid from 'shortid';

class Holidays extends Component {
    constructor(props) {
        super(props);
        let date = new Date();
        this.state = { month: date.getMonth(), year: date.getFullYear() };
    }

    updateMonthYear = (_month, _year) => {
        this.setState({ month: _month, year: _year });
    }

    render() {
        if (this.props.holidays && this.props.holidays[this.state.year] && this.props.holidays[this.state.year][this.state.month]) {
            let data = this.props.holidays[this.state.year][this.state.month];
            return (
                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        <Holiday day={item.Day} date={item.Date} occasion={item.Occasion} />
                    }
                    flexGrow={0}
                    keyExtractor={() => shortid.generate()}
                />
            );
        } else return null;
    }
}

export default Holidays;
