import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import { reducer as doctorreducer } from './Redux/patient/reducer'
import { reducer as patientreducer } from './Redux/patientdetails/reducer'
import { reducer as collectreducer } from './Redux/collecter/reducer'
import { reducer as doctorappoinment } from './Redux/doctorappoinment/reducer'
import { reducer as productreducer } from './Redux/medicineproducts/reducer'
import { reducer as addtocardreducer } from './Redux/addtocart/reducer'
import thunk from 'redux-thunk'
const rootreducer=combineReducers({doctorreducer,patientreducer,collectreducer,doctorappoinment,productreducer,addtocardreducer})

export const  store=legacy_createStore(rootreducer,applyMiddleware(thunk))