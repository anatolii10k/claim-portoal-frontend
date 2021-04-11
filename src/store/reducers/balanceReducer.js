
import {ActionTypes} from '../ActionTypes'

const defaultBal ={
    oldB:0,
    newB:0
};

export const balanceReducer =(state ={
    bal:defaultBal,
    change:false
},action) =>{
     switch(action.type){
         case ActionTypes.USER_BALANCE_START:
             return{
                 ...state
             }
            case ActionTypes.USER_BALANCE_SUCESS:
                return{
                    ...state,
                    bal:action.payload
                }
            case ActionTypes.USER_BALANCE_FAIL:
                return{
                    ...state,
                    bal:0
                }
            case ActionTypes.USER_BALANCE_RELOAD:
                return{
                    ...state,
                    change:action.payload
                }
            default:
              return state
     }
}