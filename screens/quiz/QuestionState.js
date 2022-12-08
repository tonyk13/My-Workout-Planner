import ResultState from "./ResultState";

const {Alert} = require("react-native");

class QuestionState {
    constructor (changeState) {
        this.changeState = changeState;
    }

    getCorrectAnswerColor() {
        return 'deepskyblue';
    }

    getWrongAnswerColor() {
        return 'deepskyblue';
    }

    getNextButtonColor() {
        return 'white';
    }

    answerClickHandler() {
        Alert.alert('Correct!');

        this.changeState(
            new ResultState(this.changeState)
        );
    }

    wrongAnswerClickHandler() {
        Alert.alert('Wrong answer');

        this.changeState(
            new ResultState(this.changeState)
        );
    }

    nextQuestionHandler() {
        //
    }
}

export default QuestionState;