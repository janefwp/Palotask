import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { hospitalListReducer,illnessListReducer, userInfoReducer} from './reducers/appReducers'


const reducer =combineReducers({
    hospitalList: hospitalListReducer,
    illnessList: illnessListReducer,
    userInfo: userInfoReducer
})

const illnessItemFromStorage = localStorage.getItem('illnessItem') ?
    JSON.parse(localStorage.getItem('illnessItem')) : {}

const hospitalIdFromStorage = localStorage.getItem('hospitalId') ?
    JSON.parse(localStorage.getItem('hospitalId')) : 1


const severityLevelFromStorage = localStorage.getItem('severityLevel') ?
    JSON.parse(localStorage.getItem('severityLevel')) : 0

const userformInfoFromStorage = localStorage.getItem('userformInfo') ?
    JSON.parse(localStorage.getItem('userformInfo')) : {}


const initialState ={
    userInfo: {
        illnessItem: illnessItemFromStorage,
        severityLevel: severityLevelFromStorage,
        hospitalId: hospitalIdFromStorage,
        userformInfo: userformInfoFromStorage,
    }
}
const middleware=[thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store