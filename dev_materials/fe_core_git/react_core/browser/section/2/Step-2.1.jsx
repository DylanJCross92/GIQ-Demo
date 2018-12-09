import React from 'react';
import { connect } from 'react-redux'
import TermNames from '../../frontendOptions/termNames'
import { Fields, reduxForm } from 'redux-form';

import ForwardArrow from '../buttons/ForwardArrow.jsx'
import BackArrow from '../buttons/BackArrow.jsx'
import NavigationWarning from '../../popups/NavigationWarning.jsx'
import Loading from '../../popups/Loading.jsx'


import step2Validation from '../../validators/step2Validation.js'
import parse from '../../utils/parse.js'

import { submitUpdate } from '../../reducers/defaultData.jsx'
import { dispatchSetPageId } from '../../reducers/session.jsx'
import renderFields from './renderFields2.1.jsx'

import 'pikaday/css/pikaday.css'


const fieldNames = [
    TermNames.CurrentInsurance,
    TermNames.PriorCarrierNumber,
    TermNames.PriorCarrierOther,
    TermNames.PriorExpirationDate,
    TermNames.PriorCoverageA,
    TermNames.NumberOfClaims]




export function Step_2_1 ({dropdownMenus,
                              Product_State,
                              Insurance_Product,
                              handleSubmit,
                              onSubmit,
                                location,
                                pristine,
                                navWarning,
                                isLoadingQuote}){

    return (
        <div className="left">



            <form name="FORM" onSubmit={handleSubmit(onSubmit)}>
                <BackArrow location={location} pristine={pristine} />
                <div className="content-wrapper">
                    <h1>Current Home Insurance</h1>

                    <div className="return-wrapper"></div>


                        <Fields names={fieldNames}
                                component={renderFields}
                                parse={parse}
                                dropdownMenus={dropdownMenus}
                                Product_State={Product_State}
                                Insurance_Product={Insurance_Product} />


                </div>
                <ForwardArrow formName='FORM' nextPage='/section=2&step=2.1'/>
            </form>
            {navWarning ? <NavigationWarning location={location} /> : null}
            {isLoadingQuote && <Loading message={"Calculating..."} /> }
        </div>
    )
}

const Step_2_1Form = reduxForm( {
    form:'FORM',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,


    validate: step2Validation

})(Step_2_1)

const mapState = (state) => {
    return {
        dropdownMenus: state.config.dropdownMenus,
        Product_State: state.config.Product_State,
        Insurance_Product: state.config.Insurance_Product,
        initialValues: state.defaultData,
        navWarning : state.popups.navWarning,
        isLoadingQuote: state.popups.isLoadingQuote
    }
}

export default connect(mapState, {onSubmit: submitUpdate, dispatchSetPageId })(Step_2_1Form)