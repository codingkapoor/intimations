import React, { Component } from 'react';
import { FlatList } from 'react-native';

import Holiday from './Holiday';
import shortid from 'shortid';

class Holidays extends Component {
    constructor(props) {
        super(props);
        let date = new Date();
        this.state = { month: String(date.getMonth() + 1).padStart(2, "0"), year: date.getFullYear(), show: true };
    }

    updateMonthYear = (month, year, show) => {
        this.setState({ month: String(month).padStart(2, "0"), year, show });
    }

    render() {
        if (this.state.show === true && this.props.holidays && this.props.holidays[0][this.state.year] && this.props.holidays[0][this.state.year][this.state.month]) {
            let data = this.props.holidays[0][this.state.year][this.state.month];
            return (
                <FlatList
                    data={data}
                    style={{ marginTop: 10 }}
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
