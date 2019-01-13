import {connect} from "react-redux";
import View from './view';
import apiCall from '../utility/apiCall';

const mapStateToProps = (state = {}) => 
  ({
    repositories: state.repositories,
    userInfo: state.user
  });


export default connect(mapStateToProps, {apiHandler: apiCall})(View);
