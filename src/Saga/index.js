import { takeLatest } from "redux-saga/effects";
import commentSaga from "./commentSaga";

function* rootSaga() {
  yield takeLatest("INIT_LOAD_COMMENTS", commentSaga);
}

export default rootSaga;
