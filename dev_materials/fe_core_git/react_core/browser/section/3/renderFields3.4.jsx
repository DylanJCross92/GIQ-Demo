import React from 'react';
import TermNames from '../../frontendOptions/termNames'
import { generateDropdowns, getGrade } from '../../utils/utils.jsx'

import HomeFeature from './HomeFeature.jsx'



const renderFields = (fields) => {

    const errorList = [];
    const messages = [];
    for (var key in fields){
        if (fields.hasOwnProperty(key) && fields[key] && fields[key]['meta'] && fields[key]['meta']['touched'] && fields[key]['meta']['error']){
            if(!messages.includes(fields[key]['meta']['error'])) {
                errorList.push({field: key, message: fields[key]['meta']['error']})
                messages.push(fields[key]['meta']['error'])
            }
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
            <h1>Additional Home Features</h1>
            <div className="body underwriting-block"><strong>We allow up to three additional features.</strong> Based on our experience, properties in your area usually have these features:</div>
            <ul className="home-features featured">
                {fields.defaultFeatures.map(feature => <HomeFeature fields={fields} value={feature} key={feature} /> )}
            </ul>
            <div className="body home-features-featured">Please select any additional home features if applicable totaling <strong>no more than three</strong>:</div>
            <ul className="home-features">
                {fields.homeFeatures.map(feature => <HomeFeature fields={fields} value={feature} key={feature} /> )}
            </ul>

        </div>

    )}

    export default renderFields