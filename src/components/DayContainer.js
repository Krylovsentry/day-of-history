import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import FetchDayData from "../Actions/FetchDayData";

class DayContainer extends Component {

    componentDidMount() {
        this.props.FetchDayData();
    }

    renderDayCards() {
        const {day} = this.props;
        if (day.data && day.data.length !== 0) {
            let pages = day.data.query.pages;
            let extract = pages[Object.keys(pages)[0]].extract;
            let readyDays = extract.split('==');
        }
    }

    render() {
        return (
            <View>
                {this.renderDayCards()}
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