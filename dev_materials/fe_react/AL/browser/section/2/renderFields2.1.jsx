import React from 'react';
import TermNames from '../../frontendOptions/termNames'
import { generateDropdowns } from '../../utils/utils.jsx'
import DatePicker from 'react-pikaday-component'

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
                    <label>Do you have property insurance for this location?</label>
                    <select className={fields[TermNames.CurrentInsurance]['meta']['error'] && fields[TermNames.CurrentInsurance]['meta']['touched'] ? 'error' : ''} {...fields[TermNames.CurrentInsurance].input} data-for="S2_CurrentInsurance-parent" data-dropdown-menus="CurrentInsurance">{generateDropdowns(fields.dropdownMenus, fields.Insurance_Product, fields.Product_State, 'CurrentInsurance')}</select>
                    {fields[TermNames.CurrentInsurance].input.value == '-' ? <div className="gray-box-wrapper  home-insurance S2_CurrentInsurance-parent" >

                        <label>Who is your current home insurance company?</label>
                        <select className={fields[TermNames.PriorCarrierNumber]['meta']['error'] && fields[TermNames.PriorCarrierNumber]['meta']['touched'] ? 'error' : ''} {...fields[TermNames.PriorCarrierNumber].input} data-for="S2_PriorCarrierOther-parent" data-dropdown-menus="InsuranceAgencies">{generateDropdowns(fields.dropdownMenus, fields.Insurance_Product, fields.Product_State, 'PriorCarrierNumber')}</select>

                        {fields[TermNames.PriorCarrierNumber].input.value == '999' ? <div className=" PriorCarrierOther S2_PriorCarrierOther-parent" >
                            <label htmlFor={TermNames.PriorCarrierOther}>Name of Carrier:</label>
                            <input className={fields[TermNames.PriorCarrierOther]['meta']['error'] && fields[TermNames.PriorCarrierOther]['meta']['touched'] ? 'error' : ''} {...fields[TermNames.PriorCarrierOther].input} type="text" />
                        </div> : null}

                        <div className="sub-col-wrapper tb-margin-15px">
                            <label htmlFor="S2_Date1">When does your current policy expire?</label>

                            <div className="col-50-percent">
                                <DatePicker className={fields[TermNames.PriorExpirationDate]['meta']['error'] && fields[TermNames.PriorExpirationDate]['meta']['touched'] ? 'error' : ''} onChange={fields[TermNames.PriorExpirationDate].input.onChange} value={new Date(fields[TermNames.PriorExpirationDate].input.value)} format='MM/DD/YYYY' placeholder="MM/DD/YYYY"/>
                                {/*<input {...fields[TermNames.PriorExpirationDate].input} type="text" placeholder="MM/DD/YYYY" id="S2_Date1" className="datepicker"/>*/}
                            </div>
                            <div className="col-50-percent">
                                <label style={{marginLeft:10}} htmlFor="S2_Date1"><img className="date-selector" src="assets/calendar-icon.png"/></label>
                            </div>
                            <label htmlFor="S2_DwellingCoverage">What is your current Coverage A (dwelling coverage) amount?</label>
                            <div className="col-50-percent">
                                <input className={fields[TermNames.PriorCoverageA]['meta']['error'] && fields[TermNames.PriorCoverageA]['meta']['touched'] ? 'error remove-margin-b formatCurrency' : 'remove-margin-b formatCurrency'} {...fields[TermNames.PriorCoverageA].input} type="text" id="S2_DwellingCoverage" />
                            </div>
                            <div className="col-50-percent"></div>
                        </div>

                    </div> : null}

                </div>

                <div className="right">
                    <label>During the past 6 years how many claims have you had at this property or any residential property that you own?</label>
                    <select className={fields[TermNames.NumberOfClaims]['meta']['error'] && fields[TermNames.NumberOfClaims]['meta']['touched'] ? 'error remove-margin-b' : "remove-margin-b"} {...fields[TermNames.NumberOfClaims].input}  data-dropdown-menus="NumberOfClaims">{generateDropdowns(fields.dropdownMenus, fields.Insurance_Product, fields.Product_State, 'NumberOfClaims')}</select>
                </div>
            </div>
        </div>

    )}

export default renderFields