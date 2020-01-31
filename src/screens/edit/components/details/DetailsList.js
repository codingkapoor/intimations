import React, { Component } from 'react';

import Details from './Details';

class DetailsList extends Component {

    constructor(props) {
        super(props);
        this.state = { inactiveRequestDate: null };
    }

    inactiveRequestDateSelected = inactiveRequestDate => {
        this.setState({ inactiveRequestDate });
        console.log(this.state);
    }

    render() {
        return <Details firstDate={new Date("2020-01-22")} lastDate={new Date("2020-01-27")} reason="Not feeling well. Will take leave cause YOLO." />
    }
}

export default DetailsList;
