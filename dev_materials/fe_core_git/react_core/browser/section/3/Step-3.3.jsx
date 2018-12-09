import React from 'react';
import { connect } from 'react-redux'
import TermNames from '../../frontendOptions/termNames'
import { Fields, reduxForm } from 'redux-form';

import ForwardArrow from '../buttons/ForwardArrow.jsx'
import BackArrow from '../buttons/BackArrow.jsx'
import NavigationWarning from '../../popups/NavigationWarning.jsx'
import Loading from '../../popups/Loading.jsx'



import step3Validation from '../../validators/step3Validation.js'
import renderFields from './renderFields3.3.jsx'

import { submitUpdate, dispatchSetDataFields } from '../../reducers/defaultData.jsx'
import { dispatchKitchenGradePop, dispatchBathroomGradePop, dispatchToggleFB, dispatchToggleFP, dispatchToggleHB } from '../../reducers/popups.jsx'


const fieldNames = [
    TermNames.NumberOfKitchens,
    TermNames.KitchenQuality,
    TermNames.NumberOfFullBaths,
    TermNames.FullBathQuality,
    TermNames.HalfBathQuality,
    TermNames.NumberOfHalfBaths,
    TermNames.NumberOfFireplaces,
    TermNames.HeatPump,
    TermNames.CentralAir,
    TermNames.WoodStove]




export function Step_3_3 ({dropdownMenus,
                              Product_State,
                              Insurance_Product,
                              change,
                              onSubmit,
                              handleSubmit,
                                dispatchSetDataFields,
                              dispatchKitchenGradePop,
                              dispatchBathroomGradePop,
                              kitchenGradePop,
                              bathroomGradePop,
                              dispatchToggleFB,
                              dispatchToggleHB,
                              dispatchToggleFP,
                              FullBathsRetrieved,
                              HalfBathsRetrieved,
                              FireplacesRetrieved,
                              editingFB,
                              editingHB,
                              editingFP,
                              location,
                                navWarning,
                              isLoadingQuote}){

    return (
        <div className="left">
            <div className="back-arrow-wrapper">
            </div>
            <form name="FORM" onSubmit={handleSubmit(onSubmit)}>
                <BackArrow location={location} />
                <div className="content-wrapper">
                    <h1>Additional Home Details</h1>
                    <div className="return-wrapper"></div>



                    <Fields names={fieldNames}
                            component={renderFields}
                            dropdownMenus={dropdownMenus}
                            Product_State={Product_State}
                            Insurance_Product={Insurance_Product}
                            change={change}
                            dispatchSetDataFields={dispatchSetDataFields}
                            dispatchBathroomGradePop={dispatchBathroomGradePop}
                            dispatchKitchenGradePop={dispatchKitchenGradePop}
                            kitchenGradePop={kitchenGradePop}
                            bathroomGradePop={bathroomGradePop}
                            dispatchToggleFB={dispatchToggleFB}
                            dispatchToggleHB={dispatchToggleHB}
                            dispatchToggleFP={dispatchToggleFP}
                            FullBathsRetrieved={FullBathsRetrieved}
                            HalfBathsRetrieved={HalfBathsRetrieved}
                            FireplacesRetrieved={FireplacesRetrieved}
                            editingFB={editingFB}
                            editingHB={editingHB}
                            editingFP={editingFP} />


                </div>
                <ForwardArrow formName='FORM' nextPage='/section=3&step=3.3'/>
            </form>
            {navWarning ? <NavigationWarning location={location} /> : null}
            {isLoadingQuote && <Loading message={"Calculating..."} /> }


        </div>
    )
}

const Step_3_3Form = reduxForm( {
    form:'FORM',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: step3Validation,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true

})(Step_3_3)

const mapState = (state) => {
    return {
        dropdownMenus: state.config.dropdownMenus,
        Product_State: state.config.Product_State,
        Insurance_Product: state.config.Insurance_Product,
        kitchenGradePop: state.popups.kitchenGradePop,
        bathroomGradePop: state.popups.bathroomGradePop,
        FullBathsRetrieved: state.defaultData.NumberOfFullBaths,
        HalfBathsRetrieved: state.defaultData.NumberOfHalfBaths,
        FireplacesRetrieved: state.defaultData.NumberOfFireplaces,
        initialValues: state.defaultData,
        editingFB: state.popups.editingFB,
        editingHB: state.popups.editingHB,
        editingFP: state.popups.editingFP,
        navWarning : state.popups.navWarning,
        isLoadingQuote: state.popups.isLoadingQuote


    }
}

const mapDispatch = {
    onSubmit: submitUpdate,
    dispatchSetDataFields,
    dispatchBathroomGradePop,
    dispatchKitchenGradePop,
    dispatchToggleFB,
    dispatchToggleHB,
    dispatchToggleFP,
}

export default connect(mapState, mapDispatch)(Step_3_3Form)