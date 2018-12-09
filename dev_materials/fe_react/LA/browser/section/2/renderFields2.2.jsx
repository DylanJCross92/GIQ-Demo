import React from 'react';
import TermNames from '../../frontendOptions/termNames'
import { generateDropdowns } from '../../utils/utils.jsx'
import DatePicker from 'react-pikaday-component'
import { focus } from 'redux-form'
import store from '../../store.jsx'

const renderFields = (fields) => {
    console.log('fields', fields)
    const errorList = [];
    for (var key in fields){
        if (fields.hasOwnProperty(key) && fields[key] && fields[key]['meta'] && fields[key]['meta']['touched'] && fields[key]['meta']['error']){
            errorList.push({field: key , message: fields[key]['meta']['error']})
        }
    }
    const showError = errorList.length > 0 ? 'block' : 'none'

    const lossList = [];

    for (let i = 1; i <= fields.NumberOfClaims; i++){
        lossList.push(i)
    }

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
                    <div className="content-wrapper">
                        <h1>Claim or Loss Information</h1>

                        <div className="multi-col">
                            {
                                lossList.map(i =>(
                                    <div className={`one-third claim-${i}`} key={i}>
                                        <h2>Claim {i}</h2>
                                        <div className="sub-col-wrapper">
                                            <label htmlFor={TermNames[`LossDate${i}`]}>Approximate date of Loss:</label>
                                            <div className="col-75-percent">
                                                <DatePicker className={fields[TermNames[`LossDate${i}`]]['meta']['error'] && fields[TermNames[`LossDate${i}`]]['meta']['touched'] ? 'error' : ''}
                                                            onChange={fields[TermNames[`LossDate${i}`]].input.onChange}
                                                            value={new Date(fields[TermNames[`LossDate${i}`]].input.value)}
                                                            format='MM/DD/YYYY'
                                                            placeholder="MM/DD/YYYY"
                                                            id={`S2_2_Date${i}`}
                                                            trigger={`document.getElementById(${TermNames[`LossDate${i}`]})`}/>
                                            </div>
                                            <div className="col-25-percent">
                                                <label id={TermNames[`LossDate${i}`]} onClick={()=> store.dispatch(focus('FORM', TermNames[`LossDate${i}`]))} style={{marginLeft:10}} htmlFor={`S2_2_Date${i}`}><img className="date-selector" src="assets/calendar-icon.png"/></label>
                                            </div>

                                            <label htmlFor={TermNames[`LossAmount${i}`]}>Total amount paid for Loss:</label>
                                            <div className="col-75-percent">
                                                <input {...fields[TermNames[`LossAmount${i}`]].input} className={fields[TermNames[`LossAmount${i}`]]['meta']['error'] && fields[TermNames[`LossAmount${i}`]]['meta']['touched'] ? 'error' : ''} type="text"  id="S2_2_LossAmountPaid1" />
                                            </div>
                                            <div className="col-25-percent"></div>
                                        </div>

                                        <label>Type of Loss:</label>
                                        <select className={fields[TermNames[`LossType${i}`]]['meta']['error'] && fields[TermNames[`LossType${i}`]]['meta']['touched'] ? 'error' : ''} {...fields[TermNames[`LossType${i}`]].input} data-dropdown-menus="LossType">{generateDropdowns(fields.dropdownMenus, fields.Insurance_Product, fields.Product_State, 'LossType')}</select>

                                        <div className={fields[TermNames[`LossCatIndicator${i}`]]['meta']['error'] && fields[TermNames[`LossCatIndicator${i}`]]['meta']['touched'] ? 'error sub-col-wrapper tb-15-margin radio-error' : 'sub-col-wrapper tb-15-margin radio-error'} >
                                            <label>Was Loss result of a Catastrophe (e.g. Hurricane, Tornado)?</label>
                                            <div className="col-50-percent">
                                                <input type="radio"  name={fields[TermNames[`LossCatIndicator${i}`]].input.name} onChange={fields[TermNames[`LossCatIndicator${i}`]].input.onChange} checked={fields[TermNames[`LossCatIndicator${i}`]].input.value == '100'} value="100" id="S2_2_LossCatastrophe1-yes" /><label htmlFor={fields[TermNames[`LossAmount${i}`]].input.name} className="inline-block" >Yes</label>
                                            </div>
                                            <div className="col-50-percent">
                                                <input type="radio"  name={fields[TermNames[`LossCatIndicator${i}`]].input.name} onChange={fields[TermNames[`LossCatIndicator${i}`]].input.onChange} checked={fields[TermNames[`LossCatIndicator${i}`]].input.value == '200'} value="200" id="S2_2_LossCatastrophe1-no" /><label htmlFor="S2_2_LossCatastrophe1-no" className="inline-block" >No</label>
                                            </div>
                                        </div>

                                        <label htmlFor={TermNames[`LossDescription${i}`]}>Description of Loss:</label>
                                        <textarea className={fields[TermNames[`LossDescription${i}`]]['meta']['error'] && fields[TermNames[`LossDescription${i}`]]['meta']['touched'] ? 'error' : ''} {...fields[TermNames[`LossDescription${i}`]].input} id="S2_2_LossDescription1"></textarea>
                                    </div>
                                ))
                            }
                            {fields.NumberOfClaims < 3 ? <div className="one-third claim-3"></div> : null}

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )

}

export default renderFields