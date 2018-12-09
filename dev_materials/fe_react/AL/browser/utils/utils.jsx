import React from 'react'
import Cookie from 'js-cookie'
import store from '../store.jsx'
import { setSelectedHomeStyle, setSelectedRoofType, dispatchSelectedHomeStyle } from '../reducers/popups.jsx'

export function generateDropdowns (dropdownMenus, Insurance_Product, Product_State, keyName ){

    if(keyName+"_"+Product_State+"_"+Insurance_Product in dropdownMenus)
    {
        keyName =keyName+"_"+Product_State+"_"+Insurance_Product;
    }
    else if(keyName+"_"+Product_State in dropdownMenus)
    {
        keyName = keyName+"_"+Product_State;
    }

    const options = dropdownMenus[keyName] ? dropdownMenus[keyName].map((option) => {
        let disabled = option.disabled ? 'disabled' : ''
        let selected = option.selected ? 'selected' : ''
        let extraData = option.extra ? option.extra : ''
        let value = option.value

        return <option key={option.label} value={value} disabled={disabled ? true : false} >{option.label}</option>
    }) : []


    return options

}

export function getSessionCookie(Product_State)
{
    return Cookie.get('IQSSess'+Product_State);
}

export function getZipcode()
{
    var href = encodeURI(window.location).toLowerCase();
    var zip = href.match("zipcode=([0-9]{5})") ? href.match("zipcode=([0-9]{5})")[1] : false;

    return zip;
}

export function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');

    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    if (trident > 0) {
        // IE 11 (or newer) => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    // other browser
    return false;
}

export function checkBrowser() {

    var browserName = $.browser.name;
    var browserVersion = $.browser.version;

    var FirefoxOK = browserName == "firefox" && parseFloat(browserVersion) >= "3.6";
    var ChromeOK = browserName == "chrome" && parseFloat(browserVersion) >= "18";
    var SafariOK = browserName == "safari" && parseFloat(browserVersion) >= "5.1";
    var InternetExplorerOK = detectIE();

    return (FirefoxOK || ChromeOK || SafariOK || InternetExplorerOK)

}

export function setInsuranceProductToggleCookie(InsuranceToggle, ProductState)
{

    Cookie.set('Insurance_Product_Toggle'+ProductState, InsuranceToggle, { expires: 2 });

}

export function setSessionCookie(sessionID, ProductState)
{
    var date = new Date();
    date.setTime(date.getTime() + (sessionTimeOutLength * 60 * 1000));
    Cookie.set('IQSSess'+ProductState, sessionID, {expires: date});

    sessionTimer();
    //need to rewrite session Timer and Session Timed Out
}

export function refreshSessionCookie(ProductState){
    setSessionCookie(getSessionCookie(ProductState), ProductState)
}

export function setQuoteIdCookie(QuoteId, productState){
    Cookie.set(`QuoteID${productState}`, QuoteId, { expires: 1 });
}

export function getQuoteIdCookie(productState){
    return Cookie.get(`QuoteID${productState}`);
}

export function loadHomeStyle(info, change, homeStyle, stories) {
    let valid = ""
    switch(stories) {
        case "100":
            valid = [200,300,400,500,501,700,900,601,602,-601,-602];
            break;

        case "150":
            valid = [100,101,300,400,700,900,601,602,-601,-602];
            break;

        case "200":
            valid = [100,300,400,501,700,900,601,602,-601,-602];
            break;

        case "250":
            valid = [300,400,700,900,601,602,-601,-602];
            break;

        case "300":
            valid = [300,400,700,900,601,602,-601,-602];
            break;

        case "350":
            valid = [300,400,700,900,601,602,-601,-602];
            break;

        case "400":
            valid = [300,400,700,900,601,602,-601,-602];
            break;
        default: valid =[200,300,400,500,501,700,900,601,602,-601,-602]
    }
    let listItems = []
    for (let item in info){
        if (info.hasOwnProperty(item)){
            let currentItem = info[item]
            currentItem.name = item
            listItems.push(currentItem)
        }
    }

    return listItems.map(item => {
        let isValid = valid.includes(item.value)
        return (
            <li key={item.name} data-name={item.name} data-value={item.value}
                className={'tooltip-parent ' + (!isValid ? 'disabled' : '') + (homeStyle == item.value ? 'selected' : '')}   onClick={isValid ? ()=>{
                change('HomeStyle', item.value)
                if(item.value == '601' || item.value == '602'){
                    change('StructureType', '100')
                }
                store.dispatch(dispatchSelectedHomeStyle(item.name))
            } : ()=>{} }>
                <img src={`assets/property_info/${item.filename}.png`}/>
                <div className='label'>{item.name}</div>
                {item.description ? <div className="tooltip">{item.description}</div> : null }
                <div className='checkmark'></div>
            </li>
        )
    })

}

export function loadHomeInfo(info, change, infoValue, dispatcher, field){
    let listItems = [];
    for (let item in info){
        if (info.hasOwnProperty(item)){
            let currentItem = info[item]
            currentItem.name = item
            listItems.push(currentItem)
            console.log('home info', item, currentItem)
        }

    }

    return listItems.map(item => {

        return (
            <li key={item.name} data-name={item.name} data-value={item.value}
                className={'tooltip-parent ' + (infoValue === item.value ? 'selected' : '')}   onClick={()=>{
                change(field, item.value)
                dispatcher(item.name)
            }}>
                <img src={`assets/property_info/${item.filename}.png`}/>
                <div className='label'>{item.name}</div>
                {item.description ? <div className="tooltip">{item.description}</div> : null }
                <div className='checkmark'></div>
            </li>
        )
    })


}

export function getGrade(value){

    switch(value){
        case '0':
            return 'Basic'
        case '100':
            return 'Builders grade'
        case '200':
            return 'Semi-custom'
        case '300':
            return 'Custom'
        case '400':
            return 'Designer'
        default:
            return ''
    }

}

export function getHomeFeature(quoteData, feature){
    let featureValue = quoteData[feature]

    switch (featureValue) {
        case '100':
            return 'OpenPorch'
        case '200':
            return 'ScreenedPorch'
        case '300':
            return 'OpenBreezeway'
        case '400':
            return 'ScreenedBreezeway'
        case '500':
            return 'Greenhouse'
        case '800':
            return 'WoodDeck'
        case '900':
            return 'CompositeDeck'
        default:
            return;
    }


}

export function getHomeFeatureSqFt(quoteData, feature ){
    return quoteData[`${feature}SquareFeet`]
}

