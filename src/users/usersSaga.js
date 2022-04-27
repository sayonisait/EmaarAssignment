
import { call, put, takeEvery } from 'redux-saga/effects';
import client from '../api/client';
import { fetchUsersSuccess } from './usersSlice';

function* workFetchUsers({payload}) {
    const response = yield call(() => client.get('', {
        params: {
            results: 100,
            page: payload
        }
    }));
    const users = response.data.results;
    console.log(users);
    yield put(fetchUsersSuccess(users))
}

function* usersSaga() {
    yield takeEvery('users/fetchUsers', workFetchUsers);
}

export default usersSaga;