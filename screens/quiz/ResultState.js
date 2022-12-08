import QuestionState from "./QuestionState";

class ResultState {
    constructor (changeState) {
        this.changeState = changeState;
    }

    getCorrectAnswerColor() {
        return 'green';
    }

    getWrongAnswerColor() {
        return 'red';
    }

    getNextButtonColor() {
        return 'deepskyblue';
    }

    answerClickHandler() {
        //
    }

    wrongAnswerClickHandler() {
        //
    }
  
    nextQuestionHandler() {
        this.changeState(
            new QuestionState(this.changeState)
        );
    }
}

export default ResultState;