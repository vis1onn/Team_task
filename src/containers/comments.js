import React from 'react';
import { connect } from 'react-redux';
import Comments from '../components/Comments'
import {showComments, addComment} from '../app/actions/comments'

function mapDispatchToProps(dispatch){
    return {
        addComment: (comment, id) => dispatch(addComment(comment, id))
    }
}


const mapStateToProps = (state) => {
    return{
        comments: state.comments.comments
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);