//configure the IQS Service Proxy
//proxyurlstart

//proxyurlend


//iqsservice calls
IqsService = function () {

};

IqsService.prototype.beginIqsSession = function (ProductDataArray, callBackOverride) {
    /// <summary>Begins an IQS session</summary>
    /// <param name="ProductDataArray" type="Array">An array containing necessary product data - Feid, Insurance_Product, (optional)Debug, (optional)AltData (SaneId), (optional)PageId </param>
    /// <returns name="responseDataPayload" type="JSON"> Returns a sessionId, if there is a problem it returns an exception. If an exception is thrown, the.Exception property will be populated. </returns>
    var proxy = new ServiceProxy(serviceUrl);
    var args = {
        "ProductDataArray":ProductDataArray
    };

    if (!callBackOverride) {
        proxy.invokePost("beginIqsSession",
            args,
            onPageSuccess,
            onPageError,
            false)
    } else {
        proxy.invokePost("beginIqsSession",
            args,
            callBackOverride,
            onPageError,
            false)
    }
}

IqsService.prototype.terminateIqsSession = function (SessionId, callBackOverride) {
    /// <summary> Select quote data from the database by key name, or the entire array of data and returns it. </summary>
    /// <param name="SessionId" type="String"> The current session id for the quote. </param>
    /// <param name="SelectedQuoteDataArray" type="JSON"> The requested key names to be returned. If there is not a specified key name then it will return all of the quote data. </param>
    /// <returns name="responseDataPayload" type="JSON"> Returns requested data from the database. If an exception is thrown, the.Exception property will be populated. </returns>
    var proxy = new ServiceProxy(serviceUrl);
    var args = [SessionId];

    if (!callBackOverride) {
        proxy.invokeDelete("terminateIqsSession",
            args,
            onPageSuccess,
            onPageError,
            false)
    } else {
        proxy.invokeDelete("terminateIqsSession",
            args,
            callBackOverride,
            onPageError,
            false)
    }
}

IqsService.prototype.logSessionTrack = function (SessionId, LogSessionTrackDataArray, callBackOverride) {
    /// <summary>Logs session tracking data</summary>
    /// <param name="LogSessionTrackDataArray" type="Array">An array containing necessary session tracking data - PageId </param>
    /// <returns name="responseDataPayload" type="JSON"> Returns a an empty response on success. If an exception is thrown, the Exception property will be populated. </returns>
    var proxy = new ServiceProxy(serviceUrl);
    var args = {
        "SessionId":SessionId,
        "LogSessionTrackDataArray":LogSessionTrackDataArray
    };

    if (!callBackOverride) {
        proxy.invokePost("logSessionTrack",
            args,
            onPageSuccess,
            onPageError,
            false)
    } else {
        proxy.invokePost("logSessionTrack",
            args,
            callBackOverride,
            onPageError,
            false)
    }
}


IqsService.prototype.validateAddress = function (SessionId, ValidateAddressDataArray, callBackOverride) {
    /// <summary> Verifies a legitimate account and returns a session ID and an array of matched addresses.</summary>
    /// <param name="feid" type="String">front end identification code</param>
    /// <returns name="responseDataPayload" type="JSON"> Returns an array of addresses and returns a session ID. If there are not any addresses, it returns an exception. If an exception is thrown, the.Exception property will be populated. </returns>
    var proxy = new ServiceProxy(serviceUrl);
    var args = {
        "SessionId":SessionId,
        "ValidateAddressDataArray": ValidateAddressDataArray
    };

    if (!callBackOverride) {
        proxy.invokePost("validateAddress",
            args,
            onPageSuccess,
            onPageError,
            false)
    } else {
        proxy.invokePost("validateAddress",
            args,
            callBackOverride,
            onPageError,
            false)
    }
}

IqsService.prototype.beginQuoteSession = function (SessionId, BeginQuoteDataArray, callBackOverride) {
    /// <summary> Sends the validated address to the EZQuote API to begin a quote session. </summary>
	/// <param name="SessionId" type="String"> The current session id for the quote. </param>
	/// <param name="BeginQuoteDataArray" type="JSON"> The validated address to use for this quote. </param>
    /// <returns name="responseDataPayload" type="JSON"> Returns a Quote ID. If an exception is thrown, the.Exception property will be populated. </returns>
    var proxy = new ServiceProxy(serviceUrl);
    var args = {
        "SessionId":SessionId,
        "BeginQuoteDataArray": BeginQuoteDataArray
    };

    if (!callBackOverride) {
        proxy.invokePost("beginQuoteSession",
            args,
            onPageSuccess,
            onPageError,
            false)
    } else {
        proxy.invokePost("beginQuoteSession",
            args,
            callBackOverride,
            onPageError,
            false)
    }
}

IqsService.prototype.getSelectedQuoteData = function (SessionId, SelectedQuoteDataArray, callBackOverride) {
    /// <summary> Select quote data from the database by key name, or the entire array of data and returns it. </summary>
	/// <param name="SessionId" type="String"> The current session id for the quote. </param>
	/// <param name="SelectedQuoteDataArray" type="JSON"> The requested key names to be returned. If there is not a specified key name then it will return all of the quote data. </param>
    /// <returns name="responseDataPayload" type="JSON"> Returns requested data from the database. If an exception is thrown, the.Exception property will be populated. </returns>
    var proxy = new ServiceProxy(serviceUrl);
    var args = [SessionId,encodeURIComponent(JSON.stringify(SelectedQuoteDataArray))];

    if (!callBackOverride) {
        proxy.invokeGet("getSelectedQuoteData",
            args,
            onPageSuccess,
            onPageError,
            false)
    } else {
        proxy.invokeGet("getSelectedQuoteData",
            args,
            callBackOverride,
            onPageError,
            false)
    }
}

IqsService.prototype.updateQuoteSession = function (SessionId, RunUpdateInBackground, UpdateQuoteDataArray, callBackOverride) {
    /// <summary> Updates the quote with an array of data. Also it can wait for a response from EZQuote API or move on and update in the background. </summary>
	/// <param name="SessionId" type="String"> The current session id for the quote. </param>
    /// <param name="RunUpdateInBackground" type="Boolean"> Whether or not to wait for a response from the EZQuote API. </param>
    /// <returns name="responseDataPayload" type="JSON"> Returns an empty string if successful. If an exception is thrown, the.Exception property will be populated. </returns>
    var proxy = new ServiceProxy(serviceUrl);
    var args = {
        "SessionId":SessionId,
        "UpdateQuoteDataArray": UpdateQuoteDataArray,
        "RunUpdateInBackground":RunUpdateInBackground
    };

    if (!callBackOverride) {
        proxy.invokePut("updateQuoteSession",
            args,
            onPageSuccess,
            onPageError,
            false)
    } else {
        proxy.invokePut("updateQuoteSession",
            args,
            callBackOverride,
            onPageError,
            false)
    }
}

IqsService.prototype.logQuoteSessionBlock = function (SessionId, BlockQuoteDataArray, callBackOverride) {
    /// <summary> Sends an error code to the database for instances where invalid data is sent in. </summary>
    /// <param name="SessionId" type="String"> The current session id for the quote. </param>
	/// <param name="BlockQuoteDataArray" type="JSON"> The error code of the specific blocked data. </param>
    /// <returns name="responseDataPayload" type="JSON"> Returns an empty string if successful. If an exception is thrown, the.Exception property will be populated. </returns>
    var proxy = new ServiceProxy(serviceUrl);
    var args = {
        "SessionId":SessionId,
        "BlockQuoteDataArray": BlockQuoteDataArray
    };

    if (!callBackOverride) {
        proxy.invokePost("logQuoteSessionBlock",
            args,
            onPageSuccess,
            onPageError,
            false)
    } else {
        proxy.invokePost("logQuoteSessionBlock",
            args,
            callBackOverride,
            onPageError,
            false)
    }
}

IqsService.prototype.updateSessionStorageData = function (SessionId, UpdateSessionStorageData, callBackOverride) {
    /// <summary> Updates the string of stored session quote data in the database. </summary>
    /// <param name="SessionId" type="String"> The current session id for the quote. </param>
	/// <param name="UpdateSessionStorageData" type="String"> A string of data to be stored in the database. </param>
    /// <returns name="responseDataPayload" type="JSON"> Returns an empty string if successful. If an exception is thrown, the.Exception property will be populated. </returns>
    var proxy = new ServiceProxy(serviceUrl);
    var args = {
        "SessionId":SessionId,
        "UpdateSessionStorageData": UpdateSessionStorageData
    };

    if (!callBackOverride) {
        proxy.invokePut("updateSessionStorageData",
            args,
            onPageSuccess,
            onPageError,
            false)
    } else {
        proxy.invokePut("updateSessionStorageData",
            args,
            callBackOverride,
            onPageError,
            false)
    }
}


IqsService.prototype.getSessionStorageData = function (SessionId, callBackOverride) {
    /// <summary> Returns a string of stored session quote data from the database. </summary>
    /// <param name="SessionId" type="String"> The current session id for the quote. </param>
    /// <returns name="responseDataPayload" type="JSON"> Returns a string of stored session quote data. If an exception is thrown, the.Exception property will be populated. </returns>
    var proxy = new ServiceProxy(serviceUrl);
    var args = [SessionId];

    if (!callBackOverride) {
        proxy.invokeGet("getSessionStorageData",
            args,
            onPageSuccess,
            onPageError,
            false)
    } else {
        proxy.invokeGet("getSessionStorageData",
            args,
            callBackOverride,
            onPageError,
            false)
    }
}

IqsService.prototype.recallQuote = function (QuoteId, ZipCode, callBackOverride) {
    /// <summary> Returns quote data from the EZQuote API to be displayed to the user. </summary>
    /// <param name="SessionId" type="String"> The current session id for the quote. </param>
    /// <returns name="responseDataPayload" type="JSON"> Returns an object of data to be displayed to the user. If an exception is thrown, the.Exception property will be populated. </returns>
    var proxy = new ServiceProxy(serviceUrl);
    var args = [QuoteId,ZipCode];

    if (!callBackOverride) {
        proxy.invokeGet("recallQuote",
            args,
            onPageSuccess,
            onPageError,
            false)
    } else {
        proxy.invokeGet("recallQuote",
            args,
            callBackOverride,
            onPageError,
            false)
    }
}

IqsService.prototype.generateSavedQuote = function (SessionId, UpdateQuoteDataArray, callBackOverride) {
    /// <summary> Verifies a legitimate account and returns a session ID </summary>
//TODO: fix this metadata
    /// <param name="feid" type="String">front end identification code</param>
    /// <returns type="OBPClientSessionID"> Returns a session ID. If an exception is thrown, the.Exception property will be populated. </returns>
    var proxy = new ServiceProxy(serviceUrl);
    var args = {
        "SessionId":SessionId,
        "UpdateQuoteDataArray": UpdateQuoteDataArray
    };

    if (!callBackOverride) {
        proxy.invokePost("generateSavedQuote",
            args,
            onPageSuccess,
            onPageError,
            false)
    } else {
        proxy.invokePost("generateSavedQuote",
            args,
            callBackOverride,
            onPageError,
            false)
    }
}

IqsService.prototype.generateTempQuote = function (SessionId, UpdateQuoteDataArray, callBackOverride) {
    /// <summary> Verifies a legitimate account and returns a session ID </summary>
//TODO: fix this metadata
    /// <param name="feid" type="String">front end identification code</param>
    /// <returns type="OBPClientSessionID"> Returns a session ID. If an exception is thrown, the.Exception property will be populated. </returns>
    var proxy = new ServiceProxy(serviceUrl);
    var args = {
        "SessionId":SessionId,
        "UpdateQuoteDataArray": UpdateQuoteDataArray
    };

    if (!callBackOverride) {
        proxy.invokePost("generateTempQuote",
            args,
            onPageSuccess,
            onPageError,
            false)
    } else {
        proxy.invokePost("generateTempQuote",
            args,
            callBackOverride,
            onPageError,
            false)
    }
}

IqsService.prototype.getHomeFeatures = function (SessionId, callBackOverride) {
    /// <summary>returns default home features based on product. Not to be called until necessary data has already been sent via updates</summary>
    /// <param name="SessionId" type="String"> The current session id for the quote. </param>
    /// <returns name="responseDataPayload" type="JSON"> Returns DefaultHomeFeatures JSON data. If an exception is thrown, the Exception property will be populated. </returns>
    var proxy = new ServiceProxy(serviceUrl);
    var args = [SessionId];

    if (!callBackOverride) {
        proxy.invokeGet("getHomeFeatures",
            args,
            onPageSuccess,
            onPageError,
            false)
    } else {
        proxy.invokeGet("getHomeFeatures",
            args,
            callBackOverride,
            onPageError,
            false)
    }
}


//default callbacks
//Overriden at the bottom of sitewide.js
function onPageError(err, serviceProxy, xmlHttpRequest) {
    //$("#errblock").text(err.detail);
    //alert("bar");
}

function onPageSuccess(err, serviceProxy, xmlHttpRequest){
    //alert("default success");
}





