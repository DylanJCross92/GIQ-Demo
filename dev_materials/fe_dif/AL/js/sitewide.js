//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////CHECK BROWSER SUPPORT ==== START////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var OnLoadPopup = true;
// var BrowserOK = false;
//
//Moved to AppContainer, componentWillMount
// function detectIE() {
//     var ua = window.navigator.userAgent;
//     var msie = ua.indexOf('MSIE ');
//     var trident = ua.indexOf('Trident/');
//
//     if (msie > 0) {
//         // IE 10 or older => return version number
//         return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
//     }
//
//     if (trident > 0) {
//         // IE 11 (or newer) => return version number
//         var rv = ua.indexOf('rv:');
//         return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
//     }
//
//     // other browser
//     return false;
// }
//
// $(function(){
//
// 	var browserName = $.browser.name;
// 	var browserVersion = $.browser.version;
//
// 	var FirefoxOK = browserName == "firefox" && parseFloat(browserVersion) >= "3.6";
// 	var ChromeOK = browserName == "chrome" && parseFloat(browserVersion) >= "18";
// 	var SafariOK = browserName == "safari" && parseFloat(browserVersion) >= "5.1";
// 	var InternetExplorerOK = detectIE();
//
// 	if(FirefoxOK||ChromeOK||SafariOK||InternetExplorerOK)
// 	{
// 		BrowserOK = true;
// 	}
// 	else
// 	{
// 		UpdateBeforeLoad();
//
// 		$.ajax({
// 		type: "GET",
// 		url: "unsupported-browser.html",
// 		success: function(html){
//
// 			$("body").after(html);
// 			UpdateOnLoad();
// 		}
// 		});
// 	}
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////CHECK BROWSER SUPPORT ==== END//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function getFormData()
{
	var formDataObj = new Object;

	var formName = $("form").attr("name");
	//delete formData[formName];
	formDataObj[formName] = new Object();

	var lastElement;

	$("form [name]:visible, form [name][type='hidden'], form .hiddenField").each(function(){

		var $this = $(this),
			value = $.trim($this.val()),
			name = $this.attr("name"),
			fieldType = $this.attr("type") ? $this.attr("type").toLowerCase() :  $this.prop("tagName").toLowerCase();

			if(name == "S4_OpeningProtectionTypeWLMForm" || name === "S4_SecondaryWaterResistance" || name == "S4_BCEquivalent" || name == "S4_RoofWallConnectionType" || name == "S4_RoofDeckAttachmentType")
			{
                if($(".toggle-box.WindMitigationWrapper:visible").length>0)
                {
                    if(name!=lastElement)
                    {
                        lastElement = name;

                        value = fieldType == "radio" || fieldType == "checkbox" ? $("[name='"+name+"']:checked").val() : value;

                        value = value == null || value == undefined ? "" : value;

                        formDataObj[formName][name] = value;
                    }
                }
			}
			else
			{
                if(name!=lastElement)
                {
                    lastElement = name;

                    value = fieldType == "radio" || fieldType == "checkbox" ? $("[name='"+name+"']:checked").val() : value;

                    value = value == null || value == undefined ? "" : value;

                    formDataObj[formName][name] = value;
                }
			}
	});

	return JSON.stringify(formDataObj);

}



function validateFormData(FormData)
{
	FormData = JSON.parse(FormData);

	var Errors = new Object();

	var validator = new Validator();

	var TermNameKeys = {};
	$.each(TermNames, function(key, name){ TermNameKeys[name] = key; });

	$.each(FormData, function(parentKey, parentValue){

		$.each(parentValue, function(key, value){

			value = $.trim(value);

			if(TermNameKeys[key] in validationRules)
			{

				var dataType = validationRules[TermNameKeys[key]].dataType,
					dataLength = validationRules[TermNameKeys[key]].maxLength ? validationRules[TermNameKeys[key]].maxLength : 5000,
					dataRequired = validationRules[TermNameKeys[key]].required,
					dataAllowFuture = "allowFuture" in validationRules[TermNameKeys[key]] ? validationRules[TermNameKeys[key]].allowFuture : true,
					dataBefore1900 = "before1900" in validationRules[TermNameKeys[key]] ? validationRules[TermNameKeys[key]].before1900 : true,
					customValidation = "customValidation" in validationRules[TermNameKeys[key]] ? validationRules[TermNameKeys[key]].customValidation : false;
				if(customValidation)
				{
					var	customValidationRule = "compare" in validationRules[TermNameKeys[key]].customValidation ? validationRules[TermNameKeys[key]].customValidation.compare : false,
						customValidationErrorKind = "errorKind" in validationRules[TermNameKeys[key]].customValidation ? validationRules[TermNameKeys[key]].customValidation.errorKind : false,
						customValidationOverrideDefault = "overrideDefault" in validationRules[TermNameKeys[key]].customValidation ? validationRules[TermNameKeys[key]].customValidation.overrideDefault : false;
				}

				if(dataType)
				{
					var validation = (!value && !dataRequired) ? true : !value && dataRequired ? false : validator[dataType](value, dataLength);
						validation = validation && (dataType == "year" && !dataAllowFuture) ? validator["futureYear"](value, dataLength) : validation;
						validation = validation && (dataType == "date" && !dataAllowFuture) ? validator["futureDate"](value, dataLength) : validation;
						validation = !validation && value && !dataRequired ? validator[dataType](value, dataLength) : validation;

					var errorMessageKind = !validation && !value ? "errorMessageEmpty" : "errorMessageInvalid";
                        errorMessageKind = value.length > dataLength ? "errorMessageMaxLength" : errorMessageKind;
						customValidationErrorKind = customValidationErrorKind == "false" ? false : customValidationErrorKind;

					if(dataType == "date" && !dataBefore1900){
						validation = validation && validator["before1900"](value, dataLength);
						errorMessageKind = validator["before1900"](value, dataLength) ? errorMessageKind : "errorMessage1900";
					}


					if("customValidation" in validationRules[TermNameKeys[key]])
					{
						if(customValidationRule && ((value && validation) || customValidationOverrideDefault))
						{
							var string = customValidationRule.match(/<!(.*?)!>/g);
							var customValidationTerms = new Array();

							var execCustomValidationRule = customValidationRule;

							$.each(string, function(i, v){

								var customValidationTerm = v.replace(/<!/g, "").replace(/!>/g, "");
									customValidationTerms.push(customValidationTerm);
							});

							$.each(customValidationTerms, function(i, v){

								var RegEx = new RegExp("<!"+v+"!>", "ig");

								if(v == "this")
								{
									var newData = value ? "'"+value+"'" : "''";
								}
								else
								{
									var newData = FormData[parentKey][TermNames[v]] ? FormData[parentKey][TermNames[v]] : "''";
									//var newData = FormData[parentKey][TermNames[v]] ? FormData[parentKey][TermNames[v]] : false;
								}

								newData = dataType == "currency" ? cleanVar(cleanCurrency(newData)) : newData;

								newData = newData ? newData : "''";

								execCustomValidationRule = execCustomValidationRule.replace(RegEx, newData);

							});

							validation = eval(execCustomValidationRule) ? eval(execCustomValidationRule) : false;
							errorMessageKind = !eval(execCustomValidationRule)  ? customValidationErrorKind : errorMessageKind;

						}
					}


					if(dataType == "date" && validation)
					{
						validation = validator["date"](value, 5000);
					}

					if(!validation)
					{
						Errors[TermNameKeys[key]] = {
              errorKind: errorMessageKind,
              visibleFormInput: validationRules[TermNameKeys[key]].visibleFormInput
            };
					}

				}

			}

		});

	});

	return displayErrors(Errors);

}




function displayErrors(Errors)
{
	var errorMessageKeys = {};
	$.each(errors, function(key, obj){ errorMessageKeys[obj.errorFormName] = key; });

	$(".error").removeClass("error");
	$(".errors").remove();

	if($.isEmptyObject(Errors))
	{
		$(".errors .error-list").empty();
		return false;
	}
	else
	{
		$("form").before("<div class='errors'><ul class='error-list'></ul></div>");

		$.each(Errors, function(key, value){

			errorKind = value.errorKind;

			var $this = value.visibleFormInput ? $('[name="'+value.visibleFormInput+'"]') : $("[name='"+TermNames[key]+"']");
      var target = value.visibleFormInput || TermNames[key];
			var errorMessage = errors.hasOwnProperty(errorMessageKeys[target]) ? errors[errorMessageKeys[target]][errorKind] : "Unknown error";

			$(".errors").show();
			$(".errors .error-list li."+key).remove();
			$(".errors .error-list li").filter(function() {

				return $(this).text() == errorMessage;

			}).remove();

			$(".errors .error-list").append("<li class='"+key+"'>"+errorMessage+"</li>");
			$this.addClass("error");
			$this.closest(".radio-error").addClass("error");

		});

		return true;

	}

}


function checkAddress()
{
	if(
		formData.S1_FORM[TermNames.PropertyStreetAddress].substr(0,formData.S1_FORM[TermNames.PropertyStreetAddress].indexOf(' ')) == tempAddress.PropertyStreetNumber &&
		formData.S1_FORM[TermNames.PropertyStreetAddress].substr(formData.S1_FORM[TermNames.PropertyStreetAddress].indexOf(' ')+1) == tempAddress.PropertyStreetName &&
		formData.S1_FORM[TermNames.PropertyCity] == tempAddress.PropertyCity &&
		formData.S1_FORM[TermNames.PropertyState] == tempAddress.PropertyState &&
		formData.S1_FORM[TermNames.PropertyZipCode] == tempAddress.PropertyZipCode
		)
	{
		return true;
	}
	else
	{
		return false;
	}

}


$(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////SITEWIDE ==== START/////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).on("click", ".overlay-wrapper.save-quote .quit", function(){

	terminateIqsSession();

});

$(document).on("click", ".overlay-wrapper.save-quote .continue", function(){

});

//SITEWIDE - Hardcoded/Editable Boxes
// $(document).on("click", ".hardcoded-editable-wrapper .edit-icon", function(){
//     $(this).closest(".hardcoded-editable-wrapper").addClass("editing");
//     $(this).closest(".hardcoded-editable-wrapper").find(".editable").find(".col-75-percent").addClass("col-50-percent").removeClass("col-75-percent");
//     $(this).closest(".hardcoded-editable-wrapper").find(".editable").show();
//     $(this).closest(".hardcoded-editable-wrapper").find(".hardcoded").hide();
// });
//
// $(document).on("click", ".hardcoded-editable-wrapper.editing .editable .update", function(){
// 	var $value = $.trim($(this).closest(".editable").find("input").val());
//
// 	if($value) {
//         $(this).closest(".hardcoded-editable-wrapper").find(".hardcoded input").val($value).trigger("change");
//         $(this).closest(".hardcoded-editable-wrapper").find(".hardcoded .text").html($value);
//
//         $(this).closest(".hardcoded-editable-wrapper").find(".editable").hide();
//         $(this).closest(".hardcoded-editable-wrapper").find(".hardcoded").show();
//     }
// });
//
// $(document).on("click", ".hardcoded-editable-wrapper.editing .editable .update-select", function(){
// 	var $select = $(this).closest(".editable").find("select");
//
// 	$select.each(function(){
// 		var $value = $.trim($(this).val());
// 		var $label = $.trim($(this).find('option:selected').text());
// 		var $name = $.trim($(this).attr("name"));
//
// 		if($value) {
//             $(this).closest(".hardcoded-editable-wrapper").find(".hardcoded input[name='" + $name + "']").val($value).trigger("change");
// 			$(this).closest(".hardcoded-editable-wrapper").find(".hardcoded ." + $name).html($label);
//
// 			$(this).closest(".hardcoded-editable-wrapper").find(".editable").hide();
// 			$(this).closest(".hardcoded-editable-wrapper").find(".hardcoded").show();
// 		}
//
//     })
// });

//SITEWIDE - trigger events on keypress
// $(document).on("keydown keyup", ".hardcoded-editable-wrapper.editing .editable input", function(e){
//
// 	var key = e.keyCode || e.which;
//
// 	//On Escape
// 	if (key == 27 || key === "escape")
// 	{
//
// 	}
// 	//On Enter
// 	else if(key == 13 || key == "enter")
// 	{
// 		$(this).closest(".editable").find(".update").trigger("click");
// 	}
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////SITEWIDE ==== END///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////SECTION 1 ==== START////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////SECTION 1 STEP 1 FORM VERICICATION ==== START///////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	//Form verification
	//SITEWIDE - Verify forms
	// $(document).on("click", ".forward-arrow.disabled, .next-step.disabled", function(e){
	// 	e.preventDefault();
	// });
    //
	// $(document).on("blur change", ".error", function(e){
	// 	validateFormData(getFormData());
	// });
    //
    //
	// //, .update-quote:not(.disabled)
	// $(document).on("click", ".forward-arrow:not(.disabled), .next-step:not(.disabled)", function(e){
    //
	// 	e.preventDefault();
    //
	// 	if(!validateFormData(getFormData()))
	// 	{
	// 		var currentForm = $("form").attr("name");
    //
	// 		var newFormData = JSON.parse(getFormData());
	// 			formData[currentForm] = newFormData[currentForm];
    //
	// 		if(!nextStepActive)
	// 		{
	// 			nextStepActive = true;
    //
	// 			NextStep = e;
    //
	// 			if((currentForm == "S1_FORM" && $(".overlay-container.validate-address").length == 0 && Product_State == "NY" && JSON.stringify(onLoadFormData) != JSON.stringify(GetCurrentFormData())) || (currentForm == "S1_FORM" && $(".overlay-container.validate-address").length == 0 && (!checkAddress() || !getSessionCookie())))
	// 			{
	// 				//show loading popup
	// 				Loading("Please wait while <br />we validate your address.");
	// 				validateAddress();
	// 			}
	// 			else
	// 			{
     //               	$(".content > .left .forward-arrow-wrapper .loader").show();
	// 				$(".content > .left .forward-arrow-wrapper .forward-arrow").hide();
	// 				if(currentForm == "S3_4_FORM" && Product_State == "FL"){
	// 					getCoverageA(currentForm);
	// 				}else {
     //                    updateQuoteSession(currentForm);
     //                }
	// 			}
    //
	// 		}
    //
	// 	}
	// 	return;
	// });

});


function AutoFillQuoteFields(quoteFields, TheFormData)
{
	$.each(quoteFields, function(i, termName){

		var displayValue = TheFormData[termName];
		var value = "Option"+termName in TheFormData ? TheFormData["Option"+termName] : TheFormData[termName];

		if($(".quote-details [data-term-name='"+termName+"'] [name]").length > 0)
		{
			if($(".quote-details [data-term-name='"+termName+"'] [name]").is(':radio'))
			{
				$(".quote-details [data-term-name='"+termName+"'] [name][value='"+value+"']").prop("checked", true).trigger("change");
			}
			else
			{
				$(".quote-details [data-term-name='"+termName+"'] [name]").val(value);

				if($(".quote-details [data-term-name='"+termName+"'] [name]").is(':text'))
				{
					if($.inArray(termName, currencyTerms) >=0)
					{
						$(".quote-details [data-term-name='"+termName+"'] [name]").formatCurrency({negativeFormat: false, roundToDecimalPlace: 0});
					}
				}
			}
		}
		if($(".quote-details [data-term-name='"+termName+"'] [name]").length <= 0 || $(".quote-details [data-term-name='"+termName+"'] .fixed-value").length > 0)
		{
			if(termName in termNameDisplayValues)
			{
				var displayValue = termNameDisplayValues[termName][displayValue];
			}

			if($.inArray(termName, currencyTerms) >=0)
			{
				$(".quote-details [data-term-name='"+termName+"'] .value, .quote-details [data-term-name='"+termName+"'] .fixed-value").html(displayValue).formatCurrency({negativeFormat: false, roundToDecimalPlace: 0});
			}
			else if($.inArray(termName, YesNoTerms) >=0)
			{
				$(".quote-details [data-term-name='"+termName+"'] .value, .quote-details [data-term-name='"+termName+"'] .fixed-value").html(convertToYN(displayValue));
			}
			else
			{
				$(".quote-details [data-term-name='"+termName+"'] .value, .quote-details [data-term-name='"+termName+"'] .fixed-value").html(displayValue);
			}

		}

		$(".quote-details [data-term-name='"+termName+"'] [name]").trigger("change");

	});
}


$(document).ready(function(){

	var popped = ('state' in window.history), initialURL = location.href
	$(window).on('popstate', function(e){

		if($("form").length>0)
		{
			var TargetLocation = e.target;

			e.preventDefault();

			if(TargetLocation != window.location.href && e.originalEvent === undefined)
			{

				if(JSON.stringify(onLoadFormData) != JSON.stringify(GetCurrentFormData()))
				{

					$(".overlay-wrapper").hide().remove();

					$.ajax({
					type: "GET",
					url: "errors/navigation-warning.html",
					success: function(html){

						$(".content > .left .back-arrow-wrapper .back-arrow").show();
						$(".content > .left .back-arrow-wrapper .loader").hide();

						$(".overlay-wrapper").hide().remove();
						$("body").append(html);
						$(".overlay-wrapper").show();

						$(".overlay-wrapper .leave-page").attr("href", TargetLocation).removeAttr("onClick");

						UpdateOnLoad();

					}
					});

				}
				else
				{
					window.location = TargetLocation;
				}

			}

		}

    });


	$(document).on("click", ".navigation > a[href][class^='section-'], .quote-summary a.edit[href], .back-arrow[href]", function(e){

		if($("form").length>0)
		{
			e.preventDefault();
			$(this).trigger("popstate");

            $(".content > .left .back-arrow-wrapper .loader").show();
			$(".content > .left .back-arrow-wrapper .back-arrow").hide();
		}
	});



	var $lastLAValue = 0;
	$(document).on("keydown keyup", "[name='S3_LivingArea']:visible", function(e){


		var $val = $(this).val();

		if($val <= 25000) {
			$lastLAValue = $val;
			return true;
		}
		else
		{
			$(this).val($lastLAValue);
			e.preventDefault();
			return false;
		}
		// Allow: backspace, delete, tab, escape, enter and .
		if($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
				// Allow: Ctrl+A, Command+A
			(e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) ||
				// Allow: home, end, left, right, down, up
			(e.keyCode >= 35 && e.keyCode <= 40)) {
			// let it happen, don't do anything
			return;

		}
		// Ensure that it is a number and stop the keypress
		if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) || ($val >= 25000)) {
			e.preventDefault();
		}

	});


	$(document).on("keydown keyup", "[name='S4_AutoPolicyNumber']", function(e){

		// Allow: backspace, delete, tab, escape, enter and .
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
				// Allow: Ctrl+A, Command+A
			(e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) ||
				// Allow: home, end, left, right, down, up
			(e.keyCode >= 35 && e.keyCode <= 40)) {
			// let it happen, don't do anything
			return;

		}
		// Ensure that it is a number and stop the keypress
		if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
			e.preventDefault();
		}

	});

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////SECTION 1 STEP 1 FORM VERICICATION ==== END/////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////HANDLE Insurance_Product Changes ==== START/////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

   /*$(document).on("click change keyup", "[data-change-insurance-product]", function(){

        alert("A");
        var newVal = $(this).data("change-insurance-product");
        alert(newVal);
        Insurance_Product = newVal;
        alert(Insurance_Product);
    });
    */

    $(document).on("click", ".forward-arrow", function(){

        var newVal = $("[name='S1_PropertyUsage'] :selected[data-change-insurance-product]").data("change-insurance-product");
        if(newVal && newVal != "HO3")
        {
            Insurance_Product = newVal;
        }

    })

    $(document).on("click change keyup", "[data-change-insurance-product]", function(){

        var newVal = $(this).data("change-insurance-product");

        Insurance_Product = newVal;
    });

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////HANDLE Insurance_Product Changes ==== END///////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	//S1.1
	$(document).on("change blur", "[name='S1_PropertyUsage']", function(){

		$("select[name='S1_NumberOfMonthsUnoccupied'][data-dropdown-menus]").each(function(){
			var varName = $(this).data("dropdown-menus");
			new DropdownMenus().values(varName);
		});
	});


	$(document).on("change blur", "[name='S1_PropertyManagerState']", function(){

		var product_state = $("[name='S1_State']").val();
		var value = $(this).val();

        if(value && (product_state != value))
        {
			$(this).find("option").removeAttr("data-change-href").removeAttr("data-new-href").removeAttr("data-new-href-block").trigger("keyup");
            $(this).find("option[value='"+value+"']").attr("data-change-href", "true").attr("data-new-href", "#/section=1&step=1.1.1&error=122").attr("data-new-href-block", "true").trigger("keyup");
        }
        else
        {
            $(this).find("option").removeAttr("data-change-href").removeAttr("data-new-href").removeAttr("data-new-href-block").trigger("keyup");
        }
	});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////SECTION 1 ==== END//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////BLOCKS ==== START///////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	//S2.1
	$(document).on("change blur", "[name='S2_DwellingCoverage']", function(){

		var value = $(this).val().replace(/\D/g,'');
        var limit = 999999;

        if(Product_State == "NY")
        {
            limit = 1499999;
        }

        if(value >= limit)
        {
            $(this).attr("data-change-href", "true").attr("data-new-href", "#/section=2&step=2.1.1&error=210").attr("data-new-href-block", "true").trigger("keyup");
        }
        else
        {
            $(this).removeAttr("data-change-href").removeAttr("data-new-href").removeAttr("data-new-href-block").trigger("keyup");
        }
	});


	$(document).on("change blur", "[name='S1_StudentOccupancy']", function() {

		if (Product_State == "NY" && Insurance_Product == "DP3") {
			var value = $(this).val().replace(/\D/g, '');

			$("[name='S1_StudentOccupancy']").attr("data-change-href", "true").attr("data-new-href", "#/section=1&step=1.1.1&error=123").attr("data-new-href-block", "true").trigger("keyup");

			if (value == 200) {
				$("[name='S1_StudentOccupancy']").removeAttr("data-change-href").removeAttr("data-new-href").removeAttr("data-new-href-block").trigger("keyup");
			}
		}
	});

	//S2.2
	$(document).on("change", "[name^='S2_2_LossType']", function(){

		var allValues = Array();

		$("[name^='S2_2_LossType']").each(function(){


			var $this = $(this);
			var value = $this.val();

			if(value)
			{
				if($.inArray(value, allValues) == -1)
				{
					allValues.push(value);
					$("[name^='S2_2_LossType']").removeAttr("data-change-href").removeAttr("data-new-href").removeAttr("data-new-href-block").trigger("keyup");
				}
				else
				{
					$("[name^='S2_2_LossType']").attr("data-change-href", "true").attr("data-new-href", "#/section=2&step=2.1.1&error=211").attr("data-new-href-block", "true").trigger("keyup");
				}
			}

		});

	});

	//S2.2
	$(document).on("change", "[name^='S2_2_DateOfLoss']", function(){

		var allValues = Array();

		$("[name^='S2_2_DateOfLoss']").each(function(){


			var $this = $(this);
			var value = $this.val();

			if(value)
			{
				var formattedDate = new Date(value);
				var futureDate = formattedDate.setFullYear(formattedDate.getFullYear()+3);
				var todayDate = new Date();

				var recentDate = futureDate > todayDate;

				if(value && recentDate)
				{
					if(allValues.length < 2)
					{
						allValues.push(value);
						$("[name^='S2_2_DateOfLoss']").removeAttr("data-change-href").removeAttr("data-new-href").removeAttr("data-new-href-block").trigger("keyup");
					}
					else
					{
						$("[name^='S2_2_DateOfLoss']").attr("data-change-href", "true").attr("data-new-href", "#/section=2&step=2.1.1&error=211").attr("data-new-href-block", "true").trigger("keyup");
					}

				}

			}

		});

	});

	//S3.1
	$(document).on("change blur", "[name='S3_YearBuilt']", function(){

		var value = $(this).val().replace(/\D/g,'');
		if(value < 1900)
		{
			$(this).attr("data-change-href", "true").attr("data-new-href", "#/section=3&step=3.1.1&error=310").attr("data-new-href-block", "true").trigger("keyup");
		}
		else
		{
			$(this).removeAttr("data-change-href").removeAttr("data-new-href").removeAttr("data-new-href-block").trigger("keyup");
		}

	});

	$(document).on("change blur", "[name='S3_LivingArea']", function(){

		var value = $(this).val().replace(/\D/g,'');

		if(value > 6000)
		{
			$(this).attr("data-change-href", "true").attr("data-new-href", "#/section=3&step=3.1.1&error=318").attr("data-new-href-block", "true").trigger("keyup");
		}
		else
		{
			$(this).removeAttr("data-change-href").removeAttr("data-new-href").removeAttr("data-new-href-block").trigger("keyup");
		}

	});

	$(document).on("change blur", "[name='S3_RoofType']", function(){

		var value = $(this).val().replace(/\D/g, '');

		if(Product_State == "TX") {
			if (value == 700) {
				$(this).attr("data-change-href", "true").attr("data-new-href", "#/section=3&step=3.1.1&error=319").attr("data-new-href-block", "true").trigger("keyup");
			}
			else {
				$(this).removeAttr("data-change-href").removeAttr("data-new-href").removeAttr("data-new-href-block").trigger("keyup");
			}
		}

		if(Product_State == "NY" && Insurance_Product == "DP3") {
			if (value == 250) {
				$(this).attr("data-change-href", "true").attr("data-new-href", "#/section=3&step=3.1.1&error=320").attr("data-new-href-block", "true").trigger("keyup");
			}
			else {
				$(this).removeAttr("data-change-href").removeAttr("data-new-href").removeAttr("data-new-href-block").trigger("keyup");
			}
		}

		if(Product_State == "SC") {
			if (value == 250) {
				$(this).attr("data-change-href", "true").attr("data-new-href", "#/section=3&step=3.1.1&error=320").attr("data-new-href-block", "true").trigger("keyup");
			}
			else {
				$(this).removeAttr("data-change-href").removeAttr("data-new-href").removeAttr("data-new-href-block").trigger("keyup");
			}
		}

	});

		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//////HANDLE BLOCKS ==== START////////////////////////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

		//SITEWIDE - change href and block certain selections
		$(document).on("change keyup", "[data-change-href='true']", function(){

			var blockedHref = $("form").find("select[data-change-href='true'], [data-change-href='true'] option:selected[data-new-href-block='true'],[data-change-href='true']:checked[data-new-href-block='true'], [type='text'][data-change-href='true'][data-new-href-block='true'], [type='hidden'][data-change-href='true'][data-new-href-block='true']").data("new-href");
			var newHref = $("form").find("select[data-change-href='true'][date-new-href], [data-change-href='true'] option:selected[data-new-href], [data-change-href='true']:checked[data-new-href], [type='text'][data-change-href='true'][data-new-href], [type='hidden'][data-change-href='true'][data-new-href]").data("new-href");
			if(blockedHref)
			{
				$(".forward-arrow").attr("href", blockedHref);

				if(get("error", blockedHref))
				{
					BlockedURL = true;
				}
			}
			else if(newHref)
			{
				$(".forward-arrow").attr("href", newHref);

				if(get("error", newHref))
				{
					BlockedURL = true;
				}
			}
			else
			{
				var originalHref = $(".forward-arrow").data("original-href");
				$(".forward-arrow").attr("href", originalHref);

				BlockedURL = false;
			}



		});


		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//////HANDLE BLOCKS ==== END//////////////////////////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////BLOCKS ==== END/////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////SECTION 3 ==== START////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	//SITEWIDE
	$(document).on("change keyup", "[data-required-field]", function(){

		var toggleRequired = $(this).attr("data-required-field") ? $(this).attr("data-required-field") : false;
		var required = $("option:selected, [type='checkbox']:checked", this).data("change-required") == false ? false : true;
		var disableField = $(this).data("disable-required-field") == true && required == false ? true : false;

		required = !this.checked && $(this).attr("type") == "checkbox" ? false : required;

		$("[name='"+toggleRequired+"']").data("required", required).attr("disabled", disableField);

		if(disableField == true)
		{
			$("[name='"+toggleRequired+"']").prop('selectedIndex',0).trigger("change");
		}
	});

	var loadComplete = true;
	//SITEWIDE - Load selection popups
	$(document).on("click", ".load-selection-popup", function(){

		if(loadComplete)
		{
			loadComplete = false;

			var filename = $(this).data("filename");
			$(".overlay-wrapper").remove();

			$this = $(this);

			$.ajax({
			type: "GET",
			url: filename,
			success: function(html){

				$("body").after(html);

				UpdateOnLoad();

				$('img').load(function() {
					PositionOverlayBox();
				});

				loadComplete = true;

				$(".content-wrapper .overlay-wrapper").show();
				$(".accept-selection").addClass("disabled");

				if($(".content-wrapper .overlay-wrapper .selection-list"))
				{

					if($(".content-wrapper .overlay-wrapper .selection-list.home-style") && $("[name='S3_NumberOfStories']").val())
					{


						var valid = "";
						switch ($("[name='S3_NumberOfStories']").val()) {
							case "100":
								valid = "200,300,400,500,501,700,900,601,602,-601,-602";
								break;

							case "150":
								valid = "100,101,300,400,700,900,601,602,-601,-602";
								break;

							case "200":
								valid = "100,300,400,501,700,900,601,602,-601,-602";
								break;

							case "250":
								valid = "300,400,700,900,601,602,-601,-602";
								break;

							case "300":
								valid = "300,400,700,900,601,602,-601,-602";
								break;

							case "350":
								valid = "300,400,700,900,601,602,-601,-602";
								break;

							case "400":
								valid = "300,400,700,900,601,602,-601,-602";
								break;
						}

						filterDataValues(".selection-list.home-style li", valid);

					}

					selectedValue = $this.closest("li.selected").find("input[type='hidden']").val();

					if(selectedValue)
					{
						$(".selection-list li[data-value='"+selectedValue+"']").trigger("click");
					}
				}

			}
			});

		}

	});

	$("body").on('mouseover', ".selection-list li.disabled", function() { return false; });

	function filterDataValues(sel, choice)
	{
		var valid = choice.split(',');
		$(sel).addClass("disabled");
		$.each(valid, function(index, value)
		{
			e = $(sel + "[data-value='" + value + "']");
			e.removeClass("disabled");
		});
	}



	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////SECTION 3 STEP 3-1.1 SELECT FROM LIST ==== START////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	//SITEWIDE - highlight selected selection
	// $(document).on("click", ".selection-list > li:not(.disabled)", function(){
    //
	// 	$(".selection-list > li").removeClass("selected");
	// 	$(this).addClass("selected");
    //
	// 	$(".accept-selection").removeClass("disabled");
    //
	// });


	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////SECTION 3 STEP 3-1.1 SELECT FROM LIST ==== END//////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////SECTION 3 STEP 3-1.1 CLOSE SELECTION POPUP ==== START///////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	//SITEWIDE - close overlay
	$(document).on("click", ".close-overlay-wrapper, .close-address-verification", function(){

		$(".overlay-wrapper").hide().remove();

	});

	//SITEWIDE - trigger events on keypress
	$(document).on("keydown", function(e){

		  var key = e.keyCode || e.which;

		 //On Escape
		 if (key == 27 || key === "escape")
		 {
			 $(".close-overlay-wrapper").trigger("click");
		 }
		 //On Enter
		 else if(key == 13 || key == "enter")
		 {
			$(".accept-selection").trigger("click");
		 }
	});

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////SECTION 3 STEP 3-1.1 CLOSE SELECTION POPUP ==== END/////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	//S3 S3.1 & S3 S3.2
	$(document).on("click", ".accept-selection[class!='disabled']", function(){

		var selectedName = $(".selection-list > li.selected").data("name");
		var valueFor 	 = $(this).data("for");
		var value 		 = $(".selection-list > li.selected").data("value");

		if(selectedName)
		{

			$(".selection-wrapper li."+valueFor+" .selection-value").html(selectedName).css('textTransform', 'capitalize');
			$(".selection-wrapper li."+valueFor+" input[name='"+valueFor+"']").val(value).trigger("change");
			$(".selection-wrapper li."+valueFor).removeClass("select").addClass("selected");

			$(".overlay-wrapper").hide().remove();

			//Specific actions
			//Force Single-Family home selection menu

			if(valueFor == "S3_StructureType")
			{
				if(Math.abs(value) == 601 || Math.abs(value) == 602)
				{
					$("[name='S3_HomeType'] option[value='100']").prop('selected', true);
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

		}

	});



	//S3 S3.1
	$(document).on("change blur", "[name='S3_YearBuilt']", function(){

		var thisValue = $(this).val();
		var currentYear = new Date().getFullYear();

		if(!$("[name='S3_RoofInstalled']").val() && thisValue > currentYear - 8)
		{
			$("[name='S3_RoofInstalled']").val(thisValue).trigger("change");
		}
	});

	//S3 S3.1
	$(document).on("change", "[name='S3_NumberOfStories']", function(){

		if(!autoFill)
		{
			$(".selection-wrapper li.S3_StructureType .selection-value").html("").css('textTransform', 'capitalize');
			$(".selection-wrapper li.S3_StructureType input[name='S3_StructureType']").val("").trigger("change");
			$(".selection-wrapper li.S3_StructureType").removeClass("selected").addClass("select");
		}
	});

	//S3 S3.1 & S3 S3.2
	$(document).on("click", ".accept-selection.disabled", function(){

		var selectionType = $(this).data("selection-type").toUpperCase();
		var errorMessage = errors["VAL_"+selectionType+"_ERROR"].errorMessageEmpty;

		$(".overlay-container .errors").remove();
		$(".overlay-container .selection-list").before("<div class='errors'><ul class='error-list'></ul></div>");
		$(".overlay-container .errors").show();
		$(".overlay-container .errors .error-list li").remove();
		$(".overlay-container .errors .error-list").append("<li class='0'>"+errorMessage+"</li>");

		UpdateOnLoad();

	});

	//S3 S3.3
	$(document).on("change", "[name='S3_3_NumberOfKitchens']", function(){

		if($(this).val() >= 0 && !$("[name='S3_3_KitchenGrade']").val())
		{
			$("[name='S3_3_KitchenGrade']").val(100).trigger("change");
		}

	});

	//S3 S3.3
	$(document).on("change", "[name='S3_3_NumberOfFullBathrooms']", function(){

		if($(this).val() >= 0 && !$("[name='S3_3_FullBathroomGrade']").val())
		{
			$("[name='S3_3_FullBathroomGrade']").val(100).trigger("change");
		}

	});

	//S3 S3.3
	$(document).on("change", "[name='S3_3_NumberOfHalfBathrooms']", function(){

		if($(this).val() > 0 && !$("[name='S3_3_HalfBathroomGrade']").val())
		{
			$("[name='S3_3_HalfBathroomGrade']").val(100).trigger("change");
		}

	});


	//SITEWIDE
	///SELECT MENU
	$(document).on("change keyup", "select", function(){

		var currentSelect = $(this).data("for");
		var selected = $(this).find('option:selected');
		var show = selected.data("show");

		if(show)
		{
			$(".toggle-box"+"."+currentSelect).hide();

			var show = show.split(/ +/);

			$.each(show, function(i, showTerm){

				if(showTerm)
				{

					$(".toggle-box."+showTerm+"."+currentSelect).show();
					$(".toggle-box."+showTerm+"."+currentSelect+" .toggle-box").hide();

					if(!autoFill)
					{
						$(".toggle-box"+"."+currentSelect).find("select").prop('selectedIndex',0).trigger("change");
						$("select[name='"+showTerm+"']").prop('selectedIndex',0).trigger("change");
						$("."+currentSelect+" input[type='radio']").prop('checked', false).trigger("change");
						$(".toggle-box."+showTerm+"."+currentSelect+" input[type='text']").val("").trigger("change");
					}
				}
			});
		}
		else
		{
			$(".toggle-box"+"."+currentSelect).hide();
			$(".toggle-box"+"."+currentSelect).find("select").prop('selectedIndex',0).trigger("change");
			$(".toggle-box."+currentSelect+" input[type='text'], .toggle-box."+show+"."+currentSelect+" input[type='hidden']").val("").trigger("change");
			$("."+currentSelect+" input[type='radio']").prop('checked', false).trigger("change");
		}

	});

	//SITEWIDE
	//RADIO BUTTONS
	$(document).on("change keyup", "input[type='radio']:checked, input[type='checkbox']", function(){

		var currentSelect = $(this).data("for");
		var current = $(this).attr("name");
		var type = $(this).attr("type");
		var show = $(this).data("show");
		var val = $(this).val();

		if(show && $(this).is(":checked") && ((type == "radio" && val == 100) || true))
		{
			$(".toggle-box"+"."+currentSelect).hide();
			$(".toggle-box."+show+"."+currentSelect).show();
			$(".toggle-box"+"."+currentSelect).find("select").prop('selectedIndex',0).trigger("change");
		}
		else
		{
			$(".toggle-box"+"."+currentSelect).hide();
			$(".toggle-box"+"."+currentSelect).find("select").prop('selectedIndex',0).trigger("change");
			$("."+currentSelect+" input[type='radio']").prop('checked', false).trigger("change");
			$(".toggle-box."+show+"."+currentSelect+" input[type='text']").val("").trigger("change");
		}


	});


	//3.3
	$(document).on("click change", "[name='S3_3_HeatPump']", function(){

		if($(this).val()==100)
		{
			$("[name='S3_3_CentralAir'][value='200']").prop('checked', true);
			$("[name='S3_3_CentralAir']").attr("disabled", "disabled");
		}
		else
		{
			$("[name='S3_3_CentralAir']").removeAttr("disabled");
		}
	});

	//3.4
	$(document).on("click change", ".home-features input:checkbox", function(e){

		if ($(".home-features input:checkbox:checked").length > 3)
		{
			$(".forward-arrow").addClass("disabled").addClass("step3-4");
			$(".underwriting-block").addClass("error");

			var errorCode = 3200;
			var errorMessage = errors["VAL_" + errorCode + "_ERROR"].errorMessageEmpty;
			var errorFormSelector = errors["VAL_" + errorCode + "_ERROR"].errorFormName;

			$(".errors").remove();
			$(".content-wrapper").prepend("<div class='errors'><ul class='error-list'></ul></div>");
			$(".errors").show();
			$(".errors .error-list li").remove();
			$(".errors .error-list").append("<li class='"+errorCode+"'>"+errorMessage+"</li>");
			$("[name='"+errorFormSelector+"']").addClass("error");
			$("[name='"+errorFormSelector+"']").closest(".radio-error").addClass("error");

		}
		else
		{
			$(".forward-arrow").removeClass("disabled").removeClass("step3-4");
			$(".underwriting-block").removeClass("error");

			$(".errors").remove();
		}

	});



	$(document).on("click", ".forward-arrow.disabled.step3-4", function(){

		SendErrorReport(312, false);

	});




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////SECTION 3 ==== END//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




	$(document).on("change blur", "[name='S4_Insured1BirthDate']", function(){

		var date = $(this).val();

		var date = date.split("/");
		var m = parseInt(date[0], 10);
			m = m < 10 ? 0+''+m : m;

		var d = parseInt(date[1], 10);
			d = d < 10 ? 0+''+d : d;

		if(m && d && date[2])
		{
			$(this).val(m+"/"+d+"/"+date[2]);
		}

	});

	function parseDate(input) {

		if(input)
		{
			var parts = input.match(/(\d+)/g);

		 	return new Date(parts[0], parts[1], parts[2]); // months are 0-based
		}
	}


	$(document).on("change blur", ".datepicker", function(){

		var date = $(this).val();

			date = date ? date : date;

		if(date)
		{
				date = new Date(date);

			var newDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();


			var date = newDate.split("/");
			var m = parseInt(date[0], 10);
				m = m < 10 ? 0+''+m : m;

			var d = parseInt(date[1], 10);
				d = d < 10 ? 0+''+d : d;

			if(m && d && date[2])
			{
				$(this).val(m+"/"+d+"/"+date[2]);
			}

		}

	});



	//SITEWIDE  - Used in Section 4.1
	$(document).on("change keyup", "select.select-check-parent", function(){

		var check = $(this).find('option:selected');
		var checkbox = check.data("check")
		var uncheck = check.data("uncheck")

		if(checkbox&&checkbox!="undefined")
		{
			$("#"+checkbox+"").prop('checked', true);
		}
		else
		{
			$("#"+uncheck+"").prop('checked', false);
		}


	});

	//SITEWIDE - Used in Section 4.1
	$(document).on("change", "input.modify-dropdown", function(){

		var _select = $(this).data("select");
		var name = $(this).attr("name");

		if(_select&&_select!="undefined")
		{
			$("select[name='"+name+"Location']").prop('selectedIndex', 0);
		}
	});

	//4.1
	$(document).on("change keyup", "[name='S4_PrimeTimeDiscount']", function(){

		if($(this).val() == 100)
		{
			if(Product_State == "FL") {
                $("[name='S4_Insured1BirthDate']").attr("data-length", 55);
			}
			else
			{
                $("[name='S4_Insured1BirthDate']").attr("data-length", 50);
			}

		}
		else
		{
			$("[name='S4_Insured1BirthDate']").attr("data-length", 0);
		}

	});


	$(document).on("change keyup", "[name='S4_Insured1BirthDate']", function(){

		var numericVal = $(this).val().replace(/\D/g,'');

		if(numericVal.length==8)
	   {
		   var newDate = numericVal.substring(0,2) + "/" + numericVal.substring(2,4) + "/" + numericVal.substring(4,8);

		   $(this).val(newDate);
		}

	});

    $(document).on("change keyup", "[name='S4_Insured1SSN']", function(){

		var val = this.value.replace(/\D/g, '');
		var newVal = '';
		if(val.length > 4) {
			this.value = val;
		}
		if((val.length > 3) && (val.length < 6)) {
			newVal += val.substr(0, 3) + '-';
			val = val.substr(3);
		}
		if (val.length > 5) {
			newVal += val.substr(0, 3) + '-';
			newVal += val.substr(3, 2) + '-';
			val = val.substr(5);
		}
		newVal += val;
		this.value = newVal;

    });


	$(document).on("blur change click", "[name='S5_PersonalLiability']", function(){

		if($(this).val() == 0)
		{
			$("[name='S5_MedicalPayments']").val(0).change().attr("disabled", "disabled");
		}
		else
		{
			$("[name='S5_MedicalPayments']").removeAttr("disabled");
		}

	});


	$(document).on("blur", "[name='S5_Dwelling']", function(){

		var value = cleanVar(cleanCurrency($(this).val()));
		var newValue = cleanVar(cleanCurrency($(".quote-details .ReplacementCostBuilding .value").text()));

		if(value < newValue)
		{
			replacementCostOK = false;

			UpdateBeforeLoad();

			$.ajax({
			type: "GET",
			url: "popups/replacement-cost.html",
			success: function(html){

				$(".overlay-wrapper").hide().remove();

				$("body").append(html);
				$(".overlay-wrapper").show();

				replacementCostOK = true;

				UpdateOnLoad();

			}
			});
		}
	});



    var oldCoverageBValue;
    $(document).on("change", "[name='S5_Dwelling']", function(){

        var value = cleanVar(cleanCurrency($(this).val()));

        if(value != oldCoverageBValue)
        {

            $("[name='"+TermNames.OptionCoverageB+"'] > option").each(function(){

                var optionValue = $(this).val();

                var percentage = optionValue/100;

                var newValue = (value * optionValue) / 10000;
                newValue = Math.round(newValue / 10) * 10;
                newValue = newValue.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

                $(this).text(percentage + "% - $" + newValue);

            });

            oldCoverageBValue = value;
        }


    });

	var oldCoverageCValue;
	$(document).on("change", "[name='S5_Dwelling']", function(){

		var value = cleanVar(cleanCurrency($(this).val()));

		if(value != oldCoverageCValue)
		{

			$("[name='"+TermNames.OptionCoverageC+"'] > option").each(function(){

				var optionValue = $(this).val();

				var percentage = optionValue/100;

				var newValue = (value * optionValue) / 10000;
					newValue = Math.round(newValue / 10) * 10;
					newValue = newValue.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

				$(this).text(percentage + "% - $" + newValue);

			});

            oldCoverageCValue = value;
		}


	});


	var QuoteFormChanged = false;
	$("body").on("click", "form[name='S5_FORM'] [name]", function(){

		QuoteFormChanged = true;

	});

	var TargetElement;
	$("body").on("click", ".coverage-options-wrapper li:not(.selected) :radio", function(e){

		var $this = $(this);

		$this.find(":radio").prop("checked", false);

		var confirmation = $(".coverage-options-wrapper li.selected").data("confirmation") == true ? true : false;

		if(confirmation && QuoteFormChanged)
		{
			TargetElement = $this;

			$(".coverage-options-wrapper li.selected").find(":radio").prop("checked", true);

			$.ajax({
			type: "GET",
			url: "errors/navigation-warning.html",
			success: function(html){

				$(".overlay-wrapper").hide().remove();

				$("body").append(html);
				$(".overlay-wrapper").show().addClass("quote-warning");

				UpdateOnLoad();

			}
			});

		}
		else
		{
			LoadQuote($this);
		}


	});


	$("body").on("click", ".quote-warning .leave-page", function(){

		LoadQuote(TargetElement);

	});

	function LoadQuote($this)
	{
		oldValue = "";

		$(".coverage-options-wrapper > li").removeClass("selected");

		$(".payment-plans").hide();

		$this.closest("li").addClass("selected");
		$this.closest("li").find(":radio").prop("checked", true);
		var loadQuote = $this.closest("li").data("load");

		$(".coverage-options-wrapper > li.custom .amount").html('<a href="#" onClick="return false;" class="blue-17 choose-options">Choose options</a>');

		$.ajax({
		type: "GET",
		url: loadQuote,
		cache: false,
		success: function(html){

			$(".quote-details-wrapper").html(html);

			UpdateOnLoad();

			var QuoteType = $this.closest("li").data("quote-type");

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


			if(LastQuoteLoadedOBJ)
			{
				TheFormData = LastQuoteLoadedOBJ;
			}
			else
			{
				var TermNameKeys = {};
				$.each(TermNames, function(key, name){ TermNameKeys[name] = key; });

				var TheFormData = {};

				$.each(formData["S5_FORM"], function(i, v){

					var getTermName = $("[name='"+TermNames[TermNameKeys[i]]+"']").data("ezquote-term-name");
					TheFormData[getTermName] = formData["S5_FORM"][TermNames[TermNameKeys[i]]];

				});

			}

			AutoFillQuoteFields(quoteFields, TheFormData);

			if($(".coverage-options-wrapper > li.selected .choose-options").length<=0)
			{
				$this.closest("li").find(".payment-plans").show();
			}

			if(QuoteType != "custom" || (QuoteType == "custom" && !LastQuoteLoadedOBJ))
			{
				updateSavedQuote(QuoteType, true);
			}

			if(QuoteType == "custom")
			{

				if(formData["S1_FORM"])
				{

                    (formData["S1_FORM"]["S1_PropertyUsage"] != "100" && formData["S1_FORM"]["S1_PropertyOccupancy"] != "200")

                    if(formData["S1_FORM"]["S1_PropertyOccupancy"])
                    {
                        var PropertyUsage = formData["S1_FORM"]["S1_PropertyUsage"]+"-"+formData["S1_FORM"]["S1_PropertyOccupancy"];
                    }
                    else
                    {
                        var PropertyUsage = formData["S1_FORM"]["S1_PropertyUsage"];
                    }


					if(PropertyUsage != "100-200" || (PropertyUsage == "100-200" && formData["S1_FORM"]["S1_OwnedBy"] != 200))
					{
						$("select[name='S5_TheftCoverage']").remove();
					}
					else
					{
						$(".TheftCoverage .fixed-value").remove();
						$("input[name='S5_TheftCoverage']").remove();
					}
				}
			}

		}
		});


	}

	//Selection lists - move tooltip from overflowing off edge
	$(document).on("mouseover", ".overlay-container.wide .selection-list > li:nth-child(4n)", function(){

		var Width = $(this).outerWidth(true);
		$(this).children(".tooltip").addClass("float-left").css({"left": -Width});

	});

	//Selection lists - move tooltip from overflowing off edge
	$(document).on("mouseover", ".overlay-container.wide .selection-list.roof-type > li:nth-child(5n)", function(){

		var Width = $(this).outerWidth(true);
		$(this).children(".tooltip").addClass("float-left").css({"left": -Width});

	});

	//Selection lists - move tooltip from overflowing off edge
	$(document).on("mouseover", ".overlay-container.wide-med .selection-list > li:nth-child(3n)", function(){

		var Width = $(this).outerWidth(true);
		$(this).children(".tooltip").addClass("float-left").css({"left": -Width});

	});

	//SITEWIDE
	$(document).on("blur", ".formatNumber",function() {
		$(this).formatCurrency({ symbol: "", negativeFormat: false, roundToDecimalPlace: 0 }).trigger("change");
	});

	//SITEWIDE
	$(document).on("focus", ".formatNumber",function() {
		$(this).formatCurrency({ symbol: "", digitGroupSymbol: "", negativeFormat: false, roundToDecimalPlace: 0 });
	});

	//SITEWIDE
	$(document).on("blur", ".formatCurrency",function() {
		$(this).formatCurrency({ negativeFormat: false, roundToDecimalPlace: 0 }).trigger("change");
	});

	//SITEWIDE
	$(document).on("focus", ".formatCurrency",function() {
		$(this).formatCurrency({ digitGroupSymbol: "", negativeFormat: false, roundToDecimalPlace: 0 });
	});


	//SITEWIDE
	$(document).on("keyup", ".numbersOnly", function (e) {

		var key = e.keyCode || e.which;
		if(key != 8)
		{
			$(this).val($(this).val().replace(/[^0-9]/g, ''));

		}

	});


});


//default callbacks
function onPageError(err, serviceProxy, xmlHttpRequest) {

	UpdateBeforeLoad();
	serverError();
}
