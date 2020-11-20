import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchListings } from '../../actions/listing_actions';
import SearchForm from './search_form';


// const mapStatetoProps = state => ({
//   state: state.ui.query
// })

const mapDispatchtoProps = dispatch => ({
  fetchListings: () => dispatch(fetchListings())
})

export default withRouter(connect(null, mapDispatchtoProps)(SearchForm))