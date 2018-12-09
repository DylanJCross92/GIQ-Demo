import React from 'react';
import { connect } from 'react-redux'
import { submit, reduxForm } from 'redux-form'
import { submitUpdate, updateSaveQuote } from '../../reducers/defaultData.jsx'
import { dispatchIncPage, dispatchIsCanceling } from '../../reducers/popups.jsx'
import IncompletePage from '../../popups/IncompletePage.jsx'
import Loading from '../../popups/Loading.jsx'
import SaveQuote from '../../popups/SaveQuote.jsx'
import QuitConfirmation from '../../popups/QuitConfirmation.jsx'

export function Sidebar ({defaultData, pageId, dispatch, handleSubmit, onSubmit, setIncPage, incPage, isSaving, thankYou, isCanceling, dispatchIsCanceling}) {
    return (
        <div className="right">
            <img className="top-logo" src="assets/geico-logo-3.png"/>

            <div className="tb-15-margin">
                <div className="geico-header" style={{marginLeft:-5, marginRight:-5}}>Federated National Insurance Company, a Trusted GEICO Insurance Agency Partner</div>
                {+pageId > 2 ? <div className="body small line-height-15" style={{marginTop:5}}>
                    Fast, reliable and secure online quote
                </div> : null}
            </div>

            {+pageId > 2 ? <div>
                <div className="body" style={{marginTop: 15, marginBottom: 5}}>
                    <form name='FORM' onSubmit={handleSubmit(onSubmit)}>
                        <button type='submit' onClick={e=>{
                            e.preventDefault()
                            setIncPage(true)
                            dispatch(submit('FORM'))
                        }} className="button orange">Save Your Quote</button>
                    </form>
                </div>

                <div className="body" style={{marginBottom: 15}}>
                    <a href="javascript:void(0)" onClick={(e)=> {
                        e.preventDefault()
                        dispatchIsCanceling(true)
                    }} className="cancel-quote">Cancel this Quote</a>
                </div>

                <div className="quote-summary">
                    <h3>QUOTE SUMMARY</h3>

                    <div className="section S1_FORM">
                        <h3>Your Info <a className="edit" href="#/section=1&step=1.1">Edit</a></h3>
                        <div className="body smaller line-height-15">
                            {`${defaultData.InsuredFirstName} ${defaultData.InsuredLastName}`} <br />
                            {`${defaultData.PropertyStreetAddress}`} <br />
                            {`${defaultData.PropertyCity}, ${defaultData.PropertyState}, ${defaultData.PropertyZipCode}`}
                        </div>
                    </div>

                    {+pageId > 3 ? <div className="section claim-loss-info S2_FORM">
                        <h3>Claim/Loss Info <a className="edit" href="#/section=2&step=2.1">Edit</a></h3>
                        <div className="body smaller line-height-15"></div>
                    </div> : null }

                    {+pageId > 4 ? <div className="section S3_FORM">
                        <h3>Property Info <a className="edit" href="#/section=3&step=3.1">Edit</a></h3>
                        <div className="body smaller line-height-15"></div>
                    </div> : null}

                </div>
            </div> : <ul className="icon-boxes">
                <li>
                    <img src="assets/geico-timer.png"/>
                    Get an online quote in less than 5 minutes!
                </li>
                <li>
                    <img src="assets/geico-target.png"/>
                    The more info you provide, the more accurate of a quote will be provided.
                </li>
            </ul>  }


            <div className="line-break"></div>

            <div className="geico-header">Have Questions?</div>
            <div className="body small line-height-15" style={{marginTop:5}}>
                Call a GEICO Insurance Agency Customer Service Representative at:
            </div>
            <div className="geico-phone-number">(800) 566-1518</div>
            <div className="body small" style={{fontSize:12,
                marginLeft:-5,
                marginRight:-5}}>
                <strong>HOURS OF OPERATION</strong><br />
                Mon.-Fri. 7:30 AM - 1:00 AM ET<br />
                Sat. - Sun. 8:00 AM - 10:30 PM ET
            </div>
            {incPage ? <IncompletePage /> : null}
            {isSaving && +pageId < 4? <Loading message={"Saving..."} styles={{
                maxHeight: 351,
                height: 'auto',
                overflowY: 'auto',
                overflowX: 'hidden',
                // marginTop: -75.5,
                // marginLeft: -157
            }
            } /> : null}
            {thankYou ? <SaveQuote /> : null}
            {isCanceling ? <QuitConfirmation /> : null}
        </div>
    )
}

Sidebar = reduxForm({
    form:'FORM',
    destroyOnUnmount: false

})(Sidebar)

const mapState = (state) => {
    return {
        defaultData: state.defaultData,
        pageId: state.session.pageId,
        incPage: state.popups.incPage,
        isSaving: state.popups.isSaving,
        thankYou: state.popups.thankYou,
        isCanceling: state.popups.isCanceling
    }
}

const mapDispatch = {
    onSubmit: updateSaveQuote,
    setIncPage: dispatchIncPage,
    dispatchIsCanceling
}

export default connect(mapState, mapDispatch )(Sidebar)