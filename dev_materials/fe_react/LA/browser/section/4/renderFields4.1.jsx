import React from 'react';
import TermNames from '../../frontendOptions/termNames'
import { generateDropdowns} from '../../utils/utils.jsx'




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
                        <div className={fields[TermNames.MultiPolicy]['meta']['error'] && fields[TermNames.MultiPolicy]['meta']['touched'] ? 'error radio-error' : 'radio-error'}>
                            <label>Do you currently have an auto policy with GEICO?</label>
                            <div className="col-50-percent">
                                <input type="radio" name={fields[TermNames.MultiPolicy].input.name} onChange={fields[TermNames.MultiPolicy].input.onChange} checked={fields[TermNames.MultiPolicy].input.value == '100'} value="100" id="S4_MultiPolicy-yes" data-for="S4_MultiPolicy-parent" data-show="AutoPolicyNumber"/><label htmlFor="S4_MultiPolicy-yes" className="inline-block">Yes</label>
                            </div>
                            <div className="col-50-percent">
                                <input type="radio" name={fields[TermNames.MultiPolicy].input.name} onChange={fields[TermNames.MultiPolicy].input.onChange} checked={fields[TermNames.MultiPolicy].input.value == '200'} value="200" id="S4_MultiPolicy-no" data-for="S4_MultiPolicy-parent"/><label htmlFor="S4_MultiPolicy-no" className="inline-block">No</label>
                            </div>
                        </div>

                        {fields[TermNames.MultiPolicy].input.value == '100' ? <div className="gray-box-wrapper AutoPolicyNumber S4_MultiPolicy-parent tb-15-margin" >
                            <label htmlFor="S4_AutoPolicyNumber">GEICO Auto Policy Number <a href="#" onClick={e=>e.preventDefault()} className="tooltip-parent"><img src="assets/help-icon.png"/><div className="tooltip">Your Auto Policy must be all numbers and must not exceed 10 characters.</div></a></label>
                            <input className={fields[TermNames.MultiPolicy]['meta']['error'] && fields[TermNames.MultiPolicy]['meta']['touched'] ? 'error remove-margin-b' : 'remove-margin-b'} {...fields[TermNames.AutoPolicyNumber].input} id="S4_AutoPolicyNumber" type="text" maxLength="10"/>
                        </div> : null}

                        <div className="tb-15-margin"></div>

                        <div className={fields[TermNames.PrimeTimeDiscount]['meta']['error'] && fields[TermNames.PrimeTimeDiscount]['meta']['touched'] ? 'error radio-error' : 'radio-error'}>
                            <label>Are you over 50 years old, retired and living in your home more than 10 months of the year?</label>
                            <div className="col-50-percent">
                                <input type="radio" name={fields[TermNames.PrimeTimeDiscount].input.name} onChange={fields[TermNames.PrimeTimeDiscount].input.onChange} checked={fields[TermNames.PrimeTimeDiscount].input.value == '100'} value="100" id="S4_PrimeTimeDiscount-yes" data-show="Insured1BirthDate"/><label htmlFor="S4_PrimeTimeDiscount-yes" className="inline-block">Yes</label>
                            </div>
                            <div className="col-50-percent">
                                <input type="radio" name={fields[TermNames.PrimeTimeDiscount].input.name} onChange={fields[TermNames.PrimeTimeDiscount].input.onChange} checked={fields[TermNames.PrimeTimeDiscount].input.value == '200'} value="200" id="S4_PrimeTimeDiscount-no"/><label htmlFor="S4_PrimeTimeDiscount-no" className="inline-block">No</label>
                            </div>
                        </div>

                        <div className="tb-15-margin"></div>

                        <label htmlFor="S4_Insured1BirthDate">What is your date of birth?</label>
                        <input className={fields[TermNames.MultiPolicy]['meta']['error'] && fields[TermNames.MultiPolicy]['meta']['touched'] ? 'error remove-margin-b' : 'remove-margin-b'} {...fields[TermNames.Insured1BirthDate].input} id="S4_Insured1BirthDate" type="text" placeholder="MM/DD/YYYY"/>

                    </div>

                </div>
                <div className="right">

                    <div className="sub-col-wrapper">
                        <label>Home safety devices (check all that apply):<a href="#" onClick={e=>e.preventDefault()} className="tooltip-parent"><img src="assets/help-icon.png"/><div className="tooltip">A central station alarm is monitored by a security company that you are paying to dispatch personnel to your house when the alarm is tripped. A local alarm rings inside your house only.</div></a></label>
                        <div className="col-50-percent">
                            <input type="checkbox" value="" className="inline-block modify-dropdown" data-select="1" name="S4_FireAlarm" id="S4_FireAlarm" data-required-field="S4_FireAlarmLocation" data-change-required="true"/><label htmlFor="S4_FireAlarm" className="inline-block remove-margin-b">Fire Alarm</label>
                        </div>
                        <div className="col-50-percent">
                            <select {...fields[TermNames.FireAlarm].input} className="select-check-parent" data-dropdown-menus="FireAlarmLocation">{generateDropdowns(dropdownMenus, Insurance_Product, Product_State, 'FireAlarmLocation')}</select>
                        </div>

                        <div className="col-50-percent">
                            <input type="checkbox" value="" className="inline-block modify-dropdown" data-select="1" name="S4_BurglarAlarm" id="S4_BurglarAlarm" data-required-field="S4_BurglarAlarmLocation" data-change-required="true"/><label htmlFor="S4_BurglarAlarm" className="inline-block remove-margin-b">Burglar Alarm</label>
                        </div>
                        <div className="col-50-percent">
                            <select {...fields[TermNames.BurglarAlarm].input} className="select-check-parent" data-dropdown-menus="BurglarAlarmLocation">{generateDropdowns(dropdownMenus, Insurance_Product, Product_State, 'BurglarAlarmLocation')}</select>
                        </div>

                        <div className="col-50-percent">
                            <input type="checkbox" value="" className="inline-block modify-dropdown" data-select="1" name="S4_Sprinklers" id="S4_Sprinklers" data-required-field="S4_SprinklersLocation" data-change-required="true"/><label htmlFor="S4_Sprinklers" className="inline-block remove-margin-b">Sprinklers</label>
                        </div>
                        <div className="col-50-percent">
                            <select {...fields[TermNames.Sprinklers].input} className="select-check-parent" data-dropdown-menus="SprinklersLocation">{generateDropdowns(dropdownMenus, Insurance_Product, Product_State, 'SprinklersLocation')}</select>
                        </div>

                    </div>

                    <div className="tb-15-margin"></div>

                    <label htmlFor="S4_Insured1SSN">Social Security Number (Required): <a href="#" onClick={e=>e.preventDefault()} className="tooltip-parent">
                        <img src="assets/help-icon.png"/>
                        <div className="tooltip">We will not sell, rent, or lease your personal information to others. Your Social Security Number is secured by VeriSign and can qualify you for valuable discounts.
                            <p></p>Important Note: SSN cannot be updated if you save your quote or after submission.
                        </div>
                    </a></label>
                    <input className={fields[TermNames.Insured1SSN]['meta']['error'] && fields[TermNames.Insured1SSN]['meta']['touched'] ? 'error ' : ''} {...fields[TermNames.Insured1SSN].input} type="text" id="S4_Insured1SSN" maxLength="11"/>

                    <label htmlFor="S4_InsuredEmailAddress">Email Address: <a href="#" onClick={e=>e.preventDefault()} className="tooltip-parent"><img src="assets/help-icon.png"/><div className="tooltip">We will not sell, rent or lease your personal information to others. You may receive a copy of your quote via email. You will need your email address to retrieve a saved quote online.</div></a></label>
                    <input className={fields[TermNames.InsuredEmailAddress]['meta']['error'] && fields[TermNames.InsuredEmailAddress]['meta']['touched'] ? 'error ' : ''} {...fields[TermNames.InsuredEmailAddress].input} type="text" id="S4_InsuredEmailAddress" maxLength="50"/>

                </div>
            </div>
            <div className="legal-information tb-15-margin">
                <h1 className="remove-margin-b">Legal Disclosure Information</h1>

                <div className="body small tb-15-margin remove-margin-b">In order to provide you with the most accurate quote, Occidental will use information provided by
                    consumer reporting agencies, such as your insurance credit score. Please review our <a href="https://service.occidentalhomeowners.com/privacy.html" target="_blank">privacy policy</a>
                    for more information.
                </div>

                <div className="tb-15-margin remove-margin-b radio-error">
                    <input className={fields[TermNames.AcceptLegalTerms]['meta']['error'] && fields[TermNames.AcceptLegalTerms]['meta']['touched'] ? 'error inline-block' : 'inline-block'} {...fields[TermNames.AcceptLegalTerms].input}  checked={fields[TermNames.AcceptLegalTerms].input.value} type="checkbox"   name="S4_AcceptLegalTerms" id="S4_AcceptLegalTerms" /><label htmlFor="S4_AcceptLegalTerms" className="inline-block remove-margin-b small">I authorize the use of consumer report information</label>
                </div>
            </div>
        </div>

    )}

    export default renderFields