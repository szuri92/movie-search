import { call, put, select, takeLatest} from 'redux-saga/effects'
import { getMovies } from '../service/api'

import * as actionTypes from './actionTypes'
import * as actionCreators from './actionCreators'

export function* requestMovies () {
    try {
        const query = yield select(state => state.movies.searchQuery)
        const data = yield call(getMovies, query )
        yield put(actionCreators.receiveMovies(data))
    } catch (err) {
        throw err
    }
}

export default function* rootSaga() {
    yield takeLatest(actionTypes.REQUEST_MOVIES, requestMovies)
}