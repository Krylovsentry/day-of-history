import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({
    cardContainer: {
        display: 'flex',
        marginBottom: 20,
        borderBottomColor: '#d6e0e5',
        borderBottomWidth: 3,
        padding: 25
    },
    yearContent: {
        textAlign: 'center',
        fontSize: 13,
        fontWeight: '400',
        paddingBottom: 10,
        paddingTop: 5
    },
    eventContent: {
    }
});

const {cardContainer, yearContent, eventContent} = styles;

//use new js reconstruction for props, more readable way
const DayCard = ({year, event}) => {
    return (
        <View style={cardContainer}>
            <Text style={yearContent}>{year}</Text>
            <Text style={eventContent}>{'\t'}{event}</Text>
        </View>
    );
};

export default DayCard;