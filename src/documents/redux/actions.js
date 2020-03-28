import request from '../../services/http';
import {
    DOCUMENT_FETCH,
    DOCUMENT_FETCH_SUCCESS,
    DOCUMENT_FETCH_ERROR,
} from './types';

const fetchDocuments = () => (dispatch) => {
    dispatch({ type: DOCUMENT_FETCH });

    return request.get('/upload/files')
        .then(res => {
            dispatch({ type: DOCUMENT_FETCH_SUCCESS, value: res.body });
        })
        .catch(err => dispatch({ type: DOCUMENT_FETCH_ERROR, err }));
};

export default {
    fetchDocuments,
};
