var TempQuoteLoaded = false;
//var EZQuoteErrorCount = 0;
var LoadingQuoteType;
var LoadedPreferredValues = false;
var LoadedBasicValues = false;
var CalculatedCoverageA = "";


function generateSavedQuote(QuoteType)
{
	var SessionId = getSessionCookie();
	var svc = new IqsService();

	var PreferredQuoteArray = typeof PreferredQuoteTemplateDataArray_DP3 !== "undefined" && Insurance_Product == "DP3" ? PreferredQuoteTemplateDataArray_DP3 : PreferredQuoteTemplateDataArray;
	var BasicQuoteArray = typeof BasicQuoteTemplateDataArray_DP3 !== "undefined" && Insurance_Product == "DP3" ? BasicQuoteTemplateDataArray_DP3 : BasicQuoteTemplateDataArray;

	var QuoteArray = QuoteType == "preferred" ? PreferredQuoteArray : QuoteType == "basic" ? BasicQuoteArray : QuoteType == "custom" ? CustomQuoteTemplateDataArray : "";

	$(".coverage-options-wrapper li").find(":radio").prop("disabled", true);
	
	if(QuoteType != "custom")
	{
		Loading("Please wait while we</br>calculate your quote");	
	}
	
	refreshSessionCookie();
	
	if(Insurance_Product == "DP3")
	{
		if(formData)
		{
			if(formData["S1_FORM"]["S1_OwnedBy"] == "200" && formData["S1_FORM"]["S1_PropertyUsage"] == "100-200")
			{
				QuoteArray["TheftCoverage"] = "100";
			}
		}
	}
	
	svc.generateSavedQuote(SessionId, QuoteArray, generateSavedQuoteSuccess);
	
}



function updateSavedQuote(QuoteType, useCalculatedCoverageA)
{
	var SessionId = getSessionCookie();
	var svc = new IqsService();
	
	refreshSessionCookie();

	$(".coverage-options-wrapper li").find(":radio").prop("disabled", true);

	var PreferredQuoteArray = typeof PreferredQuoteTemplateDataArray_DP3 !== "undefined" && Insurance_Product == "DP3" ? PreferredQuoteTemplateDataArray_DP3 : PreferredQuoteTemplateDataArray;
	var BasicQuoteArray = typeof BasicQuoteTemplateDataArray_DP3 !== "undefined" && Insurance_Product == "DP3" ? BasicQuoteTemplateDataArray_DP3 : BasicQuoteTemplateDataArray;

	var QuoteArray = QuoteType == "preferred" ? PreferredQuoteArray : QuoteType == "basic" ? BasicQuoteArray : QuoteType == "custom" ? CustomQuoteTemplateDataArray : "";
	
	Loading("Please wait while we</br>calculate your quote");	
	
	if(QuoteType == "custom")
	{
		var QuoteData = getFormData();

		if(QuoteData)
		{
			var TermNameKeys = {};
			$.each(TermNames, function(key, name){ TermNameKeys[name] = key; });
			
			QuoteData = JSON.parse(QuoteData)["S5_FORM"];

            $.each(QuoteData, function(i, v){
				var getTermName = $("[name='"+TermNames[TermNameKeys[i]]+"']").data("ezquote-term-name");
				CustomQuoteTemplateDataArray[getTermName] = cleanVar(cleanCurrency(QuoteData[TermNames[TermNameKeys[i]]]));
			});
			
		}
		
	}
	
	if(Insurance_Product == "DP3" && typeof quoteFields_DP3 !== "undefined")
	{
		quoteFields = quoteFields_DP3;	
	}
	
	$(".quote-details [data-term-name]").each(function(i, v){
		
		var termName = $(this).data("term-name");

		if($.inArray(termName, quoteFields) < 0)
		{
			$(this).remove();	
		}
		
		
	});
	
	if(useCalculatedCoverageA && CalculatedCoverageA && QuoteType != "custom")
	{
		QuoteArray.CoverageA = CalculatedCoverageA;
	}

    /*
	if(Insurance_Product == "DP3")
	{
		if(formData)
		{
			if(formData["S1_FORM"]["S1_OwnedBy"] == "200" && formData["S1_FORM"]["S1_PropertyUsage"] == "100-200")
			{
				QuoteArray["TheftCoverage"] = "100";
			}
		}
	}
	*/
	
	svc.updateQuoteSession(SessionId, false, QuoteArray, generateSavedQuoteSuccess);
	
}





function generateSavedQuoteSuccess(result)
{
	if(result.exception!= null)
	{
		exceptionHandler(result);
	}
	else
	{
		var QuoteType = $(".coverage-options-wrapper li.selected").data("quote-type");
		
		if(QuoteType == "custom" && ($.trim($(".coverage-options-wrapper li.custom .amount").html()) && $(".coverage-options-wrapper li.custom .amount .choose-options").length == 0))
		{
			QuoteType = $(".coverage-options-wrapper li").find(".loading-icon").closest("li").data("quote-type");
			QuoteType = QuoteType ? QuoteType : "custom";
		}

		UpdateBeforeLoad();
		
		$(".quote-wrapper .print-quote").show();
		
		var requestedQuoteData = result.responseDataPayload.Quote;

		if(requestedQuoteData.Insurance_Product)
		{
			Insurance_Product = requestedQuoteData.Insurance_Product;		
		}

		CalculatedCoverageA = requestedQuoteData.CalculatedCoverageA;
			
		LastQuoteLoadedOBJ = requestedQuoteData;
		
		$(".coverage-options-wrapper li."+QuoteType+" .amount").html(requestedQuoteData.TotalPremium).formatCurrency({negativeFormat: false, roundToDecimalPlace: 0}).closest("li.selected").find(".payment-plans").show();
			
		if(Insurance_Product == "DP3" && typeof quoteFields_DP3 !== "undefined")
		{
			quoteFields = quoteFields_DP3;


			if(requestedQuoteData.CoverageE == 0 && requestedQuoteData.CoverageL > 0)
			{
				requestedQuoteData.CoverageE = requestedQuoteData.CoverageL;
			}

			if(requestedQuoteData.CoverageF == 0 && requestedQuoteData.CoverageM > 0)
			{
				requestedQuoteData.CoverageF = requestedQuoteData.CoverageM;
			}
		}
		
		$(".quote-details [data-term-name]").each(function(i, v){
			
			var termName = $(this).data("term-name");
			
			if($.inArray(termName, quoteFields) < 0)
			{
				$(this).remove();	
			}
			
			
		});
			
		if(QuoteType != "custom")
		{
		
			$.each(quoteFields, function(i, termName){
				
				var value = requestedQuoteData[termName];
				
				if(termName in termNameDisplayValues)
				{
					var value = termNameDisplayValues[termName][value];
				}

				if($.inArray(termName, currencyTerms) >=0)
				{
					$(".quote-details [data-term-name='"+termName+"'] .value").html(value).formatCurrency({negativeFormat: false, roundToDecimalPlace: 0});
				}
				else if($.inArray(termName, YesNoTerms) >=0)
				{
					$(".quote-details [data-term-name='"+termName+"'] .value").html(convertToYN(value));
				}
				else
				{
					$(".quote-details [data-term-name='"+termName+"'] .value").html(value);	
				}
				
			});
			
		}
		else
		{
			AutoFillQuoteFields(quoteFields, requestedQuoteData);
		}
		
		if(!$.trim($(".coverage-options-wrapper li.preferred .amount").html()) && CalculatedCoverageA)
		{
			generateTempQuote("preferred");	
	
		}
		else if(!$.trim($(".coverage-options-wrapper li.basic .amount").html()) && CalculatedCoverageA)
		{
			generateTempQuote("basic");	
		}
		else
		{
			if(!$.trim($(".coverage-options-wrapper li.preferred .amount").html()))
			{
				$(".coverage-options-wrapper li.preferred .amount").html("<div class='smaller-text'>Please select to see premium</div>");
			}
			if(!$.trim($(".coverage-options-wrapper li.basic .amount").html()))
			{
				$(".coverage-options-wrapper li.basic .amount").html("<div class='smaller-text'>Please select to see premium</div>");	
			}
		
		}
		
		if(QuoteType == "preferred" && !$.trim($(".coverage-options-wrapper li.basic .amount").html()))
		{
			generateTempQuote("basic");
			$(".coverage-options-wrapper li").find(":radio").prop("disabled", true);		
		}
		
		if($.trim($(".coverage-options-wrapper li.preferred .amount").html()) && $.trim($(".coverage-options-wrapper li.basic .amount").html()))
		{
			$(".coverage-options-wrapper li").find(":radio").prop("disabled", false);
		}
		
		
	}
}




function generateTempQuote(QuoteType)
{
	
	var SessionId = getSessionCookie();
	var svc = new IqsService();
		
		LoadingQuoteType = QuoteType;

	var PreferredQuoteArray = typeof PreferredQuoteTemplateDataArray_DP3 !== "undefined" && Insurance_Product == "DP3" ? PreferredQuoteTemplateDataArray_DP3 : PreferredQuoteTemplateDataArray;
	var BasicQuoteArray = typeof BasicQuoteTemplateDataArray_DP3 !== "undefined" && Insurance_Product == "DP3" ? BasicQuoteTemplateDataArray_DP3 : BasicQuoteTemplateDataArray;

	var QuoteArray = QuoteType == "preferred" ? PreferredQuoteArray : QuoteType == "basic" ? BasicQuoteArray : QuoteType == "custom" ? CustomQuoteTemplateDataArray : "";
	
	$(".coverage-options-wrapper li."+QuoteType+" .amount").html('<img class="loading-icon" src="assets/spinner.gif" />');
	
	
	if(Insurance_Product == "DP3")
	{
		if(formData)
		{
			if(formData["S1_FORM"]["S1_OwnedBy"] == "200" && formData["S1_FORM"]["S1_PropertyUsage"] == "100-200")
			{
				QuoteArray["TheftCoverage"] = "100";
			}
		}
	}
	
	svc.generateTempQuote(SessionId, QuoteArray, generateTempQuoteSuccess);
		
}


function generateTempQuoteSuccess(result)
{
	
	
	PopulateSidebar();
	TempQuoteLoaded = true;
	
	logSessionTrack("5.0");
	
	/*if("Message" in result.responseDataPayload.Quote)
	{
		if(EZQuoteErrorCount > 0)
		{	
			result.exception = { exceptionCode: 10000};
			exceptionHandler(result);	
		}
		else
		{
			Loading("There was an unexepected error. </br>Retrying...");	
		}
		
		EZQuoteErrorCount++;
	}
	else
	{
		EZQuoteErrorCount = 0;	
	}
	*/
	
	if(result.exception!= null)
	{
		if(result.exception.exceptionCode == 10500)
		{
			$(".coverage-options-wrapper li.basic .amount").html("<div class='smaller-text'>Please select to see premium</div>");	
		}
		else if(result.exception.exceptionCode == 10725)
		{
			if(!$.trim($(".coverage-options-wrapper li.preferred .amount").html()) || $(".coverage-options-wrapper li.preferred .amount .loading-icon").length > 0)
			{
				generateSavedQuote("preferred");
			}
			else if(!$.trim($(".coverage-options-wrapper li.basic .amount").html()) || $(".coverage-options-wrapper li.basic .amount .loading-icon").length > 0)
			{
				generateSavedQuote("basic");	
			}
		}
	}
	else
	{
		var requestedQuoteData = result.responseDataPayload.Quote;
		
		if(requestedQuoteData.Insurance_Product)
		{
			Insurance_Product = requestedQuoteData.Insurance_Product;		
		}

        //if(CalculatedCoverageA)
        //requestedQuoteData.TotalPremium = "";

        if(requestedQuoteData.TotalPremium)
        {
            $(".coverage-options-wrapper li").find(":radio").prop("disabled", true);

            $(".coverage-options-wrapper li."+LoadingQuoteType+" .amount").empty();

            if(requestedQuoteData)
            {
                $(".coverage-options-wrapper li."+LoadingQuoteType+" .amount").html(requestedQuoteData.TotalPremium).formatCurrency({negativeFormat: false, roundToDecimalPlace: 0}).closest("li");
            }

            LoadingQuoteType;

            var QuoteType = $(".coverage-options-wrapper li.selected").data("quote-type");

            if($.trim($(".coverage-options-wrapper li.preferred .amount").html()) && $.trim($(".coverage-options-wrapper li.basic .amount").html()))
            {
                $(".coverage-options-wrapper li").find(":radio").prop("disabled", false);
            }

            if(!$.trim($(".coverage-options-wrapper li.preferred .amount").html()))
            {
                generateTempQuote("preferred");
            }
            else if(!$.trim($(".coverage-options-wrapper li.basic .amount").html()))
            {
                generateTempQuote("basic");
            }

        }
        else {
            serverError();
        }
		/*
		 else
		 {
		 if(!$.trim($(".coverage-options-wrapper li.preferred .amount").html()) || $(".coverage-options-wrapper li.preferred .amount .loading-icon").length > 0)
		 {
		 generateSavedQuote("preferred");
		 }
		 else if(!$.trim($(".coverage-options-wrapper li.basic .amount").html()) || $(".coverage-options-wrapper li.basic .amount .loading-icon").length > 0)
		 {
		 generateSavedQuote("basic");
		 }
		 }*/
		
	}
}