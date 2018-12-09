import React from 'react';
import TermNames from '../../frontendOptions/termNames'
import { generateDropdowns } from '../../utils/utils.jsx'
import GarageType from './GarageType.jsx'

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
                    <label>What type of garage do you have?</label>
                    <select className={fields[TermNames.GarageSize]['meta']['error'] && fields[TermNames.GarageSize]['meta']['touched'] ? 'error' : ''} {...fields[TermNames.GarageSize].input} data-for="garage-size-parent"  data-dropdown-menus="GarageSize">{generateDropdowns(fields.dropdownMenus, fields.Insurance_Product, fields.Product_State, 'GarageSize')}</select>

                    { (fields[TermNames.GarageSize].input.value && +fields[TermNames.GarageSize].input.value > 1) ? <div className="gray-box-wrapper garage-type garage-size-parent" >
                        <label>Choose the image that best represents your garage:</label>

                        <ul className="selection-wrapper tb-15-margin remove-margin-b">
                            <li className={fields[TermNames.GarageType]['meta']['error'] && fields[TermNames.GarageType]['meta']['touched'] ? 'error S3_2_GarageType select radio-error' : 'S3_2_GarageType select radio-error'} >
                                {fields[TermNames.GarageType].input.value ? <a className="edit-icon" onClick={(e)=> {
                                    e.preventDefault()
                                    fields.dispatchGarageTypePop(true)
                                }} ><img src="assets/pencil-icon.png"/> Edit</a> : null}

                                {!fields[TermNames.GarageType].input.value ? <a className="button orange selection" onClick={(e)=> {
                                    e.preventDefault()
                                    fields.dispatchGarageTypePop(true)
                                }} >Select</a> : null }

                                {fields[TermNames.GarageType].input.value && fields.selectedGarageType ? <div className="selection-value-wrapper">
                                    <img src="assets/checkmark-small.png"/>
                                    <div className="selection-value">{fields.selectedGarageType}</div>
                                </div> : null}

                                {fields.garageTypePop ? <GarageType GarageTypeValue={fields[TermNames.GarageType].input.value} change={fields.change}  /> : null }
                            </li>
                        </ul>
                        <div className="tb-15-margin"></div>
                        <label>Garage Square Footage:</label>
                        <select className={fields[TermNames.SquareFootUnderRoofGarage]['meta']['error'] && fields[TermNames.SquareFootUnderRoofGarage]['meta']['touched'] ? 'error remove-margin-b' : 'remove-margin-b'} {...fields[TermNames.SquareFootUnderRoofGarage].input}  data-dropdown-menus="SquareFootUnderRoofGarage">{generateDropdowns(fields.dropdownMenus, fields.Insurance_Product, fields.Product_State, 'GarageSizeSqFt')}</select>
                    </div> : null }

                </div>

                <div className="right">
                    <label>Foundation Type:
                        <a href="#" onClick={(e)=>e.preventDefault()} className="tooltip-parent"><img src="assets/help-icon.png"/><div className="tooltip">
                            Slab - Residence is built on slab.
                            <p>
                                Slab / Basement - Combination of slab and basement.
                            </p>
                            Basement - An area, usually below grade, which includes walls, a slab floor and a stairway from the ground floor.
                            <p>
                                Open - Pilings/Stilts/Piers - Dwelling is elevated above the ground on pilings, piers or posts.
                            </p>
                            Open - Crawl Space - An open area below the residence that is generally used for access to plumbing and heating equipment or for storage.
                            <p></p>
                            Closed - Crawl Space - An enclosed area below the residence that is generally used for access to plumbing and heating equipment or for storage.

                        </div></a>
                     </label>
                    <select className={fields[TermNames.FoundationType]['meta']['error'] && fields[TermNames.FoundationType]['meta']['touched'] ? 'error' : ''}  {...fields[TermNames.FoundationType].input}  data-dropdown-menus="FoundationType">{generateDropdowns(fields.dropdownMenus, fields.Insurance_Product, fields.Product_State, 'FoundationType')}</select>

                    <label>Construction Type:</label>
                    <select className={fields[TermNames.ConstructionType]['meta']['error'] && fields[TermNames.ConstructionType]['meta']['touched'] ? 'error' : ''} {...fields[TermNames.ConstructionType].input}  data-for="S3_2_ConstructionType-parent" data-dropdown-menus="ConstructionType">{generateDropdowns(fields.dropdownMenus, fields.Insurance_Product, fields.Product_State, 'ConstructionType')}</select>

                    {fields[TermNames.ConstructionType].input.value == '100' ? <div className="gray-box-wrapper cladding-type S3_2_ConstructionType-parent">
                        <label>Cladding:</label>
                        <select className={fields[TermNames.Cladding]['meta']['error'] && fields[TermNames.Cladding]['meta']['touched'] ? 'error remove-margin-b' : 'remove-margin-b'} {...fields[TermNames.Cladding].input}  data-dropdown-menus="CladdingType">{generateDropdowns(fields.dropdownMenus, fields.Insurance_Product, fields.Product_State, 'CladdingType')}</select>
                    </div> : null }

                    {fields[TermNames.ConstructionType].input.value == '101' ? <div className="gray-box-wrapper masonry-veener-type S3_2_ConstructionType-parent" >
                        <label>Masonry Veener Percentage:</label>
                        <select className={fields[TermNames.MasonryVeneerPercentage]['meta']['error'] && fields[TermNames.MasonryVeneerPercentage]['meta']['touched'] ? 'error remove-margin-b' : 'remove-margin-b'} {...fields[TermNames.MasonryVeneerPercentage].input} data-dropdown-menus="MasonryVeenerType">{generateDropdowns(fields.dropdownMenus, fields.Insurance_Product, fields.Product_State, 'MasonryVeenerType')}</select>
                    </div> : null }
                </div>
            </div>
        </div>

    )}

export default renderFields