import React from 'react';
import TermNames from '../../frontendOptions/termNames'
import { generateDropdowns } from '../../utils/utils.jsx'
import HomeStyle from './HomeStyle.jsx'
import RoofType from './RoofType.jsx'
import RoofStyle from './RoofStyle.jsx'

const fieldNames = [
    TermNames.ConstructionYear,
    TermNames.SquareFootUnderRoof,
    TermNames.NumberOfStories,
    TermNames.StructureType,
    TermNames.ConstructionYearRoof,
    TermNames.HomeStyle,
    TermNames.RoofCoveringType,
    TermNames.RoofGeometryType]

const renderFields = (fields) => {
    const errorList = [];
    for (var key in fields){
        if (fields.hasOwnProperty(key) && fields[key] && fields[key]['meta'] && fields[key]['meta']['touched'] && fields[key]['meta']['error']){
            errorList.push({field: key , message: fields[key]['meta']['error']})
        }
    }
    const showError = errorList.length > 0 ? 'block' : 'none'
    return (
        <div>
            <div className="errors" style={{display: showError}}>
                <ul className="error-list">
                    {
                        errorList.map(error => (
                            <li key={error.field} className={error.field}>{error.message}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="two-col">
                <div className="left">
                    <div className="sub-col-wrapper">
                        <div className="hardcoded-editable-wrapper">
                            <label htmlFor={TermNames.ConstructionYear}>Year Built:
                                {(fields.ConstructionYearRetrieved && !fields.editingCY )? <a className="edit-icon" onClick={fields.dispatchToggleCY}><img src="assets/pencil-icon.png"/>Edit</a> : null }
                            </label>
                            {(fields.ConstructionYearRetrieved && !fields.editingCY ) ? <div className="hardcoded">
                                <div className="text S3_ConstructionYear">{fields[TermNames.ConstructionYear].input.value}</div>
                                <div className="tb-15-margin"></div>
                            </div> :
                                <div className="editable">
                                    <div className="col-50-percent">
                                        <input className={fields[TermNames.ConstructionYear]['meta']['error'] && fields[TermNames.ConstructionYear]['meta']['touched'] ? 'error numbersOnly' : 'numbersOnly'}  {...fields[TermNames.ConstructionYear].input} type="text"
                                               data-local-storage="ConstructionYearRetrieved"
                                               placeholder="YYYY"/>
                                    </div>
                                    {fields.ConstructionYearRetrieved ? <div className="col-50-percent">
                                        <a className="button orange update" onClick={(event) => {
                                            event.preventDefault()
                                            fields.dispatchSetDataFields({ConstructionYear: fields[TermNames.ConstructionYear].input.value})
                                            fields.dispatchToggleCY(event)
                                        }
                                        } >Update</a>
                                    </div> : <div className="col-50-percent"></div>}
                                </div>}
                        </div>


                        <div className="col-50-percent"></div>
                        <div className="hardcoded-editable-wrapper">
                            <label htmlFor={TermNames.SquareFootUnderRoof}>Approx. total living area (sq ft): <a href="#" onClick={(e)=>{e.preventDefault()}} className="tooltip-parent"><img src="assets/help-icon.png"/><div className="tooltip">Enter the area for all floors including wings, additions & built-in or attached garages with living area above.
                                <p></p>
                                <div><strong>Do not include:</strong></div>
                                <div>- Area for basements or attics (even if finished)</div>
                                <div>- Basement garages (aka garage under, this is a garage built below the grade level of the home)</div>
                                <div>- One-story attached garages with no living area above</div>
                                <div>- Area for porches, breezeways, decks</div>
                                <div>- Living space above detached garages</div>

                            </div></a>

                                {fields.SquareFootUnderRoofRetrieved && !fields.editingSF ? <a className="edit-icon" onClick={fields.dispatchToggleSF}
                                ><img src="assets/pencil-icon.png"/> Edit</a> : null}
                            </label>

                            {fields.SquareFootUnderRoofRetrieved && !fields.editingSF ? <div className="hardcoded">
                                {/*<input {...fields[TermNames.SquareFootUnderRoof].input} type="hidden" maxLength="5" data-local-storage="SquareFootUnderRoofRetrieved" className="numbersOnly"/>*/}
                                <div className="text S3_LivingArea">{fields[TermNames.SquareFootUnderRoof].input.value}</div>
                                <div className="tb-15-margin"></div>
                            </div> :
                                <div className="editable">
                                    <div className="col-50-percent">
                                        <input className={fields[TermNames.SquareFootUnderRoof]['meta']['error'] && fields[TermNames.SquareFootUnderRoof]['meta']['touched'] ? 'error numbersOnly' : 'numbersOnly'} {...fields[TermNames.SquareFootUnderRoof].input} type="text" maxLength="5" id={TermNames.SquareFootUnderRoof} />
                                    </div>
                                    {fields.SquareFootUnderRoofRetrieved ? <div className="col-50-percent">
                                        <a className="button orange update" onClick={(event) => {
                                            event.preventDefault()
                                            fields.dispatchSetDataFields({SquareFootUnderRoof: fields[TermNames.SquareFootUnderRoof].input.value})
                                            fields.dispatchToggleSF(event)
                                        }
                                        } >Update</a>
                                    </div> : null}
                                </div>}
                        </div>
                        <label>Type of Home:</label>
                        <select disabled={fields[TermNames.HomeStyle].input.value == '601' || fields[TermNames.HomeStyle].input.value == '602'} className={fields[TermNames.StructureType]['meta']['error'] && fields[TermNames.StructureType]['meta']['touched'] ? 'error' : ''} {...fields[TermNames.StructureType].input} data-dropdown-menus="StructureType">{generateDropdowns(fields.dropdownMenus, fields.Insurance_Product, fields.Product_State, 'StructureType')}</select>

                        <div className="col-25-percent"></div>


                        <label>Number of Stories:</label>
                        <select className={fields[TermNames.NumberOfStories]['meta']['error'] && fields[TermNames.NumberOfStories]['meta']['touched'] ? 'error' : ''} {...fields[TermNames.NumberOfStories].input} data-dropdown-menus="NumberOfStories" data-for="NumberOfStories-parent">{generateDropdowns(fields.dropdownMenus, fields.Insurance_Product, fields.Product_State, 'NumberOfStories')}</select>

                        <div className="tb-15-margin"></div>

                        { fields[TermNames.NumberOfStories].input.value ? <div className="home-style NumberOfStories-parent" >

                            <ul className="selection-wrapper">
                                <li  className={fields[TermNames.HomeStyle]['meta']['error'] && fields[TermNames.HomeStyle]['meta']['touched'] ? 'error S3_StructureType select radio-error' : 'S3_StructureType select radio-error'} >
                                    {fields[TermNames.HomeStyle].input.value ? <a className="edit-icon" onClick={(e)=> {
                                        e.preventDefault()
                                        fields.dispatchHomeStylePop(true)
                                    }} ><img src="assets/pencil-icon.png"/> Edit</a> : null}

                                    <div className="title">Home Style:</div>

                                    {!fields[TermNames.HomeStyle].input.value ? <a className="button orange selection" onClick={(e)=> {
                                        e.preventDefault()
                                        fields.dispatchHomeStylePop(true)
                                    }} >Select</a> : null }

                                    {fields[TermNames.HomeStyle].input.value && fields.selectedHomeStyle ? <div className="selection-value-wrapper">
                                        <img src="assets/checkmark-small.png"/>
                                        <div className="selection-value">{fields.selectedHomeStyle}</div>
                                    </div> : null}

                                    {fields.homeStylePop ? <HomeStyle HomeStyleValue={fields[TermNames.HomeStyle].input.value} change={fields.change} storiesValue={fields[TermNames.NumberOfStories].input.value} /> : null }

                                </li>
                            </ul>

                        </div> : null}

                    </div>
                </div>

                <div className="right">
                    <div className="sub-col-wrapper">
                        <div className="col-75-percent"></div>
                        <label htmlFor={TermNames.ConstructionYearRoof}>What year was current roof installed? <a href="#" onClick={(e)=>{e.preventDefault()}} className="tooltip-parent"><img src="assets/help-icon.png"/><div className="tooltip">Enter the year the current roof was installed. The roof installed must be a new roof and does not include minor repairs to an existing roof. This will ensure you receive the most accurate quote.</div></a></label>
                        <div className="col-25-percent">
                            <input className={fields[TermNames.ConstructionYearRoof]['meta']['error'] && fields[TermNames.ConstructionYearRoof]['meta']['touched'] ? 'error numbersOnly' : 'numbersOnly'} type="text" {...fields[TermNames.ConstructionYearRoof].input} id="S3_RoofInstalled" placeholder="YYYY" maxLength="4"/>
                        </div>
                    </div>
                    <ul className="selection-wrapper">

                        <li className={fields[TermNames.RoofCoveringType]['meta']['error'] && fields[TermNames.RoofCoveringType]['meta']['touched'] ? 'error S3_RoofType select radio-erro' : 'S3_RoofType select radio-erro'} >
                            {fields[TermNames.RoofCoveringType].input.value ? <a className="edit-icon" onClick={(e)=> {
                                e.preventDefault()
                                fields.dispatchRoofTypePop(true)
                            }} ><img src="assets/pencil-icon.png"/> Edit</a> : null}

                            <div className="title">Roof Type:</div>

                            {!fields[TermNames.RoofCoveringType].input.value ? <a className="button orange selection" onClick={(e)=> {
                                e.preventDefault()
                                fields.dispatchRoofTypePop(true)
                            }} >Select</a> : null }

                            {fields[TermNames.RoofCoveringType].input.value && fields.selectedRoofType ? <div className="selection-value-wrapper">
                                <img src="assets/checkmark-small.png"/>
                                <div className="selection-value">{fields.selectedRoofType}</div>
                            </div> : null}
                            {fields.roofTypePop ? <RoofType RoofTypeValue={fields[TermNames.RoofCoveringType].input.value} change={fields.change}  /> : null }
                        </li>
                        <li className={fields[TermNames.RoofGeometryType]['meta']['error'] && fields[TermNames.RoofGeometryType]['meta']['touched'] ? 'error S3_RoofShape select radio-error' : 'S3_RoofShape select radio-error'} >
                            {fields[TermNames.RoofGeometryType].input.value ? <a className="edit-icon" onClick={(e)=> {
                                e.preventDefault()
                                fields.dispatchRoofStylePop(true)
                            }} ><img src="assets/pencil-icon.png"/> Edit</a> : null}
                            <div className="title">Roof Shape:</div>

                            {!fields[TermNames.RoofGeometryType].input.value && fields[TermNames.RoofGeometryType].input.value != '0' ? <a className="button orange selection" onClick={(e)=> {
                                e.preventDefault()
                                fields.dispatchRoofStylePop(true)
                            }} >Select</a> : null }

                            {(fields[TermNames.RoofGeometryType].input.value || fields[TermNames.RoofGeometryType].input.value == '0') && fields.selectedRoofStyle ? <div className="selection-value-wrapper">
                            <img src="assets/checkmark-small.png"/>
                            <div className="selection-value">{fields.selectedRoofStyle}</div>
                            </div> : null}

                            {fields.roofStylePop ? <RoofStyle RoofStyleValue={fields[TermNames.RoofGeometryType].input.value} change={fields.change}  /> : null }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )}

    export default renderFields