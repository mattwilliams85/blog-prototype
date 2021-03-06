import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  fetchPosts,
  incrementAsync
} from '../redux/actions/home'
import { Home } from '../components/home'

const mapStateToProps = state => ({
  posts: state.home.posts,
  isIncrementing: state.home.isIncrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPosts,
  incrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
