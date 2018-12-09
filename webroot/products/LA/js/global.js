////////////////////////////////////////////////////////////////////////////////////
//////////////////Global Variables - (Start)////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
var QuoteID = $.cookie('QuoteID'+Product_State);
var SaneID = $.cookie("saneID");
var Insurance_Product_Toggle = $.cookie("Insurance_Product_Toggle"+Product_State);
var NextStep;
var addresses;
var TermNames = new TermNames();
var analyticsLoaded = false;
var mixpanelLoaded = false;
var redirecting = false;
var autoFill = false;
var s3PartnerPage;
var replacementCostOK = true;
var LastQuoteLoadedOBJ;
var BlockedURL = false;
var tempAddress = new Object();
var nextStepActive = false;
var date = new Date().getTime();
//var availableForms = new Array("S1", "S2", "S2_2", "S3", "S3_2", "S3_3", "S3_4", "S3_5", "S4");
var completedForms = new Array();
var onLoadFormData;
var formData = new Object();
	formData[availableForms[0]+"_FORM"] = {};
var sortForms = function(str) {
    var m = str.match(/^S(\d+)_(?:(\d+)_)?/);
    return parseFloat(m[1] + '.' + m[2])
};
var timer;
function sessionTimer()
{
    if (timer) clearInterval(timer);
    timer = setInterval(function()
	{
        if (!getSessionCookie() && (get("section") != 1 && get("step") != 1.1) && !get("error"))
		{
            clearInterval(timer);
			sessionTimedOut();
        }
	}, 5 * 60 * 1000);
}
$(function(){

	if(PropertyQuotePage && getSessionCookie())
	{
		sessionTimer();
	}

});
// var to get coverage A Early
var promiseCoverageA;
var waitCovA = false;


////////////////////////////////////////////////////////////////////////////////////
//////////////////Global Variables - (End)//////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

//Set SaneID
$(function(){

	if(get("saneid"))
	{
		var date = new Date();
		date.setTime(date.getTime() + (sessionTimeOutLength * 60 * 1000));
		$.cookie('saneID', get("saneid"), {expires: date});
	}

});


////////////////////////////////////////////////////////////////////////////////////
//////////////////Global Functions - (Start)////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////
//Refresh Session Cookie/////////////////
/////////////////////////////////////////
function refreshSessionCookie()
{
	setSessionCookie(getSessionCookie());
	sessionTimer();
}

/////////////////////////////////////////
//Set Session Cookie/////////////////////
/////////////////////////////////////////
function setSessionCookie(sessionID)
{
	var date = new Date();
	date.setTime(date.getTime() + (sessionTimeOutLength * 60 * 1000));
	$.cookie('IQSSess'+Product_State, sessionID, {expires: date});

	sessionTimer();
}

/////////////////////////////////////////
//Get Session Cookie/////////////////////
/////////////////////////////////////////
function getSessionCookie()
{
	return $.cookie('IQSSess'+Product_State);
}

/////////////////////////////////////////
//Clear Session Cookie///////////////////
/////////////////////////////////////////
function clearSessionCookie()
{
	$.cookie('IQSSess'+Product_State, null);

	formData = new Object();
	formData[availableForms[0]+"_FORM"] = {};

	if (timer) clearInterval(timer);

	sessionTimedOut();
}

/////////////////////////////////////////
//Convert EZQuote Data to Yes or No//////
/////////////////////////////////////////
function convertToYN(value)
{
	return value == 100 ? "Yes" : value == 200 ? "No" : "";
}

////////////////////////////////////////////////////////////////////////////////////
//////////////////Global Functions - (End)//////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


/*
	Preload error messages. -To be displayed should the internet be unavailable
*/
// $(function(){
//
// 	$.ajax({
// 	type: "GET",
// 	url: "errors/sessionError.html?"+date,
// 	success: function(html){
//
// 		$("body").after("<div class='preloadSessionError' style='display:none;'>"+html+"</div>");
//
// 	}
// 	});
//
// 	$.ajax({
// 	type: "GET",
// 	url: "section/sidebar/section-1.html?"+date,
// 	success: function(html){
//
// 		$("body").after("<div class='preloadSessionErrorRightRail' style='display:none;'>"+html+"</div>");
//
// 	}
// 	});
//
// });

////////////////////////////////////////
////Set Insurance Type Toggle///////////
////////////////////////////////////////
function setInsuranceProductToggleCookie(InsuranceToggle)
{
	var date = new Date();
	date.setTime(date.getTime() + (2 * 24 * 60 * 60 * 1000));
	$.cookie('Insurance_Product_Toggle'+Product_State, InsuranceToggle, { expires: date });

	Insurance_Product_Toggle = $.cookie('Insurance_Product_Toggle'+Product_State);
}


////////////////////////////////////////
////Set Quote ID////////////////////////
////////////////////////////////////////
function setQuoteIDCookie(QuoteId)
{
	var date = new Date();
	date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
	$.cookie('QuoteID'+Product_State, QuoteId, { expires: date });

	QuoteID = $.cookie('QuoteID'+Product_State);
}


////////////////////////////////////////
////Get Quote ID///////////////////////
////////////////////////////////////////
function getQuoteID(ProvidedQuoteID)
{
    if(ProvidedQuoteID)
    {
        var ModQuoteID = ProvidedQuoteID.split("-")[1];
    }
    else if(QuoteID)
    {
        var ModQuoteID = QuoteID.split("-")[1];
    }

    return ModQuoteID;
}
////////////////////////////////////////
////Show Quote ID///////////////////////
////////////////////////////////////////
function InsertQuoteID(ProvidedQuoteID)
{
    $(".QuoteIDWrapper").hide();
    $curQuoteId = getQuoteID(ProvidedQuoteID);
    if($curQuoteId){	//if the quoteID is undefined then we need to not show it, skip ahead
        //$(".QuoteID").html(getQuoteID(ProvidedQuoteID));
        $(".QuoteID").html($curQuoteId);
        $(".QuoteIDWrapper").show();
    }
}

/////////////////////////////////////////
////Session TimedOut/////////////////////
/////////////////////////////////////////
function sessionTimedOut(ProvidedQuoteID, ProvidedZipcode)
{
    var recallHref = false;
    if(getQuoteID(ProvidedQuoteID) && ProvidedZipcode) {
        recallHref = (Product_State !== "FL") ? "recallquote.html?qdata="+btoa(getQuoteID(ProvidedQuoteID)+":"+ProvidedZipcode) : "recallquote.html?qdata="+btoa(ProvidedZipcode+":"+getQuoteID(ProvidedQuoteID));

    }

    $(".navigation a").removeClass("current").removeClass("hover").bind("click", false);
    $(".errors").remove();

    formData = new Object();

    if(!get("error"))
    {
        $(".content > .left, .content > .right").empty();
        if(!$(".preloadSessionError").html())
        {
            //Load Session Error Page
            $.ajax({
                type: "GET",
                url: "errors/sessionError.html?"+date,
                success: function(html){

                    $(".content > .left").html(html);
                    if(recallHref){
                        $(".recall-href").attr("href", recallHref);
                    }
                    InsertQuoteID(ProvidedQuoteID);
                }
            });

        }
        else
        {
            $(".content > .left").html($(".preloadSessionError").html());
            if(recallHref){
                $(".recall-href").attr("href", recallHref);
            }
            InsertQuoteID(ProvidedQuoteID);
        }


    }

    if(!$(".preloadSessionErrorRightRail").html())
    {
        //Load Sidebar
        $.ajax({
            type: "GET",
            url: "section/sidebar/section-1.html?"+date,
            success: function(html){

                $(".content > .right").html(html);

            }
        });
    }
    else
    {
        $(".content > .right").html($(".preloadSessionErrorRightRail").html());
    }
}

/////////////////////////////////////////
////No Session///////////////////////////
/////////////////////////////////////////
function noSessionError(ProvidedQuoteID)
{

    $(".navigation a").removeClass("current").removeClass("hover").bind("click", false);
    $(".content > .left, .content > .right").empty();

    $(".errors").remove();

    formData = new Object();
    //Load Session Error Page
    $.ajax({
        type: "GET",
        url: "errors/noSessionError.html?"+date,
        success: function(html){

            $(".content > .left").html(html);
            InsertQuoteID(ProvidedQuoteID);

        }
    });


    //Load Sidebar
    $.ajax({
        type: "GET",
        url: "section/sidebar/section-1.html?"+date,
        success: function(html){

            $(".content > .right").html(html);

        }
    });
}


/////////////////////////////////////////
////Modified Quote Error/////////////////
/////////////////////////////////////////
function modifiedQuoteError(ProvidedQuoteID)
{
    //Load Session Error Page
    $.ajax({
        type: "GET",
        url: "errors/modifiedQuote.html",
        success: function(html){

            $(".content > .left").html(html);
            InsertQuoteID(ProvidedQuoteID);
        }
    });


    //Load Sidebar
    $.ajax({
        type: "GET",
        url: "section/sidebar/section-1.html?"+date,
        success: function(html){

            $(".content > .right").html(html);

        }
    });

}

/////////////////////////////////////////
////Server Error/////////////////////////
/////////////////////////////////////////
function serverError(ProvidedQuoteID, ProvidedZipcode)
{
    var recallHref = false;
    if(getQuoteID(ProvidedQuoteID) && ProvidedZipcode) {
        recallHref = "recallquote.html?qdata="+btoa(getQuoteID(ProvidedQuoteID)+":"+ProvidedZipcode);
    }

    $(".navigation a").removeClass("current").removeClass("hover").bind("click", false);
    $(".content > .left, .content > .right").empty();

    $(".errors").remove();

    formData = new Object();
    //Load Session Error Page
    $.ajax({
        type: "GET",
        url: "errors/serverError.html",
        success: function(html){

            $(".content > .left").html(html);
            if(recallHref){
                $(".recall-href").attr("href", recallHref);
            }
            InsertQuoteID(ProvidedQuoteID);

        }
    });


    //Load Sidebar
    $.ajax({
        type: "GET",
        url: "section/sidebar/section-1.html?"+date,
        success: function(html){

            $(".content > .right").html(html);

        }
    });

}


/////////////////////////////////////////
////Loading Popup////////////////////////
/////////////////////////////////////////
function Loading(customLabel)
{
	var label = customLabel ? customLabel : "Loading...";

	UpdateBeforeLoad();

	$.ajax({
	type: "GET",
	url: "popups/loading.html",
	success: function(html){

		$("body").after(html);
		$(".overlay-wrapper .label").html(label);
		$(".overlay-wrapper").show();
		UpdateOnLoad();

	}
	});
}


/////////////////////////////////////////
////Get Current Form Data////////////////
/////////////////////////////////////////
function GetCurrentFormData()
{
	var formOBJ = new Object();

	$("form [name]").each(function(){

		var ThisName = $(this).attr("name");
		var ThisValue = $(this).val();

		formOBJ[ThisName] = ThisValue;

	});

	return formOBJ;
}



/////////////////////////////////////////
////GEICO Pixel Tracking/////////////////
/////////////////////////////////////////
function PixelTracking(s3PartnerPage, appendTo)
{

	var PixelTrackingBaseURL = get("debug") == "true" ? PixelTrackingTestURL : PixelTrackingProdURL;

	if(PixelTrackingBaseURL && s3PartnerPage && (get("saneid") || SaneID))
	{
		var saneid = get("saneid") ? get("saneid") : SaneID;
		var	PixelTrackingURL = PixelTrackingBaseURL+"?Log=1&s3PartnerPage=Occidental"+Insurance_Product+""+s3PartnerPage+"&GeicoId="+saneid;

		$(".PixelTrackingURL").html(PixelTrackingURL);

		appendTo = appendTo ? appendTo : "body";

		$(appendTo).append('<script type="text/javascript" src="'+PixelTrackingURL+'"></script>');
	}
}


/////////////////////////////////////////
////Load Page////////////////////////////
/////////////////////////////////////////
function LoadPage()
{
	if(!getZipcode() && PropertyQuotePage)
	{
		if(formData.S1_FORM['S1_Zipcode'] && getSessionCookie())
		{
			var curHash = window.location.hash;

			if(!get("section") && !get("step"))
			{
				curHash = "#/section=1&step=1.1";
			}

			window.location = "propertyquote.html?zipcode="+formData.S1_FORM['S1_Zipcode']+curHash;

		}
		else
		{
			window.location = "recallquote.html";

		}
	}
	else if(getZipcode() && PropertyQuotePage && (!get("section") && !get("step")))
	{
			redirecting = true;

			var curHash = "#/section=1&step=1.1";
			window.location.hash = curHash;
	}

	section = get("section") ? get("section") : false;
	step 	= get("step") ? get("step") : false;

	if(getZipcode() && section && step)
	{
		completedForms = new Array();

		var modStep = step.replace(".", "_").replace("_1", "");

		var targetForm = "S"+modStep+"_FORM";
		var modTargetForm = targetForm.replace("_FORM", "");

		$.each(formData, function(index, value){

			completedForms.push(index);

		});

		completedForms.sort(function(a, b){
			a = a.slice(0, -5);
			b = b.slice(0, -5);
			return a < b ? -1 : (a > b) ? 1 : 0;
		});

		var lastCompletedForm = completedForms[completedForms.length-1];
		var modLastCompletedForm = lastCompletedForm ? lastCompletedForm.replace("_FORM", "") : "";

		var lastCompletedFormArrPos = $.inArray(modLastCompletedForm, availableForms);
		var nextReadyForm = availableForms[lastCompletedFormArrPos+1];

		if(formData.S2_FORM)
		{
			var skipForm = formData.S2_FORM.S2_NumberOfClaims == 0 ? true : false;

			if(!skipForm)
			{
				if($.inArray("S2_FORM", completedForms) >= 0 && targetForm == "S2_2_FORM")
				{
					skipForm = true;
				}
				else
				{
					skipForm = false;
				}
			}
			else
			{
				skipForm = targetForm == "S3_FORM" && ($.inArray("S2_FORM", completedForms) >= 0);
			}

			if(targetForm == "S3_4_FORM" && $.inArray("S3_3_FORM", completedForms) >= 0)
			{
				skipForm = true;
			}

		}


		if((((nextReadyForm == modTargetForm) && (nextReadyForm == "S2_2" && formData.S2_FORM.S2_NumberOfClaims > 0)) || (nextReadyForm == modTargetForm) && (nextReadyForm != "S2_2")) || ($.inArray(modTargetForm+"_FORM", completedForms) >= 0) ||  skipForm || get("error"))
		{

			if(section == 1)
			{
				s3PartnerPage = "yourinformation";
			}
			else if(section == 2)
			{
				s3PartnerPage = "currentinsurance";
			}
			else if(section == 3)
			{
				s3PartnerPage = "propertyinformation";
			}
			else if(section == 4)
			{
				s3PartnerPage = "discountsandmore";
			}

			var i = 1;
			$('.navigation > a').each(function(){

				var sectionNumber = i++;
				var className = $(this).attr("class");
				var classNumber = className.match(/([0-9]+)/)[0];
				var isComplete = $.grep(completedForms, function(s) {
					return s.substring(0, 2) == "S" + classNumber;
				}).length > 0;

				//Highlight all buttons up until and including the current page
				classNumber <= section ? $(this).addClass("current").unbind('click', false) : $(this).removeClass("current").bind('click', false);


				//if(isComplete == true  && (getSessionCookie() || classNumber == 1))

				if(classNumber < section && (getSessionCookie() || classNumber == 1))
				{
					$(this).unbind('click', false).addClass("hover");
				}
				else
				{
					$(this).bind('click', false).removeClass("hover");
				}

			});

			step = (step == "3.4" && Product_State !== "FL") ? "3.4.2" : step;
			//Load steps
			$.ajax({
			type: "GET",
			url: "section/"+section+"/step-"+step+".php?"+date,
			success: function(html){

				nextStepActive = false;

				$(".content > .left").html(html);
				InsertQuoteID();

				redirecting = false;

				UpdateOnLoad();
				autoFillForms();

                //populate hardcoded values
                // $(".hardcoded-editable-wrapper input[type='text']").each(function(){
                //     var name = $(this).attr("name");
                //     var dataSource = $(this).closest(".hardcoded-editable-wrapper").find("input[type='hidden']").data("local-storage");
                //     var value = $(this).val() ? $(this).val() : localStorage[dataSource];
                //     value = value ? value : "";
                //
                //     if(localStorage[dataSource]){
                //         $(this).closest(".hardcoded-editable-wrapper").find("input[name='"+name+"']").val(value).trigger("change");
                //         $(this).closest(".hardcoded-editable-wrapper").find("."+name).html(value);
                //         $(this).closest(".hardcoded-editable-wrapper").find(".editable").hide();
                //         $(this).closest(".hardcoded-editable-wrapper").find(".hardcoded").show();
                //         $(this).closest(".hardcoded-editable-wrapper").find(".edit-icon").show();
                //     }
                //     else if($(this).val()){
                //         $(this).closest(".hardcoded-editable-wrapper").find("input[name='"+name+"']").val(value).trigger("change");
                //         $(this).closest(".hardcoded-editable-wrapper").find(".hardcoded").hide();
                //         $(this).closest(".hardcoded-editable-wrapper").find(".edit-icon").hide();
                //         $(this).closest(".hardcoded-editable-wrapper").find(".editable").show();
                //     }
                //     else
                //     {
                //         $(this).closest(".hardcoded-editable-wrapper").find(".hardcoded").remove();
                //         $(this).closest(".hardcoded-editable-wrapper").find(".editable").show();
                //         $(this).closest(".hardcoded-editable-wrapper").find(".edit-icon").hide();
                //     }
                // });
                //
                // $(".hardcoded-editable-wrapper select").each(function(){
                //     var name = $(this).attr("name");
                //     var dataSource = $(this).closest(".hardcoded-editable-wrapper").find("input[type='hidden']").data("local-storage");
                //     var value = $(this).val() ? $(this).val() : localStorage[dataSource];
                //     value = value ? value : "";
                //
                //     if(localStorage[dataSource]){
                //         $(this).closest(".hardcoded-editable-wrapper").find("select[name='"+name+"']").val(value).trigger("change");
                //         $(this).closest(".hardcoded-editable-wrapper").find("input[name='"+name+"']").val(value).trigger("change");
                //         var label = $(this).find('option:selected').text();
                //         $(this).closest(".hardcoded-editable-wrapper").find("."+name).html(label);
                //         $(this).closest(".hardcoded-editable-wrapper").find(".editable").hide();
                //         $(this).closest(".hardcoded-editable-wrapper").find(".hardcoded").show();
                //         $(this).closest(".hardcoded-editable-wrapper").find(".edit-icon").show();
                //     }
                //     else if($(this).val()){
                //         $(this).closest(".hardcoded-editable-wrapper").find("select[name='"+name+"']").val(value).trigger("change");
                //         $(this).closest(".hardcoded-editable-wrapper").find("input[name='"+name+"']").val(value).trigger("change");
                //         $(this).closest(".hardcoded-editable-wrapper").find(".hardcoded").hide();
                //         $(this).closest(".hardcoded-editable-wrapper").find(".edit-icon").hide();
                //         $(this).closest(".hardcoded-editable-wrapper").find(".editable").show();
                //     }
                //     else
                //     {
                //         $(this).closest(".hardcoded-editable-wrapper").find(".hardcoded").remove();
                //         $(this).closest(".hardcoded-editable-wrapper").find(".editable").show();
                //         $(this).closest(".hardcoded-editable-wrapper").find(".edit-icon").hide();
                //     }
                // });

				if(getSessionCookie())
				{
					onLoadFormData = GetCurrentFormData();
				}
				else if(section == 1)
				{
					beginIqsSession();
				}
				if(section == 4)
				{
					if((formData['S2_FORM'] && formData['S2_FORM']['S2_CurrentInsurance'] == 1) || (formData['S2_FORM'] && !formData['S2_FORM']['S2_CurrentInsurance'] == 1 && formData['S2_FORM']['S2_InsuranceAgencies'] == 1))
					{
						$(".social-security-requirement").html("Required");
					}
				}
				if(step.match(".1$"))
				{
					PixelTracking(s3PartnerPage, ".content > .left");
				}
				if(step == "3.4.2") {
					getHomeFeatures();
				}

                analyticsLoaded = false;

			},
			error: function(){
				serverError();
				UpdateOnLoad();
			}
			});

			//Load Sidebar
			$.ajax({
			type: "GET",
			url: "section/sidebar/section-"+section+".html?"+date,
			success: function(html){

				$(".content > .right").html(html);

				if(getSessionCookie())
				{
					PopulateSidebar();
				}

			},
			error: function(){

				serverError();

			}
			});


		}
		else
		{
			var redSection = completedForms[completedForms.length-1].split("S")[1];
				redSection = redSection.split("_")[0];

			var redStep = completedForms[completedForms.length-1].split("_FORM")[0] ? completedForms[completedForms.length-1].split("_FORM")[0] : 1;
				redStep = redStep.split("_")[1] ? redStep.split("_")[1] : 1;

				window.location.hash = "/section="+redSection+"&step="+redSection+"."+redStep;
		}

	}

}


function DebugInformation(callName, dataArray)
{

	if(get("debug") == "true")
	{
		var dataArrayString = JSON.stringify(dataArray).toString();

		if($.trim($(".debug-wrapper .debug-content .CallName").html()) && $.trim($(".debug-wrapper .debug-content .CallName").html()) != "--")
		{
			var prevCallName = $(".debug-wrapper .debug-content .CallName").html();
			var prevCallData = $(".debug-wrapper .debug-content .CallData").html();

			var tableRow = '<tr><td>'+prevCallName+'</td><td class="data">'+prevCallData+'</td></tr>';
			$(".debug-wrapper .call-history").show();
			$(".debug-wrapper .call-history tr:first").after(tableRow);
		}

		$(".debug-wrapper .debug-content .CallName").html(callName);
		$(".debug-wrapper .debug-content .CallData").html(dataArrayString);

	}
}

/////////////////////////////////////////
//Clean Variables////////////////////////
/////////////////////////////////////////
function cleanVar(string)
{
	if(string === undefined)
	{
		string = "";
	}
	else if(string == "null")
	{
		string = "";
	}

	return string;
}

function cleanCurrency(string)
{
	string = string ? string : "";
	string = string.replace(/[^\d\.-]/g,'');

	return string;
}


/////////////////////////////////////////
//Exception Handler//////////////////////
/////////////////////////////////////////
function exceptionHandler(result, ProvidedQuoteID)
{
    nextStepActive = false;

    var errorCode = result ? result.exception.exceptionCode : 10500;

    UpdateBeforeLoad();

    if(errorCode >= 2000 && errorCode <=5000)
    {
        var errorMessage = errors["VAL_" + errorCode + "_ERROR"].errorMessageEmpty;
        var errorFormSelector = errors["VAL_" + errorCode + "_ERROR"].errorFormName;

        $(".errors").remove();
        $(".content-wrapper").prepend("<div class='errors'><ul class='error-list'></ul></div>");
        $(".errors").show();
        $(".errors .error-list li").remove();
        $(".errors .error-list").append("<li class='"+errorCode+"'>"+errorMessage+"</li>");

    }
    else if(errorCode >= 10000)
    {
        if(errorCode == 10400)
        {
            clearSessionCookie();
            sessionTimedOut(ProvidedQuoteID, getZipcode());
        }
        else if(errorCode == 10500)
        {
            clearSessionCookie();
            serverError(ProvidedQuoteID, getZipcode());
        }
        else if(errorCode == 10525 || errorCode == 10550)
        {
            modifiedQuoteError(ProvidedQuoteID);
        }
        else
        {
            serverError(ProvidedQuoteID, getZipcode());
        }
    }

}


function logSessionTrack(pageID)
{
	var pageID = pageID ? pageID : get("step") ? get("step") : "";

	var svc = new IqsService();
	var SessionId = getSessionCookie();
	var LogSessionTrackDataArray = new Object();
	LogSessionTrackDataArray.PageId = pageID;

	svc.logSessionTrack(SessionId, LogSessionTrackDataArray, logSessionTrackSuccess);

}

function logSessionTrackSuccess(result)
{

}

function getHomeFeatures()
{
	var svc = new IqsService();
	var SessionId = getSessionCookie();

	Loading("Retrieving Home Features...");

	svc.getHomeFeatures(SessionId, getHomeFeaturesSuccess);
}

function getHomeFeaturesSuccess(result)
{
	var Features = result.responseDataPayload.DefaultHomeFeatures;

	if(Features.hasOwnProperty("HomeFeatures1")){
		var Enum = Features.HomeFeatures1;

		$(".content-wrapper .home-features [data-enum='"+Enum+"']").detach().appendTo(".content-wrapper .home-features.featured");

		if(!formData.hasOwnProperty("S3_4_FORM")) {
			$(".content-wrapper .home-features [data-enum='"+Enum+"'] [type='checkbox']").prop('checked', true).trigger("change");
			$(".content-wrapper .home-features [data-enum='"+Enum+"'] .features-dropdown-wrapper select").val(Math.ceil(Features.HomeFeatures1SquareFeet/100)*100);
		}
	}

	if(Features.hasOwnProperty("HomeFeatures2")){
		var Enum2 = Features.HomeFeatures2;

		$(".content-wrapper .home-features [data-enum='"+Enum2+"']").detach().appendTo(".content-wrapper .home-features.featured");

		if(!formData.hasOwnProperty("S3_4_FORM")) {
			$(".content-wrapper .home-features [data-enum='"+Enum2+"'] [type='checkbox']").prop('checked', true).trigger("change");
			$(".content-wrapper .home-features [data-enum='"+Enum2+"'] .features-dropdown-wrapper select").val(Math.ceil(Features.HomeFeatures2SquareFeet/100)*100);
		}
	}

	$(".overlay-wrapper").hide();

}





/////////////////////////////////////////
//Begin Session Call/////////////////////
/////////////////////////////////////////
function beginIqsSession()
{
	var svc = new IqsService();

	var ProductDataArray = new Object();
	ProductDataArray.Feid = Feid;
	ProductDataArray.AltData = "SaneID:"+ SaneID;
	ProductDataArray.Debug = get("debug").toString();
	ProductDataArray.PageId = get("step");

	svc.beginIqsSession(ProductDataArray, beginIqsSessionSuccess);

}


/////////////////////////////////////////
//Begin Session Success Call/////////////
/////////////////////////////////////////

function beginIqsSessionSuccess(result){

	if(result.exception != null)
	{
		exceptionHandler(result);
	}
	else
	{
		var sessionId = result.responseDataPayload.SessionId;
		var var_Insurance_Product_Toggle = result.responseDataPayload.dp3enabled == "true" ? true : false;
		var Insurance_Product_Toggle = var_Insurance_Product_Toggle

		setInsuranceProductToggleCookie(var_Insurance_Product_Toggle);
		setSessionCookie(sessionId);
		logSessionTrack();

		$("select[data-dropdown-menus]").each(function(){
			var varName = $(this).data("dropdown-menus");
			new DropdownMenus().values(varName);
		});

		UpdateOnLoad();
	}

}




/////////////////////////////////////////
//Save Incomplete Quote Session//////////
/////////////////////////////////////////
function emptySave()
{
	//updateQuoteSession($("form").attr("name"), false, getFormData());
	updateQuoteSession($("form").attr("name"), false, "");
	NextStep = false;
}


/////////////////////////////////////////
//Save Quote Session/////////////////////
/////////////////////////////////////////
function saveQuote()
{

	if(!validateFormData(getFormData()) && !get("error", $(".forward-arrow").attr("href")))
	{
		updateQuoteSession($("form").attr("name"), false, getFormData());
		NextStep = false;

		var currentForm = $("form").attr("name");

		var newFormData = JSON.parse(getFormData());
			formData[currentForm] = newFormData[currentForm];
	}
	else if(get("error", $(".forward-arrow").attr("href")))
	{
		$(".forward-arrow").click();
	}
	else if(validateFormData(getFormData()))
	{
		UpdateBeforeLoad();

		$.ajax({
		type: "GET",
		url: "popups/incomplete-page.html",
		success: function(html){

			$("body").after(html);
			$(".overlay-wrapper").show();
			UpdateOnLoad();

		}
		});
	}

}



/////////////////////////////////////////
//Quit Quote Session/////////////////////
/////////////////////////////////////////
function quitQuote()
{
	UpdateBeforeLoad();

	$.ajax({
	type: "GET",
	url: "popups/quit-confirmation.html",
	success: function(html){

		$("body").after(html);
		$(".overlay-wrapper").show();
		UpdateOnLoad();

	}
	});
}

$(function(){

	$(document).on("click", ".overlay-wrapper.quit-quote .continue", function(){

		terminateIqsSession("http://www.geico.com");

	});

});


/////////////////////////////////////////
//Terminate Session//////////////////////
/////////////////////////////////////////
function terminateIqsSession(customURL)
{
	var svc = new IqsService();
	var SessionId = getSessionCookie();

		customURL = customURL ? customURL : "recallquote.html";

		clearSessionCookie();
		window.location = customURL;

	svc.terminateIqsSession(SessionId, terminateIqsSessionSuccess);

}


/////////////////////////////////////////
//Terminate Session Success /////////////
/////////////////////////////////////////

function terminateIqsSessionSuccess(result)
{

}


/////////////////////////////////////////
//Validate Address Call//////////////////
/////////////////////////////////////////
function validateAddress()
{
	var svc = new IqsService();

	var AddressDataArray = new Object();
		//AddressDataArray.PropertyStreetNumber = formData.S1_FORM[TermNames.PropertyStreetNumber];
		//AddressDataArray.PropertyStreetName = formData.S1_FORM[TermNames.PropertyStreetName];
		AddressDataArray.PropertyStreetNumber = formData.S1_FORM[TermNames.PropertyStreetAddress].substr(0,formData.S1_FORM[TermNames.PropertyStreetAddress].indexOf(' '));
		AddressDataArray.PropertyStreetName = formData.S1_FORM[TermNames.PropertyStreetAddress].substr(formData.S1_FORM[TermNames.PropertyStreetAddress].indexOf(' ')+1);
		AddressDataArray.PropertyCity = formData.S1_FORM[TermNames.PropertyCity];
		AddressDataArray.PropertyState = formData.S1_FORM[TermNames.PropertyState];
		AddressDataArray.PropertyZipCode = formData.S1_FORM[TermNames.PropertyZipCode];
		AddressDataArray.PropertyStreetAddress = formData.S1_FORM[TermNames.PropertyStreetAddress];

	var sessionId = getSessionCookie() ? getSessionCookie() : "";

	DebugInformation("validateAddress", AddressDataArray);

	svc.validateAddress(sessionId, AddressDataArray, validateAddressSuccess);
}

/////////////////////////////////////////
//Validate Address Success Call//////////
/////////////////////////////////////////

//test step 2 - we've received the address validation results and a session ID hopefully
function validateAddressSuccess(result)
{
	var numAddresses = 0;
	if(result.exception != null && result.exception.exceptionCode != 10300)
	{
		exceptionHandler(result);
	}
	else if(result.exception == null || result.exception.exceptionCode == 10300)
	{
		if(result.exception != null && result.exception.exceptionCode == 10300)
		{
			var thePopup = "step-validation-b";
		}
		else
		{
			addresses = result.responseDataPayload.Addresses;
			numAddresses = addresses.length;
			//get the address array of address objects and put it in a var
			var thePopup = numAddresses == 0 ? "step-validation-b" : numAddresses == 1 ? "step-validation-a" : numAddresses > 1 ? "step-validation-c" : "";
		}

		var _address = result.responseDataPayload.Addresses[0];


        var CYR = _address.ConstructionYearRetrieved !== undefined ? _address.ConstructionYearRetrieved : "";
        var SFURR = _address.SquareFootUnderRoofRetrieved !== undefined && _address.SquareFootUnderRoofRetrieved < 10000 ? _address.SquareFootUnderRoofRetrieved : "";
        var NOFBR = _address.NumberOfFullBathsRetrieved !== undefined ? _address.NumberOfFullBathsRetrieved : "";
        if (+NOFBR > 5) NOFBR = "5";
        var NOHBR = _address.NumberOfHalfBathsRetrieved !== undefined ? _address.NumberOfHalfBathsRetrieved : "";
        var NOFR = _address.NumberOfFireplacesRetrieved !== undefined ? _address.NumberOfFireplacesRetrieved : "";
        var propertyCounty = _address.PropertyCounty !== undefined ? _address.PropertyCounty : "";
        formData.S1_FORM[TermNames.PropertyCounty] = propertyCounty;


        localStorage.setItem("ConstructionYearRetrieved", CYR);
        localStorage.setItem("SquareFootUnderRoofRetrieved", SFURR);
        localStorage.setItem("NumberOfFullBathsRetrieved", NOFBR);
        localStorage.setItem("NumberOfHalfBathsRetrieved", NOHBR);
        localStorage.setItem("NumberOfFireplacesRetrieved", NOFR)

		if (_address.PropertyAddressLine2 === '') {
			_address.PropertyAddressLine2 = undefined;
		}

		if(formData.S1_FORM[TermNames.PropertyStreetAddress].substr(0,formData.S1_FORM[TermNames.PropertyStreetAddress].indexOf(' ')) != _address.PropertyStreetNumber || formData.S1_FORM[TermNames.PropertyStreetAddress].substr(formData.S1_FORM[TermNames.PropertyStreetAddress].indexOf(' ')+1) != _address.PropertyStreetName || formData.S1_FORM.S1_ApartmentNumber != _address.PropertyAddressLine2 || formData.S1_FORM.S1_City != _address.PropertyCity || formData.S1_FORM.S1_State != _address.PropertyState || formData.S1_FORM.S1_Zipcode != _address.PropertyZipCode) {

			UpdateBeforeLoad();

			$.ajax({
				type: "GET",
				url: "section/1/" + thePopup + ".html",
				success: function (html) {

					nextStepActive = false;

					$(".overlay-wrapper").hide();
					$(".content-wrapper .return-wrapper").empty();

					$("body").after(html);
					$(".overlay-wrapper").show();

					UpdateOnLoad();

					var address2 = formData.S1_FORM.S1_ApartmentNumber ? " " + formData.S1_FORM.S1_ApartmentNumber : "";

					$(".overlay-wrapper .entered-address").html(formData.S1_FORM[TermNames.PropertyStreetAddress].substr(0,formData.S1_FORM[TermNames.PropertyStreetAddress].indexOf(' ')) + " " + formData.S1_FORM[TermNames.PropertyStreetAddress].substr(formData.S1_FORM[TermNames.PropertyStreetAddress].indexOf(' ')+1) + address2 + ", " + formData.S1_FORM.S1_City + ", " + formData.S1_FORM.S1_State + " " + formData.S1_FORM.S1_Zipcode);

					if (numAddresses > 0) {
						$.each(addresses, function (index, value) {

							var text = value.PropertyStreetNumber + " " + value.PropertyStreetName + ", " + value.PropertyCity + ", " + value.PropertyState + " " + value.PropertyZipCode;

							if (numAddresses == 1) {
								var html = "<li>" + text + "</li>";
							}
							else if (numAddresses > 1) {
								var html = '<li><input name="address" id="address' + index + '" type="radio" value="' + index + '"><label for="address' + index + '" class="inline-block">' + text + '</label></li>';
							}

							$(".overlay-wrapper .matched-addresses").append(html);
						});

						UpdateOnLoad();
					}

				}
			});

		}
		else{
			beginQuoteSession();
		}

	}

}


function beginQuoteSession()
{
    var FormData = FormData ? JSON.parse(FormData) : false;
    var form = FormData ? FormData["S1_FORM"] : formData["S1_FORM"];

	var BeginQuoteDataArray = new Object();
		BeginQuoteDataArray.AddressId = formData.S1_FORM.S1_SelectedAddress ? formData.S1_FORM.S1_SelectedAddress : "0";
		//(SDR - removed at request of Randy flodock 7/13/2015) BeginQuoteDataArray.productId = Product_State+"_"+Insurance_Product;
		BeginQuoteDataArray.Insurance_Product = Insurance_Product;
        BeginQuoteDataArray.InsuredByCorporation = cleanVar(form[TermNames.InsuredByCorporation]) ? cleanVar(form[TermNames.InsuredByCorporation]) : "200";

	var SessionId = getSessionCookie();
	var svc = new IqsService();

	Loading();

    DebugInformation("beginQuoteSession", BeginQuoteDataArray);

	svc.beginQuoteSession(SessionId, BeginQuoteDataArray, beginQuoteSessionSuccess);
}




function beginQuoteSessionSuccess(result)
{
	if(result.exception != null)
	{
		exceptionHandler(result);
	}
	else
	{
		var AddressId = formData.S1_FORM.S1_SelectedAddress ? formData.S1_FORM.S1_SelectedAddress : 0;

		formData.S1_FORM[TermNames.PropertyStreetNumber] = addresses[AddressId].PropertyStreetNumber;
		formData.S1_FORM[TermNames.PropertyStreetName] = addresses[AddressId].PropertyStreetName;
		formData.S1_FORM[TermNames.PropertyCity] = addresses[AddressId].PropertyCity;
		formData.S1_FORM[TermNames.PropertyState] = addresses[AddressId].PropertyState;
		formData.S1_FORM[TermNames.PropertyZipCode] = addresses[AddressId].PropertyZipCode;
		formData.S1_FORM[TermNames.PropertyStreetAddress] = addresses[AddressId].PropertyStreetNumber + ' ' + addresses[AddressId].PropertyStreetName;
		tempAddress = addresses[AddressId];

		autoFillForms();

		refreshSessionCookie();

		setQuoteIDCookie(result.responseDataPayload.QuoteId);

		updateQuoteSession("S1_FORM");

	}
}


function updateQuoteSession(currentForm, skipEZQResponse, FormData, next)
{
	var next = next ? next : updateQuoteSessionSuccess;
	var FormData = FormData ? JSON.parse(FormData) : false;

	var UpdateQuoteSessionArray = new Object();
	var SessionId = getSessionCookie();
	var svc = new IqsService();
	var skipEZQResponse = skipEZQResponse != undefined ? skipEZQResponse : true;
	var form = FormData ? FormData[currentForm] : formData[currentForm];

	UpdateQuoteSessionArray.Insurance_Product = Insurance_Product;

	if(form)
	{
		var pageID = pageID ? pageID : get("step") ? get("step") : "";

		if(pageID) {
			UpdateQuoteSessionArray.LastQuoteSectionPageId = pageID;
		}

		if(currentForm == "S1_FORM")
		{



			if(form.S1_OwnedBy == 100)
			{
				UpdateQuoteSessionArray.InsuredByCorporation = cleanVar(form[TermNames.InsuredByCorporation]);
				UpdateQuoteSessionArray.InsuredName = cleanVar(form[TermNames.InsuredName]);
				UpdateQuoteSessionArray.ApplicantFirstName = cleanVar(form[TermNames.ApplicantFirstName]);
				UpdateQuoteSessionArray.ApplicantLastName = cleanVar(form[TermNames.ApplicantLastName]);
				UpdateQuoteSessionArray.InsuredFirstName = "";
				UpdateQuoteSessionArray.InsuredLastName = "";
			}
			else if(form.S1_OwnedBy == 200)
			{
				UpdateQuoteSessionArray.InsuredByCorporation = cleanVar(form[TermNames.InsuredByCorporation]);
				UpdateQuoteSessionArray.InsuredName = cleanVar(form[TermNames.InsuredFirstName] + " " + form[TermNames.InsuredLastName]);
				UpdateQuoteSessionArray.ApplicantFirstName = "";
				UpdateQuoteSessionArray.ApplicantLastName = "";
				UpdateQuoteSessionArray.InsuredFirstName = cleanVar(form[TermNames.InsuredFirstName]);
				UpdateQuoteSessionArray.InsuredLastName = cleanVar(form[TermNames.InsuredLastName]);
			}
			else
			{
				UpdateQuoteSessionArray.InsuredByCorporation = "";
				UpdateQuoteSessionArray.InsuredName = "";
				UpdateQuoteSessionArray.ApplicantFirstName = "";
				UpdateQuoteSessionArray.ApplicantLastName = "";
				UpdateQuoteSessionArray.InsuredFirstName = cleanVar(form[TermNames.InsuredFirstName]);
				UpdateQuoteSessionArray.InsuredLastName = cleanVar(form[TermNames.InsuredLastName]);
			}

			UpdateQuoteSessionArray.PropertyAddressLine2 = cleanVar(form[TermNames.PropertyAddressLine2]);
			if(Product_State !== "FL")
			{
                var propertyUsageVAL = form[TermNames.PropertyUsage].split("-")[0];
                var propertyOccupancyVAL = form[TermNames.PropertyUsage].split("-")[1];
                UpdateQuoteSessionArray.PropertyUsage = cleanVar(propertyUsageVAL);
                UpdateQuoteSessionArray.PropertyOccupancy = cleanVar(propertyOccupancyVAL);
			}
			else
			{
                UpdateQuoteSessionArray.PropertyOccupancy = cleanVar(100);
			}
			UpdateQuoteSessionArray.MonthsUnoccupied = cleanVar(form[TermNames.MonthsUnoccupied]);


			UpdateQuoteSessionArray.NumberOfMonthsUnoccupied = cleanVar(form[TermNames.NumberOfMonthsUnoccupied]);
			UpdateQuoteSessionArray.ShortTermRental = cleanVar(form[TermNames.ShortTermRental]);
			UpdateQuoteSessionArray.SingleOccupancy = cleanVar(form[TermNames.SingleOccupancy]);
			UpdateQuoteSessionArray.StudentOccupancy = cleanVar(form[TermNames.StudentOccupancy]);
			UpdateQuoteSessionArray.PropertyManagerType = cleanVar(form[TermNames.PropertyManagerType]);
			UpdateQuoteSessionArray.PropertyManagerAddressLine1 = cleanVar(form[TermNames.PropertyManagerAddressLine1]);
			UpdateQuoteSessionArray.PropertyManagerAddressLine2 = cleanVar(form[TermNames.PropertyManagerAddressLine2]);
			UpdateQuoteSessionArray.PropertyManagerCity = cleanVar(form[TermNames.PropertyManagerCity]);
			UpdateQuoteSessionArray.PropertyManagerState = cleanVar(form[TermNames.PropertyManagerState]);
			UpdateQuoteSessionArray.PropertyManagerZip = cleanVar(form[TermNames.PropertyManagerZip]);
		}
		else if(currentForm == "S2_FORM")
		{
			var PriorCarrierVAL = form[TermNames.CurrentInsurance] == "-" ? form[TermNames.PriorCarrierNumber] : form[TermNames.CurrentInsurance];
			var PriorCoverageA = cleanVar(cleanCurrency(form[TermNames.PriorCoverageA]));

			UpdateQuoteSessionArray.PriorCarrierNumber = cleanVar(PriorCarrierVAL);
			UpdateQuoteSessionArray.PriorCarrierOther = cleanVar(form[TermNames.PriorCarrierOther]);
			UpdateQuoteSessionArray.PriorExpirationDate = cleanVar(form[TermNames.PriorExpirationDate]);
			UpdateQuoteSessionArray.NumberOfClaims = cleanVar(form[TermNames.NumberOfClaims]);
			UpdateQuoteSessionArray.PriorCoverageA = PriorCoverageA;

			if(cleanVar(form[TermNames.NumberOfClaims]) == 0)
			{
				UpdateQuoteSessionArray.LossDate1 = "";
				UpdateQuoteSessionArray.LossAmount1 = "";
				UpdateQuoteSessionArray.LossType1 = "";
				UpdateQuoteSessionArray.LossCatIndicator1 = "";
				UpdateQuoteSessionArray.LossDescription1 = "";

				UpdateQuoteSessionArray.LossDate2 = "";
				UpdateQuoteSessionArray.LossAmount2 = "";
				UpdateQuoteSessionArray.LossType2 = "";
				UpdateQuoteSessionArray.LossCatIndicator2 = "";
				UpdateQuoteSessionArray.LossDescription2 = "";

				UpdateQuoteSessionArray.LossDate3 = "";
				UpdateQuoteSessionArray.LossAmount3 = "";
				UpdateQuoteSessionArray.LossType3 = "";
				UpdateQuoteSessionArray.LossCatIndicator3 = "";
				UpdateQuoteSessionArray.LossDescription3 = "";
			}

		}
		else if(currentForm == "S2_2_FORM")
		{
			UpdateQuoteSessionArray.LossDate1 = cleanVar(form[TermNames.LossDate1]);
			UpdateQuoteSessionArray.LossAmount1 = cleanVar(cleanCurrency(form[TermNames.LossAmount1]));
			UpdateQuoteSessionArray.LossType1 = cleanVar(form[TermNames.LossType1]);
			UpdateQuoteSessionArray.LossCatIndicator1 = cleanVar(form[TermNames.LossCatIndicator1]);
			UpdateQuoteSessionArray.LossDescription1 = cleanVar(form[TermNames.LossDescription1]);

			UpdateQuoteSessionArray.LossDate2 = cleanVar(form[TermNames.LossDate2]);
			UpdateQuoteSessionArray.LossAmount2 = cleanVar(cleanCurrency(form[TermNames.LossAmount2]));
			UpdateQuoteSessionArray.LossType2 = cleanVar(form[TermNames.LossType2]);
			UpdateQuoteSessionArray.LossCatIndicator2 = cleanVar(form[TermNames.LossCatIndicator2]);
			UpdateQuoteSessionArray.LossDescription2 = cleanVar(form[TermNames.LossDescription2]);

			UpdateQuoteSessionArray.LossDate3 = cleanVar(form[TermNames.LossDate3]);
			UpdateQuoteSessionArray.LossAmount3 = cleanVar(cleanCurrency(form[TermNames.LossAmount3]));
			UpdateQuoteSessionArray.LossType3 = cleanVar(form[TermNames.LossType3]);
			UpdateQuoteSessionArray.LossCatIndicator3 = cleanVar(form[TermNames.LossCatIndicator3]);
			UpdateQuoteSessionArray.LossDescription3 = cleanVar(form[TermNames.LossDescription3]);
		}
		else if(currentForm == "S3_FORM")
		{
			UpdateQuoteSessionArray.HomeStyle = cleanVar(form.S3_StructureType);
			UpdateQuoteSessionArray.ConstructionYear = cleanVar(form.S3_YearBuilt);
			UpdateQuoteSessionArray.SquareFootUnderRoof = cleanVar(form.S3_LivingArea);
			UpdateQuoteSessionArray.NumberOfStories = cleanVar(form.S3_NumberOfStories);
			UpdateQuoteSessionArray.StructureType = cleanVar(form.S3_HomeType);
			UpdateQuoteSessionArray.ConstructionYearRoof = cleanVar(form.S3_RoofInstalled);
			UpdateQuoteSessionArray.RoofCoveringType = cleanVar(form.S3_RoofType);
			UpdateQuoteSessionArray.RoofGeometryType = cleanVar(form.S3_RoofShape);
		}
		else if(currentForm == "S3_2_FORM")
		{
			var garageType;

			if(cleanVar(form.S3_2_GarageSize) > 1)
			{
				if(cleanVar(form[TermNames.GarageType].length) == 5)
				{
					garageType = cleanVar(form[TermNames.GarageType]);
				}
				else
				{

					if (cleanVar(form[TermNames.GarageType] == "205") && cleanVar(formData["S3_FORM"]["S3_NumberOfStories"] == "100")){
						form[TermNames.GarageType] = "201";
					}

					garageType = cleanVar(form[TermNames.GarageType])+cleanVar(form.S3_2_GarageSize);
				}
			}
			else
			{
				garageType = cleanVar(form.S3_2_GarageSize);
			}

			UpdateQuoteSessionArray.GarageType = cleanVar(garageType);
			UpdateQuoteSessionArray.SquareFootUnderRoofGarage = cleanVar(form[TermNames.SquareFootUnderRoofGarage]);
			UpdateQuoteSessionArray.FoundationType = cleanVar(form[TermNames.FoundationType]);
			UpdateQuoteSessionArray.ConstructionType = cleanVar(form[TermNames.ConstructionType]);
			UpdateQuoteSessionArray.Cladding = cleanVar(form[TermNames.Cladding]);
			UpdateQuoteSessionArray.MasonryVeneerPercentage = cleanVar(form[TermNames.MasonryVeneerPercentage]);
		}
		else if(currentForm == "S3_3_FORM")
		{
			UpdateQuoteSessionArray.NumberOfKitchens = cleanVar(form[TermNames.NumberOfKitchens]);
			UpdateQuoteSessionArray.KitchenQuality = cleanVar(form[TermNames.KitchenQuality]);
			UpdateQuoteSessionArray.NumberOfFullBaths = cleanVar(form[TermNames.NumberOfFullBaths]);
			UpdateQuoteSessionArray.FullBathQuality = cleanVar(form[TermNames.FullBathQuality]);
			UpdateQuoteSessionArray.NumberOfHalfBaths = cleanVar(form[TermNames.NumberOfHalfBaths]);
			UpdateQuoteSessionArray.HalfBathQuality = cleanVar(form[TermNames.HalfBathQuality]);
			UpdateQuoteSessionArray.NumberOfFireplaces = cleanVar(form[TermNames.NumberOfFireplaces]);
			UpdateQuoteSessionArray.HeatPump = cleanVar(form[TermNames.HeatPump]);
			UpdateQuoteSessionArray.CentralAir = cleanVar(form[TermNames.CentralAir]);
			UpdateQuoteSessionArray.WoodStove = cleanVar(form[TermNames.WoodStove]);
            UpdateQuoteSessionArray.WallHeight = cleanVar(form[TermNames.WallHeight]);
            UpdateQuoteSessionArray.FloorCoveringType = cleanVar(form[TermNames.FloorCoveringType]);
			UpdateQuoteSessionArray.StepsRisersWithoutHandrails = cleanVar(form[TermNames.StepsRisersWithoutHandrails]);
			UpdateQuoteSessionArray.NumberOfStepsRisersWithoutHandrails = cleanVar(form[TermNames.NumberOfStepsRisersWithoutHandrails]);

			//FL only
			if(Product_State === "FL"){
                var DivingBoard = cleanVar(form[TermNames.DivingBoardSlide]) ? cleanVar(form[TermNames.DivingBoardSlide]) : cleanVar(form[TermNames.DivingBoardSlide2]);
                UpdateQuoteSessionArray.DistanceFireHydrant = cleanVar(form[TermNames.DistanceFireHydrant]);
                UpdateQuoteSessionArray.PoolType = cleanVar(form[TermNames.PoolType]);
                UpdateQuoteSessionArray.PoolFence = cleanVar(form[TermNames.PoolFence]);
                UpdateQuoteSessionArray.DivingBoardSlide = DivingBoard;
                UpdateQuoteSessionArray.ImmovablePoolLadder = cleanVar(form[TermNames.ImmovablePoolLadder]);
			}
		}
		else if(currentForm == "S3_4_FORM")
		{
			UpdateQuoteSessionArray.HomeFeatures1 = "";
			UpdateQuoteSessionArray.HomeFeatures1SquareFeet = "";
			UpdateQuoteSessionArray.HomeFeatures2 = "";
			UpdateQuoteSessionArray.HomeFeatures2SquareFeet = "";
			UpdateQuoteSessionArray.HomeFeatures3 = "";
			UpdateQuoteSessionArray.HomeFeatures3SquareFeet = "";

			var num = 1;

			var thisFORM = {};
			$.each(form, function(i, v){

				if(v)
				{
					thisFORM[i] = v;
				}

			});

			$.each(thisFORM, function(i, value){

				value = cleanVar(value);

				if(num < 4)
				{
					if (i.match(/SqFt$/))
					{
						UpdateQuoteSessionArray["HomeFeatures"+num+"SquareFeet"] = value;
						num++;
					}
					else
					{
						UpdateQuoteSessionArray["HomeFeatures"+num] = value;
					}
				}

			});



		}
		else if(currentForm == "S3_5_FORM")
		{
			var DivingBoard = cleanVar(form[TermNames.DivingBoardSlide]) ? cleanVar(form[TermNames.DivingBoardSlide]) : cleanVar(form[TermNames.DivingBoardSlide2]);

			UpdateQuoteSessionArray.Pets = cleanVar(form[TermNames.Pets]);
			UpdateQuoteSessionArray.Dogs = cleanVar(form[TermNames.Dogs]);
			UpdateQuoteSessionArray.DistanceFireHydrant = cleanVar(form[TermNames.DistanceFireHydrant]);
			UpdateQuoteSessionArray.PoolType = cleanVar(form[TermNames.PoolType]);
			UpdateQuoteSessionArray.PoolFence = cleanVar(form[TermNames.PoolFence]);
			UpdateQuoteSessionArray.DivingBoardSlide = DivingBoard;
			UpdateQuoteSessionArray.ImmovablePoolLadder = cleanVar(form[TermNames.ImmovablePoolLadder]);
		}
		else if(currentForm == "S4_FORM")
		{
			var cleanSSN = cleanVar(form[TermNames.Insured1SSN]).replace(/-/g, "");

			UpdateQuoteSessionArray.MultiPolicy = cleanVar(form[TermNames.MultiPolicy]);
			UpdateQuoteSessionArray.AutoPolicyNumber = cleanVar(form[TermNames.AutoPolicyNumber]);
			UpdateQuoteSessionArray.PrimeTimeDiscount = cleanVar(form[TermNames.PrimeTimeDiscount]);
			//Update Wind Mitigation only if it exists
			if(cleanVar(form[TermNames.WindMitigationForm]))
			{
                UpdateQuoteSessionArray.WindMitigationForm = cleanVar(form[TermNames.WindMitigationForm]);

                if(cleanVar(form[TermNames.WindMitigationForm]) == 100)
                {
                    UpdateQuoteSessionArray.BCEquivalent = cleanVar(form[TermNames.BCEquivalent]);
                    UpdateQuoteSessionArray.RoofDeckAttachmentType = cleanVar(form[TermNames.RoofDeckAttachmentType]);
                    UpdateQuoteSessionArray.RoofWallConnectionType = cleanVar(form[TermNames.RoofWallConnectionType]);
                    UpdateQuoteSessionArray.SecondaryWaterResistance = cleanVar(form[TermNames.SecondaryWaterResistance]);
                    UpdateQuoteSessionArray.OpeningProtectionTypeWLMForm = cleanVar(form[TermNames.OpeningProtectionTypeWLMForm]);
                    UpdateQuoteSessionArray.OpeningProtectionType = cleanVar(form[TermNames.OpeningProtectionType]);
                    UpdateQuoteSessionArray.RoofGeometryTypeWLMForm = cleanVar(form[TermNames.RoofGeometryTypeWLMForm]);
                }
                if(cleanVar(form[TermNames.WindMitigationForm]) == 200) {
                	UpdateQuoteSessionArray.WindBorneDebrisRegion = '0';
				}
			}

			UpdateQuoteSessionArray.Insured1BirthDate = cleanVar(form[TermNames.Insured1BirthDate]);
			UpdateQuoteSessionArray.Insured1SSN = cleanSSN;
			UpdateQuoteSessionArray.Insured1SSNDisplay = cleanSSN;
			UpdateQuoteSessionArray.Insured1SSNRequiredIndicator = cleanVar(cleanSSN) ? "100" : "200";
			UpdateQuoteSessionArray.InsuredEmailAddress = cleanVar(form[TermNames.InsuredEmailAddress]);
			UpdateQuoteSessionArray.FireAlarm = cleanVar(form[TermNames.FireAlarm]);
			UpdateQuoteSessionArray.BurglarAlarm = cleanVar(form[TermNames.BurglarAlarm]);
			UpdateQuoteSessionArray.Sprinklers = cleanVar(form[TermNames.Sprinklers]);

			skipEZQResponse = false;
		}
        else if(currentForm == "covAOverride") {
            UpdateQuoteSessionArray.SquareFootUnderRoof = "";
            skipEZQResponse = false;
        }

	}

	delete FormData["S5_FORM"];
	delete formData["S5_FORM"];

	if(BlockedURL)
	{
		skipEZQResponse = false;
	}

	if(!skipEZQResponse)
	{
		Loading("Saving...");
	}

	DebugInformation("updateQuoteSession", UpdateQuoteSessionArray);

	svc.updateQuoteSession(SessionId, skipEZQResponse, UpdateQuoteSessionArray, next);
}

function updateQuoteSessionSuccess(result)
{
	if(result.exception!= null)
	{
		exceptionHandler(result);
	}
	else
	{
		if(!NextStep)
		{
			$(".overlay-wrapper").remove();

			$.ajax({
			type: "GET",
			url: "popups/save-quote.php",
			success: function(html){

				$("body").after(html);

				UpdateOnLoad();

			}
			});
		}

        updateSessionStorageData(formData);
	}
}


function getSelectedQuoteData()
{
	var SelectedQuoteDataArray = new Array();

	SelectedQuoteDataArray.push("PropertyStreetNumber");
	SelectedQuoteDataArray.push("PropertyStreetName");
	SelectedQuoteDataArray.push("PropertyCity");
	SelectedQuoteDataArray.push("PropertyState");
	SelectedQuoteDataArray.push("PropertyZipCode");
	SelectedQuoteDataArray.push("Insurance_Product");

	var SessionId = getSessionCookie();
	var svc = new IqsService();

	DebugInformation("getSelectedQuoteData", SelectedQuoteDataArray);

	svc.getSelectedQuoteData(SessionId,SelectedQuoteDataArray,getSelectedQuoteDataSuccess);
}

function getSelectedQuoteDataSuccess(result)
{
    var responseData = "";

	if(result.exception!= null)
	{
		exceptionHandler(result);
	}
	else
	{
       responseData = result.responseDataPayload.SelectedQuoteData;

		if(responseData.Insurance_Product)
		{
			Insurance_Product = responseData.Insurance_Product;

			 //getQuoteData();

			tempAddress = new Object();

			tempAddress.PropertyStreetNumber = responseData.PropertyStreetNumber;
			tempAddress.PropertyStreetName = responseData.PropertyStreetName;
			tempAddress.PropertyCity = responseData.PropertyCity;
			tempAddress.PropertyState = responseData.PropertyState;
			tempAddress.PropertyZipCode = responseData.PropertyZipCode;

			LoadPage();
		}
		else if(get("section") == 1)
		{
			LoadPage();
		}
        else if(!get("section"))
        {
            LoadPage();
        }
		else
		{
			serverError();
		}

		logSessionTrack();

	}

    return responseData;
}


function logQuoteSessionBlock(errorCode)
{
	var BlockQuoteDataArray = new Object();
	var SessionId = getSessionCookie();
	var svc = new IqsService();

	BlockQuoteDataArray.BlockQuoteCode = errorCode;

	DebugInformation("logQuoteSessionBlock", BlockQuoteDataArray);

	svc.logQuoteSessionBlock(SessionId,BlockQuoteDataArray,logQuoteSessionBlockSuccess);
}

function logQuoteSessionBlockSuccess(result)
{
	if(result.exception!= null)
	{
		exceptionHandler(result);
	}
	else
	{
		if(!$(".preloadSessionErrorRightRail").html())
		{
			//Load Sidebar
			$.ajax({
			type: "GET",
			url: "section/sidebar/section-1.html?"+date,
			success: function(html){

				$(".content > .right").html(html);

			}
			});
		}
		else
		{
			$(".content > .right").html($(".preloadSessionErrorRightRail").html());
		}
	}
}


//Underwriting block error reports
function SendErrorReport(errorCode, ClearSession)
{
	ClearSession = typeof ClearSession !== 'undefined' ? ClearSession : true;

	logQuoteSessionBlock(errorCode);

	if(ClearSession)
	{
		clearSessionCookie();
	}
}


function updateSessionStorageData(formData)
{
	var SessionId = getSessionCookie();
	var svc = new IqsService();

	var UpdateSessionStorageDataArray = formData;

	var compressedData = JSON.stringify(UpdateSessionStorageDataArray);

	svc.updateSessionStorageData(SessionId, compressedData, updateSessionStorageDataSuccess);
}

function updateSessionStorageDataSuccess(result)
{
	if(result.exception!= null)
	{
		exceptionHandler(result);
	}
	else
	{
        nextStepActive = false;
        refreshSessionCookie();

        var NextTarget = NextStep ? NextStep.currentTarget.href ? NextStep.currentTarget.href : NextStep.target.href : false;


        if(formData.S1_FORM[TermNames.PropertyZipCode] && (getZipcode() != formData.S1_FORM[TermNames.PropertyZipCode])) {

            var params = {};
            params["zipcode"] = formData.S1_FORM[TermNames.PropertyZipCode];
            var newUrl = "?" + $.param(params);
            var nextSection = NextTarget.split("#"); //avoids DP3 block circumvention
            window.location.href = newUrl+"#"+nextSection[1];
            //window.location.href = newUrl+"#/section=2&step=2.1";
        }

        if(NextTarget)
        {
		 	UpdateBeforeLoad();
            window.location = NextTarget;
        }
	}
}


function getSessionStorageData()
{
	var SessionId = getSessionCookie();
	var svc = new IqsService();

	svc.getSessionStorageData(SessionId, getSessionStorageDataSuccess);
}

function getSessionStorageDataSuccess(result)
{

    var requestedStorageData = "";

	if(result.exception!= null)
	{
		//(-SDR-)we were getting an invalid session that was falling here and ending this call prematurely
	}
	else
	{
        requestedStorageData = result.responseDataPayload.SessionStorageData;
    }

	formData = requestedStorageData != "" ? JSON.parse(requestedStorageData) : formData;

	if(!formData["S1_FORM"]["S1_StreetAddress"])
	{
		if(formData["S1_FORM"]["S1_StreetNumber"] && formData["S1_FORM"]["S1_StreetName"])
		{
            formData["S1_FORM"]["S1_StreetAddress"] = formData["S1_FORM"]["S1_StreetNumber"] + " " + formData["S1_FORM"]["S1_StreetName"];
        }
	}

	PopulateSidebar();

	completedForms = new Array();

	$.each(formData, function(index, value){
		completedForms.push(index);
	});

	completedForms = completedForms.sort();

	if(getSessionCookie())
	{
		getSelectedQuoteData();
	}
	else
	{
		LoadPage();

	}
}




function getQuotePdf()
{
	var SessionId = getSessionCookie();
	var win = window.open("", "_blank");

	var href = window.location.href;
	var url = href.substring(0, href.lastIndexOf("/") + 1);
	if(Insurance_Product == "DP3")
	{
		var URI = url+"/pdftemplate/PDFhtml_DP3.php";
	}
	else
	{
		var URI = url+"/pdftemplate/PDFhtml.php";
	}
    win.document.location = serviceUrl+"getQuotePdf/"+SessionId+"?pdfpath="+URI;
}


function autoFillForms()
{
	var formName = $("form").attr("name");

	autoFill = true;

	if(formData[formName])
	{
		$.each(formData[formName], function(i, value){

			if(value)
			{
				$("input[type='text'][name='"+i+"'], input[type='hidden'][name='"+i+"'], textarea[name='"+i+"'], select[name='"+i+"']").val(value).trigger("change");
				$("input[type='radio'][name='"+i+"'][value='"+value+"'], input[type='checkbox'][name='"+i+"']").val(value).prop("checked", true).trigger("change");
			}

			//Special instances//
			if(i == "S3_StructureType")
			{
				var PropertyKeys = {};
				$.each(PropertyInfo.HomeStyle, function(key, name){ PropertyKeys[name.value] = key; });

				$(".selection-wrapper li."+i+" .selection-value").html(PropertyKeys[value]).css('textTransform', 'capitalize');
				$(".selection-wrapper li."+i).removeClass("select").addClass("selected");

				if(Math.abs(value) == 601 || Math.abs(value) == 602)
				{
					$("[name='S3_HomeType'] option[value='100']").prop('selected', true).val(100);
					$("[name='S3_HomeType']").prop("disabled", true);
					$("[name='S3_HomeType'] option:selected[data-change-value='true']").trigger("change");
				}
				else
				{
					var originalValue = $("[name='S3_HomeType'] option[data-change-value='true']").data("original-value");
					$("[name='S3_HomeType'] option[data-change-value='true']").val(originalValue).trigger("change");
					$("[name='S3_HomeType']").prop("disabled", false);
				}

			}
			else if(i == "S3_RoofType")
			{
				var PropertyKeys = {};
				$.each(PropertyInfo.RoofType, function(key, name){ PropertyKeys[name.value] = key; });

				$(".selection-wrapper li."+i+" .selection-value").html(PropertyKeys[value]).css('textTransform', 'capitalize');
				$(".selection-wrapper li."+i).removeClass("select").addClass("selected");

			}
			else if(i == "S3_RoofShape")
			{
				var PropertyKeys = {};
				$.each(PropertyInfo.RoofShape, function(key, name){ PropertyKeys[name.value] = key; });

				$(".selection-wrapper li."+i+" .selection-value").html(PropertyKeys[value]).css('textTransform', 'capitalize');
				$(".selection-wrapper li."+i).removeClass("select").addClass("selected");

			}

			else if(i == "S3_2_GarageType" || i == "S3_2_GarageSize")
			{
				var garageSizeVal = cleanVar(formData[formName]["S3_2_GarageSize"]);
				var garageTypeVal = cleanVar(formData[formName]["S3_2_GarageType"]);

				if(garageTypeVal == 1)
				{
					garageSizeVal = garageTypeVal;
					garageTypeVal = "";
				}
				if((garageSizeVal != 1) && garageTypeVal)
				{
					if(garageTypeVal.length == 3)
					{
						garageTypeVal = garageTypeVal;
						garageSizeVal = garageSizeVal;
					}
					else if(garageTypeVal.length == 5)
					{
						garageSizeVal = garageTypeVal.slice(3, 5);
						garageTypeVal = garageTypeVal.slice(0, 3);
					}

					$("[name='S3_2_GarageSize']").val(garageSizeVal).prop('selected', true).trigger("change");

					var PropertyKeys = {};
					$.each(PropertyInfo.GarageType, function(key, name){ PropertyKeys[name.value] = key;});

					$(".selection-wrapper li.S3_2_GarageType .selection-value").html(PropertyKeys[garageTypeVal]).css('textTransform', 'capitalize');
					$(".selection-wrapper li.S3_2_GarageType").removeClass("select").addClass("selected");
					$(".selection-wrapper li.S3_2_GarageType input[type='hidden'][name='S2_2_GarageType']").val(garageTypeVal).trigger("change");
				}
				else
				{
					$("[name='S3_2_GarageSize'] [value='"+garageSizeVal+"']").val(garageSizeVal).prop('selected', true).trigger("change");
				}

			}
			//FE ONLY
            else if(i == "S4_WindMitigationForm") {

                if(value == 100)
                {
                    $(".WindMitigationWrapper .selection-wrapper").empty().html('<li class="selected"><a class="edit-icon load-selection-popup-wind-mitigation" style="margin-top: 5px;" data-filename="section/4/step-wind-mitigation-options-popup.html"><img src="assets/pencil-icon.png"/> Edit</a><div class="selection-value-wrapper"> <img src="assets/checkmark-small.png"> <div class="selection-value" style="text-transform: capitalize;">Inspection Details</div> </div></li>');
                }
                /*S4_WindMitigationForm
                 S4_OpeningProtectionTypeWLMForm
                 S4_SecondaryWaterResistance
                 S4_BCEquivalent
                 S4_RoofWallConnectionType
                 S4_RoofDeckAttachmentType*/

            }
			else if(i == "S4_Insured1SSN")
			{

				var numericVal = value.replace(/\D/g,'');
				var hiddenVal = numericVal.replace(/^\d{5}/, '*****');

				if(formData['S2_FORM'])
				{
					if((formData['S2_FORM']['S2_CurrentInsurance'] == 1 || (!formData['S2_FORM']['S2_CurrentInsurance'] == 1 && formData['S2_FORM']['S2_InsuranceAgencies'] == 1)) && !formData['S4_FORM']['S4_Insured1SSN'])
					{
						$("input[name='S4_Insured1SSN']").prop("disabled", false);
					}
					else
					{
						$("input[name='S4_Insured1SSN']").prop("disabled", true);
						$("[name='S4_Insured1SSN']").attr("name", "S4_Insured1SSNDisplay");

						if($("[name='S4_Insured1SSN']").length == 0)
						{
							$("[name='S4_Insured1SSNDisplay']").after('<input name="S4_Insured1SSN" type="password" disabled="true" class="hiddenField" id="S4_Insured1SSN" maxlength="50"/>');
							$("[name='S4_Insured1SSN']").val(numericVal);
						}
					}

				}

				if(hiddenVal.length == 9)
				{
					$("[name='S4_Insured1SSNDisplay']").val(hiddenVal.substring(0,3) + "-" + hiddenVal.substring(3,5) + "-" + hiddenVal.substring(5,9));
				}
			}

			///////////////////////////////
			//Recall Quote Broken Options//
			///////////////////////////////

			else if(i == "S1_PropertyUsage")
			{
				var S1_PropertyUsage = formData[formName]["S1_PropertyUsage"];
				var S1_PropertyOccupancy = formData[formName]["S1_PropertyOccupancy"];

				var S_1PUO = S1_PropertyUsage+"-"+S1_PropertyOccupancy;

				$("[name='S1_PropertyUsage'] option[value='"+S_1PUO+"']").prop('selected', true);

				if(formData[formName]["S1_TimeUnoccupied"])
				{
					$("[name='S1_TimeUnoccupied'] option[value='"+formData[formName]["S1_TimeUnoccupied"]+"']").prop('selected', true);
					$("[name='S1_PropertyUsage'] option[value='"+S_1PUO+"']").prop('selected', true).trigger("change");
				}

				if(formData[formName]["S1_OwnedBy"])
				{
					$("input[type='radio'][name='S1_OwnedBy'][value='"+formData[formName]["S1_OwnedBy"]+"']").val(formData[formName]["S1_OwnedBy"]).prop("checked", true).trigger("change");

					if(formData[formName]["S1_OwnedBy"] != 200)
					{
						$("[name='S1_EntityName']").val(formData[formName]["S1_EntityName"]);
					}
				}

			}
			else if(i == "S2_InsuranceAgencies")
			{
				if(value >= 5)
				{
					$("[name='S2_CurrentInsurance']").val("-").trigger("change");
					$("[name='S2_InsuranceAgencies']").val(value).trigger("change");
				}
				else
				{
					$("[name='S2_CurrentInsurance']").val(value).trigger("change");
				}
			}
			else if(i == "S2_DwellingCoverage" || i == "S2_PolicyExpiration" || i == "S2_2_LossAmountPaid:1" || i == "S2_2_LossAmountPaid:2" || i == "S2_2_LossAmountPaid:3")
			{
				$("[name='"+i+"']").val(value).blur();
			}

			else if(i == "S3_5_BoardOrSlide")
			{
				$("[name='S3_5_BoardOrSlide'][value='200']").filter(':visible:first').prop("checked", true).trigger("change");
                if (value == '200'){
                    $("#S3_5_BoardOrSlide-no").prop("checked", true).trigger("change");
                }
			}

            else if(i == "S3_3_BoardOrSlide")
            {
                $("[name='S3_3_BoardOrSlide'][value='200']").filter(':visible:first').prop("checked", true).trigger("change");

                if (value == '200'){
                	$("#S3_3_BoardOrSlide-no").prop("checked", true).trigger("change");
				}
            }

		});

		autoFill = false;
	}
}


function DropdownMenus() {

	this.values = function(originalKeyName) {

		var dropdown = "";
		var Abs_Insurance_Product = Insurance_Product;

		keyName = originalKeyName;

		if(originalKeyName == "PropertyUsage")
		{
			if(Insurance_Product_Toggle == true || Insurance_Product_Toggle == "true")
			{
				var Abs_Insurance_Product = "DP3";
			}
			else
			{
				var Abs_Insurance_Product = "HO3";
			}
		}

		if(originalKeyName+"_"+Product_State+"_"+Abs_Insurance_Product in dropdownMenus)
		{
			keyName = originalKeyName+"_"+Product_State+"_"+Abs_Insurance_Product;
		}
		else if(originalKeyName+"_"+Product_State in dropdownMenus)
		{
			keyName = originalKeyName+"_"+Product_State;
		}
		else
		{
			keyName = originalKeyName;
			keyName = originalKeyName;
		}

		$.each(dropdownMenus[keyName], function(key, obj) {

			var disabled = obj.disabled ? "disabled" : "";
			var selected = obj.selected ? "selected" : "";
			var extraData = obj.extra ? obj.extra : "";
			var value = obj.value;

			dropdown += '<option value="'+value+'" '+disabled+' '+selected+' '+extraData+'>'+obj.label+'</option>';

		});

		$("select[data-dropdown-menus='"+originalKeyName+"']").empty();
		$("select[data-dropdown-menus='"+originalKeyName+"']").append(dropdown);

	}

}

function loadHomeInfo(array)
{

	$.each(array, function(key, obj) {

		var tooltip = obj.description ? "<div class='tooltip'>"+obj.description+"</div>" : "";

		$(".overlay-container .selection-list").append("<li data-name='"+key+"' data-value='"+obj.value+"' class='tooltip-parent'><img src='assets/property_info/"+obj.filename+".png'/><div class='label'>"+key+"</div>"+tooltip+"<div class='checkmark'></div></li>");

	});

}


function getSidebarData()
{
	var SelectedQuoteDataArray = new Array();

	SelectedQuoteDataArray.push("ApplicantFirstName");
	SelectedQuoteDataArray.push("ApplicantLastName");
	SelectedQuoteDataArray.push("InsuredFirstName");
	SelectedQuoteDataArray.push("InsuredLastName");
	SelectedQuoteDataArray.push("PropertyStreetNumber");
	SelectedQuoteDataArray.push("PropertyStreetName");
	SelectedQuoteDataArray.push("PropertyCity");
	SelectedQuoteDataArray.push("PropertyState");
	SelectedQuoteDataArray.push("PropertyZipCode");


	var SessionId = getSessionCookie();
	var svc = new IqsService();

	svc.getSelectedQuoteData(SessionId,SelectedQuoteDataArray,getSidebarDataSuccess);
}

function getSidebarDataSuccess(result)
{
    var responseData = "";

	if(result.exception!= null)
	{
		//exceptionHandler(result);
	}
	else
	{
        responseData = result.responseDataPayload.SelectedQuoteData;

		var firstName = cleanVar(responseData.ApplicantFirstName) ? responseData.ApplicantFirstName : responseData.InsuredFirstName;
		var lastName = cleanVar(responseData.ApplicantLastName) ? responseData.ApplicantLastName : responseData.InsuredLastName;

		var string = firstName+" "+lastName+"</br>"+responseData.PropertyStreetNumber+" "+responseData.PropertyStreetName+"</br>"+responseData.PropertyCity+", "+responseData.PropertyState+" "+responseData.PropertyZipCode;

		if(responseData)
		{
			$(".right .section.S1_FORM .body").html(string);

			$("a[href^='propertyquote.html']").each(function() {
				var currentHref = $(this).attr("href");
				var hash = currentHref.substring(currentHref.indexOf('#')+1);

				var zipcode = responseData.PropertyZipCode;
				var newHref = "propertyquote.html?zipcode="+zipcode+"#"+hash;

				$(this).attr("href", newHref);

			});
		}

	}
    return responseData;
}


function PopulateSidebar(disableLoad)
{
	disableLoad = disableLoad ? true : false;

	if($.isEmptyObject(formData.S1_FORM) && !disableLoad)
	{
		getSidebarData();
	}
	else if($(".right .section.S1_FORM").length > 0 && !$.isEmptyObject(formData.S1_FORM))
	{
		var string = cleanVar(formData.S1_FORM.S1_FirstName)+" "+cleanVar(formData.S1_FORM.S1_LastName)+"</br>"+cleanVar(formData.S1_FORM.S1_StreetAddress)+"</br>"+cleanVar(formData.S1_FORM.S1_City)+", "+cleanVar(formData.S1_FORM.S1_State)+" "+cleanVar(formData.S1_FORM.S1_Zipcode);

		$(".right .section.S1_FORM .body").html(string);

	}
}

function PositionOverlayBox()
{
	//Center overlay boxes
	var marginTop = 0;
	var marginLeft = 0;
	var containerHeight = $(".overlay-wrapper .overlay-container").height();
	var windowHeight = $(window).height();
	var containerPadding = $(".overlay-wrapper .overlay-container").outerHeight() - containerHeight;

	$(".overlay-wrapper .overlay-container").css({"max-height" : windowHeight-containerPadding, "height":"auto", "overflow-y": "auto", "overflow-x" : "hidden"});

	marginTop = $(".overlay-wrapper .overlay-container").outerHeight()/2;
	marginLeft = $(".overlay-wrapper .overlay-container").outerWidth()/2;

	$(".overlay-wrapper .overlay-container").css({"margin-top" : - marginTop, "margin-left" : - marginLeft});

}

// $(function(){
// 	$(window).resize(function() {
//
// 		PositionOverlayBox();
//
// 	});
// });

function UpdateOnLoad(){

		InsertQuoteID();

		$('input, textarea').placeholder();

		$(document).on("click", ".date-selector", function(){
			var datepickerID = $(this).closest("label").attr("for");
			$("#"+datepickerID).focus();
		});

		var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

		//Load jQuery datepicker
		$('.datepicker').each(function(){

			if($(this).hasClass("no-future"))
			{
				$(this).datepicker({
					changeMonth: true,
					changeYear: true,
					yearRange:'-10:+0',
					maxDate: 0,
					dateFormat: 'mm/dd/yy',
					onSelect : function(x, u){
						$(".ui-datepicker a").removeAttr("href");
						if(msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
						{
							return false;
						}
						else
						{
							$(this).focus();
						}
						$(this).datepicker("hide");
						$(this).trigger("change");
					},
					onClose: function(event){
						event.preventDefault;
					}
				});
			}
			else
			{

				$(this).datepicker({
					changeMonth: true,
					changeYear: true,
					yearRange:'-10:+0',
					dateFormat: 'mm/dd/yy',
					onSelect : function(x, u){
						$(".ui-datepicker a").removeAttr("href");
						if(msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
						{
							return false;
						}
						else
						{
							$(this).focus();
						}
						$(this).datepicker("hide");
						$(this).trigger("change");
					},
					onClose: function(event){
						event.preventDefault;
					}
				});
			}
		});


		//Populate dropdown menus
		$("select[data-dropdown-menus]").each(function(){

			var varName = $(this).data("dropdown-menus");

			if($("option", this).length <= 0)
			{
				new DropdownMenus().values(varName);
			}
		});


		$('[data-new-href]').each(function(){

			$(this).closest("select").attr("data-change-href", true);

			if($(this).attr("type") == "radio")
			{
				var name = $(this).attr("name");
				$("[name='"+name+"']").attr("data-change-href", true);
			}

		});

		//Align tooltips
		$(".tooltip").each(function(){
			$(this).css({"margin-top" : - ($(this).outerHeight()/2)});
		});

		if(Product_State == "NY" && Insurance_Product == "DP3")
		{
			$("[data-remove-for='NY_DP3'").remove();
		}

		if(!QuoteID) {
			if(getParameterByName("lob")) {
				if(getParameterByName("lob") == "dwelling") {
					if(!$("select[name='S1_PropertyUsage']").val()){
						$("select[name='S1_PropertyUsage']").val("100-200").trigger("change");
					}
				}
			}
		}

		////////////////////////////////////
		//////SITEWIDE ==== START///////////
		////////////////////////////////////
		//Change labels based on product

		if(Insurance_Product == "DP3") {
			$("label.dp3-title").each(function(){
				$(this).text($(this).attr("title"));
			});
		}

		PositionOverlayBox();
}

function UpdateBeforeLoad()
{
	//CloseOverlays if page changes
	$(".overlay-wrapper, .overlay").hide().remove();

}

function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " ")).toLowerCase();
}

function getZipcode()
{
	var href = encodeURI(window.location).toLowerCase();
	var zip = href.match("zipcode=([0-9]{5})") ? href.match("zipcode=([0-9]{5})")[1] : false;

	return zip;
}

if(get("debug") == "true")
{
	$.ajax({
	type: "GET",
	url: "ajax/debug-data.html",
	success: function(html){

		$(".debug-wrapper").remove();
		$("body").after(html);

		UpdateOnLoad();
	}
	});

}


function getState(results)
{
	var a = results[0].address_components;
	var state;
	for(i = 0; i <  a.length; ++i)
	{
	   var t = a[i].types;
	   if(compIsType(t, 'administrative_area_level_1'))
		  state = a[i].short_name; //store the state
	}
	return (state)
}

function getCity(results)
{
	var a = results[0].address_components;
	var city;
	for(i = 0; i <  a.length; ++i)
	{
	   var t = a[i].types;
	   if(compIsType(t, 'locality'))
		  city = a[i].long_name; //store the city
	}
	return (city)
}

function compIsType(t, s)
{
   for(z = 0; z < t.length; ++z)
	  if(t[z] == s)
		 return true;
   return false;
}

// Functions to get coverage A early

function getCoverageA (currentForm, FormData) {
	waitCovA = true;
    var FormData = FormData ? JSON.parse(FormData) : false;

    var UpdateQuoteSessionArray = new Object();
    var SessionId = getSessionCookie();

    var form = FormData ? FormData[currentForm] : formData[currentForm];

    UpdateQuoteSessionArray.Insurance_Product = Insurance_Product;
	//process form data
    if(form) {
        var pageID = pageID ? pageID : get("step") ? get("step") : "";

        if (pageID) {
            UpdateQuoteSessionArray.LastQuoteSectionPageId = pageID;
        }

        if (currentForm == "S3_4_FORM") {
            UpdateQuoteSessionArray.HomeFeatures1 = "";
            UpdateQuoteSessionArray.HomeFeatures1SquareFeet = "";
            UpdateQuoteSessionArray.HomeFeatures2 = "";
            UpdateQuoteSessionArray.HomeFeatures2SquareFeet = "";
            UpdateQuoteSessionArray.HomeFeatures3 = "";
            UpdateQuoteSessionArray.HomeFeatures3SquareFeet = "";

            var num = 1;

            var thisFORM = {};
            $.each(form, function (i, v) {

                if (v) {
                    thisFORM[i] = v;
                }

            });

            $.each(thisFORM, function (i, value) {

                value = cleanVar(value);

                if (num < 4) {
                    if (i.match(/SqFt$/)) {
                        UpdateQuoteSessionArray["HomeFeatures" + num + "SquareFeet"] = value;
                        num++;
                    }
                    else {
                        UpdateQuoteSessionArray["HomeFeatures" + num] = value;
                    }
                }

            });
        }
    }
	delete FormData["S5_FORM"];
	delete formData["S5_FORM"];

	//send request to updateQuoteSession
	var updateData = {
		"SessionId":SessionId,
		"UpdateQuoteDataArray":UpdateQuoteSessionArray,
		"RunUpdateInBackground": false
		};
	var jsonData = JSON.stringify(updateData);
	promiseCoverageA = Promise.resolve($.ajax({
		url: serviceUrl + "updateQuoteSession",
		data: jsonData,
		type: "PUT",
		contentType: "application/json",
		timeout: 60000,
		dataType:"json"
		})
	)
		.then(function(result){
            updateQuoteSessionSuccess(result);
           // var PreferredQuoteArray = PreferredQuoteTemplateDataArray;
            var QuoteArray = PreferredQuoteTemplateDataArray;
            var generateData = {
            	"SessionId": SessionId,
				"UpdateQuoteDataArray": QuoteArray
			};
			var generateDataJson = JSON.stringify(generateData);
			return Promise.resolve($.ajax({
				url: serviceUrl + "generateSavedQuote",
				data: generateDataJson,
				type: "POST",
				contentType: "application/json",
				timeout: 60000,
				dataType: "json"
				})
			)
		})
	return promiseCoverageA;

}


//promisify UpdateQuoteSession for Step 4

function promisifiedUpdateQuoteSessionStep4 (currentForm) {

    var UpdateQuoteSessionArray = new Object();
    var SessionId = getSessionCookie();
    var form = formData[currentForm];

    UpdateQuoteSessionArray.Insurance_Product = Insurance_Product;

    if(form) {
        var pageID = pageID ? pageID : get("step") ? get("step") : "";

        if (pageID) {
            UpdateQuoteSessionArray.LastQuoteSectionPageId = pageID;
        }

        var cleanSSN = cleanVar(form[TermNames.Insured1SSN]).replace(/-/g, "");

        UpdateQuoteSessionArray.MultiPolicy = cleanVar(form[TermNames.MultiPolicy]);
        UpdateQuoteSessionArray.AutoPolicyNumber = cleanVar(form[TermNames.AutoPolicyNumber]);
        UpdateQuoteSessionArray.PrimeTimeDiscount = cleanVar(form[TermNames.PrimeTimeDiscount]);
        //Update Wind Mitigation only if it exists
        if (cleanVar(form[TermNames.WindMitigationForm])) {
            UpdateQuoteSessionArray.WindMitigationForm = cleanVar(form[TermNames.WindMitigationForm]);

            if (cleanVar(form[TermNames.WindMitigationForm]) == 100) {
                UpdateQuoteSessionArray.BCEquivalent = cleanVar(form[TermNames.BCEquivalent]);
                UpdateQuoteSessionArray.RoofDeckAttachmentType = cleanVar(form[TermNames.RoofDeckAttachmentType]);
                UpdateQuoteSessionArray.RoofWallConnectionType = cleanVar(form[TermNames.RoofWallConnectionType]);
                UpdateQuoteSessionArray.SecondaryWaterResistance = cleanVar(form[TermNames.SecondaryWaterResistance]);
                UpdateQuoteSessionArray.OpeningProtectionTypeWLMForm = cleanVar(form[TermNames.OpeningProtectionTypeWLMForm]);
                UpdateQuoteSessionArray.OpeningProtectionType = cleanVar(form[TermNames.OpeningProtectionType]);
                UpdateQuoteSessionArray.RoofGeometryTypeWLMForm = cleanVar(form[TermNames.RoofGeometryTypeWLMForm]);

            }
            if(cleanVar(form[TermNames.WindMitigationForm]) == 200) {
                UpdateQuoteSessionArray.WindBorneDebrisRegion = '0';
            }
        }

        UpdateQuoteSessionArray.Insured1BirthDate = cleanVar(form[TermNames.Insured1BirthDate]);
        UpdateQuoteSessionArray.Insured1SSN = cleanSSN;
        UpdateQuoteSessionArray.Insured1SSNDisplay = cleanSSN;
        UpdateQuoteSessionArray.Insured1SSNRequiredIndicator = cleanVar(cleanSSN) ? "100" : "200";
        UpdateQuoteSessionArray.InsuredEmailAddress = cleanVar(form[TermNames.InsuredEmailAddress]);
        UpdateQuoteSessionArray.FireAlarm = cleanVar(form[TermNames.FireAlarm]);
        UpdateQuoteSessionArray.BurglarAlarm = cleanVar(form[TermNames.BurglarAlarm]);
        UpdateQuoteSessionArray.Sprinklers = cleanVar(form[TermNames.Sprinklers]);

    }

     // FormData["S5_FORM"] = {};
     // formData["S5_FORM"] = {};

    var updateData = {
        "SessionId":SessionId,
        "UpdateQuoteDataArray":UpdateQuoteSessionArray,
        "RunUpdateInBackground": false
    };
    var jsonData = JSON.stringify(updateData);

    // returns a promise of the updateQuoteSession call
    return Promise.resolve($.ajax({
            url: serviceUrl + "updateQuoteSession",
            data: jsonData,
            type: "PUT",
            contentType: "application/json",
            timeout: 60000,
            dataType:"json"
        })
    )
}

function promisifiedUpdateSessionStorageData(formData)
{
    var SessionId = getSessionCookie();

    var UpdateSessionStorageDataArray = formData;

    var compressedData = JSON.stringify(UpdateSessionStorageDataArray);

	var updateData = {
		"SessionId": SessionId,
		"UpdateSessionStorageData": compressedData
	}
    var jsonData = JSON.stringify(updateData);

    return Promise.resolve($.ajax({
		url: serviceUrl + "updateSessionStorageData",
		data: jsonData,
		type: "PUT",
		contentType: "application/json",
		timeout: 60000,
		dataType: "json"
	}))
}