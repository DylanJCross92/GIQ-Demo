const errors = {

    InsuredFirstName : {

									errorMessageEmpty : "Please enter a First Name.",
									errorMessageInvalid : "Please enter a valid First Name.",
                                    errorMessageMaxLength : "Please enter a First Name with 20 characters or less.",
									errorCode : 2000,
									errorFormName : "InsuredFirstName"
				},

    InsuredLastName : {

									errorMessageEmpty : "Please enter a Last Name.",
                                    errorMessageInvalid : "Please enter a valid Last Name.",
                                    errorMessageMaxLength : "Please enter a Last Name with 20 characters or less.",
									errorCode : 2025,
									errorFormName : "InsuredLastName"
				},

    PropertyStreetNumber : {

									errorMessageEmpty : "Please enter a Street Number.",
									errorMessageInvalid : "Please enter a Street Number.",
									errorCode : 2050,
									errorFormName : "S1_StreetNumber"
				},

    PropertyStreetName: {

									errorMessageEmpty : "Please enter a Street Name.",
									errorMessageInvalid : "Please enter a Street Name.",
									errorCode : 2075,
									errorFormName : "S1_StreetName"
				},

    PropertyStreetAddress: {

									errorMessageEmpty : "Please enter a Street Address.",
									errorMessageInvalid : "Please enter a valid Street Address.",
									errorCode : 2085,
									errorFormName : "S1_StreetAddress"
								},

    PropertyAddressLine2 : {

									errorMessageEmpty : "Please enter a Apartment, unit, floor, etc.",
									errorMessageInvalid : "Please use only Letters and Numbers.",
									errorCode : 2100,
									errorFormName : "S1_ApartmentNumber"
				},

	PropertyCity : {

							errorMessageEmpty : "Please enter a City.",
							errorMessageInvalid : "Please enter a City.",
							errorCode : 2125,
							errorFormName : "PropertyCity"
		},

	PropertyUsage : {

						errorMessageEmpty : "Please select an option from the highlighted drop down.",
						errorMessageInvalid : "Please select an option from the highlighted drop down.",
						errorCode : 2150,
						errorFormName : "PropertyUsage"
	},

	MonthsUnoccupied : {

						errorMessageEmpty : "Please select the amount of time unoccupied.",
						errorMessageInvalid : "Please select the amount of time unoccupied.",
						errorCode : 2175,
						errorFormName : "MonthsUnoccupied"
	},

	InsuredByCorporation : {

						errorMessageEmpty : "Please confirm Property Ownership.",
						errorMessageInvalid : "Please confirm Property Ownership.",
						errorCode : 2200,
						errorFormName : "S1_OwnedBy"
	},

	NumberOfMonthsUnoccupied : {

						errorMessageEmpty : "Please select the amount of time unoccupied.",
						errorMessageInvalid : "Please select the amount of time unoccupied.",
						errorCode : 2175,
						errorFormName : "S1_NumberOfMonthsUnoccupied"
	},

	ShortTermRental : {

						errorMessageEmpty : "Please select long term or short term rental type.",
						errorMessageInvalid : "Please select long term or short term rental type.",
						errorCode : 2176,
						errorFormName : "S1_ShortTermRental"
	},

	SingleOccupancy : {

						errorMessageEmpty : "Please select if single occupancy.",
						errorMessageInvalid : "Please select if single occupancy.",
						errorCode : 2177,
						errorFormName : "S1_SingleOccupancy"
	},

	StudentOccupancy : {

						errorMessageEmpty : "Please select if student occupancy.",
						errorMessageInvalid : "Please select if student occupancy.",
						errorCode : 2178,
						errorFormName : "S1_StudentOccupancy"
			},

	PropertyManagerTYpe : {

						errorMessageEmpty : "Please select the property manager type.",
						errorMessageInvalid : "Please select the property manager type.",
						errorCode : 2179,
						errorFormName : "S1_PropertyManagerType"
	},

    PropertyManagerAddressLine1: {

									errorMessageEmpty : "Please enter a valid property manager address.",
									errorMessageInvalid : "Please enter a valid property manager address.",
									errorCode : 2180,
									errorFormName : "S1_PropertyManagerAddressLine1"
				},

    PropertyManagerAddressLine2 : {

									errorMessageEmpty : "Please enter a valid property manager address.",
									errorMessageInvalid : "Please enter a valid property manager address.",
									errorCode : 2180,
									errorFormName : "S1_PropertyManagerAddressLine2"
				},

    PropertyManagerCity : {

									errorMessageEmpty : "Please enter a valid property manager city.",
									errorMessageInvalid : "Please enter a valid property manager city.",
									errorCode : 2181,
									errorFormName : "S1_PropertyManagerCity"
				},

    PropertyManagerState : {

									errorMessageEmpty : "Please enter a valid property manager state.",
									errorMessageInvalid : "Please enter a valid property manager state.",
									errorCode : 2182,
									errorFormName : "S1_PropertyManagerState"
				},

    PropertyManagerZip : {

									errorMessageEmpty : "Please enter a valid property manager zip code.",
									errorMessageInvalid : "Please enter a valid property manager zip code.",
									errorCode : 2183,
									errorFormName : "S1_PropertyManagerZip"
				},

    InsuredName : {

									errorMessageEmpty : "Please enter the Name of Entity.",
									errorMessageInvalid : "Please enter the Name of Entity.",
                                    errorMessageMaxLength : "Please enter the Name of Entity with 80 characters or less.",
									errorCode : 2225,
									errorFormName : "S1_EntityName"
				},

    CurrentInsurance : {

									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 2250,
									errorFormName : "S2_CurrentInsurance"
				},

    PriorCarrierNumber : {

									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 2275,
									errorFormName : "S2_InsuranceAgencies"
				},

    PriorCarrierOther : {

									errorMessageEmpty : "Please enter the name of your prior carrier.",
									errorMessageInvalid : "Please enter the name of your prior carrier.",
									errorCode : 2285,
									errorFormName : "S2_PriorCarrierOther"
				},

    PriorExpirationDate : {

									errorMessageEmpty : "Please enter the policy expiration date.",
									errorMessageInvalid : "Please enter the policy expiration date.",
									errorCode : 2300,
									errorFormName : "S2_PolicyExpiration"
				},

    PriorCoverageA: {

									errorMessageEmpty : "Please enter the dwelling coverage amount on your current policy.",
									errorMessageInvalid : "Please enter the dwelling coverage amount on your current policy.",
									errorCode : 2325,
									errorFormName : "S2_DwellingCoverage"
				},

    NumberOfClaims : {

									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 2350,
									errorFormName : "S2_NumberOfClaims"
				},

	LossDate1 : {

									errorMessageEmpty : "Please enter the date of Loss.",
									errorMessageInvalid : "Please provide a valid date using the format MM/DD/YYYY.",
									errorMessageFutureDate : "This date can not be in the future.",
									errorCode : 2375,
									errorFormName : "S2_2_DateOfLoss:1"
				},

    LossDate2 : {

									errorMessageEmpty : "Please enter the date of Loss.",
									errorMessageInvalid : "Please provide a valid date using the format MM/DD/YYYY.",
									errorMessageFutureDate : "This date can not be in the future.",
									errorCode : 2380,
									errorFormName : "S2_2_DateOfLoss:2"
				},

    LossDate3 : {

									errorMessageEmpty : "Please enter the date of Loss.",
									errorMessageInvalid : "Please provide a valid date using the format MM/DD/YYYY.",
									errorMessageFutureDate : "This date can not be in the future.",
									errorCode : 2385,
									errorFormName : "S2_2_DateOfLoss:3"
				},

    LossAmount1 : {
									errorMessageEmpty : "Please enter the amount paid for Loss, rounded to the nearest dollar.",
									errorMessageInvalid : "Please enter the amount paid for Loss, rounded to the nearest dollar.",
									errorCode : 2500,
									errorFormName : "S2_2_LossAmountPaid:1"
				},

    LossAmount2 : {
									errorMessageEmpty : "Please enter the amount paid for Loss, rounded to the nearest dollar.",
									errorMessageInvalid : "Please enter the amount paid for Loss, rounded to the nearest dollar.",
									errorCode : 2505,
									errorFormName : "S2_2_LossAmountPaid:2"
				},

    LossAmount3 : {
									errorMessageEmpty : "Please enter the amount paid for Loss, rounded to the nearest dollar.",
									errorMessageInvalid : "Please enter the amount paid for Loss, rounded to the nearest dollar.",
									errorCode : 2510,
									errorFormName : "S2_2_LossAmountPaid:3"
				},

    LossType1 : {
									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 2525,
									errorFormName : "S2_2_LossType:1"
				},

    LossType2 : {
									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 2530,
									errorFormName : "S2_2_LossType:2"
				},

    LossDate3 : {
									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 2535,
									errorFormName : "S2_2_LossType:3"
				},

    LossCatIndicator1 : {
									errorMessageEmpty : "Please confirm if Loss is a result of a Catastrophe.",
									errorMessageInvalid : "Please confirm if Loss is a result of a Catastrophe.",
									errorCode : 2550,
									errorFormName : "S2_2_LossCatastrophe:1"
				},

    LossCatIndicator2 : {
									errorMessageEmpty : "Please confirm if Loss is a result of a Catastrophe.",
									errorMessageInvalid : "Please confirm if Loss is a result of a Catastrophe.",
									errorCode : 2555,
									errorFormName : "S2_2_LossCatastrophe:2"
				},

    LossCatIndicator3 : {
									errorMessageEmpty : "Please confirm if Loss is a result of a Catastrophe.",
									errorMessageInvalid : "Please confirm if Loss is a result of a Catastrophe.",
									errorCode : 2560,
									errorFormName : "S2_2_LossCatastrophe:3"
				},

    LossDescription1 : {

									errorMessageEmpty : "Please include a Description of the Loss.",
									errorMessageInvalid : "Please include a Description of the Loss.",
									errorCode : 2575,
									errorFormName : "S2_2_LossDescription:1"
				},

    LossDescription2 : {

									errorMessageEmpty : "Please include a Description of the Loss.",
									errorMessageInvalid : "Please include a Description of the Loss.",
									errorCode : 2580,
									errorFormName : "S2_2_LossDescription:2"
				},

    LossDescription3 : {

									errorMessageEmpty : "Please include a Description of the Loss.",
									errorMessageInvalid : "Please include a Description of the Loss.",
									errorCode : 2585,
									errorFormName : "S2_2_LossDescription:3"
				},

    StructureType : {

									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 2600,
									errorFormName : "S3_HomeType"
				},

    ConstructionYear : {

									errorMessageEmpty : "Please provide the Year Home was Built. If you don't know the exact year, please provide an estimated year.",
									errorMessageInvalid : "Please provide the Year Home was Built. If you don't know the exact year, please provide an estimated year.",
									errorMessageFutureDate : "This date can not be in the future.",
									errorCode : 2625,
									errorFormName : "S3_YearBuilt"
				},

    ConstructionYearRoof : {

									errorMessageEmpty : "Please provide the year the Current Roof was installed.",
									errorMessageInvalid : "Please provide the year the Current Roof was installed.",
									errorMessageFutureDate : "This date can not be in the future.",
									errorMessageRoofBelowBuildYear : "The Current Roof Installed date cannot be older than the year built.",
									errorCode : 2650,
									errorFormName : "S3_RoofInstalled"
				},

    SquareFootUnderRoof : {

									errorMessageEmpty : "Please provide approximate total living area in square feet.",
									errorMessageInvalid : "Please provide approximate total living area in square feet.",
									errorCode : 2675,
									errorFormName : "S3_LivingArea"
				},

    NumberOfStories : {

									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 2700,
									errorFormName : "S3_NumberOfStories"
				},

    HomeStyle : {

									errorMessageEmpty : "Please select a Home Style.",
									errorMessageInvalid : "Please select a Home Style.",
									errorCode : 2725,
									errorFormName : "S3_StructureType"
				},

    RoofCoveringType : {

									errorMessageEmpty : "Please select a Roof Type.",
									errorMessageInvalid : "Please select a Roof Type.",
									errorCode : 2750,
									errorFormName : "S3_RoofType"
				},

    RoofGeometryType : {

									errorMessageEmpty : "Please select a Roof Shape.",
									errorMessageInvalid : "Please select a Roof Shape.",
									errorCode : 2775,
									errorFormName : "S3_RoofShape"
				},

    GarageSize : {

									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 2800,
									errorFormName : "S3_2_GarageSize"
				},

    SquareFootUnderRoofGarage : {

					errorMessageEmpty : "Please select an option from the highlighted drop down.",
					errorMessageInvalid : "Please select an option from the highlighted drop down.",
					errorCode : 2810,
					errorFormName : "S3_2_GarageSizeSqFt"
				},

    S3_2_GarageType : {

									errorMessageEmpty : "Please select a Garage Type.",
									errorMessageInvalid : "Please select a Garage Type.",
									errorCode : 2825,
									errorFormName : "S3_2_GarageType"
				},

    FoundationType : {

									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 2850,
									errorFormName : "S3_2_FoundationType"
				},

    ConstructionType : {

									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 2875,
									errorFormName : "S3_2_ConstructionType"
				},

    Cladding : {

									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 2900,
									errorFormName : "S3_2_CladdingType"
				},

    MasonryVeneerPercentage : {

									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 2925,
									errorFormName : "S3_2_MasonryVeenerType"
				},

    NumberOfKitchens : {

									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 2950,
									errorFormName : "S3_3_NumberOfKitchens"
				},

    NumberOfFullBaths : {

									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 2975,
									errorFormName : "S3_3_NumberOfFullBathrooms"
				},

    NumberOfHalfBaths : {

									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 3000,
									errorFormName : "S3_3_NumberOfHalfBathrooms"
				},

    NumberOfFireplaces : {

									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 3025,
									errorFormName : "S3_3_NumberOfFireplaces"
				},

    KitchenQuality : {

									errorMessageEmpty : "Please select an option from the highlighted drop down. See help icon for a guide on grade types.",
									errorMessageInvalid : "Please select an option from the highlighted drop down. See help icon for a guide on grade types.",
									errorCode : 3050,
									errorFormName : "S3_3_KitchenGrade"
				},

    FullBathroomQuality : {

									errorMessageEmpty : "Please select an option from the highlighted drop down. See help icon for a guide on grade types.",
									errorMessageInvalid : "Please select an option from the highlighted drop down. See help icon for a guide on grade types.",
									errorCode : 3075,
									errorFormName : "S3_3_FullBathroomGrade"
				},

    HalfBathQuality : {

									errorMessageEmpty : "Please select an option from the highlighted drop down. See help icon for a guide on grade types.",
									errorMessageInvalid : "Please select an option from the highlighted drop down. See help icon for a guide on grade types.",
									errorCode : 3100,
									errorFormName : "S3_3_HalfBathroomGrade"
				},

    HeatPump : {

									errorMessageEmpty : "Please confirm if your home uses a Heat Pump.",
									errorMessageInvalid : "Please confirm if your home uses a Heat Pump.",
									errorCode : 3125,
									errorFormName : "S3_3_HeatPump"
				},

    CentralAir : {

									errorMessageEmpty : "Please confirm if your home uses Central Air Conditioning.",
									errorMessageInvalid : "Please confirm if your home uses Central Air Conditioning.",
									errorCode : 3150,
									errorFormName : "S3_3_CentralAir"
				},

    WoodStove : {

					errorMessageEmpty : "Please confirm if your home has a Wood Stove.",
					errorMessageInvalid : "Please confirm if your home has a Wood Stove.",
					errorCode : 3160,
					errorFormName : "S3_3_WoodStove"
				},
    StepsRisersWithoutHandrails : {

					errorMessageEmpty : "Please confirm if your home has steps without handrails.",
					errorMessageInvalid : "Please confirm if your home has steps without handrails.",
					errorCode : 3170,
					errorFormName : "S3_3_StepsRisersWithoutHandrails"
				},
    NumberOfStepsRisersWithoutHandrails : {

					errorMessageEmpty : "Please select how many steps without risers your home has.",
					errorMessageInvalid : "Please select how many steps without risers your home has.",
					errorCode : 3180,
					errorFormName : "S3_3_NumberOfStepsRisersWithoutHandrails"
				},
				VAL_3200_ERROR : {

					errorMessageEmpty : "If your property has more than three features please call GEICO INSURANCE AGENCY at (800) 566-1518.",
					errorMessageInvalid : "If your property has more than three features please call GEICO INSURANCE AGENCY at (800) 566-1518.",
					errorCode : 3200,
					errorFormName : "S3_4_underwriting-block"
				},
    Pets : {

									errorMessageEmpty : "Please confirm if you own a dog.",
									errorMessageInvalid : "Please confirm if you own a dog.",
									errorCode : 3250,
									errorFormName : "S3_5_DogOwner"
				},

    Dogs : {

									errorMessageEmpty : "Please confirm if you own any of the types of dogs listed below.",
									errorMessageInvalid : "Please confirm if you own any of the types of dogs listed below.",
									errorCode : 3275,
									errorFormName : "S3_5_DogBreeds"
				},

    DistanceFireHydrant : {

									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 3300,
									errorFormName : "S3_5_DistanceToFireHydrant"
				},

    PoolType : {

									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 3325,
									errorFormName : "S3_5_SwimmingPool"
				},

    PoolFence : {

									errorMessageEmpty : "Please confirm if the Property Around the Pool is Fenced.",
									errorMessageInvalid : "Please confirm if the Property Around the Pool is Fenced.",
									errorCode : 3350,
									errorFormName : "S3_5_PropertyFenced"
				},

    DivingBoardSlide : {

									errorMessageEmpty : "Please confirm if there is a diving board or slide.",
									errorMessageInvalid : "Please confirm if there is a diving board or slide.",
									errorCode : 3375,
									errorFormName : "S3_5_BoardOrSlide"
				},

    DivingBoardSlide2 : {

									errorMessageEmpty : "Please confirm if there is a diving board or slide.",
									errorMessageInvalid : "Please confirm if there is a diving board or slide.",
									errorCode : 3400,
									errorFormName : "S3_5_BoardOrSlide:2"
				},

    ImmovablePoolLadder : {

									errorMessageEmpty : "Please confirm if there is an immovable ladder.",
									errorMessageInvalid : "Please confirm if there is an immovable ladder.",
									errorCode : 3425,
									errorFormName : "S3_5_ImmovableLadder"
				},

    MultiPolicy : {

									errorMessageEmpty : "Please confirm if you currently have an auto policy with Geico.",
									errorMessageInvalid : "Please confirm if you currently have an auto policy with Geico.",
									errorCode : 3450,
									errorFormName : "S4_MultiPolicy"
				},

    AutoPolicyNumber : {

									errorMessageEmpty : "Please enter your Geico Auto Policy Number.",
									errorMessageInvalid : "Please enter your Geico Auto Policy Number.",
									errorCode : 3475,
									errorFormName : "S4_AutoPolicyNumber"
				},
    WindMitigationForm : {

					errorMessageEmpty : "Please confirm if you have completed a Wind Mitigation form.",
					errorMessageInvalid : "Please confirm if you have completed a Wind Mitigation form.",
					errorCode : 3485,
					errorFormName : "S4_WindMitigationForm"
				},

    RoofDeckAttachmentType : {

					errorMessageEmpty : "Please add your inspection details.",
					errorMessageInvalid : "Please add your inspection details.",
					errorCode : 3490,
					errorFormName : "S4_RoofDeckAttachmentType"
				},
    BCEquivalent : {

                    errorMessageEmpty : "Please add your inspection details.",
                    errorMessageInvalid : "Please add your inspection details.",
					errorCode : 3491,
					errorFormName : "S4_BCEquivalent"
				},
    RoofWallConnectionType : {

                    errorMessageEmpty : "Please add your inspection details.",
                    errorMessageInvalid : "Please add your inspection details.",
					errorCode : 34920,
					errorFormName : "S4_RoofWallConnectionType"
				},
    SecondaryWaterResistance : {

                    errorMessageEmpty : "Please add your inspection details.",
                    errorMessageInvalid : "Please add your inspection details.",
					errorCode : 3493,
					errorFormName : "S4_SecondaryWaterResistance"
				},
    OpeningProtectionTypeWLMForm : {

                    errorMessageEmpty : "Please add your inspection details.",
                    errorMessageInvalid : "Please add your inspection details.",
					errorCode : 3494,
					errorFormName : "S4_OpeningProtectionTypeWLMForm"
				},

    PrimeTimeDiscount : {

									errorMessageEmpty : "Please select Yes or No to the question below.",
									errorMessageInvalid : "Please select Yes or No to the question below.",
									errorCode : 3500,
									errorFormName : "S4_PrimeTimeDiscount"
				},

    Insured1BirthDate : {

									errorMessageEmpty : "Please provide your Date of Birth.",
									errorMessageInvalid : "Please provide your Date of Birth using the format MM/DD/YYYY.",
									errorMessageInvalidAge: "Based on your retiree entry, your Date of Birth must be at least 50 years old.",
									//errorMessageInvalidAge : "In order to qualify for the Prime Time Discount, you must be over 50 years old. Please confirm your selection.",
									errorMessageFutureDate : "This date can not be in the future.",
									errorMessageUnder18 : "You must be at least 18 years old to get a quote.",
                    				errorMessageMinAge: "Based on your retiree entry, your Date of Birth must be at least 50 years old.",
									errorCode : 3525,
									errorFormName : "S4_Insured1BirthDate"
				},



    Insured1SSN : {

									errorMessageEmpty : "Please provide a valid 9-Digit Social Security Number.",
									errorMessageInvalid : "Please provide a valid 9-Digit Social Security Number.",
									errorCode : 3550,
									errorFormName : "S4_Insured1SSN"
				},

	InsuredEmailAddress : {

									errorMessageEmpty : "Please provide a valid Email Address.",
									errorMessageInvalid : "Please provide a valid Email Address.",
									errorCode : 3575,
									errorFormName : "S4_InsuredEmailAddress"
				},

    AcceptLegalTerms : {

									errorMessageEmpty : "Please confirm the Legal Disclosure Information by checking the box.",
									errorMessageInvalid : "Please confirm the Legal Disclosure Information by checking the box.",
									errorCode : 3600,
									errorFormName : "S4_AcceptLegalTerms"
				},

    WoodDeckSqFt : {
									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 3625,
									errorFormName : "S3_4_WoodDeckSqFt"
				},

    CompositeDeckSqFt : {
									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 3650,
									errorFormName : "S3_4_CompositeDeckSqFt"
				},

    OpenPorchSqFt : {
									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 3675,
									errorFormName : "S3_4_OpenPorchSqFt"
				},

    GreenhouseSqFt : {
									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 3700,
									errorFormName : "S3_4_GreenhouseSqFt"
				},

    ScreenedPorchSqFt : {
									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 3725,
									errorFormName : "S3_4_ScreenedPorchSqFt"
				},

    OpenBreezewaySqFt : {
									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 3750,
									errorFormName : "S3_4_OpenBreezewaySqFt"
				},

    ScreenedBreezewaySqFt : {
									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 3775,
									errorFormName : "S3_4_ScreenedBreezewaySqFt"
				},

				VAL_STRUCTURETYPE_ERROR : {
									errorMessageEmpty : "Please select a Structure Type.",
									errorMessageInvalid : "Please select a Structure Type.",
									errorCode : 3800
				},

				VAL_ROOFTYPE_ERROR : {

									errorMessageEmpty : "Please select a Roof Type.",
									errorMessageInvalid : "Please select a Roof Type.",
									errorCode : 3825
				},

				VAL_ROOFSHAPE_ERROR : {

									errorMessageEmpty : "Please select a Roof Shape.",
									errorMessageInvalid : "Please select a Roof Shape.",
									errorCode : 3850
				},

				VAL_GARAGETYPE_ERROR : {

									errorMessageEmpty : "Please select a Garage Type.",
									errorMessageInvalid : "Please select a Garage Type.",
									errorCode : 3875,
				},

				VAL_3900_ERROR : {

									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 3900,
									errorFormName : "S4_FireAlarmLocation"
				},

				VAL_3925_ERROR : {

									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 3925,
									errorFormName : "S4_BurglarAlarmLocation"
				},

				VAL_3950_ERROR : {

									errorMessageEmpty : "Please select an option from the highlighted drop down.",
									errorMessageInvalid : "Please select an option from the highlighted drop down.",
									errorCode : 3950,
									errorFormName : "S4_SprinklersLocation"
				},

				VAL_OTHERSTRUCTURES_ERROR : {

									errorMessageEmpty : "Please enter a Dwelling amount under $1,000,000",
									errorMessageInvalid : "Please enter a Dwelling amount under $1,000,000",
									errorMessageMinValue : "Please enter a value of at least $80,000",
									errorCode : 3975,
									errorFormName : "S5_Dwelling"
				},

				S1_State : {
					errorMessageEmpty: "Please enter an address in " + Product_State +".",
					errorMessageInvalid: "Please enter an address in " + Product_State +".",
					errorCode: 4000,
					errorFormName: "S1_Address"
				},


};

export default errors