import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const TouchableButton = props => {
    return (
        <TouchableOpacity style={[styles.button, props.style]}
            onPress={() => {
                props.onClickHandler()
            }}
        >
            <Text style={[styles.buttonText, props.textStyle]}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'deepskyblue',
        padding: 10,
        margin: 10,
        width: '80%'
    },
    buttonText: {
        color: 'white'
    }
});

export default TouchableButton;