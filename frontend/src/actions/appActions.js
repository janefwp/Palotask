import axios from 'axios'
import {
    HOSPITAL_LIST_REQUEST,
    HOSPITAL_LIST_SUCCESS,
    HOSPITAL_LIST_FAIL,
    ILLNESS_LIST_REQUEST,
    ILLNESS_LIST_SUCCESS,
    ILLNESS_LIST_FAIL,
    SET_ILLNESS_ITEM,
    SET_ILLNESS_SEVERITY,
    SET_HOSPITAL_ITEM,
    SAVE_USERINFO_TO_DATABASE_FAIL,
    SAVE_USERINFO_TO_DATABASE_REQUEST,
    SAVE_USERINFO_TO_DATABASE_SUCCESS,
    SET_USERFORM_INFO

} from '../constants/appConstants'

export const listHospitals = () => async (dispatch) => {
    try {
        dispatch({type: HOSPITAL_LIST_REQUEST})
        const {data} = await axios.get(`http://dmmw-api.australiaeast.cloudapp.azure.com:8080/hospitals`)
        console.log(data)
        dispatch({
            type:HOSPITAL_LIST_SUCCESS,
            payload:data,
        })
    }catch(error) {
        dispatch({
            type: HOSPITAL_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
        
    }

}

export const listIllnesss = () => async (dispatch) => {
    try {
        dispatch({type: ILLNESS_LIST_REQUEST})
        const {data} = await axios.get('http://dmmw-api.australiaeast.cloudapp.azure.com:8080/illnesses')
        console.log(data)
        dispatch({
            type:ILLNESS_LIST_SUCCESS,
            payload:data,
        })
    }catch(error) {
        console.log(error)
        dispatch({
            type: ILLNESS_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
        
    }

}

export const saveIllnessItem = (data) => (dispatch) => {
    dispatch({
        type: SET_ILLNESS_ITEM,
        payload: data,
    })

    localStorage.setItem('illnessItem', JSON.stringify(data))
}



export const saveIllnessseverity = (data) => (dispatch) => {
    dispatch({
        type: SET_ILLNESS_SEVERITY,
        payload: data,
    })

    localStorage.setItem('severityLevel', JSON.stringify(data))
}

export const saveHospitalitem = (data) => (dispatch) => {
    dispatch({
        type: SET_HOSPITAL_ITEM,
        payload: data,
    })

    localStorage.setItem('hospitalId', JSON.stringify(data))
}

export const saveUserformInfo = (data) => (dispatch) => {
    dispatch({
        type: SET_USERFORM_INFO,
        payload: data,
    })

    localStorage.setItem('userformInfo', JSON.stringify(data))
}

export const saveUserInfotoDatabase = (userInfo) => async (dispatch) => {
    try {
        dispatch({type: SAVE_USERINFO_TO_DATABASE_REQUEST})
        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }
        const {data} = await axios.post(
            'api/adduserinfo/',
            userInfo,
            config,
        )
 
        dispatch({
            type:SAVE_USERINFO_TO_DATABASE_SUCCESS,
            payload:data,
        })
    }catch(error) {
        console.log(error)
        dispatch({
            type: SAVE_USERINFO_TO_DATABASE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
        
    }

}