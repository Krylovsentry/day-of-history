import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import FetchDayData from "../Actions/FetchDayData";
import DayCard from "./DayCard";
import Spinner from 'react-native-loading-spinner-overlay';
import Accordion from "react-native-collapsible/Accordion";

class DayContainer extends Component {

    SECTIONS = [];

    dayTitle;

    state = {
        activeSections: [],
    };

    componentDidMount() {
        this.props.FetchDayData();
    }

    renderDayCards() {
        const {day} = this.props;
        if (day.data && day.data.length !== 0) {
            let pages = day.data.query.pages;
            let extract = pages[Object.keys(pages)[0]].extract;
            let eventsTitle, eventsContent, birthsTitle,
                birthsContent, deathsTitle, deathsContent, holidaysTitle, holidaysContent;
            let eventsSection, birthsSection, deathsSection;

            extract.split('==').map((value) => value.trim()).forEach((block, index) => {
                switch (index) {
                    case 0:
                        this.dayTitle = block;
                        break;
                    case 1:
                        eventsTitle = block;
                        eventsSection = {
                            title: eventsTitle,
                            content: []
                        };
                        break;
                    case 2:
                        eventsContent = block;
                        break;
                    case 3:
                        birthsTitle = block;
                        birthsSection = {
                            title: birthsTitle,
                            content: []
                        };
                        break;
                    case 4:
                        birthsContent = block;
                        break;
                    case 5:
                        deathsTitle = block;
                        deathsSection = {
                            title: deathsTitle,
                            content: []
                        };
                        break;
                    case 6:
                        deathsContent = block;
                        break;
                    case 7:
                        holidaysTitle = block;
                        break;
                    case 8:
                        holidaysContent = block;
                        break;
                }
            });
            eventsContent && eventsContent.split('\n').forEach((yearValue) => {
                let [year, event] = yearValue.split('–');
                eventsSection.content.push(<DayCard year={year} event={event}/>);
            });
            birthsContent && birthsContent.split('\n').forEach((yearValue) => {
                let [year, event] = yearValue.split('–');
                birthsSection.content.push(<DayCard year={year} event={event}/>);
            });
            deathsContent && deathsContent.split('\n').forEach((yearValue) => {
                let [year, event] = yearValue.split('–');
                deathsSection.content.push(<DayCard year={year} event={event}/>);
            });
            this.SECTIONS = [eventsSection, birthsSection, deathsSection];
        }
    }

    _renderHeader = section => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.title}</Text>
            </View>
        );
    };

    _renderContent = section => {
        return (
            <View style={styles.content}>
                {section.content}
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({activeSections});
    };

    render() {
        const {day} = this.props;
        if (day.isFetching) {
            return (
                <View>
                    <Spinner
                        visible={day.isFetching}
                        textContent={'Loading...'}
                        textStyle={{color: '#253145'}}
                        animation='fade'
                    />
                </View>
            );
        }
        this.renderDayCards();
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={styles.dayTitle}>{this.dayTitle}</Text>
                <Accordion
                    sections={this.SECTIONS}
                    activeSections={this.state.activeSections}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    onChange={this._updateSections}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    dayTitle: {
        padding: 25,
        fontStyle : 'italic'
    },
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 50
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingTop: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '300',
        marginBottom: 20,
    },
    header: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
    },
    active: {
        backgroundColor: 'rgba(255,255,255,1)',
    },
    inactive: {
        backgroundColor: 'rgba(245,252,255,1)',
    },
    selectors: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selector: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    activeSelector: {
        fontWeight: 'bold',
    },
    selectTitle: {
        fontSize: 14,
        fontWeight: '500',
        padding: 10,
    },
    multipleToggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
        alignItems: 'center',
    },
    multipleToggle__title: {
        fontSize: 16,
        marginRight: 8,
    },
});

const {contentContainer} = styles;

function mapStateToProps(state) {
    return {
        day: state.day
    }
}

export default connect(mapStateToProps, {FetchDayData})(DayContainer);