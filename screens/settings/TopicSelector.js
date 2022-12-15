import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const TopicSelector = props => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {props.model.title}
            </Text>
            {props.isLearning
                ?
                <TouchableOpacity style={[styles.topicSelect, styles.selectedTopic]}
                    onPress={() => {
                        props.onRemove()
                    }}
                >
                    <Text style={styles.selectedTopicText}>✓ Learning</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={[styles.topicSelect, styles.addTopic]}
                    onPress={() => {
                        props.onSelect()
                    }}
                >
                    <Text style={styles.addTopicText}></Text>
                </TouchableOpacity>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    title: {
        fontSize: 16,
        paddingVertical: 5
    },
    topicSelect: {
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
    },
    selectedTopic: {
        backgroundColor: 'deepskyblue',
        borderColor: 'white',
    },
    selectedTopicText: {
        color: 'white'
    },
    addTopic: {
        backgroundColor: 'white',
        borderColor: 'lightgrey',
    },
    addTopicText: {
        color: 'black'
    },
});

export default TopicSelector;