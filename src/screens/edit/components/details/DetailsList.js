import React, { Component } from 'react';
import { FlatList } from 'react-native';

import Details from './Details';

class DetailsList extends Component {

    constructor(props) {
        super(props);
        this.state = { inactiveRequestDate: null, details: new Map(), timeouts: [] };
    }

    inactiveRequestDateSelected = inactiveRequestDate => {
        this.setState({ ...{ inactiveRequestDate } });

        const res = this.props.inactiveIntimations.filter(ii => ii.requests.filter(r => r.date === inactiveRequestDate).length > 0);
        if (res.length > 0) {
            const id = res[0].id;
            const firstDate = res[0].requests[0].date;
            const lastDate = res[0].requests[res[0].requests.length - 1].date;
            const reason = res[0].reason;

            this.setState({ ...{ details: new Map([...this.state.details, ...new Map([[id, { firstDate, lastDate, reason }]])]) } });

            const t = setTimeout(() => {
                const details = new Map([...this.state.details]);
                if (details.delete(id))
                    this.setState({ ...{ details } });
            }, 10000);

            this.setState({ ...{ timeouts: [...this.state.timeouts, t] } });
        }
    }

    componentWillUnmount() {
        this.state.timeouts.forEach(clearTimeout);
    }

    render() {
        return (
            this.state.details ?
                <FlatList
                    data={Array.from(this.state.details.values()).reverse()}
                    style={{ marginBottom: 15 }}
                    renderItem={({ item }) =>
                        <Details firstDate={new Date(item.firstDate)} lastDate={new Date(item.lastDate)} reason={item.reason} />
                    }
                    flexGrow={0}
                    keyExtractor={item => item.firstDate}
                /> :
                null
        );
    }
}

export default DetailsList;
