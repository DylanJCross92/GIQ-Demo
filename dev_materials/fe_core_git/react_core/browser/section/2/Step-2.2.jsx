import React from 'react';
import { connect } from 'react-redux'
import TermNames from '../../frontendOptions/termNames'
import { Fields, reduxForm, Form, focus } from 'redux-form';

import ForwardArrow from '../buttons/ForwardArrow.jsx'
import BackArrow from '../buttons/BackArrow.jsx'
import NavigationWarning from '../../popups/NavigationWarning.jsx'
import Loading from '../../popups/Loading.jsx'


import parse from '../../utils/parse.js'
import { submitUpdate } from '../../reducers/defaultData.jsx'
import step2Validation from '../../validators/step2Validation.js'
import renderFields from './renderFields2.2.jsx'

import 'pikaday/css/pikaday.css'

const fieldNames = [
    TermNames.LossDate1,
    TermNames.LossAmount1,
    TermNames.LossType1,
    TermNames.LossCatIndicator1,
    TermNames.LossDescription1,
    TermNames.LossDate2,
    TermNames.LossAmount2,
    TermNames.LossType2,
    TermNames.LossCatIndicator2,
    TermNames.LossDescription2,
    TermNames.LossDate3,
    TermNames.LossAmount3,
    TermNames.LossType3,
    TermNames.LossCatIndicator3,
    TermNames.LossDescription3,
]



export function Step_2_2({dropdownMenus,
                             Product_State,
                             Insurance_Product,
                             handleSubmit,
                             onSubmit,
                             NumberOfClaims,
                            location,
                         pristine,
                         navWarning,
                         focus,
                         dispatch,
                             isLoadingQuote}) {
    return (
        <div className="left">
            <form name="FORM" onSubmit={handleSubmit(onSubmit)}>
                <BackArrow location={location} />

                <div className="content-wrapper">
                    <div className="return-wrapper"></div>


                    <Fields names={fieldNames}
                            component={renderFields}
                            parse={parse}
                            dropdownMenus={dropdownMenus}
                            Product_State={Product_State}
                            Insurance_Product={Insurance_Product}
                            NumberOfClaims={NumberOfClaims}
                            focus={focus}
                            dispatch={dispatch}/>

                </div>
                <ForwardArrow formName='FORM' nextPage='/section=2&step=2.1'/>
            </form>
            {navWarning ? <NavigationWarning location={location} /> : null}
            {isLoadingQuote && <Loading message={"Calculating..."} /> }
        </div>
    )
}

const Step_2_2Form = reduxForm( {
    form:'FORM',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true



})(Step_2_2)

const mapState = (state) => {
    return {
        dropdownMenus: state.config.dropdownMenus,
        Product_State: state.config.Product_State,
        Insurance_Product: state.config.Insurance_Product,
        initialValues: state.defaultData,
        NumberOfClaims: state.defaultData.NumberOfClaims,
        validate: step2Validation,
        navWarning : state.popups.navWarning,
        isLoadingQuote: state.popups.isLoadingQuote
    }
}

export default connect(mapState, {onSubmit: submitUpdate, focus})(Step_2_2Form)