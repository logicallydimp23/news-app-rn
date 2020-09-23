import * as types from "./action-types"

interface Action {
  type: string,
  payload: any,
}

interface ReducerState {
  data: [],
  fetching: boolean,
}

const initialState: ReducerState = {
  data: [],
  fetching: false,
}

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case types.FETCH_NEWS_REQUEST:
      return {
        ...state,
        fetching: true,
      }
    case types.FETCH_NEWS_SUCCESS:
      return {
        ...state,
        data: action.payload.list,
        fetching: false,
      }
    case types.FETCH_NEWS_FAILED:
      return {
        ...state,
        fetching: false,
      }
    default:
      return state;
  }
}
