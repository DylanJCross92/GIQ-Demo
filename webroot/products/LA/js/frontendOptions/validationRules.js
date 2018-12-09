var validationRules = {

		/*
			Section 1.1 Rules
		*/

		ApplicantFirstName: {
								dataType: "text",
								maxLength: 20
							},

		ApplicantLastName: {
								dataType: "text",
								maxLength: 20,
								required: true
							},

		InsuredFirstName: {
								dataType: "text",
								maxLength: 20,
								required: true
							},

		InsuredLastName: {
								dataType: "text",
								maxLength: 20,
								required: true
							},

		PropertyStreetNumber: {
								dataType: "alphaNumeric",
								maxLength: 10,
								required: true
							},

		PropertyStreetAddress: {
								dataType: "address",
								maxLength: 50,
								required: true
							},

		PropertyStreetName: {
								dataType: "alphaNumeric",
								maxLength: 50,
								required: true
							},

		PropertyAddressLine2: {
								dataType: "alphaNumeric",
								maxLength: 50,
								required: false
							},

		PropertyCity: {
								dataType: "text",
								maxLength: 50,
								required: true
							},

		PropertyState: {
								dataType: "text",
								maxLength: 50,
								required: true,
								customValidation: {
									compare: "<!this!> === 'LA'"
								},
								visibleFormInput: "S1_Address"
							},

		PropertyZipCode: {
								dataType: "numeric",
								maxLength: 50,
								required: true
							},

		PropertyUsage: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		MonthsUnoccupied: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		InsuredByCorporation: {
								dataType: "radio",
								maxLength: 50,
								required: true
							},

		InsuredName: {
								dataType: "alphaNumeric",
								maxLength: 80,
								required: true
							},

		NumberOfMonthsUnoccupied: {
								dataType: "dropdown",
								maxLength: 80,
								required: true
							},

		ShortTermRental: {
								dataType: "radio",
								maxLength: 80,
								required: true
							},

		SingleOccupancy: {
								dataType: "radio",
								maxLength: 80,
								required: true
							},

		StudentOccupancy: {
								dataType: "radio",
								maxLength: 80,
								required: true
							},

		PropertyManagerType: {
								dataType: "dropdown",
								maxLength: 80,
								required: true
							},

		PropertyManagerAddressLine1: {
								dataType: "alphaNumeric",
								maxLength: 80,
								required: true
							},

		PropertyManagerAddressLine2: {
								dataType: "alphaNumeric",
								maxLength: 80,
								required: false
							},

		PropertyManagerCity: {
								dataType: "text",
								maxLength: 80,
								required: true
							},

		PropertyManagerState: {
								dataType: "text",
								maxLength: 2,
								required: true
							},

		PropertyManagerZip: {
								dataType: "numeric",
								maxLength: 5,
								required: true
							},


		/*
			Section 2.1 Rules
		*/

		CurrentInsurance: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		PriorCarrierNumber: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		PriorCarrierOther: {
								dataType: "alphaNumeric",
								maxLength: 50,
								required: true
							},

		PriorExpirationDate: {
								dataType: "date",
								maxLength: false,
								required: true
							},

		PriorCoverageA: {
								dataType: "currency",
								maxLength: 999999999, //Set validation to 999,999,999 to keep from showing a validation message on step 2
								required: true
							},

		NumberOfClaims: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},


		/*
			Section 2.2 Rules
		*/

		LossDate1: {
								dataType: "date",
								maxLength: false,
								required: true,
								allowFuture: false
							},

		LossAmount1: {
								dataType: "currency",
								maxLength: 5000000,
								required: true
							},

		LossType1: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		LossCatIndicator1: {
								dataType: "radio",
								maxLength: 50,
								required: true
							},

		LossDescription1: {
								dataType: "maxLength",
								maxLength: 5000,
								required: true
							},

		LossDate2: {
								dataType: "date",
								maxLength: false,
								required: true,
								allowFuture: false
							},

		LossAmount2: {
								dataType: "currency",
								maxLength: 5000000,
								required: true
							},

		LossType2: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		LossCatIndicator2: {
								dataType: "radio",
								maxLength: 50,
								required: true
							},

		LossDescription2: {
								dataType: "maxLength",
								maxLength: 5000,
								required: true
							},

		LossDate3: {
								dataType: "date",
								maxLength: false,
								required: true,
								allowFuture: false
							},

		LossAmount3: {
								dataType: "currency",
								maxLength: 5000000,
								required: true
							},

		LossType3: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		LossCatIndicator3: {
								dataType: "radio",
								maxLength: 50,
								required: true
							},

		LossDescription3: {
								dataType: "maxLength",
								maxLength: 5000,
								required: true
							},


		/*
			Section 3.1 Rules
		*/

		StructureType: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		ConstructionYear: {
								dataType: "year",
								maxLength: 50,
								required: true,
								allowFuture: false
							},

		SquareFootUnderRoof: {
								dataType: "numeric",
								maxLength: 50,
								required: true,
								customValidation: {
													compare: "<!this!> > 200"
													}
							},

		NumberOfStories: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},


		HomeStyle: {
								dataType: "maxLength",
								maxLength: 50,
								required: true
							},

		ConstructionYearRoof: {
								dataType: "year",
								maxLength: 50,
								required: true,
								allowFuture: false,
								customValidation: {
													compare: "<!this!> >= <!ConstructionYear!>",
													errorKind: "errorMessageRoofBelowBuildYear"
													}
							},

		RoofCoveringType: {
								dataType: "maxLength",
								maxLength: 50,
								required: true
							},

		RoofGeometryType: {
								dataType: "maxLength",
								maxLength: 50,
								required: true
							},

		/*
			Section 3.2 Rules
		*/

		GarageSize: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		GarageType: {
								dataType: "maxLength",
								maxLength: 5000,
								required: true,
								customValidation: {
													compare: "<!GarageSize!> <= 1 || (<!this!> && <!GarageSize!> > 1)",
													overrideDefault: true
													}
							},
		SquareFootUnderRoofGarage: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},
		FoundationType: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		ConstructionType: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		Cladding: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		MasonryVeneerPercentage: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		/*
			Section 3.3 Rules
		*/

		NumberOfKitchens: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		KitchenQuality: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		NumberOfFullBaths: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},


		FullBathQuality: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		NumberOfHalfBaths: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		HalfBathQuality: {
								dataType: "dropdown",
								maxLength: 50,
								required: true,
								customValidation: {
													compare: "<!NumberOfHalfBaths!> >= 0",
													overrideDefault: true
													}
							},

		NumberOfFireplaces: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},


		HeatPump: {
								dataType: "radio",
								maxLength: 50,
								required: true
							},

		CentralAir: {
								dataType: "radio",
								maxLength: 50,
								required: true
							},
		WoodStove: {
								dataType: "radio",
								maxLength: 50,
								required: true
							},

		WallHeight: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},
    	FloorCoveringType: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},
		StepsRisersWithoutHandrails: {
								dataType: "radio",
								maxLength: 50,
								required: true
							},
		NumberOfStepsRisersWithoutHandrails: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},
		/*
			Section 3.4 Rules
		*/

		HomeFeaturesWoodDeck: {
								dataType: "checkbox",
								maxLength: 50,
								required: false
							},

		HomeFeaturesWoodDeckSF: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		HomeFeaturesCompositeDeckSF: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		HomeFeaturesOpenPorchSF: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},


		HomeFeaturesGreenhouseSF: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		HomeFeaturesScreenedPorchSF: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		HomeFeaturesOpenBreezewaySF: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		HomeFeaturesScreenedBreezewaySF: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		/*
			Section 3.5 Rules
		*/

		Pets: {
								dataType: "radio",
								maxLength: 50,
								required: true
							},

		Dogs: {
								dataType: "radio",
								maxLength: 50,
								required: true
							},

		DistanceFireHydrant: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		PoolType: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		PoolFence: {
								dataType: "radio",
								maxLength: 50,
								required: true
							},

		DivingBoardSlide: {
								dataType: "radio",
								maxLength: 50,
								required: true
							},

		DivingBoardSlide2: {
								dataType: "radio",
								maxLength: 50,
								required: true
							},

		ImmovablePoolLadder: {
								dataType: "radio",
								maxLength: 50,
								required: true
							},

		/*
			Section 4.1 Rules
		*/

		MultiPolicy: {
								dataType: "radio",
								maxLength: 50,
								required: true
							},

		AutoPolicyNumber: {
								dataType: "alphaNumeric",
								maxLength: 50,
								required: true
							},

		PrimeTimeDiscount: {
								dataType: "radio",
								maxLength: 50,
								required: true
							},


    	WindMitigationForm: {
								dataType: "radio",
									maxLength: 50,
									required: true
							},
    	BCEquivalent: {
								dataType: "radio",
								maxLength: 50,
								required: true
							},
    	RoofDeckAttachmentType: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},
    	RoofWallConnectionType: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},
		SecondaryWaterResistance: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},
    	OpeningProtectionTypeWLMForm: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		Insured1BirthDate: {
								dataType: "date",
								maxLength: 50,
								required: true,
								customValidation: {
                                    compare: "(<!this!> && (<!PrimeTimeDiscount!> == 200 || (<!PrimeTimeDiscount!> == 100 && validator['maxAge'](<!this!>, dataLength))))",
                                    //compare: "validator['maxAge'](<!this!>, dataLength)",
                                    overrideDefault: false,
                                    errorKind: "errorMessageInvalidAge"
                                    }
		                    },

		FireAlarm: {
								dataType: "dropdown",
								maxLength: 50,
								required: false
							},

		BurglarAlarm: {
								dataType: "dropdown",
								maxLength: 50,
								required: false
							},

		Sprinklers: {
								dataType: "dropdown",
								maxLength: 50,
								required: false
							},

		Insured1SSN: {
								dataType: "SocialSecurityNumber",
								maxLength: 50,
								required: true
							},

		InsuredEmailAddress: {
								dataType: "email",
								maxLength: 50,
								required: true
							},

		AcceptLegalTerms: {
								dataType: "checkbox",
								maxLength: 50,
								required: true
							},

		/*
			Section 5.1 Rules
		*/

		CoverageA: {
								dataType: "currency",
								maxLength: 1999999, //Validate at 1999,999 and show red error message
								required: true,
								customValidation: {
													compare: "<!this!> >= 80000",
													errorKind: "errorMessageMinValue"
													}
							},

        CoverageB: {
								dataType: "alphaNumeric",
								maxLength: "",
								required: true
							},

		CoverageC: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		CoverageD: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		AdditionalAmountsOfInsurance: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		CoverageL: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		CoverageM: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		PersonalInjuryCoverage: {
								dataType: "radio",
								maxLength: 50,
								required: true
							},

		IdentityFraudCoverage: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		MechanicalBreakdownCoverage: {
								dataType: "radio",
								maxLength: 50,
								required: true
							},

		EarthquakeCoverage: {
								dataType: "radio",
								maxLength: 50,
								required: true
							},

		JewelrySpecialLimits: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		WaterBackupCoverage: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		LossAssessmentCoverage: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		IncreasedOrdinanceLimit: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},

		AllOtherPerilsDeductible: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},
		HurricaneDeductible: {
								dataType: "dropdown",
								maxLength: 50,
								required: true
							},
		WindHailDeductible: {
							dataType: "dropdown",
							maxLength: 50,
							required: true
							}



};
