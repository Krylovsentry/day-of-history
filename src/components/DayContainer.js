import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import FetchDayData from "../Actions/FetchDayData";

class DayContainer extends Component {

    componentDidMount() {
        this.props.FetchDayData();
    }

    render() {
        return (
            <View>
                <Text>Container</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        day: state.day
    }
}

export default connect(mapStateToProps, {FetchDayData})(DayContainer);