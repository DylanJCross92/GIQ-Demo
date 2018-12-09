import React from 'react';
import { connect } from 'react-redux'
import TermNames from '../../frontendOptions/termNames'
import { Fields, reduxForm } from 'redux-form';

import ForwardArrow from '../buttons/ForwardArrow.jsx'
import BackArrow from '../buttons/BackArrow.jsx'
import NavigationWarning from '../../popups/NavigationWarning.jsx'
import Loading from '../../popups/Loading.jsx'



import step3Validation from '../../validators/step3Validation.js'
import { dispatchToggleCY, dispatchToggleSF, dispatchHomeStylePop , dispatchRoofTypePop, dispatchRoofStylePop } from '../../reducers/popups.jsx'
import { dispatchSetDataFields, submitUpdate } from '../../reducers/defaultData.jsx'
import renderFields from './renderFields3.1.jsx'

const fieldNames = [
    TermNames.ConstructionYear,
    TermNames.SquareFootUnderRoof,
    TermNames.NumberOfStories,
    TermNames.StructureType,
    TermNames.ConstructionYearRoof,
    TermNames.HomeStyle,
    TermNames.RoofCoveringType,
    TermNames.RoofGeometryType]




export function Step_3_1 ({onSubmit,
                                handleSubmit,
                                dropdownMenus,
                                Product_State,
                                Insurance_Product,
                                ConstructionYearRetrieved,
                                SquareFootUnderRoofRetrieved,
                                dispatchSetDataFields,
                                editingSF,
                                editingCY,
                                dispatchToggleCY,
                                dispatchToggleSF,
                                dispatchHomeStylePop,
                                selectedHomeStyle,
                                homeStylePop,
                                change,
                                selectedRoofType,
                                roofTypePop,
                                dispatchRoofTypePop,
                                selectedRoofStyle,
                                roofStylePop,
                                dispatchRoofStylePop,
                                location,
                                navWarning,
                              isLoadingQuote}){



    return (
        <div className="left">

            <form name="FORM" onSubmit={handleSubmit(onSubmit)}>
                <BackArrow location={location} />

                <div className="content-wrapper">
                    <h1>Property Construction</h1>

                    <div className="return-wrapper"></div>

                        <Fields names={fieldNames}
                                component={renderFields}
                                change={change}
                                dropdownMenus={dropdownMenus}
                                Product_State={Product_State}
                                Insurance_Product={Insurance_Product}
                                ConstructionYearRetrieved={ConstructionYearRetrieved}
                                SquareFootUnderRoofRetrieved={SquareFootUnderRoofRetrieved}
                                editingCY={editingCY}
                                editingSF={editingSF}
                                dispatchToggleCY={dispatchToggleCY}
                                dispatchToggleSF={dispatchToggleSF}
                                dispatchSetDataFields={dispatchSetDataFields}
                                dispatchHomeStylePop = {dispatchHomeStylePop}
                                selectedHomeStyle={selectedHomeStyle}
                                homeStylePop={homeStylePop}
                                dispatchRoofTypePop = {dispatchRoofTypePop}
                                selectedRoofType={selectedRoofType}
                                roofTypePop={roofTypePop}
                                dispatchRoofStylePop = {dispatchRoofStylePop}
                                selectedRoofStyle={selectedRoofStyle}
                                roofStylePop={roofStylePop}
                        />

                </div>

                <ForwardArrow formName='FORM'/>
            </form>
            {navWarning ? <NavigationWarning location={location} /> : null}
            {isLoadingQuote && <Loading message={"Calculating..."} /> }


        </div>
    )
}

const Step_3_1Form = reduxForm( {
    form:'FORM',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: step3Validation,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true


})(Step_3_1)

const mapState = (state) => {
    return {
        dropdownMenus: state.config.dropdownMenus,
        Product_State: state.config.Product_State,
        Insurance_Product: state.config.Insurance_Product,
        ConstructionYearRetrieved: state.defaultData.ConstructionYear,
        SquareFootUnderRoofRetrieved: state.defaultData.SquareFootUnderRoof,
        initialValues: state.defaultData,
        editingCY: state.popups.editingCY,
        editingSF: state.popups.editingSF,
        selectedHomeStyle: state.popups.selectedHomeStyle,
        homeStylePop: state.popups.homeStylePop,
        selectedRoofType: state.popups.selectedRoofType,
        roofTypePop: state.popups.roofTypePop,
        selectedRoofStyle: state.popups.selectedRoofStyle,
        roofStylePop: state.popups.roofStylePop,
        navWarning : state.popups.navWarning,
        isLoadingQuote: state.popups.isLoadingQuote


    }
}

const mapDispatch = {
    dispatchToggleCY,
    dispatchToggleSF,
    dispatchSetDataFields,
    dispatchHomeStylePop,
    dispatchRoofTypePop,
    dispatchRoofStylePop,
    onSubmit: submitUpdate


}


export default connect(mapState, mapDispatch)(Step_3_1Form)
