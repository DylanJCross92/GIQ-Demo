import axios from 'axios'


const iqsService = axios.create({
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json, text/javascript, */*; q=0.01'
    }
})

export function beginIqsSession(ProductDataArray) {
    let jsonData = JSON.stringify({"ProductDataArray": ProductDataArray})

    return iqsService.post(`${serviceUrl}beginIqsSession`, jsonData)
}

export function terminateIqsSession (SessionId){
    return iqsService.delete(`${serviceUrl}terminateIqsSession/` + SessionId)
}

export function logSessionTrack (SessionId, LogSessionTrackDataArray) {
    let jsonData = JSON.stringify({"SessionId": SessionId,
        "LogSessionTrackDataArray": LogSessionTrackDataArray
    })

    return iqsService.post(`${serviceUrl}logSessionTrack`, jsonData)
}

export function validateAddress (SessionId, ValidateAddressDataArray) {
    let jsonData = JSON.stringify({"SessionId":SessionId,
        "ValidateAddressDataArray": ValidateAddressDataArray
    })

    return iqsService.post(`${serviceUrl}validateAddress`, jsonData)
}

export function beginQuoteSession (SessionId, BeginQuoteDataArray) {
    let jsonData = JSON.stringify({
        "SessionId":SessionId,
        "BeginQuoteDataArray": BeginQuoteDataArray
    })

    return iqsService.post(`${serviceUrl}beginQuoteSession`, jsonData)
}

export function getSelectedQuoteData (SessionId, SelectedQuoteDataArray) {
    let args = [SessionId, encodeURIComponent(JSON.stringify(SelectedQuoteDataArray))]
    return iqsService.get(`${serviceUrl}getSelectedQuoteData/${SessionId}/${encodeURIComponent(JSON.stringify(SelectedQuoteDataArray))}?_=${Date.now()}`)
}

export function updateQuoteSession(SessionId, RunUpdateInBackground, UpdateQuoteDataArray) {
    let jsonData = JSON.stringify({
        "SessionId":SessionId,
        "UpdateQuoteDataArray": UpdateQuoteDataArray,
        "RunUpdateInBackground":RunUpdateInBackground
    })
    return iqsService.put(`${serviceUrl}updateQuoteSession`, jsonData)
}

export function logQuoteSessionBlock(SessionId, BlockQuoteDataArray) {
    let jsonData = JSON.stringify({
        "SessionId":SessionId,
        "BlockQuoteDataArray": BlockQuoteDataArray
    })

    return iqsService.post(`${serviceUrl}logQuoteSessionBlock`, jsonData)
}

export function updateSessionStorageData (SessionId, UpdateSessionStorageData) {
    let jsonData = JSON.stringify({
        "SessionId":SessionId,
        "UpdateSessionStorageData": UpdateSessionStorageData
    })

    return iqsService.put(`${serviceUrl}updateSessionStorageData`, jsonData)
}

export function getSessionStorageData (SessionId) {
    return iqsService.get(`${serviceUrl}getSessionStorageData/${SessionId}?_=${Date.now()}`)
}

export function recallQuote (QuoteId, ZipCode) {
    return iqsService.get(`${serviceUrl}recallQuote/${QuoteId}/${ZipCode}?_=${Date.now()}`)
}

export function generateSavedQuote (SessionId, UpdateQuoteDataArray) {
    let jsonData = JSON.stringify({
        "SessionId":SessionId,
        "UpdateQuoteDataArray": UpdateQuoteDataArray
    })

    return iqsService.post(`${serviceUrl}generateSavedQuote`, jsonData)
}

export function generateTempQuote (SessionId, UpdateQuoteDataArray) {
    let jsonData = JSON.stringify({
        "SessionId":SessionId,
        "UpdateQuoteDataArray": UpdateQuoteDataArray
    })

    return iqsService.post(`${serviceUrl}generateTempQuote`, jsonData)
}

export function getHomeFeatures (SessionId) {
    return iqsService.get(`${serviceUrl}getHomeFeatures/${SessionId}?_=${Date.now()}`)
}