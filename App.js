import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {DayContainer, Header} from './src/components';
import Store from "./src/Store";
import Footer from "./src/components/Footer";

export default class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <View>
                    <Header/>
                    <DayContainer/>
                    <Footer/>
                </View>
            </Provider>
        );
    }
};