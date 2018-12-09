var StoredQuoteID;
var date = new Date().getTime();
var JSONdata = new Object();
var RedirectTo;

/*
	Submit form on enter
*/

$(document).on("keydown", ".retrieve-quote input", function(e){
	 
	  var key = e.keyCode || e.which;
	 
	 if(key == 13||key == "enter")
	 {
		$(".button.retrieve-quote").trigger("click"); 
	 }
});


function validateRecall(string, validateType) 
{
	
	var validator = new Validator();
	
	var value = $.trim(string);
	
	if(validator[validateType](value, 150))
	{
		return true;	
	}
	else
	{
		return false;
	}
}


function logSessionTrackRecall(pageID)
{
	var svc = new IqsService();
	var SessionId = getSessionCookie();
	var LogSessionTrackDataArray = new Object();
	LogSessionTrackDataArray.PageId = pageID;

	svc.logSessionTrack(SessionId, LogSessionTrackDataArray, logSessionTrackRecallSuccess);

}

function logSessionTrackRecallSuccess(result)
{
	UpdateBeforeLoad();

	var zip = "S1_FORM" in JSONdata ? JSONdata.S1_FORM[TermNames["PropertyZipCode"]] : false;

	if(RedirectTo)
	{
		window.location = RedirectTo;
	}
	else if(zip)
	{
		window.location = "propertyquote.html?zipcode="+zip+"#/section=1&step=1.1";
	}
}



function updateRecallSessionStorageData(formData)
{
	var SessionId = getSessionCookie();
	var svc = new IqsService();

	var updateRecallSessionStorageDataArray = formData;
	
	var compressedData = JSON.stringify(updateRecallSessionStorageDataArray);
	
	svc.updateSessionStorageData(SessionId, compressedData, updateRecallSessionStorageDataSuccess);
}

function updateRecallSessionStorageDataSuccess(result)
{
	if(result.exception!= null)
	{
		exceptionHandler(result);
	}
	else
	{
        nextStepActive = false;
        refreshSessionCookie();
		
		logSessionTrackRecall("6.0");
	}
}


/////////////////////////////////////////
////Incomeplete Quote Error//////////////
/////////////////////////////////////////

function IncompleteQuote(ProvidedQuoteID)
{
	$(".content > .left, .content > .right").empty();
	$(".errors").remove();
	
	//Load Session Error Page
	$.ajax({
	type: "POST",
	url: "errors/incompleteQuote.html",
	success: function(html){
		
		$(".content > .left").html(html);
		InsertQuoteID(ProvidedQuoteID);
		
	}
	});	

	//Load Sidebar
	$.ajax({
	type: "POST",
	url: "section/sidebar/section-1.html?"+date,
	success: function(html){
	
		$(".content > .right").html(html);

	}
	});
	
}

function recallQuoteError(errorMessage, errorField)
{
	errorMessage = errorMessage ? errorMessage : false;
	errorField = errorField ? errorField : false;
	
	$(".errors").remove();
	$(".content-wrapper .body").after("<div class='errors'><ul class='error-list'></ul></div>");
	$(".errors").show();
	$(".errors .error-list").append("<li>"+errorMessage+"</li>");
	
	$("[name]").removeClass("error");
	$("[name='"+errorField+"']").addClass("error").focus();
	
}

var checkRecallQuoteSuccess = true;

function recallQuote(ZipCodeValue, QuoteIDValue)
{
	if(checkRecallQuoteSuccess)
	{
		JSONdata = new Object();
		
		var svc = new IqsService();
		
		$(".errors").remove();
		$("[name]").removeClass("error");
		
		var QuoteIDValue = $.trim($("form.retrieve-quote [name='QuoteNumber']").val());
		var ZipCodeValue = $.trim($("form.retrieve-quote [name='ZipCode']").val());
		
		var RecallQuoteID = validateRecall(QuoteIDValue, "isQuoteID") ? QuoteIDValue : "";
		var ZipCode = validateRecall(ZipCodeValue, "isZipCode") ? ZipCodeValue : "";
		
		if(RecallQuoteID && ZipCode)
		{
			RecallQuoteID = String(RecallQuoteID).match("^"+QuoteIDPrefix) ? RecallQuoteID : QuoteIDPrefix+""+RecallQuoteID;
			StoredQuoteID = RecallQuoteID;
			
			svc.recallQuote(RecallQuoteID, ZipCode, recallQuoteSuccess);
			checkRecallQuoteSuccess = false;
			Loading("Retrieving Quote...");
		}
		else if(!RecallQuoteID)
		{
			recallQuoteError("You must enter a quote number", "QuoteNumber");	
		}
		else if(!ZipCode)
		{
			recallQuoteError("You must enter a zip code.", "ZipCode");	
		}
	}
}



function sortHomeFeatures(requestedQuoteData, data, key)
{
	
	if(data && data > 50)
	{
		if(!JSONdata["S3_4_FORM"])
		{
			JSONdata["S3_4_FORM"] = {};	
		}
		
		if(data == 100)
		{
			JSONdata["S3_4_FORM"]["S3_4_OpenPorch"] = data;	
			JSONdata["S3_4_FORM"]["S3_4_OpenPorchSqFt"] = requestedQuoteData[key+"SquareFeet"];
			if(JSONdata["S3_4_FORM"]["S3_4_OpenPorchSqFt"] == "0"){
                JSONdata["S3_4_FORM"]["S3_4_OpenPorch"] = "";
            }
		}
		else if(data == 200)
		{
			JSONdata["S3_4_FORM"]["S3_4_ScreenedPorch"] = data;	
			JSONdata["S3_4_FORM"]["S3_4_ScreenedPorchSqFt"] = requestedQuoteData[key+"SquareFeet"];	
		}
		else if(data == 300)
		{
			JSONdata["S3_4_FORM"]["S3_4_OpenBreezeway"] = data;	
			JSONdata["S3_4_FORM"]["S3_4_OpenBreezewaySqFt"] = requestedQuoteData[key+"SquareFeet"];	
		}
		else if(data == 400)
		{
			JSONdata["S3_4_FORM"]["S3_4_ScreenedBreezeway"] = data;	
			JSONdata["S3_4_FORM"]["S3_4_ScreenedBreezewaySqFt"] = requestedQuoteData[key+"SquareFeet"];	
		}
		else if(data == 500)
		{
			JSONdata["S3_4_FORM"]["S3_4_Greenhouse"] = data;	
			JSONdata["S3_4_FORM"]["S3_4_GreenhouseSqFt"] = requestedQuoteData[key+"SquareFeet"];	
		}
		else if(data == 800)
		{
			JSONdata["S3_4_FORM"]["S3_4_WoodDeck"] = data;	
			JSONdata["S3_4_FORM"]["S3_4_WoodDeckSqFt"] = requestedQuoteData[key+"SquareFeet"];
            if(JSONdata["S3_4_FORM"]["S3_4_WoodDeckSqFt"] == "0"){
                JSONdata["S3_4_FORM"]["S3_4_WoodDeck"] = "";
            }
		}
		else if(data == 900)
		{
			JSONdata["S3_4_FORM"]["S3_4_CompositeDeck"] = data;	
			JSONdata["S3_4_FORM"]["S3_4_CompositeDeckSqFt"] = requestedQuoteData[key+"SquareFeet"];	
		}
	
	}
	
}


function recallQuoteSuccess(result)
{
	checkRecallQuoteSuccess = true;
	
	var RecallQuoteID = StoredQuoteID;
	
	RecallQuoteID = RecallQuoteID.match("^"+QuoteIDPrefix) ? RecallQuoteID : QuoteIDPrefix+""+RecallQuoteID;
	
	if(result.exception!= null)
	{
		error = result.exception;
		errorCode = result.exception.exceptionCode;
		errorMessage = error.exceptionMessage;
		
		UpdateBeforeLoad();
		
		if(errorCode == 10600)
		{
			recallQuoteError("We're sorry, however your quote cannot be found in our online system.  Please contact GEICO Insurance Agency at (800) 566-1518 if you have questions or would like to purchase your quote.", "QuoteNumber");
		}
		else if(errorCode == 10625)
		{
			recallQuoteError(errorMessage, "ZipCode");
		}
		else
		{
			exceptionHandler(result, StoredQuoteID);
		}
	}
	else
	{	
		var requestedQuoteData = result.responseDataPayload.Quote;
		var LastQuoteSectionPageId = result.responseDataPayload.LastQuoteSectionPageId;
		var LastQuoteIDArray = result.responseDataPayload.TouchedSectionList; //Array("1.1", "2.1", "3.1", "3.2");
		var sessionId = result.responseDataPayload.SessionId;

		setSessionCookie(sessionId);
		setQuoteIDCookie(RecallQuoteID);
	
		$(".errors").remove();
		$("[name]").removeClass("error");
		
		$.each(requestedQuoteData, function (key, data) {
			
			if(TermNames[key])
			{
				var formName = TermNames[key].substring(TermNames[key].lastIndexOf("_") + 1, 0);
					formName = formName+"FORM";
				
				if(!JSONdata[formName] && formName)
				{
					JSONdata[formName] = {};
				}
				
				if((key == "InsuredFirstName" && !data) || (key == "InsuredLastName" && !data))
				{
						
				}
				else
				{
					JSONdata[formName][TermNames[key]] = data;	
				}
				
			}
			else if(key.match("^HomeFeatures"))
			{
				if(key == "HomeFeatures1")
				{
					sortHomeFeatures(requestedQuoteData, data, "HomeFeatures1");
				}
				else if(key == "HomeFeatures2")
				{
					sortHomeFeatures(requestedQuoteData, data, "HomeFeatures2");
				}
				else if(key == "HomeFeatures3")
				{
					sortHomeFeatures(requestedQuoteData, data, "HomeFeatures3");
				}
			}
			
		});
		
		var removeThis = false;
		var NumericalLastQuoteIDArray = Array();
		
		$.each(LastQuoteIDArray, function(key, data){
			NumericalLastQuoteIDArray.push(data.replace(/\D/g, ''));
		});
		
		$.each(JSONdata, function (key, data){
			
			var NumericalLastQuoteID = LastQuoteSectionPageId.replace(/\D/g, '');
			var NumericalFormName = key.replace(/\D/g, '').length == 1 ?  key.replace(/\D/g, '')+"1" : key.replace(/\D/g, '');
			
			
			if(NumericalLastQuoteID > 0 && (NumericalFormName > NumericalLastQuoteID))
			{
				if(key != "S5_FORM")
				{
					delete JSONdata[key];	
				}
			}
			
			/*
			if(NumericalLastQuoteIDArray.length>0)
			{
				if($.inArray(NumericalFormName, NumericalLastQuoteIDArray) == -1)
				{
					if(key != "S5_FORM")
					{
						delete JSONdata[key];	
					}
				}
			}
			else
			{
				if(NumericalLastQuoteID && NumericalLastQuoteID > 0 && (NumericalFormName > NumericalLastQuoteID))
				{
					if(key != "S5_FORM")
					{
						delete JSONdata[key];	
					}
				}
			}*/
			
			
		});
		
		if("TotalPremium" in requestedQuoteData && $.trim(requestedQuoteData["TotalPremium"]))
		{
            if(LastQuoteSectionPageId >= 4)
            {
                RedirectTo = "viewquote.html";
            }
			else
			{
				delete JSONdata["S5_FORM"];
				
				var zip = "S1_FORM" in JSONdata ? JSONdata.S1_FORM[TermNames["PropertyZipCode"]] : false;
				var section = LastQuoteSectionPageId.split(".")[0];
				var step = LastQuoteSectionPageId;
				
				RedirectTo = "propertyquote.html?zipcode="+zip+"#/section="+section+"&step="+step;	
			}

		}
		else
		{
			delete JSONdata["S5_FORM"];
			
			if(LastQuoteSectionPageId)
			{
				var zip = "S1_FORM" in JSONdata ? JSONdata.S1_FORM[TermNames["PropertyZipCode"]] : false;
				var section = LastQuoteSectionPageId.split(".")[0];
				var step = LastQuoteSectionPageId;
				
				RedirectTo = "propertyquote.html?zipcode="+zip+"#/section="+section+"&step="+step;
			}

		}

		if(JSONdata.S5_FORM){
			requestedQuoteData.S5_FORM = JSONdata.S5_FORM
		}

		updateRecallSessionStorageData(Object.assign({}, requestedQuoteData, {LastQuoteSectionPageId}));
		
	}
}