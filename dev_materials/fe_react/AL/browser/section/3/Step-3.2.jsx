import React from 'react';
import { connect } from 'react-redux'
import TermNames from '../../frontendOptions/termNames'
import { Fields, reduxForm } from 'redux-form';
import { generateDropdowns } from '../../utils/utils.jsx'
import ForwardArrow from '../buttons/ForwardArrow.jsx'
import BackArrow from '../buttons/BackArrow.jsx'
import NavigationWarning from '../../popups/NavigationWarning.jsx'


import submit from '../../utils/submit.js'
import step3Validation from '../../validators/step3Validation.js'
import renderFields from './renderFields3.2.jsx'
import { dispatchSetDataFields, submitUpdate } from '../../reducers/defaultData.jsx'
import { dispatchGarageTypePop } from '../../reducers/popups.jsx'



const fieldNames = [
    TermNames.GarageSize,
    TermNames.GarageType,
    TermNames.SquareFootUnderRoofGarage,
    TermNames.FoundationType,
    TermNames.ConstructionType,
    TermNames.Cladding,
    TermNames.MasonryVeneerPercentage]



export function Step_3_2 ({dropdownMenus,
                              Product_State,
                              Insurance_Product,
                              change,
                              onSubmit,
                              handleSubmit,
                              selectedGarageType,
                              garageTypePop,
                              dispatchGarageTypePop,
                              location,
                              navWarning}){

    return (
        <div className="left">

            <form name="FORM" onSubmit={handleSubmit(onSubmit)}>
                <BackArrow location={location} />
                <div className="content-wrapper">
                    <h1>Property Construction</h1>
                    <div className="return-wrapper"></div>

                    <Fields names={fieldNames}
                            component={renderFields}
                            dropdownMenus={dropdownMenus}
                            Product_State={Product_State}
                            Insurance_Product={Insurance_Product}
                            change = {change}
                            onSubmit = {onSubmit}
                            handleSubmit ={handleSubmit}
                            selectedGarageType={selectedGarageType}
                            garageTypePop={garageTypePop}
                            dispatchGarageTypePop={dispatchGarageTypePop}
                            />

                </div>
                <ForwardArrow formName='FORM' nextPage='/section=3&step=3.3'/>
            </form>
            {navWarning ? <NavigationWarning location={location} /> : null}

        </div>

    )
}

const Step_3_2Form = reduxForm( {
    form:'FORM',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: step3Validation,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true

})(Step_3_2)

const mapState = (state) => {
    return {
        dropdownMenus: state.config.dropdownMenus,
        Product_State: state.config.Product_State,
        Insurance_Product: state.config.Insurance_Product,
        selectedGarageType: state.popups.selectedGarageType,
        garageTypePop: state.popups.garageTypePop,
        initialValues: state.defaultData,
        navWarning : state.popups.navWarning

    }
}

const mapDispatch = {
    onSubmit: submitUpdate,
    dispatchGarageTypePop
}

export default connect(mapState, mapDispatch)(Step_3_2Form)