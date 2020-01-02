import React from 'react';
import ReactPaginate from 'react-paginate';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadQuestionsByPage} from '../store/pagination/actions';
class Pagination extends React.Component {
  render = () =>{ 
    const { loadQuestionsByPage, pageCount, totalItems} = this.props
    return (
      <div>
      <ReactPaginate
            pageCount={totalItems}
            onPageChange={(data) => loadQuestionsByPage(data.selected+1)}
            forcePage={pageCount-1}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            containerClassName='pagination'
            pageClassName='page-item'
            pageLinkClassName='page-link'
            activeClassName='active'
            previousLabel='previous'
            nextLabel='next'
            previousClassName='page-item'
            nextClassName='page-item'
            previousLinkClassName='page-link'
            nextLinkClassName='page-link'
            disabledClassName='disabled'
            breakLabel='...'
            breakClassName='page-item'
            breakLinkClassName='page-link'
          />
      </div>
    );
  }
};

function mapStateToProps(state){
  return {
    pageCount: state.pagination.currentPage
  }
}

export default connect(mapStateToProps, (dispatch) => bindActionCreators({loadQuestionsByPage}, dispatch))(Pagination);