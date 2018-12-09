$(function(){

	///SECTION 1 STEP 1//
	$(document).on("focus", "[name='S1_FirstName']", function(){
		ga('send', 'event', 'Quote', 'Your Info', 'Applicant first name');
	});

	$(document).on("focus", "[name='S1_LastName']", function(){
		ga('send', 'event', 'Quote', 'Your Info', 'Applicant last name');
	});

	$(document).on("focus", "[name='S1_StreetNumber']", function(){
		ga('send', 'event', 'Quote', 'Your Info', 'Street number');
	});

	$(document).on("focus", "[name='S1_StreetName']", function(){
		ga('send', 'event', 'Quote', 'Your Info', 'Street name');
	});

	$(document).on("focus", "[name='S1_ApartmentNumber']", function(){
		ga('send', 'event', 'Quote', 'Your Info', 'Street name 2');
	});

	$(document).on("focus", "[name='S1_City']", function(){
		ga('send', 'event', 'Quote', 'Your Info', 'City');
	});

	$(document).on("click", "[name='S1_State']", function(){
		ga('send', 'event', 'Quote', 'Your Info', 'State');
	});

	$(document).on("click", "[name='S1_Zipcode']", function(){
		ga('send', 'event', 'Quote', 'Your Info', 'Zip');
	});

	$(document).on("change", "[name='S1_PropertyUsage'] option:not(:disabled)", function(){
		var text = $(this).text();
		ga('send', 'event', 'Quote', 'Your Info', "Describe home - "+text);
	});

	$(document).on("change", "[name='S1_TimeUnoccupied']", function(){
		ga('send', 'event', 'Quote', 'Your Info', 'Describe home - Seasonal - Number of months continuously unoccupied');
	});

	$(document).on("click", "[name='S1_OwnedBy'][value='100']", function(){
		ga('send', 'event', 'Quote', 'Your Info', 'Property owned by corporation - Name of entity');
	});

	$(document).on("click", "[name='S1_OwnedBy'][value='200']", function(){
		ga('send', 'event', 'Quote', 'Your Info', 'Property owned by corporation - No');
	});


	//SECTION 2 STEP 1//
	$(document).on("change", "[name='S2_CurrentInsurance'] option:not(:disabled)", function(){
		var text = $(this).text();
		ga('send', 'event', 'Quote', 'Current Insurance', "Have property insurance - "+text);
	});

	$(document).on("change", "[name='S2_InsuranceAgencies'] option:not(:disabled)", function(){
		ga('send', 'event', 'Quote', 'Current Insurance', "Have property insurance - Yes, another company - Current company");
	});

	$(document).on("click", "[name='S2_PolicyExpiration']", function(){
		ga('send', 'event', 'Quote', 'Current Insurance', "Have property insurance - Yes, another company - Current policy expire");
	});

	$(document).on("click", "[name='S2_DwellingCoverage']", function(){
		ga('send', 'event', 'Quote', 'Current Insurance', "Have property insurance - Yes, another company - Current Coverage A amount?");
	});


	//SECTION 2 STEP 2//
	$(document).on("focus", "[name^='S2_2_DateOfLoss']", function(){
		ga('send', 'event', 'Quote', 'Current Insurance', "Have claim or loss - Date of loss");
	});

	$(document).on("focus", "[name^='S2_2_LossAmountPaid']", function(){
		ga('send', 'event', 'Quote', 'Current Insurance', "Have claim or loss - Total amount paid");
	});

	$(document).on("click", "[name^='S2_2_LossCatastrophe']", function(){
		ga('send', 'event', 'Quote', 'Current Insurance', "Have claim or loss - Type of loss");
	});

	$(document).on("focus", "[name^='S2_2_LossDescription']", function(){
		ga('send', 'event', 'Quote', 'Current Insurance', "Was Loss result of a Catastrophe - Description");
	});


	//SECTION 3 STEP 1//
	$(document).on("change", "[name='S3_HomeType'] option:not(:disabled)", function(){
		var text = $(this).text();
		ga('send', 'event', 'Quote', 'Property Info', "Home Type - "+text);
	});

	$(document).on("change", "[name='S3_StructureType']", function(){

		var value = ucwords($("[name='S3_StructureType']").closest("li").find(".selection-value").text());
		ga('send', 'event', 'Quote', 'Property Info', "Home Stlye - "+value);

	});

	$(document).on("click", "[name='S3_YearBuilt']", function(){
		ga('send', 'event', 'Quote', 'Property Info', 'Year Built');
	});

	$(document).on("click", "[name='S3_RoofInstalled']", function(){
		ga('send', 'event', 'Quote', 'Property Info', 'Roof installed year');
	});

	$(document).on("click", "[name='S3_LivingArea']", function(){
		ga('send', 'event', 'Quote', 'Property Info', 'Living area (sq ft.)');
	});

	$(document).on("change", "[name='S3_RoofType']", function(){

		var value = ucwords($("[name='S3_RoofType']").closest("li").find(".selection-value").text());
		ga('send', 'event', 'Quote', 'Property Info', "Roof type - "+value);

	});

	$(document).on("change", "[name='S3_RoofShape']", function(){

		var value = ucwords($("[name='S3_RoofShape']").closest("li").find(".selection-value").text());
		ga('send', 'event', 'Quote', 'Property Info', "Roof shape - "+value);

	});

	//SECTION 3 STEP 2//
	$(document).on("change", "[name='S3_2_FoundationType'] option:not(:disabled)", function(){
		var text = $(this).text();
		ga('send', 'event', 'Quote', 'Property Info', "Foundation type - "+text);
	});

	$(document).on("change", "[name='S3_2_ConstructionType'] option:not(:disabled)", function(){
		var text = $(this).text();
		ga('send', 'event', 'Quote', 'Property Info', "Construction type - "+text);
	});

	$(document).on("change", "[name='S3_2_CladdingType'] option:not(:disabled)", function(){
		var text = $(this).text();
		ga('send', 'event', 'Quote', 'Property Info', "Construction type - Frame - Cladding - "+text);
	});

	$(document).on("change", "[name='S3_2_MasonryVeenerType'] option:not(:disabled)", function(){
		var text = $(this).text();
		ga('send', 'event', 'Quote', 'Property Info', "Construction type - Masonry Veneer - "+text);
	});

	//SECTION 3 STEP 3//
	$(document).on("change", "[name='S3_3_NumberOfKitchens'] option:not(:disabled)", function(){
		var text = $(this).text();
		ga('send', 'event', 'Quote', 'Property Info', "Kitchens - "+text);
	});

	$(document).on("change", "[name='S3_3_KitchenGrade'] option:not(:disabled)", function(){
		var text = $(this).text();
		ga('send', 'event', 'Quote', 'Property Info', "Kitchen Grade - "+text);
	});

	$(document).on("change", "[name='S3_3_NumberOfFullBathrooms'] option:not(:disabled)", function(){
		var text = $(this).text();
		ga('send', 'event', 'Quote', 'Property Info', "Full Bathrooms - "+text);
	});

	$(document).on("change", "[name='S3_3_FullBathroomGrade'] option:not(:disabled)", function(){
		var text = $(this).text();
		ga('send', 'event', 'Quote', 'Property Info', "Full Bathroom Grade - "+text);
	});

	$(document).on("change", "[name='S3_3_NumberOfHalfBathrooms'] option:not(:disabled)", function(){
		var text = $(this).text();
		ga('send', 'event', 'Quote', 'Property Info', "Half Bathrooms - "+text);
	});

	$(document).on("change", "[name='S3_3_HalfBathroomGrade'] option:not(:disabled)", function(){
		var text = $(this).text();
		ga('send', 'event', 'Quote', 'Property Info', "Half Bathroom Grade - "+text);
	});

	$(document).on("change", "[name='S3_3_NumberOfFireplaces'] option:not(:disabled)", function(){
		var text = $(this).text();
		ga('send', 'event', 'Quote', 'Property Info', "Fireplaces - "+text);
	});

	$(document).on("click", "[name='S3_3_HeatPump'][value='100']", function(){
		ga('send', 'event', 'Quote', 'Property Info', 'Heat Pump - Yes');
	});

	$(document).on("click", "[name='S3_3_HeatPump'][value='200']", function(){
		ga('send', 'event', 'Quote', 'Property Info', 'Heat Pump - No');
	});

	$(document).on("click", "[name='S3_3_CentralAir'][value='100']", function(){
		ga('send', 'event', 'Quote', 'Property Info', 'Central Air - Yes');
	});

	$(document).on("click", "[name='S3_3_CentralAir'][value='200']", function(){
		ga('send', 'event', 'Quote', 'Property Info', 'Central Air - No');
	});

	//SECTION 3 STEP 4//
	$(document).on("click", ".forward-arrow", function(){
		if($("S3_4_FORM input:checkbox:checked").length == 0)
		{
			ga('send', 'event', 'Quote', 'Property Info', 'Additional Features - None');
		}
	});

	$(document).on("click", "[name='S3_4_WoodDeck']:checked", function(){
		ga('send', 'event', 'Quote', 'Property Info', 'Additional Features - Wood deck');
	});

	$(document).on("click", "[name='S3_4_CompositeDeck']:checked", function(){
		ga('send', 'event', 'Quote', 'Property Info', 'Additional Features - Composite Deck');
	});

	$(document).on("click", "[name='S3_4_OpenPorch']:checked", function(){
		ga('send', 'event', 'Quote', 'Property Info', 'Additional Features - Open porch');
	});

	$(document).on("click", "[name='S3_4_Greenhouse']:checked", function(){
		ga('send', 'event', 'Quote', 'Property Info', 'Additional Features - Greenhouse');
	});

	$(document).on("click", "[name='S3_4_ScreenedPorch']:checked", function(){
		ga('send', 'event', 'Quote', 'Property Info', 'Additional Features - Screened porch');
	});

	$(document).on("click", "[name='S3_4_OpenBreezeway']:checked", function(){
		ga('send', 'event', 'Quote', 'Property Info', 'Additional Features - Open breezeway');
	});

	$(document).on("click", "[name='S3_4_ScreenedBreezeway']:checked", function(){
		ga('send', 'event', 'Quote', 'Property Info', 'Additional Features - Screened breezeway');
	});


	//SECTION 3 STEP 5//
	$(document).on("click", "[name='S3_5_DogOwner'][value='100']", function(){
		ga('send', 'event', 'Quote', 'Property Info', 'Own a dog - Yes');
	});

	$(document).on("click", "[name='S3_5_DogOwner'][value='200']", function(){
		ga('send', 'event', 'Quote', 'Property Info', 'Own a dog - No');
	});

	$(document).on("change", "[name='S3_5_DistanceToFireHydrant'] option:not(:disabled)", function(){
		var text = $(this).text();
		ga('send', 'event', 'Quote', 'Property Info', "Nearest Hydrant - "+text);
	});

	$(document).on("change", "[name='S3_5_SwimmingPool'] option:not(:disabled)", function(){
		var text = $(this).text();
		ga('send', 'event', 'Quote', 'Property Info', "Swimming Pool - "+text);
	});

	$(document).on("click", "[name='S3_5_PropertyFenced'][value='100']", function(){
		ga('send', 'event', 'Quote', 'Property Info', 'Swimming Pool - In Ground - Pool Fenced');
	});

	$(document).on("click", "[name='S3_5_PropertyFenced'][value='200']", function(){
		ga('send', 'event', 'Quote', 'Property Info', 'Swimming Pool - In Ground - Pool Not Fenced');
	});

	$(document).on("click", "[name='S3_5_BoardOrSlide'][value='100']", function(){
		ga('send', 'event', 'Quote', 'Property Info', 'Swimming Pool - In Ground - Diving Board - Yes');
	});

	$(document).on("click", "[name='S3_5_BoardOrSlide'][value='200']", function(){
		ga('send', 'event', 'Quote', 'Property Info', 'Swimming Pool - In Ground - Diving Board - No');
	});

	$(document).on("click", "[name='S3_5_BoardOrSlide:2'][value='100']", function(){
		ga('send', 'event', 'Quote', 'Property Info', 'Swimming Pool - Above Ground - Diving Board - Yes');
	});

	$(document).on("click", "[name='S3_5_BoardOrSlide:2'][value='200']", function(){
		ga('send', 'event', 'Quote', 'Property Info', 'Swimming Pool - Above Ground - Diving Board - No');
	});

	$(document).on("click", "[name='S3_5_ImmovableLadder'][value='100']", function(){
		ga('send', 'event', 'Quote', 'Property Info', 'Swimming Pool - Above Ground - Immovable Ladder - Yes');
	});

	$(document).on("click", "[name='S3_5_ImmovableLadder'][value='200']", function(){
		ga('send', 'event', 'Quote', 'Property Info', 'Swimming Pool - Above Ground - Immovable Ladder - No');
	});


	//SECTION 4 STEP 1//
	$(document).on("click", "[name='S4_MultiPolicy'][value='100']", function(){
		ga('send', 'event', 'Quote', 'Discounts and More', "Have an auto policy - Yes");
	});

	$(document).on("click", "[name='S4_MultiPolicy'][value='200']", function(){
		ga('send', 'event', 'Quote', 'Discounts and More', "Have an auto policy - No");
	});

	$(document).on("focus", "[name='S4_AutoPolicyNumber']", function(){
		ga('send', 'event', 'Quote', 'Discounts and More', "Have an auto policy - Yes - Policy number");
	});

	$(document).on("click", "[name='S4_PrimeTimeDiscount'][value='100']", function(){
		ga('send', 'event', 'Quote', 'Discounts and More', "Primetime Discount - Yes");
	});

	$(document).on("click", "[name='S4_PrimeTimeDiscount'][value='200']", function(){
		ga('send', 'event', 'Quote', 'Discounts and More', "Primetime Discount - No");
	});

	$(document).on("focus", "[name='S4_AutoPolicyNumber']", function(){
		ga('send', 'event', 'Quote', 'Discounts and More', "Have an auto policy - Yes - Policy number");
	});

	$(document).on("focus", "[name='S4_Insured1BirthDate']", function(){
		ga('send', 'event', 'Quote', 'Discounts and More', "Date of birth");
	});

	$(document).on("focus", "[name='S4_Insured1SSN']", function(){
		ga('send', 'event', 'Quote', 'Discounts and More', "Social security number");
	});

	$(document).on("focus", "[name='S4_InsuredEmailAddress']", function(){
		ga('send', 'event', 'Quote', 'Discounts and More', "Email address");
	});

	$(document).on("click", "[name='S4_FireAlarm']", function(){
		ga('send', 'event', 'Quote', 'Discounts and More', "Home safety - Central station fire");
	});

	$(document).on("click", "[name='S4_BurglarAlarm']", function(){
		ga('send', 'event', 'Quote', 'Discounts and More', "Home safety - Burglary alarms");
	});

	$(document).on("click", "[name='S4_Sprinklers']", function(){
		ga('send', 'event', 'Quote', 'Discounts and More', "Home safety - Sprinklers");
	});

	//RECALL QUOTE//
	$(document).on("click", "[name='QuoteNumber']", function(){
		ga('send', 'event', 'Quote Recall', 'LP', "Existing Quote - Quote Number");
	});

	$(document).on("click", "[name='ZipCode']", function(){
		ga('send', 'event', 'Quote Recall', 'LP', "Existing Quote - Zip Code");
	});

	$(document).on("click", ".retrieve-quote", function(){
		ga('send', 'event', 'Quote Recall', 'LP', "Existing Quote - Recall Quote Button");
	});

	$(document).on("click", ".new-quote", function(){
		ga('send', 'event', 'Quote Recall', 'LP', "New Quote - New Quote Button");
	});



});
