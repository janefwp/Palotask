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
    SET_USERFORM_INFO,

} from '../constants/appConstants'

export const hospitalListReducer = (state={hospitals:[]},action) => {
    switch(action.type) {
        case HOSPITAL_LIST_REQUEST:
            return {loading:true, hospitals: []}
        case HOSPITAL_LIST_SUCCESS:           
            return {
                loading:false, 
                hospitals: action.payload, 
            }
        case HOSPITAL_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const illnessListReducer = (state={illnesses:[]},action) => {

    switch(action.type) {
        case ILLNESS_LIST_REQUEST:
            return {loading:true, illnesses: []}
        case ILLNESS_LIST_SUCCESS:
            return {
                loading:false, 
                illnesses: action.payload._embedded.illnesses, 
            }
        case ILLNESS_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const illnessInfoReducer =(state={ illnessItem:[],loading:false }, action) => {
    switch (action.type) {
        case SET_ILLNESS_ITEM:
            return{
                ...state,
                illnessItem: action.payload
            }
        case SET_ILLNESS_SEVERITY:
            return{
                ...state,
                severityLevel: action.payload
            }
        case SET_HOSPITAL_ITEM:
            return{
                ...state,
                hospitalId: action.payload
            }
        case SET_USERFORM_INFO:
            return{
                ...state,
                userformInfo: action.payload
            }
        case SAVE_USERINFO_TO_DATABASE_REQUEST:
            return {
                    loading:true
            }
        case SAVE_USERINFO_TO_DATABASE_SUCCESS:
            return {
                    loading: false,
                    success: true,
            
            }
        case SAVE_USERINFO_TO_DATABASE_FAIL:
            return {
                    loading: false,
                    error: action.payload            
            }
        default:
            return state
    }
}

