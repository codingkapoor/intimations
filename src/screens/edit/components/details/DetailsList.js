import React, { Component } from 'react';

import Details from './Details';

class DetailsList extends Component {

    constructor(props) {
        super(props);
        this.state = { inactiveRequestDate: null, details: new Map() };
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
        }

        console.log(this.state);
    }

    render() {
        return <Details firstDate={new Date("2020-01-22")} lastDate={new Date("2020-01-27")} reason="Not feeling well. Will take leave cause YOLO." />
    }
}

export default DetailsList;
