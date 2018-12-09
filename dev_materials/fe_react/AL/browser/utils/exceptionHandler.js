import history from '../history.js'
import Cookie from 'js-cookie'
import store from '../store.jsx'

//need to separate initial state default data to own file
//when clearing session, set defaultData store to initial state
//leave zipcode and quoteId in session state to be used by error page
//SessionTimedOUt just loads error page and adds href. we can load error page with history.push

export default function exceptionHandler (data, ProvidedQuoteID) {
    let errorCode = data ? data.exceptionCode : 10500

    if(errorCode == 10400)
    {
        clearSessionCookie();
        history.push('/errors/sessionError')
    }
    else if(errorCode == 10500)
    {
        clearSessionCookie();
        history.push('/errors/serverError')
    }
    else if(errorCode == 10525 || errorCode == 10550)
    {
        modifiedQuoteError(ProvidedQuoteID);
    }
    else
    {
        history.push('/errors/serverError');
    }
}

export function clearSessionCookie() {
    const { session, config } = store.getState()
    Cookie.set(`IQSSess${config.Product_State}`, null)

}