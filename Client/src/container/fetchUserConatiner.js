import FetchUsersComponent from '../components/fetchUser';
import { connect } from 'react-redux';
import fetchUsers from '../actions/FetchUser';

const mapStateToProps = (state) => {

    return {
        data: state
    }
}


const mapDispatchToProps = (dispatch) => {

    return {
        fetchUser: () => {
            dispatch(fetchUsers());
        }
    }

}

const fetchuserContainer = connect(
    mapStateToProps, mapDispatchToProps

)(FetchUsersComponent)


export default fetchuserContainer;