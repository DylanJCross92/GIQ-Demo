import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Fields, reduxForm } from 'redux-form'
import { beginQuote, acceptAddress } from '../reducers/defaultData.jsx'
import {dispatchVerAddress} from '../reducers/session.jsx'
import PopupWrapper from './PopupWrapper.jsx'




function VerifyAddress ({addresses, enteredAddress, beginQuote, acceptAddress, dispatchVerAddress}) {
    return (
        <div className="overlay-wrapper">
            <div className="overlay-container validate-address">
                <div className="header">Validate Address</div>
                <form name="S1_FORM" >
                    <div className="body">
                        Address entered:
                        <div className="entered-address">
                            {`${enteredAddress.PropertyStreetAddress}, ${enteredAddress.PropertyCity}, ${enteredAddress.PropertyState}, ${enteredAddress.PropertyZipCode}`}
                        </div>

                        Below is the address that closely matches your entry. If this address is incorrect, click on the back button to edit.
                        {<ul className="matched-addresses"><li>{addresses[0].PropertyStreetNumber} {addresses[0].PropertyStreetName}, {addresses[0].PropertyCity}, {addresses[0].PropertyState}, {addresses[0].PropertyZipCode}</li></ul>}

                    </div>

                    <div className="button-wrapper">
                        <a className="button gray" onClick={(e)=>{
                            e.preventDefault()
                            dispatchVerAddress('')

                        }}>Back</a>
                        <a className="button orange " style={{float:'right'}} onClick={(e)=>{
                            e.preventDefault()
                            acceptAddress()
                        }}>Next</a>
                    </div>
                </form>

            </div>
        </div>
    )
}






const mapState = (state) => ({
    verAddress: state.session.verAddress,
    addresses: state.session.addresses,
    enteredAddress: state.session.enteredAddress
})

const mapDispatch = {beginQuote, acceptAddress, dispatchVerAddress}

VerifyAddress = connect(mapState, mapDispatch)(VerifyAddress)

export default class VerifyAddressContainer extends Component {
    // componentDidMount(){
    //     $(window).trigger('resize')
    // }

    render (){
        return <VerifyAddress {...this.props} />
    }
}