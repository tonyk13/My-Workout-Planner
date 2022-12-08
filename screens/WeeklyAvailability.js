import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import * as topicActions from '../store/actions/topicActions';
import topics from "../data/dummy/topics";
import Counter from "react-native-counters";

const WeeklyAvailability = props => {
    const dispatch = useDispatch();

    const availableTopics = topics;
    const userTopics = useSelector(state => state.topics);

    const topicList = availableTopics.map(availableTopic => {
        return {
            model: availableTopic,
            isLearning: userTopics.filter((userTopic) => {
                return userTopic.id === availableTopic.id;
            }).length > 0
        };
    });

    const handleOnSelect = (topicId) => {
        dispatch(topicActions.addTopic(topicId));
    }

    const handleOnRemove = (topicId) => {
        dispatch(topicActions.removeTopic(topicId));
    }

    function onChange(number, type) {
        console.log(number, type); // 1, + or -
    }

    return (
        <View style={styles.container}>
            <View style={styles.availableTopics}>
                <Text style={styles.title}>How many days per week?</Text>
                <Counter 
                    max={6} 
                    min={3} 
                    start={3} 
                    onChange={onChange.bind(this)} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    availableTopics: {
        flex: 1,
        margin: 20
    },
    title: {
        fontSize: 18,
        paddingVertical: 10
    }
});

export default WeeklyAvailability;