import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {loadQuestions, loadQuestions2} from '../store/questions/actions';

class Questions extends React.Component {
    render = () =>{
        const { loadQuestions, loadQuestions2, data} = this.props
        return (<div>
            {console.log(data)}
            <Link to={`/home`}>go home</Link>
            <button onClick={() => loadQuestions()}>Do it!</button>
            <button onClick={() => loadQuestions2()}>Do it2!</button>
            <button onClick={() => console.log(data)}>Do it3!</button>
        </div>);
    };
}

function mapStateToProps(state){
    return {
      data: state.questions
    }
}

export default connect(mapStateToProps, (dispatch) => bindActionCreators({loadQuestions, loadQuestions2}, dispatch))(Questions);