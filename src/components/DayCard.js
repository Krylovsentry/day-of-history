import React from 'react';
import {Text, View} from "react-native";

const styles = StyleSheet.create({
    cardContainer: {
        display: 'flex',
        bold: {
            fontWeight: 'bold'
        }
    }
});

const {cardContainer} = styles;

//use new js reconstruction for props, more readable way
const DayCard = (props) => {
    return (
        <View style={cardContainer}>
            <Text>Year</Text>
            <Text>Event</Text>
        </View>
    );
};

export default DayCard;