import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {loadQuestions} from '../store/questions/actions';
import Pagination from './Pagination';
import Question from './Question';
class Questions extends React.Component {
    componentDidMount = () => {
        this.props.loadQuestions();
      }

    render = () =>{
        const { questions } = this.props
        return (<div>
             <Link to={`/home`}>go home</Link>
             <button onClick={() => console.log(this.props)}>Show props</button>
            <Question questions={questions.data.list} loading={false} />
            <Pagination totalItems={questions.data.total} pageCount={1} />
        </div>);
    };
}

function mapStateToProps(state){
    return {
      questions: state.questions
    }
}

export default connect(mapStateToProps, (dispatch) => bindActionCreators({loadQuestions}, dispatch))(Questions);