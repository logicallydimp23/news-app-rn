import { Alert } from "react-native";
import {
  put,
  call,
  takeLatest,
} from "redux-saga/effects";

import * as types from "./action-types";
import { fetchNews } from "./effects";

function* getNews() {
  const data = yield call(fetchNews)
  if (data.status === 200) {
    yield put({
      type: types.FETCH_NEWS_SUCCESS,
      payload: {
        list: data.data.articles,
      },
    })
  } else {
    yield put({
      type: types.FETCH_NEWS_FAILED,
    })
    Alert.alert(
      "Oops",
      "Failed to fetch news.",
    )
  }
}

const newsSaga = [
  takeLatest(types.FETCH_NEWS_REQUEST, getNews),
];

export default newsSaga;
