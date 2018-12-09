import history from '../history.js'
import {logQuoteSessionBlock} from './iqsServicePromise.js'
import blockCodes from '../frontendOptions/blockCodes.js'
import {getSessionCookie} from './utils.jsx'
import { clearSessionCookie } from './exceptionHandler.js'
import store from '../store.jsx'

export default function checkBlockCodes (values) {
    for(let field in values){
        let value = values[field]
        if(values.hasOwnProperty(field)){
            if(blockCodes[field] && blockCodes[field][value]) {
                let sessionId = store.getState().session.sessionId
                let BlockCodeDataArray = {
                    BlockQuoteCode: blockCodes[field][value]
                }
                DebugInformation("logQuoteSessionBlock", BlockQuoteDataArray)
                logQuoteSessionBlock(sessionId, BlockCodeDataArray)
                clearSessionCookie();

                return true;

            }
        }
    }
    return false;
}