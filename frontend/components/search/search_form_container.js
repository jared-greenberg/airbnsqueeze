import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchListings } from '../../actions/listing_actions';
import { startQuery } from '../../actions/query_actions';
import SearchForm from './search_form';


const mapStatetoProps = state => {
  return {
  query: {location: "",
          numGuests: 0}
}}

const mapDispatchtoProps = dispatch => {
 return {
  fetchListings: (query) => dispatch(fetchListings(query)),
  startQuery: (query) => dispatch(startQuery(query))
}}

export default withRouter(connect(mapStatetoProps, mapDispatchtoProps)(SearchForm))