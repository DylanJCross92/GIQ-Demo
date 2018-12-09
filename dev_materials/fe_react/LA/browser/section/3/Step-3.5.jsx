import React from 'react';
import { connect } from 'react-redux'
import TermNames from '../../frontendOptions/termNames'
import { Fields, reduxForm } from 'redux-form';

import ForwardArrow from '../buttons/ForwardArrow.jsx'
import BackArrow from '../buttons/BackArrow.jsx'
import NavigationWarning from '../../popups/NavigationWarning.jsx'


import step3Validation from '../../validators/step3Validation.js'
import renderFields from './renderFields3.5.jsx'

import { submitUpdate, dispatchSetDataFields } from '../../reducers/defaultData.jsx'
import {  } from '../../reducers/popups.jsx'

const fieldNames = [
    TermNames.Pets,
    TermNames.Dogs,
    TermNames.DistanceFireHydrant,
    TermNames.PoolType,
    TermNames.PoolFence,
    TermNames.DivingBoardSlide,
    TermNames.DivingBoardSlide2,
    TermNames.ImmovablePoolLadder]



export function Step_3_5 ({dropdownMenus,
                              Product_State,
                              Insurance_Product,
                              change,
                              onSubmit,
                              handleSubmit,
                              dispatchSetDataFields,
                              location,
                             navWarning}){

    return (
        <div className="left">

            <form name="FORM" onSubmit={handleSubmit(onSubmit)}>
                <BackArrow location={location} />
                <div className="content-wrapper">
                    <h1>Additional Questions</h1>
                    <div className="return-wrapper"></div>


                    <Fields names={fieldNames}
                            component={renderFields}
                            dropdownMenus={dropdownMenus}
                            Product_State={Product_State}
                            Insurance_Product={Insurance_Product}
                            change={change}
                            dispatchSetDataFields={dispatchSetDataFields}
                             />

                </div>
                <ForwardArrow formName='FORM' nextPage='/section=3&step=3.3'/>
            </form>
            {navWarning ? <NavigationWarning location={location} /> : null}

        </div>
    )
}

const Step_3_5Form = reduxForm( {
    form:'FORM',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: step3Validation,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true

})(Step_3_5)

const mapState = (state) => {
    return {
        dropdownMenus: state.config.dropdownMenus,
        Product_State: state.config.Product_State,
        Insurance_Product: state.config.Insurance_Product,
        initialValues: state.defaultData,
        isSaving: state.popups.isSaving,
        navWarning : state.popups.navWarning




    }
}

const mapDispatch = {
    onSubmit: submitUpdate,
    dispatchSetDataFields
}

export default connect(mapState, mapDispatch)(Step_3_5Form)