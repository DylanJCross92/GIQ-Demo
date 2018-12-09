import React from 'react';
import { connect } from 'react-redux'
import TermNames from '../../frontendOptions/termNames'
import { Fields, reduxForm } from 'redux-form';

import ForwardArrow from '../buttons/ForwardArrow.jsx'
import BackArrow from '../buttons/BackArrow.jsx'
import NavigationWarning from '../../popups/NavigationWarning.jsx'
import Loading from '../../popups/Loading.jsx'


import parse from '../../utils/parse.js'

import step4Validation from '../../validators/step4Validation.js'
import renderFields from './renderFields4.1.jsx'

import { submitUpdate, dispatchSetDataFields, submitQuote } from '../../reducers/defaultData.jsx'
import { dispatchSetIsSaving } from '../../reducers/popups.jsx'

const fieldNames = [
    TermNames.MultiPolicy,
    TermNames.AutoPolicyNumber,
    TermNames.PrimeTimeDiscount,
    TermNames.Insured1BirthDate,
    TermNames.Insured1SSN,
    //Insured1SSNRequiredIndicator: "Insured1SSN", //Note: not a form on front-end
    TermNames.InsuredEmailAddress,
    TermNames.FireAlarm,
    TermNames.BurglarAlarm,
    TermNames.Sprinklers,
    TermNames.AcceptLegalTerms]



export function Step_4_1 ({dropdownMenus,
                              Product_State,
                              Insurance_Product,
                              change,
                              onSubmit,
                              handleSubmit,
                              dispatchSetDataFields,
                              dispatchSetIsSaving,
                              isSaving,
                              location,
                              navWarning,
                              isLoadingQuote,
                                maskedSSN}){

    return (
        <div className="left">

            <form name="FORM" onSubmit={handleSubmit(onSubmit)}>
                <BackArrow location={location} />

                <div className="content-wrapper">
                    <div className="return-wrapper"></div>


                    <Fields names={fieldNames}
                            component={renderFields}
                            dropdownMenus={dropdownMenus}
                            Product_State={Product_State}
                            Insurance_Product={Insurance_Product}
                            change={change}
                            dispatchSetDataFields={dispatchSetDataFields}
                            dispatchSetIsSaving={dispatchSetIsSaving}
                            parse={parse}
                            maskedSSN={maskedSSN}
                             />

                </div>


                <div className="tb-15-margin remove-margin-b" style={{textAlign:'center'}}>
                    <button className="button orange large" type="submit" >Get Quote</button>
                </div>
            </form>
            {navWarning ? <NavigationWarning location={location} /> : null}

            {isSaving ? <Loading message={"Saving..."} styles={{
                maxHeight: 351,
                height: 'auto',
                overflowY: 'auto',
                overflowX: 'hidden',
                 // marginTop: -75.5,
                 // marginLeft: -157
            }
            } /> : null}
            {isLoadingQuote && <Loading message={"Calculating..."} /> }


        </div>
    )
}

const Step_4_1Form = reduxForm( {
    form:'FORM',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: step4Validation,
    enableReinitialize: true,
    // keepDirtyOnReinitialize: true

})(Step_4_1)

const mapState = (state) => {
    return {
        dropdownMenus: state.config.dropdownMenus,
        Product_State: state.config.Product_State,
        Insurance_Product: state.config.Insurance_Product,
        initialValues: state.defaultData,
        isSaving: state.popups.isSaving,
        navWarning : state.popups.navWarning,
        isLoadingQuote: state.popups.isLoadingQuote,
        maskedSSN: state.session.maskedSSN



    }
}

const mapDispatch = {
    onSubmit: submitQuote,
    dispatchSetDataFields,
    dispatchSetIsSaving
}

export default connect(mapState, mapDispatch)(Step_4_1Form)