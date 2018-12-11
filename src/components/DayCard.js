import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({
    cardContainer: {
        display: 'flex',
        marginBottom: 20,
        borderBottomColor: '#d6e0e5',
        borderBottomWidth: 3,
        padding: 25
    }
});

const {cardContainer} = styles;

//use new js reconstruction for props, more readable way
const DayCard = ({year, event}) => {
    return (
        <View style={cardContainer}>
            <Text>{year}</Text>
            <Text>{event}</Text>
        </View>
    );
};

export default DayCard;