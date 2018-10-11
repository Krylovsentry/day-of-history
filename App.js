import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {Header, DayContainer} from './src/components';
import Store from "./src/Store";

export default class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <View>
                    <Header/>
                    <DayContainer/>
                </View>
            </Provider>
        );
    }
};