import { call, put } from "redux-saga/effects";

import { loadComments } from "../Actions/actions";
import fetchComments from "../services";

function* commentSaga(action) {
  const data = yield call(fetchComments);
  yield put(loadComments(data));
}

export default commentSaga;
