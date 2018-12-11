import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import FetchDayData from "../Actions/FetchDayData";
import DayCard from "./DayCard";

class DayContainer extends Component {

    componentDidMount() {
        this.props.FetchDayData();
    }

    renderDayCards() {
        let dayCards = [];
        const {day} = this.props;
        if (day.data && day.data.length !== 0) {
            let pages = day.data.query.pages;
            let extract = pages[Object.keys(pages)[0]].extract;
            let dayTitle, eventsTitle, eventsContent, birthsTitle,
                birthsContent, deathsTitle, deathsContent, holidaysTitle, holidaysContent;

            extract.split('==').map((value) => value.trim()).forEach((block, index) => {
                switch (index) {
                    case 0:
                        dayTitle = block;
                        break;
                    case 1:
                        eventsTitle = block;
                        break;
                    case 2:
                        eventsContent = block;
                        break;
                    case 3:
                        birthsTitle = block;
                        break;
                    case 4:
                        birthsContent = block;
                        break;
                    case 5:
                        deathsTitle = block;
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
                dayCards.push(<DayCard year={year} event={event}/>);
            });
        }
        return dayCards;
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