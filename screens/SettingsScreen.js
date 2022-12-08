import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import * as topicActions from '../store/actions/topicActions';
import topics from "../data/dummy/topics";
import TopicSelector from "./settings/TopicSelector";

const SettingsScreen = props => {
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

    return (
        <View style={styles.container}>
            <View style={styles.availableTopics}>
                <Text style={styles.title}>Choose muscle groups to target:</Text>

                <FlatList
                    data={topicList}
                    keyExtractor={item => item.model.id}
                    renderItem={({item}) => (
                            <TopicSelector
                                model={item.model}
                                isLearning={item.isLearning}
                                onSelect={() => {
                                    handleOnSelect(item.model.id)
                                }}
                                onRemove={() => {
                                    handleOnRemove(item.model.id)
                                }}
                            />
                        )
                    }/>
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

export default SettingsScreen;