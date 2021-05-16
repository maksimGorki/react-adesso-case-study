import { takeLatest, put, all, delay } from "redux-saga/effects";

const actionTypes = {
  fetchData: "FETCH_DATA",
  filterData: "FILTER_DATA",
};

const actionTypesAsync = {
  fetchDataAsync: "FETCH_DATA_ASYNC",
  filterDataAsync: "FILTER_DATA_ASYNC",
};

function* fetchDataAsync(action) {
  yield put({ type: actionTypesAsync.fetchDataAsync, url: action.url });
}

function* filterDataAsync(action) {
  yield delay(100); // debouncing filter
  yield put({
    type: actionTypesAsync.filterDataAsync,
    age: action.currentAge,
    wood: action.wood,
    food: action.food,
    gold: action.gold,
  });
}

export function* rootSaga() {
  yield all([
    takeLatest(actionTypes.filterData, filterDataAsync),
    takeLatest(actionTypes.fetchData, fetchDataAsync),
  ]);
}

export default rootSaga;
