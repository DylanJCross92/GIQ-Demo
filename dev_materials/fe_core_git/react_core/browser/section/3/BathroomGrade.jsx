import React from 'react'
import {connect} from 'react-redux'

import { dispatchBathroomGradePop } from '../../reducers/popups.jsx'





function BathroomGrade ({dispatchBathroomGradePop}) {
    return (
        <div className="overlay-wrapper" style={{display:'block'}}>
            <div className="overlay-container wider">

                <img className="close-x close-overlay-wrapper" src="assets/close-x.png" onClick={(event)=>{
                    event.preventDefault();
                    dispatchBathroomGradePop(false)
                }} />
                <h2>FULL BATHROOM GRADE: Choose the option that best matches your bathroom grade in the drop-down.</h2>
                <img width="983" height="433" src="assets/step-3.3.2.png"/>

            </div>
        </div>
        )
}




const mapState = (state) => ({

})

const mapDispatch = { dispatchBathroomGradePop}

export default connect(mapState, mapDispatch)(BathroomGrade)