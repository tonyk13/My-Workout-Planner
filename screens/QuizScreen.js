import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import QuestionState from "./quiz/QuestionState";
import TouchableButton from "../components/TouchableButton";

const QuizScreen = props => {
    const changeState = (newState) => {
        setActiveState(newState);

        // Update UI
        setDynamicColors({
            correct: newState.getCorrectAnswerColor(),
            wrong: newState.getWrongAnswerColor(),
            nextButton: newState.getNextButtonColor(),
        });
    }

    const [activeState, setActiveState] = React.useState(new QuestionState(changeState));

    const [dynamicColors, setDynamicColors] = React.useState({
        correct: activeState.getCorrectAnswerColor(),
        wrong: activeState.getWrongAnswerColor(),
        nextButton: activeState.getNextButtonColor(),
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>What is Laravel?</Text>

            <View style={styles.answers}>
                <TouchableButton
                    title="PHP framework"
                    style={{backgroundColor: dynamicColors.correct}}
                    onClickHandler={() => {
                        activeState.answerClickHandler();
                    }}
                />

                <TouchableButton
                    title="Programming language"
                    style={{backgroundColor: dynamicColors.wrong}}
                    onClickHandler={() => {
                        activeState.wrongAnswerClickHandler();
                    }}
                />

                <TouchableButton
                    title="Graphics library"
                    style={{backgroundColor: dynamicColors.wrong}}
                    onClickHandler={() => {
                        activeState.wrongAnswerClickHandler();
                    }}
                />
            </View>
​
            <TouchableButton
                title="Next question"
                style={{backgroundColor: dynamicColors.nextButton}}
                onClickHandler={() => {
                    activeState.nextQuestionHandler();
                }}
            />
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
    title: {
        fontSize: 16,
        marginBottom: 30
    },
    answers: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 30
    }
});

export default QuizScreen;