import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

class DayContainer extends Component {
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

export default connect(mapStateToProps)(DayContainer)