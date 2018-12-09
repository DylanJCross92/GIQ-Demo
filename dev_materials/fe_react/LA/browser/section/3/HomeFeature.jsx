import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Fields, reduxForm } from 'redux-form'

import { loadHomeFeature, loadHomeInfo, generateDropdowns } from '../../utils/utils.jsx'
import PropertyInfo from '../../frontendOptions/propertyInfo.js'
import { dispatchSelectedHomeFeature, dispatchHomeFeaturePop } from '../../reducers/popups.jsx'
import store from '../../store.jsx'

let features = {
    '100': 'OpenPorch',
    '800': 'WoodDeck',
    '900': 'CompositeDeck',
    '500': 'Greenhouse',
    '200': 'ScreenedPorch',
    '300': 'OpenBreezeway',
    '400': 'ScreenedBreezeway'
}

let featureImages = {
    '100': "assets/other_features/open-porch.png",
    '800': "assets/other_features/wood-deck.png",
    '900': "assets/other_features/composite-deck.png",
    '500': "assets/other_features/greenhouse.png",
    '200': "assets/other_features/screened-porch.png",
    '300': "assets/other_features/open-breezeway.png",
    '400': "assets/other_features/screened-breezeway.png"
}




function HomeFeature ({dropdownMenus, Product_State, Insurance_Product, fields, value }) {
    return (
        <li key={value} data-enum={value}>
            <label htmlFor={`S3_4_${features[value]}`}>
                <img src={featureImages[value]}/>
            </label>
            <div className="features-dropdown-wrapper">
                <input type="checkbox" {...fields[features[value]].input}
                       data-for={`S3_4_${features[value]}-parent`}
                       checked={fields[features[value]].input.value}
                       id={`S3_4_${features[value]}`}
                       onChange={
                            (event) => {fields[features[value]].input.onChange(event)
                            fields.change(`${features[value]}SqFt`, '')}
                        } /><label htmlFor={`S3_4_${features[value]}`} className="inline-block">{features[value]}</label>

                {fields[features[value]].input.value == true ? <div className={`composite-deck-sqft S3_4_${features[value]}-parent`}>
                        <select {...fields[`${features[value]}SqFt`].input} className={fields[`${features[value]}SqFt`]['meta']['error'] && fields[`${features[value]}SqFt`]['meta']['touched'] ? 'error ' : ''}  >{generateDropdowns(dropdownMenus, Insurance_Product, Product_State, 'HomeFeatureSqFt')}</select>
                    </div> : null}

            </div>
        </li>


    )
}




const mapState = (state) => ({
    dropdownMenus: state.config.dropdownMenus,
    Product_State: state.config.Product_State,
    Insurance_Product: state.config.Insurance_Product
})

const mapDispatch = {dispatchSelectedHomeFeature, dispatchHomeFeaturePop}

HomeFeature = connect(mapState, mapDispatch)(HomeFeature)

export default class HomeFeatureContainer extends Component {
    // componentDidMount(){
    //     $(window).trigger('resize')
    // }

    render (){
        return <HomeFeature {...this.props} />
    }
}