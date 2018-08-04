import {MENUS, RECORDS} from '../mock/mock';

const ADD_MENU = "ADD_MENU";
const UPDATE_MENU_INDEX = "UPDATE_MENU_INDEX";

const ADD_RECORD = "ADD_RECORD";
const UPDATE_RECORD = "UPDATE_RECORD";
const DELETE_RECORD = "DELETE_RECORD";
export default function (state, action) {
    if (!state) {
        state = {
            menus: MENUS,
            records: RECORDS,
            curIndex: 0
        }
    }

    switch (action.type) {
        case UPDATE_MENU_INDEX:
            return Object.assign({}, state, {
                curIndex: action.curIndex,
            });
        case ADD_MENU:
            state.menus = [...state.menus, action.menu];
            state.curIndex = state.menus.length - 1;
            return Object.assign({}, state);
        case ADD_RECORD:
            state.records = [...state.records, action.record];
            state.menus[state.curIndex].count++;
            return Object.assign({}, state);
        case UPDATE_RECORD:
            state.records.filter(record => record.id === action.id)[0] = action.record;
            return Object.assign({}, state);
        case DELETE_RECORD:
            const point = state.records.findIndex(record => record.id === action.id);
            state.records = [...state.records.slice(0, point), ...state.records.slice(point + 1)];
            return Object.assign({}, state);
        default:
            return state;
    }
}


export const addMenu = (menu) => {
    return {type: ADD_MENU, menu}
};

export const updateMenuIndex = (curIndex) => {
    return {type: UPDATE_MENU_INDEX, curIndex}
};


export const addRecord = (record) => {
    return {type: ADD_RECORD, record}
};

export const updateRecord = (id, record) => {
    return {type: UPDATE_RECORD, id, record}
};

export const deleteRecord = (id) => {
    return {type: DELETE_RECORD, id}
};



