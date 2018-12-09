import React from 'react'
import {connect} from 'react-redux'

import { dispatchKitchenGradePop } from '../../reducers/popups.jsx'





function KitchenGrade ({dispatchKitchenGradePop}) {
    return (
        <div className="overlay-wrapper" style={{display:'block'}}>
            <div className="overlay-container wider">

                <img className="close-x close-overlay-wrapper" src="assets/close-x.png" onClick={(event)=>{
                    event.preventDefault();
                    dispatchKitchenGradePop(false)
                }} />
                <h2>KITCHEN GRADE: Choose the option that best matches your kitchen grade in the drop-down.</h2>
                <img width="983" height="681" src="assets/step-3.3.1.png"/>

            </div>
        </div>
        )
}




const mapState = (state) => ({

})

const mapDispatch = { dispatchKitchenGradePop}

export default connect(mapState, mapDispatch)(KitchenGrade)