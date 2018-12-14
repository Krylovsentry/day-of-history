import React from 'react';
import { View, Text, StyleSheet, Linking} from 'react-native';

const Footer = () => {
    return (
        <View style={footerContainer}>
            <Text style={footer}>
                Made with <Text style="color: #e25555;">&hearts;</Text> by <Text style={{color: 'blue'}}
                                                                                 onPress={() => Linking.openURL('https://twitter.com/krylovsentry')}>
                Krylov Anton
            </Text>
            </Text>
            <Text style={footer}>using English Wikipedia API</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    footerContainer: {
        display: "flex",
        marginBottom: 15,
        alignItems: "center",
    },
    footer: {
        fontWeight: "bold",
        fontSize: 10,
    }
});

const { footerContainer, footer } = styles;


export default Footer;