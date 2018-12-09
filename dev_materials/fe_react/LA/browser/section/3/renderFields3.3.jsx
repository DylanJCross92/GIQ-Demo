import React from 'react';
import TermNames from '../../frontendOptions/termNames'
import { generateDropdowns, getGrade } from '../../utils/utils.jsx'

import KitchenGrade from './KitchenGrade.jsx'
import BathroomGrade from './BathroomGrade.jsx'


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
                    <div className="sub-col-wrapper tb-margin-15px">
                        <label>Number of Kitchens: <a href="#" onClick={(e)=>{
                            e.preventDefault()
                            fields.dispatchKitchenGradePop(true)}}  >
                                <img src="assets/help-icon.png"/>
                            </a>
                        </label>
                        {fields.kitchenGradePop ? <KitchenGrade/> : null}
                        <div className="col-25-percent">
                            <select className={fields[TermNames.NumberOfKitchens]['meta']['error'] && fields[TermNames.NumberOfKitchens]['meta']['touched'] ? 'error' : ''} {...fields[TermNames.NumberOfKitchens].input} onChange={
                                (event) => {
                                    fields[TermNames.NumberOfKitchens].input.onChange(event)
                                    if (!fields[TermNames.KitchenQuality].input.value) fields.change(TermNames.KitchenQuality, '100')
                                }
                            } data-for="NumberOfKitchens-parent" data-dropdown-menus="NumberOfKitchens">{generateDropdowns(fields.dropdownMenus, fields.Insurance_Product, fields.Product_State, 'NumberOfKitchens')}</select>
                        </div>
                        <div className="col-75-percent">
                            <select className={fields[TermNames.KitchenQuality]['meta']['error'] && fields[TermNames.KitchenQuality]['meta']['touched'] ? 'error' : ''} {...fields[TermNames.KitchenQuality].input}  data-for="KitchenQuality-parent" data-dropdown-menus="KitchenQuality">{generateDropdowns(fields.dropdownMenus, fields.Insurance_Product, fields.Product_State, 'KitchenGrade')}</select>                        </div>
                        <div className="hardcoded-editable-wrapper">
                            <label>Number of Full Bathrooms: <a href="#" onClick={(e)=>{
                                e.preventDefault()
                                fields.dispatchBathroomGradePop(true)}}  >
                                    <img src="assets/help-icon.png"/>
                                </a>
                                { (fields.FullBathsRetrieved && !fields.editingFB ) ?
                                    <a className="edit-icon" onClick={fields.dispatchToggleFB}>
                                        <img src="assets/pencil-icon.png"/>Edit
                                    </a> : null }
                            </label>
                            {fields.bathroomGradePop ? <BathroomGrade/> : null}

                            { (fields.FullBathsRetrieved && !fields.editingFB ) ?
                                <div className="hardcoded">
                                    <div className='col-25-percent'>
                                        <div className="text S3_NumberOfFullBathrooms">{fields[TermNames.NumberOfFullBaths].input.value}</div>
                                    </div>
                                    <div className="col-75-percent">
                                        <div className="text">{getGrade(fields[TermNames.FullBathQuality].input.value)}</div>
                                    </div>
                                    <div className="tb-15-margin"></div>
                                </div> :
                                !fields.editingFB ?
                                    <div className="editable">
                                        <div className="col-25-percent">
                                            <select className={fields[TermNames.NumberOfFullBaths]['meta']['error'] && fields[TermNames.NumberOfFullBaths]['meta']['touched'] ? 'error' : ''} {...fields[TermNames.NumberOfFullBaths].input} onChange={
                                                (event) => {
                                                    fields[TermNames.NumberOfFullBaths].input.onChange(event)
                                                    if (!fields[TermNames.FullBathQuality].input.value) fields.change(TermNames.FullBathQuality, '100')
                                                }
                                            } data-dropdown-menus="NumberOfFullBathrooms">{generateDropdowns(fields.dropdownMenus, fields.Insurance_Product, fields.Product_State, 'NumberOfFullBathrooms')}</select>
                                        </div>
                                        <div className="col-75-percent">
                                            <select className={fields[TermNames.FullBathQuality]['meta']['error'] && fields[TermNames.FullBathQuality]['meta']['touched'] ? 'error' : ''} {...fields[TermNames.FullBathQuality].input} data-dropdown-menus="FullBathroomGrade">{generateDropdowns(fields.dropdownMenus, fields.Insurance_Product, fields.Product_State, 'FullBathroomGrade')}</select>
                                        </div>
                                    </div> : <div className="editable">
                                        <div className="col-25-percent">
                                            <select className={fields[TermNames.NumberOfFullBaths]['meta']['error'] && fields[TermNames.NumberOfFullBaths]['meta']['touched'] ? 'error' : ''} {...fields[TermNames.NumberOfFullBaths].input} onChange={
                                                (event) => {
                                                    fields[TermNames.NumberOfFullBaths].input.onChange(event)
                                                    if (!fields[TermNames.FullBathQuality].input.value) fields.change(TermNames.FullBathQuality, '100')
                                                }
                                            } data-dropdown-menus="NumberOfFullBathrooms">{generateDropdowns(fields.dropdownMenus, fields.Insurance_Product, fields.Product_State, 'NumberOfFullBathrooms')}</select>
                                        </div>
                                        <div className="col-50-percent">
                                            <select className={fields[TermNames.FullBathQuality]['meta']['error'] && fields[TermNames.FullBathQuality]['meta']['touched'] ? 'error' : ''} {...fields[TermNames.FullBathQuality].input} data-dropdown-menus="FullBathroomGrade">{generateDropdowns(fields.dropdownMenus, fields.Insurance_Product, fields.Product_State, 'FullBathroomGrade')}</select>
                                        </div>
                                        <div className="col-25-percent">
                                            <a className="button orange update" onClick={(event) => {
                                                event.preventDefault()
                                                fields.dispatchSetDataFields({NumberOfFullBaths: fields[TermNames.NumberOfFullBaths].input.value})
                                                fields.dispatchToggleFB(event)
                                            }
                                            } >Update</a>
                                    </div>
                                </div>}


                        </div>



                        <div className="hardcoded-editable-wrapper">
                            <label>Number of Half Bathrooms: <a href="#" onClick={(e)=>{
                                e.preventDefault()
                                fields.dispatchBathroomGradePop(true)}}  >
                                <img src="assets/help-icon.png"/>
                            </a>
                                { (fields.HalfBathsRetrieved && !fields.editingHB ) ?
                                    <a className="edit-icon" onClick={fields.dispatchToggleHB}>
                                        <img src="assets/pencil-icon.png"/>Edit
                                    </a> : null }
                            </label>
                            {fields.bathroomGradePop ? <BathroomGrade/> : null}

                            { (fields.HalfBathsRetrieved && !fields.editingHB ) ?
                                <div className="hardcoded">
                                    <div className='col-25-percent'>
                                        <div className="text S3_NumberOfHalfBathrooms">{fields[TermNames.NumberOfHalfBaths].input.value}</div>
                                    </div>
                                    <div className="col-75-percent">
                                        <div className="text">{getGrade(fields[TermNames.HalfBathQuality].input.value)}</div>
                                    </div>                                    <div className="tb-15-margin"></div>
                                </div> :
                                !fields.editingHB ?
                                    <div className="editable">
                                        <div className="col-25-percent">
                                            <select className={fields[TermNames.NumberOfHalfBaths]['meta']['error'] && fields[TermNames.NumberOfHalfBaths]['meta']['touched'] ? 'error' : ''} {...fields[TermNames.NumberOfHalfBaths].input} onChange={
                                                (event) => {
                                                    fields[TermNames.NumberOfHalfBaths].input.onChange(event)
                                                    if (!fields[TermNames.HalfBathQuality].input.value) fields.change(TermNames.HalfBathQuality, '100')
                                                }
                                            } data-dropdown-menus="NumberOfHalfBathrooms">{generateDropdowns(fields.dropdownMenus, fields.Insurance_Product, fields.Product_State, 'NumberOfHalfBathrooms')}</select>
                                        </div>
                                        <div className="col-75-percent">
                                            <select className={fields[TermNames.HalfBathQuality]['meta']['error'] && fields[TermNames.HalfBathQuality]['meta']['touched'] ? 'error' : ''} {...fields[TermNames.HalfBathQuality].input} data-dropdown-menus="HalfBathroomGrade">{generateDropdowns(fields.dropdownMenus, fields.Insurance_Product, fields.Product_State, 'HalfBathroomGrade')}</select>
                                        </div>
                                    </div> : <div className="editable">
                                    <div className="col-25-percent">
                                        <select className={fields[TermNames.NumberOfHalfBaths]['meta']['error'] && fields[TermNames.NumberOfHalfBaths]['meta']['touched'] ? 'error' : ''} {...fields[TermNames.NumberOfHalfBaths].input} onChange={
                                            (event) => {
                                                fields[TermNames.NumberOfHalfBaths].input.onChange(event)
                                                if (!fields[TermNames.HalfBathQuality].input.value) fields.change(TermNames.HalfBathQuality, '100')
                                            }
                                        } data-dropdown-menus="NumberOfHalfBathrooms">{generateDropdowns(fields.dropdownMenus, fields.Insurance_Product, fields.Product_State, 'NumberOfHalfBathrooms')}</select>
                                    </div>
                                    <div className="col-50-percent">
                                        <select className={fields[TermNames.HalfBathQuality]['meta']['error'] && fields[TermNames.HalfBathQuality]['meta']['touched'] ? 'error' : ''} {...fields[TermNames.HalfBathQuality].input} data-dropdown-menus="HalfBathroomGrade">{generateDropdowns(fields.dropdownMenus, fields.Insurance_Product, fields.Product_State, 'HalfBathroomGrade')}</select>
                                    </div>
                                    <div className="col-25-percent">
                                        <a className="button orange update" onClick={(event) => {
                                            event.preventDefault()
                                            fields.dispatchSetDataFields({NumberOfHalfBaths: fields[TermNames.NumberOfHalfBaths].input.value})
                                            fields.dispatchToggleHB(event)
                                        }
                                        } >Update</a>
                                    </div>
                                </div>}
                        </div>
                        <div className="hardcoded-editable-wrapper">
                            <label>Number of Fireplaces:
                                { (fields.FireplacesRetrieved && !fields.editingFP ) ?
                                    <a className="edit-icon" onClick={fields.dispatchToggleFP}>
                                        <img src="assets/pencil-icon.png"/>Edit
                                    </a> : null }
                            </label>
                            {fields.bathroomGradePop ? <BathroomGrade/> : null}

                            { (fields.FireplacesRetrieved && !fields.editingFP ) ?
                                <div className="hardcoded">
                                    <div className="text S3_NumberOfFireplaces">{fields[TermNames.NumberOfFireplaces].input.value}</div>
                                    <div className="tb-15-margin"></div>
                                </div> :
                                !fields.editingFP ?
                                    <div className="editable">
                                        <div className="col-25-percent">
                                            <select className={fields[TermNames.NumberOfFireplaces]['meta']['error'] && fields[TermNames.NumberOfFireplaces]['meta']['touched'] ? 'error' : ''}
                                                {...fields[TermNames.NumberOfFireplaces].input} data-dropdown-menus="NumberOfFireplaces">
                                                {generateDropdowns(fields.dropdownMenus, fields.Insurance_Product, fields.Product_State, 'NumberOfFireplaces')}
                                            </select>
                                        </div>
                                    </div> : <div className="editable">
                                    <div className="col-25-percent">
                                        <select className={fields[TermNames.NumberOfFireplaces]['meta']['error'] && fields[TermNames.NumberOfFireplaces]['meta']['touched'] ? 'error' : ''} {...fields[TermNames.NumberOfFireplaces].input} data-dropdown-menus="NumberOfFireplaces">{generateDropdowns(fields.dropdownMenus, fields.Insurance_Product, fields.Product_State, 'NumberOfFireplaces')}</select>
                                    </div>
                                    <div className="col-25-percent">
                                        <a className="button orange update" onClick={(event) => {
                                            event.preventDefault()
                                            fields.dispatchSetDataFields({NumberOfFireplaces: fields[TermNames.NumberOfFireplaces].input.value})
                                            fields.dispatchToggleFP(event)
                                        }
                                        } >Update</a>
                                    </div>
                                </div>}
                        </div>
                    </div>

                </div>


                <div className="right">
                    <div className="sub-col-wrapper">

                        <div className={fields[TermNames.HeatPump]['meta']['error'] && fields[TermNames.HeatPump]['meta']['touched'] ? 'error radio-error' : 'radio-error'}>
                            <label>Is there a heat pump? <a href="#" onClick={(e)=>e.preventDefault()} className="tooltip-parent">
                                    <img src="assets/help-icon.png"/>
                                    <div className="tooltip" style={{marginTop: -82.5}}>Heat Pump is a system that can be reversed to either heat or cool a home. System has two parts: an indoor unit called an air handler and an outdoor unit similar to a central air conditioner, but referred to as a heat pump. </div>
                                </a>
                            </label>
                            <div className="col-50-percent">
                                <input type="radio" className={fields[TermNames.HeatPump]['meta']['error'] && fields[TermNames.HeatPump]['meta']['touched'] ? 'error' : ''} name={fields[TermNames.HeatPump].input.name}
                                       onChange={
                                           event => {
                                               fields[TermNames.HeatPump].input.onChange(event)
                                               fields.change(TermNames.CentralAir, '200')
                                           }}
                                       checked={fields[TermNames.HeatPump].input.value == '100'} value="100" id="S3_3_HeatPump-yes" />
                                <label htmlFor="S3_3_HeatPump-yes" className="inline-block" >Yes</label>
                            </div>
                            <div className="col-50-percent radio-error">
                                <input type="radio" className={fields[TermNames.HeatPump]['meta']['error'] && fields[TermNames.HeatPump]['meta']['touched'] ? 'error' : ''} name={fields[TermNames.HeatPump].input.name} onChange={fields[TermNames.HeatPump].input.onChange} checked={fields[TermNames.HeatPump].input.value == '200'} value="200" id="S3_3_HeatPump-no" />
                                <label htmlFor="S3_3_HeatPump-no" className="inline-block" >No</label>
                            </div>
                        </div>

                        <div className="tb-15-margin"></div>

                        <div className={fields[TermNames.CentralAir]['meta']['error'] && fields[TermNames.CentralAir]['meta']['touched'] ? 'error radio-error' : 'radio-error'}>
                            <label>Is there central air conditioning?</label>
                            <div className="col-50-percent">
                                <input type="radio" name={fields[TermNames.CentralAir].input.name}
                                       onChange={fields[TermNames.CentralAir].input.onChange}
                                       checked={fields[TermNames.CentralAir].input.value == '100'}
                                       disabled={fields[TermNames.HeatPump].input.value =='100'}
                                       value="100" id="S3_3_CentralAir-yes" />
                                <label htmlFor="S3_3_CentralAir-yes" className="inline-block">Yes</label>
                            </div>
                            <div className="col-50-percent">
                                <input type="radio" name={fields[TermNames.CentralAir].input.name} onChange={fields[TermNames.CentralAir].input.onChange} checked={fields[TermNames.CentralAir].input.value == '200'} value="200" id="S3_3_CentralAir-no" />
                                <label htmlFor="S3_3_CentralAir-no" className="inline-block">No</label>
                            </div>
                        </div>

                        <div className="tb-15-margin"></div>

                        <div className={fields[TermNames.WoodStove]['meta']['error'] && fields[TermNames.WoodStove]['meta']['touched'] ? 'error radio-error' : 'radio-error'}>
                            <label>Is there a wood, pellet, or coal stove?</label>
                            <div className="col-50-percent">
                                <input type="radio" name={fields[TermNames.WoodStove].input.name} onChange={fields[TermNames.WoodStove].input.onChange} checked={fields[TermNames.WoodStove].input.value == '100'} value="100" id="S3_3_WoodStove-yes" data-new-href="#/section=3&step=3.3.1&error=0" data-new-href-block="true" />
                                <label htmlFor="S3_3_WoodStove-yes" className="inline-block">Yes</label>
                            </div>
                            <div className="col-50-percent">
                                <input type="radio" name={fields[TermNames.WoodStove].input.name} onChange={fields[TermNames.WoodStove].input.onChange} checked={fields[TermNames.WoodStove].input.value == '200'} value="200" id="S3_3_WoodStove-no" />
                                <label htmlFor="S3_3_WoodStove-no" className="inline-block" >No</label>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )}

    export default renderFields