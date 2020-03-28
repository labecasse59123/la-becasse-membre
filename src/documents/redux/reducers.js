import {
    DOCUMENT_FETCH,
    DOCUMENT_FETCH_SUCCESS,
    DOCUMENT_FETCH_ERROR,
} from './types';

const INITIAL_STATE = {
    waiting: true,
    documents: [],
};

const documentReducer = (state = INITIAL_STATE, { type, err, value }) => {
    switch (type) {
      case DOCUMENT_FETCH:
          return {
              ...state,
              waiting: true,
          }
      case DOCUMENT_FETCH_ERROR:
        return {
          ...state,
          waiting: false,
          err,
        };
      case DOCUMENT_FETCH_SUCCESS:
        return {
          documents: value,
          waiting: false,
        };
      default:
        return {
          ...state,
        };
    }
  };
  
  export default documentReducer;
