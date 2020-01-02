import React from 'react';
import {connect} from 'react-redux';
class Home extends React.Component {
    render = () =>{
        const { data } = this.props;
        return (<div>Home page
        <button onClick={() => console.log(data)}>console data</button> 
        </div>);
    };
}

function mapStateToProps(state){
    return {
      data: state
    }
}

export default connect(mapStateToProps)(Home);