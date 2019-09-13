import { connect } from 'react-redux';
import { getSocialPost } from '../../actions/socialpost';
import Widget from './Widget';

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = {
  getSocialPost
};

export default connect(mapStateToProps, mapDispatchToProps)(Widget);
