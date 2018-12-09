import React from 'react';
import TermNames from '../../frontendOptions/termNames'
import { generateDropdowns } from '../../utils/utils.jsx'

const renderFields = (fields) => {

    const errorList = [];
    for (var key in fields){
        if (fields.hasOwnProperty(key) && fields[key]['meta'] && fields[key]['meta']['touched'] && fields[key]['meta']['error']){
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
                    <h1>Contact Information</h1>

                    <label htmlFor={TermNames.InsuredFirstName}>First Name</label>
                    <input className={fields[TermNames.InsuredFirstName]['meta']['error'] && fields[TermNames.InsuredFirstName]['meta']['touched'] ? 'error' : ''} {...fields[TermNames.InsuredFirstName].input} type="text" />

                    <label htmlFor={TermNames.InsuredLastName}>Last Name</label>
                    <input className={fields[TermNames.InsuredLastName]['meta']['error'] && fields[TermNames.InsuredLastName]['meta']['touched'] ? 'error' : ''} {...fields[TermNames.InsuredLastName].input} type="text" id="S1_LastName" />

                    <label htmlFor={TermNames.PropertyStreetAddress}>Street Address</label>
                    <input className={fields[TermNames.PropertyStreetAddress]['meta']['error'] && fields[TermNames.PropertyStreetAddress]['meta']['touched'] ? 'error' : ''} {...fields[TermNames.PropertyStreetAddress].input} type="text" id="S1_StreetAddress" />

                    <label htmlFor={TermNames.PropertyCity}>City</label>
                    <input className={fields[TermNames.PropertyCity]['meta']['error'] && fields[TermNames.PropertyCity]['meta']['touched'] ? 'error' : ''} type="text" {...fields[TermNames.PropertyCity].input} id="S1_City" />

                    <div className="sub-col-wrapper">
                        <div className="col-25-percent">
                            <label htmlFor={TermNames.PropertyState}>State <a href="#" /*onClick="javascript:return false;"*/ className="tooltip-parent"><img src="assets/help-icon.png"/><div className="tooltip">State may not be changed or modified.</div></a></label>
                            <input className={fields[TermNames.PropertyState]['meta']['error'] && fields[TermNames.PropertyState]['meta']['touched'] ? 'error' : ''} type="text" {...fields[TermNames.PropertyState].input} id="S1_State" disabled="true" />
                        </div>
                        <div className="col-50-percent">
                            <label htmlFor={TermNames.PropertyZipCode}>Zip <a href="#" /*onClick="javascript:return false;"*/ className="tooltip-parent"><img src="assets/help-icon.png"/><div className="tooltip">Zip code may not be changed or modified.</div></a></label>
                            <input className={fields[TermNames.PropertyZipCode]['meta']['error'] && fields[TermNames.PropertyZipCode]['meta']['touched'] ? 'error' : ''} type="text" {...fields[TermNames.PropertyZipCode].input} id="S1_Zipcode"  />
                        </div>
                    </div>

                </div>

                <div className="right">
                    <h1>Insured Property Information</h1>

                    <label>How would you describe this home?</label>
                    <select className={fields[TermNames.PropertyUsage]['meta']['error'] && fields[TermNames.PropertyUsage]['meta']['touched'] ? 'error' : ''} value={fields[TermNames.PropertyUsage].input.value} {...fields[TermNames.PropertyUsage].input}
                            onChange={
                                (event) => {fields[TermNames.PropertyUsage].input.onChange(event)
                                fields.change(TermNames.MonthsUnoccupied, '')}
                            }
                            data-for="PropertyUsage-parent" data-dropdown-menus="PropertyUsage">
                        {generateDropdowns(fields.dropdownMenus, fields.Insurance_Product, fields.Product_State, 'PropertyUsage')}
                    </select>

                    {fields[TermNames.PropertyUsage].input.value == "300-100" || fields[TermNames.PropertyUsage].input.value == "200-100" ? <div className="gray-box-wrapper time-unoccupied PropertyUsage-parent remove-margin-b" >
                        <label>Number of months continuously unoccupied</label>
                        <select  {...fields[TermNames.MonthsUnoccupied].input} className={fields[TermNames.MonthsUnoccupied]['meta']['error'] && fields[TermNames.MonthsUnoccupied]['meta']['touched'] ? 'remove-margin-b error' : "remove-margin-b"} data-dropdown-menus="TimeUnoccupied">{generateDropdowns(fields.dropdownMenus, fields.Insurance_Product, fields.Product_State, 'TimeUnoccupied')}</select>
                    </div> : null}

                    <div className="rental-property-fields PropertyUsage-parent" style={{display:'none'}}>

                        <div className="radio-error gray-box-wrapper owned-by-corporation PropertyUsage-parent remove-margin-b">

                            <label>Is this property owned by a corporation, &nbsp;partnership, etc.?</label>
                            <div className="sub-col-wrapper tb-15-margin remove-margin-b">
                                <div className="col-50-percent">
                                    <input type="radio" name={TermNames.InsuredByCorporation} value="100" id="S1_OwnedBy-yes" data-for="S1_OwnedBy-parent" data-show="entity-name"/><label htmlFor="S1_OwnedBy-yes" className="inline-block">Yes</label>
                                </div>
                                <div className="col-50-percent">
                                    <input type="radio" name={TermNames.InsuredByCorporation} value="200" id="S1_OwnedBy-no" data-for="S1_OwnedBy-parent"/><label htmlFor="S1_OwnedBy-no" className="inline-block">No</label>
                                </div>
                            </div>
                            <div className="toggle-box entity-name S1_OwnedBy-parent tb-15-margin remove-margin-b" style={{display:'none'}}>
                                <label htmlFor={TermNames.InsuredName}>Name of Entity</label>
                                <input type="text" name={TermNames.InsuredName} className="remove-margin-b" id="S1_EntityName" />
                            </div>
                        </div>

                        <div className="gray-box-wrapper number-time-unoccupied PropertyUsage-parent remove-margin-b">
                            <label>Number of months continuously unoccupied</label>
                            <select name={TermNames.MonthsUnoccupied} className="remove-margin-b" data-dropdown-menus="TimeUnoccupied"></select>
                        </div>

                        <div className="radio-error gray-box-wrapper short-term-rental PropertyUsage-parent remove-margin-b">
                            <label>Any unit leased less than 6 months?</label>
                            <div className="sub-col-wrapper tb-15-margin remove-margin-b">
                                <div className="col-50-percent">
                                    <input type="radio" name={TermNames.ShortTermRental} value="100" id="S1_ShortTermRental-yes"/><label htmlFor="S1_ShortTermRental-yes" className="inline-block">Yes</label>
                                </div>
                                <div className="col-50-percent">
                                    <input type="radio" name={TermNames.ShortTermRental} value="200" id="S1_ShortTermRental-no"/><label htmlFor="S1_ShortTermRental-no" className="inline-block">No</label>
                                </div>
                            </div>
                        </div>

                        <div className="radio-error gray-box-wrapper single-occupancy PropertyUsage-parent remove-margin-b">
                            <label>Single tenants under age 30?</label>
                            <div className="sub-col-wrapper tb-15-margin remove-margin-b">
                                <div className="col-50-percent">
                                    <input type="radio" name={TermNames.SingleOccupancy} value="100" id="S1_SingleOccupancy-yes"/><label htmlFor="S1_SingleOccupancy-yes" className="inline-block">Yes</label>
                                </div>
                                <div className="col-50-percent">
                                    <input type="radio" name={TermNames.SingleOccupancy} value="200" id="S1_SingleOccupancy-no"/><label htmlFor="S1_SingleOccupancy-no" className="inline-block">No</label>
                                </div>
                            </div>
                        </div>

                        <div className="radio-error gray-box-wrapper student-occupancy PropertyUsage-parent remove-margin-b">
                            <label>Full-time student tenant?</label>
                            <div className="sub-col-wrapper tb-15-margin remove-margin-b">
                                <div className="col-50-percent">
                                    <input type="radio" name={TermNames.StudentOccupancy} value="100" id="S1_StudentOccupancy-yes"/><label htmlFor="S1_StudentOccupancy-yes" className="inline-block">Yes</label>
                                </div>
                                <div className="col-50-percent">
                                    <input type="radio" name={TermNames.StudentOccupancy} value="200" id="S1_StudentOccupancy-no"/><label htmlFor="S1_StudentOccupancy-no" className="inline-block">No</label>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="gray-box-wrapper toggle-box property-manager-type PropertyUsage-parent remove-margin-b" style={{display:'none'}}>
                        <label>Property Manager Type</label>
                        <select name={TermNames.PropertyManagerType} className="remove-margin-b" data-dropdown-menus="PropertyManagerType" data-for="PropertyManagerType-parent"></select>

                        <div className="toggle-box property-manager-address PropertyManagerType-parent tb-15-margin remove-margin-b" style={{display:'none'}}>

                            <h5>Property Manager Address Information</h5>

                            <label htmlFor={TermNames.PropertyManagerAddressLine1}>Address Line 1</label>
                            <input name={TermNames.PropertyManagerAddressLine1} type="text" id="S1_PropertyManagerAddressLine1"/>

                            <label htmlFor={TermNames.PropertyManagerAddressLine2}>Address Line 2</label>
                            <input name={TermNames.PropertyManagerAddressLine2} type="text" id="S1_PropertyManagerAddressLine2"/>

                            <label htmlFor={TermNames.PropertyManagerCity}>City</label>
                            <input name={TermNames.PropertyManagerCity} type="text" id="S1_PropertyManagerCity"/>

                            <div className="sub-col-wrapper">
                                <div className="col-25-percent">
                                    <label htmlFor={TermNames.PropertyManagerState}>State</label>
                                    <select name={TermNames.PropertyManagerState} id="S1_PropertyManagerState" className="remove-margin-b" data-dropdown-menus="PropertyManagerState" data-change-href="true"></select>
                                </div>
                                <div className="col-25-percent"></div>
                                <div className="col-50-percent">
                                    <label htmlFor={TermNames.PropertyManagerZip}>Zip code</label>
                                    <input name={TermNames.PropertyManagerZip}type="text" id="S1_PropertyManagerZip"/>
                                </div>
                            </div>

                        </div>

                    </div>



                </div>
            </div>
        </div>

    )
}

export default renderFields
