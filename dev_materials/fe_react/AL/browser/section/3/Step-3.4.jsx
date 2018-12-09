import React from 'react';
import { connect } from 'react-redux'
import TermNames from '../../frontendOptions/termNames'
import { Fields, reduxForm } from 'redux-form';

import ForwardArrow from '../buttons/ForwardArrow.jsx'
import BackArrow from '../buttons/BackArrow.jsx'
import NavigationWarning from '../../popups/NavigationWarning.jsx'


import step3Validation from '../../validators/step3Validation.js'
import renderFields from './renderFields3.4.jsx'

import { submitUpdate, dispatchSetDataFields, updateWithCoverageA } from '../../reducers/defaultData.jsx'
import {  } from '../../reducers/popups.jsx'

const fieldNames = [
    TermNames.HomeFeaturesWoodDeck,
    TermNames.HomeFeaturesWoodDeckSF,
    TermNames.HomeFeaturesCompositeDeck,
    TermNames.HomeFeaturesCompositeDeckSF,
    TermNames.HomeFeaturesOpenPorch,
    TermNames.HomeFeaturesOpenPorchSF,
    TermNames.HomeFeaturesGreenhouse,
    TermNames.HomeFeaturesGreenhouseSF,
    TermNames.HomeFeaturesScreenedPorch,
    TermNames.HomeFeaturesScreenedPorchSF,
    TermNames.HomeFeaturesOpenBreezeway,
    TermNames.HomeFeaturesOpenBreezewaySF,
    TermNames.HomeFeaturesScreenedBreezeway,
    TermNames.HomeFeaturesScreenedBreezewaySF]



export function Step_3_4 ({dropdownMenus,
                              Product_State,
                              Insurance_Product,
                              change,
                              onSubmit,
                              handleSubmit,
                              dispatchSetDataFields,
                              homeFeatures,
                              defaultFeatures,
                              location,
                              navWarning}){

    return (
        <div className="left">

            <form name="FORM" onSubmit={handleSubmit(onSubmit)}>
                <BackArrow location={location} />
                <div className="content-wrapper">


                    <Fields names={fieldNames}
                            component={renderFields}
                            dropdownMenus={dropdownMenus}
                            Product_State={Product_State}
                            Insurance_Product={Insurance_Product}
                            change={change}
                            dispatchSetDataFields={dispatchSetDataFields}
                            homeFeatures={homeFeatures}
                            defaultFeatures={defaultFeatures} />

                </div>
                <ForwardArrow formName='FORM' nextPage='/section=3&step=3.3'/>
            </form>
            {navWarning ? <NavigationWarning location={location} /> : null}

        </div>
    )
}

const Step_3_4Form = reduxForm( {
    form:'FORM',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: step3Validation,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true

})(Step_3_4)

const mapState = (state) => {
    return {
        dropdownMenus: state.config.dropdownMenus,
        Product_State: state.config.Product_State,
        Insurance_Product: state.config.Insurance_Product,
        initialValues: state.defaultData,
        homeFeatures: state.homeFeatures.homeFeatures,
        defaultFeatures: state.homeFeatures.defaultFeatures,
        navWarning : state.popups.navWarning



    }
}

const mapDispatch = {
    onSubmit: submitUpdate,
    dispatchSetDataFields
}

export default connect(mapState, mapDispatch)(Step_3_4Form)