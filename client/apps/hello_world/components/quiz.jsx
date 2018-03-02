import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as quizActions from '../actions/quizActions';
import assets from '../libs/assets';

class Quiz extends React.Component {
  render() {
    return (
      <div className="quiz-container">
        <h1>Quiz</h1>
        <div>
          {this.props.quiz.message}
        </div>
      </div>
    );
  }
}

Quiz.propTypes = {
  quiz: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    quiz: state.quiz
  };
}

export default connect(mapStateToProps)(Quiz);
