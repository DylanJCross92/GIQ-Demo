import React from 'react';
import { connect } from 'react-redux'
import TermNames from '../../frontendOptions/termNames'
import { Fields, reduxForm } from 'redux-form';

import ForwardArrow from '../buttons/ForwardArrow.jsx'
import step1Validation from '../../validators/step1Validation.js'
import Landing from './Landing.jsx'
import VerifyAddress from '../../popups/VerifyAddress.jsx'
import Loading from '../../popups/Loading.jsx'
import { addressValidation } from '../../reducers/defaultData.jsx'
import renderFields from './renderFields1.1.jsx'


const fieldNames = [
    TermNames.InsuredFirstName,
    TermNames.InsuredLastName,
    TermNames.PropertyStreetAddress,
    TermNames.PropertyStreetNumber,
    TermNames.PropertyStreetName,
    TermNames.PropertyCity,
    TermNames.PropertyState,
    TermNames.PropertyZipCode,
    TermNames.PropertyUsage,
    TermNames.MonthsUnoccupied,
    'SelectedAddress'
]


export function Step_1_1 (props){
    const {verAddress,
        dropdownMenus,
        Product_State,
        Insurance_Product,
        onLoadPopup,
        change,
        handleSubmit,
        onSubmit,
        submitting,
        error,
        isValidating} = props

    return (
        <div className="left">

            <form name="FORM" onSubmit={handleSubmit(onSubmit)}>
                <div className="back-arrow-wrapper">
                    <div className="loader-display-none"></div>
                    <a className="back-arrow display-none"></a>
                </div>
                <div className="content-wrapper">
                    {error && <h1>This is an error:<strong>{error}</strong></h1>}
                    <div className="return-wrapper"></div>



                        <Fields names={fieldNames}
                                component={renderFields}
                                dropdownMenus={dropdownMenus}
                                Product_State={Product_State}
                                Insurance_Product={Insurance_Product}
                                change={change}/>


                </div>
                <ForwardArrow formName='FORM' nextPage='/section=2&step=2.1' isValidating={isValidating} submitting={submitting}/>
            </form>

            {isValidating && <Loading message={"Please wait while we verify your address."} /> }
            { onLoadPopup ? <Landing /> : null }
            { verAddress == 'single' ? <VerifyAddress /> : null}
            { verAddress == 'multiple' ? <VerifyAddressMultiple /> : null}

        </div>
    )
}

const Step_1_1Form = reduxForm( {
    form:'FORM',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: step1Validation,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true
})(Step_1_1)

const mapState = (state) => {
    return {
        dropdownMenus: state.config.dropdownMenus,
        Product_State: state.config.Product_State,
        Insurance_Product: state.config.Insurance_Product,
        onLoadPopup: state.popups.onLoadPopup,
        initialValues: state.defaultData,
        verAddress: state.session.verAddress,
        isValidating: state.popups.isValidating
    }
}



export default connect(mapState, {onSubmit: addressValidation})(Step_1_1Form)