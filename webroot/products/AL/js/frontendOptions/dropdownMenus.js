var dropdownMenus = {
						PropertyUsage : [
												{ 
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Primary Residence",
													value	: "100-100"
												},
												{
													label	: "Seasonal Residence",
													value	: "300-100",
													extra	: "data-show='time-unoccupied'"
												},
												{
													label	: "Secondary Residence",
													value	: "200-100",
													extra	: "data-show='time-unoccupied'"
												},
												{
													label	: "Rental Property",
													value	: "100-200", 
													extra	: "data-show='owned-by-corporation' data-new-href='#/section=1&step=1.1.2&error=111' data-new-href-block='true'"
												},
												{
													label	: "Vacant Property",
													value	: "100-300",
													extra	: "data-new-href='#/section=1&step=1.1.2&error=122' data-new-href-block='true'"
												}
												
						],

						PropertyUsage_NY : [
												{ 
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Primary Residence",
													value	: "100-100"
												},
												{
													label	: "Seasonal Residence",
													value	: "300-100",
													extra	: "data-show='time-unoccupied'"
												},
												{
													label	: "Secondary Residence",
													value	: "200-100",
													extra	: "data-show='time-unoccupied'"
												},
												{
													label	: "Rental Property",
													value	: "100-200",
													extra	: "data-new-href='#/section=1&step=1.1.2&error=122' data-new-href-block='true'"
												},
												{
													label	: "Vacant Property",
													value	: "100-300",
													extra	: "data-show='property-manager-type' data-new-href='#/section=1&step=1.1.2&error=122' data-new-href-block='true'"
												}
												
						],

						PropertyUsage_NY_DP3 : [
												{
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Primary Residence",
													value	: "100-100",
													extra	: "data-change-insurance-product='HO3'"
												},
												{
													label	: "Seasonal Residence",
													value	: "300-100",
													extra	: "data-show='time-unoccupied' data-change-insurance-product='HO3'"
												},
												{
													label	: "Secondary Residence",
													value	: "200-100",
													extra	: "data-show='time-unoccupied' data-change-insurance-product='HO3'"
												},
												{
													label	: "Rental Property",
													value	: "100-200",
													extra	: "data-show='rental-property-fields  property-manager-type' data-change-insurance-product='DP3'"
												},
												{
													label	: "Vacant Property",
													value	: "100-300",
													extra	: "data-show='property-manager-type' data-change-insurance-product='DP3'"
												}

						],
						PropertyUsage_SC_DP3 : [
												{
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Primary Residence",
													value	: "100-100",
													extra	: "data-change-insurance-product='HO3'"
												},
												{
													label	: "Seasonal Residence",
													value	: "300-100",
													extra	: "data-show='time-unoccupied' data-change-insurance-product='HO3'"
												},
												{
													label	: "Secondary Residence",
													value	: "200-100",
													extra	: "data-show='time-unoccupied' data-change-insurance-product='HO3'"
												},
												{
													label	: "Rental Property",
													value	: "100-200",
													extra	: "data-show='rental-property-fields  property-manager-type' data-change-insurance-product='DP3'"
												},
												{
													label	: "Vacant Property",
													value	: "100-300",
													extra	: "data-show='property-manager-type' data-change-insurance-product='DP3'"
												}

											],

						PropertyUsage_FL : [
												{
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Primary",
													value	: "100-100"
												},
												{
													label	: "Secondary",
													value	: "200-100",
													extra	: "data-show='time-unoccupied'"
												},
												{
													label	: "Seasonal",
													value	: "300-100",
													extra	: "data-show='time-unoccupied'"
												},
											],

						TimeUnoccupied : [
												{ 
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Less than 3 months",
													value	: 0
												},
												{
													label	: "3 months or more",
													value	: 3,
													extra	: "data-new-href='#/section=1&step=1.1.1&error=120' data-new-href-block='true'" 
												}
						],

						TimeUnoccupied_NY_DP3 : [
												{
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Less than 3 months",
													value	: 0
												},
												{
													label	: "3 months or more",
													value	: 3
												}
						],

						TimeUnoccupied_SC_DP3 : [
												{
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Less than 3 months",
													value	: 0
												},
												{
													label	: "3 months or more",
													value	: 3
												}
											],

						TimeUnoccupied_FL : [
												{
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Primary",
													value	: 0
												},
												{
													label	: "Secondary",
													value	: 1
												},
												{
													label	: "Seasonal (3 - 6 mos. unoccupied)",
													value	: 3
												},
												{
													label	: "Seasonal (more than 6 mos. unoccupied)",
													value	: 7
												}
											],
						
						PropertyManagerType : [
												
												{ 
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Owner - On Premisis",
													value	: 100
												},
												{
													label	: "Owner - Off Premises",
													value	: 110,
													extra	: "data-show='property-manager-address'"
												},
												{
													label	: "Property Manager - On Premises",
													value	: 200
												},
												{
													label	: "Property Manager - Off Premesis",
													value	: 210,
													extra	: "data-show='property-manager-address'" 
												},
												{
													label	: "Friend or Relative",
													value	: 300,
													extra	: "data-show='property-manager-address'" 
												}
						],
						
						PropertyManagerState : [
												
												{ 
													label	: "--",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "AL",
													value	: "AL"
												},
												{
													label	: "AK",
													value	: "AK"
												},
												{
													label	: "AZ",
													value	: "AZ"
												},
												{
													label	: "AR",
													value	: "AR"
												},
												{
													label	: "CO",
													value	: "CO"
												},
												{
													label	: "CT",
													value	: "CT"
												},
												{
													label	: "DE",
													value	: "DE"
												},
												{
													label	: "FL",
													value	: "FL"
												},
												{
													label	: "GA",
													value	: "GA"
												},
												{
													label	: "HI",
													value	: "HI"
												},
												{
													label	: "ID",
													value	: "ID"
												},
												{
													label	: "IL",
													value	: "IL"
												},
												{
													label	: "IN",
													value	: "IN"
												},
												{
													label	: "IA",
													value	: "IA"
												},
												{
													label	: "KS",
													value	: "KS"
												},
												{
													label	: "KY",
													value	: "KY"
												},
												{
													label	: "LA",
													value	: "LA"
												},
												{
													label	: "ME",
													value	: "ME"
												},
												{
													label	: "MD",
													value	: "MD"
												},
												{
													label	: "MA",
													value	: "MA"
												},
												{
													label	: "MI",
													value	: "MI"
												},
												{
													label	: "MN",
													value	: "MN"
												},
												{
													label	: "MS",
													value	: "MS"
												},
												{
													label	: "MO",
													value	: "MO"
												},
												{
													label	: "MT",
													value	: "MT"
												},
												{
													label	: "NE",
													value	: "NE"
												},
												{
													label	: "NV",
													value	: "NV"
												},
												{
													label	: "NH",
													value	: "NH"
												},
												{
													label	: "NJ",
													value	: "NJ"
												},
												{
													label	: "NM",
													value	: "NM"
												},
												{
													label	: "NY",
													value	: "NY"
												},
												{
													label	: "NC",
													value	: "NC"
												},
												{
													label	: "ND",
													value	: "ND"
												},
												{
													label	: "OH",
													value	: "OH"
												},
												{
													label	: "OK",
													value	: "OK"
												},
												{
													label	: "OR",
													value	: "OR"
												},
												{
													label	: "PA",
													value	: "PA"
												},
												{
													label	: "RI",
													value	: "RI"
												},
												{
													label	: "SC",
													value	: "SC"
												},
												{
													label	: "SD",
													value	: "SD"
												},
												{
													label	: "TN",
													value	: "TN"
												},
												{
													label	: "TX",
													value	: "TX"
												},
												{
													label	: "UT",
													value	: "UT"
												},
												{
													label	: "VT",
													value	: "VT"
												},
												{
													label	: "VA",
													value	: "VA"
												},
												{
													label	: "WA",
													value	: "WA"
												},
												{
													label	: "WV",
													value	: "WV"
												},
												{
													label	: "WI",
													value	: "WI"
												},
												{
													label	: "WY",
													value	: "WY"
												}
						],
						
						CurrentInsurance : [
												{
													label 	: "(Select One)",
													value 	: false,
													disabled: true,
													selected: true
												},
												{
													label	: "Yes, with Occidental Fire & Casualty",
													value	: 0,
													extra	: "data-new-href='#/section=2&step=2.1.1&error=130' data-new-href-block='true'" 										
												},
												{
													label	: "Yes, with another company",
													value	: "-",										//?
													extra	: "data-show='home-insurance'"
												},
												{
													label	: "No, this is a new home purchase",
													value	: 1
												},
												{
													label	: "No, I don't have insurance at my current property",
													value	: 2
												}
						
						],
						CurrentInsurance_AL : [
												{
													label 	: "(Select One)",
													value 	: false,
													disabled: true,
													selected: true
												},
												{
													label	: "Yes, with Federated National Insurance Company",
													value	: 0,
													extra	: "data-new-href='#/section=2&step=2.1.1&error=130' data-new-href-block='true'"
												},
												{
													label	: "Yes, with another company",
													value	: "-",										//?
													extra	: "data-show='home-insurance'"
												},
												{
													label	: "No, this is a new home purchase",
													value	: 1
												},
												{
													label	: "No, I don't have insurance at my current property",
													value	: 2
												}

						],
						CurrentInsurance_LA : [
												{
													label 	: "(Select One)",
													value 	: false,
													disabled: true,
													selected: true
												},
												{
													label	: "Yes, with Federated National Insurance Company",
													value	: 0,
													extra	: "data-new-href='#/section=2&step=2.1.1&error=130' data-new-href-block='true'"
												},
												{
													label	: "Yes, with another company",
													value	: "-",										//?
													extra	: "data-show='home-insurance'"
												},
												{
													label	: "No, this is a new home purchase",
													value	: 1
												},
												{
													label	: "No, I don't have insurance at my current property",
													value	: 2
												}

						],
						CurrentInsurance_FL : [
												{
													label 	: "(Select One)",
													value 	: false,
													disabled: true,
													selected: true
												},
												{
													label	: "Yes, with Federated National Insurance Company",
													value	: 0,
													extra	: "data-new-href='#/section=2&step=2.1.1&error=130' data-new-href-block='true'"
												},
												{
													label	: "Yes, with another company",
													value	: "-",										//?
													extra	: "data-show='home-insurance'"
												},
												{
													label	: "No, this is a new home purchase",
													value	: 1
												},
												{
													label	: "No, I don't have insurance at my current property",
													value	: 2
												}

											],
						InsuranceAgencies : [
												
												{ 
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Adirondack Insurance Exchange",
													value	: 5
												},
												{
													label	: "Allianz (incl Fireman's Fund)",
													value	: 10
												},
												{
													label	: "Allstate Ins Grp",
													value	: 15
												},
												{
													label	: "Amica Mutual Ins Co",
													value	: 20
												},
												{
													label	: "Andover",
													value	: 25
												},
												{
													label	: "ASI",
													value	: 28
												},
												{
													label	: "Bank of America",
													value	: 30
												},
												{
													label	: "Castlepoint",
													value	: 33
												},
												{
													label	: "Chubb Grp",
													value	: 35
												},
												{
													label	: "Hanover",
													value	: 40
												},
												{
													label	: "Hartford",
													value	: 45
												},
												{
													label	: "Homesite Ins. Co.",
													value	: 47
												},
												{
													label	: "Interboro",
													value	: 48
												},
												{
													label	: "Liberty Mutual",
													value	: 50
												},
												{
													label	: "MetLife",
													value	: 55
												},
												{
													label	: "Narragansett Bay",
													value	: 59
												},
												{
													label	: "Nationwide Mutual",
													value	: 60
												},
												{
													label	: "New York Central Mutual",
													value	: 65
												},
												{
													label	: "Occidental Fire and Casualty",
													value	: 67
												},
												{
													label	: "Preferred Mutual",
													value	: 70
												},
												{
													label	: "Quincy Mutual",
													value	: 72
												},
												{
													label	: "State Farm Grp",
													value	: 75
												},
												{
													label	: "Tower Group",
													value	: 80
												},
												{
													label	: "Travelers Ins Grp",
													value	: 85
												},
												{
													label	: "Tri-State Consumer",
													value	: 87
												},
												{
													label	: "Unitrin",
													value	: 90
												},
												{
													label	: "USAA",
													value	: 95
												},
												{
													label	: "White Mountains",
													value	: 100
												},
												{
													label	: "Zurich Grp (Maine Bonding & Maryland Cas)",
													value	: 105
												},
												{
													label	: "Other",
													value	: 999,
													extra	: "data-show='PriorCarrierOther'"
												}
							
											],
							
							NumberOfClaims : [
												{ 
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "0",
													value	: 0,
													extra	: "data-new-href='#/section=3&step=3.1'"
												},
												{
													label	: "1",
													value	: 1
												},
												{
													label	: "2",
													value	: 2
												},
												{
													label	: "3",
													value	: 3,
													extra	: "data-new-href='#/section=2&step=2.1.1&error=211' data-new-href-block='true'"
												},
												{
													label	: "4+",
													value	: 4,
													extra	: "data-new-href='#/section=2&step=2.1.1&error=211' data-new-href-block='true'"
												}
											],

							NumberOfClaims_SC : [
											{
												label	: "(Select One)",
												value	: "",
												disabled: true,
												selected: true
											},
											{
												label	: "0",
												value	: 0,
												extra	: "data-new-href='#/section=3&step=3.1'"
											},
											{
												label	: "1",
												value	: 1
											},
											{
												label	: "2",
												value	: 2
											},
											{
												label	: "3",
												value	: 3
											},
											{
												label	: "4+",
												value	: 4,
												extra	: "data-new-href='#/section=2&step=2.1.1&error=211' data-new-href-block='true'"
											}
										],
							NumberOfClaims_NJ : [
												{
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "0",
													value	: 0,
													extra	: "data-new-href='#/section=3&step=3.1'"
												},
												{
													label	: "1",
													value	: 1
												},
												{
													label	: "2",
													value	: 2
												},
												{
													label	: "3",
													value	: 3
												},
												{
													label	: "4+",
													value	: 4,
													extra	: "data-new-href='#/section=2&step=2.1.1&error=211' data-new-href-block='true'"
												}
											],
							NumberOfClaims_FL : [
												{
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "0",
													value	: 0,
													extra	: "data-new-href='#/section=3&step=3.1'"
												},
												{
													label	: "1",
													value	: 1
												},
												{
													label	: "2",
													value	: 2
												},
												{
													label	: "3",
													value	: 3
												},
												{
													label	: "4+",
													value	: 4,
													extra	: "data-new-href='#/section=2&step=2.1.1&error=211' data-new-href-block='true'"
												}
											],
							LossType : [
												
												{ 
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Dog bite",
													value	: 601
												},
												{
													label	: "Earthquake",
													value	: 800
												},
												{
													label	: "Fire/Smoke",
													value	: 100
												},
												{
													label	: "Flooding",
													value	: 201
												},
												{
													label	: "Inland Marine",
													value	: 410
												},
												{
													label	: "Liability or medical payments",
													value	: 600
												},
												{
													label	: "Lightning",
													value	: 300
												},
												{
													label	: "Plumbing - leaky or bursting pipes / fixtures",
													value	: 210
												},
												{
													label	: "Sump pump or water back up",
													value	: 220
												},
												{
													label	: "Theft - Off premises",
													value	: 402
												},
												{
													label	: "Theft - On premises",
													value	: 401
												},
												{
													label	: "Watercraft",
													value	: 900
												},
												{
													label	: "Water damage (non-plumbing)",
													value	: 200
												},
												{
													label	: "Windstorm or hail",
													value	: 500
												},
												{
													label	: "Other",
													value	: 700
												}
												
											],
											
							HomeType: 		[
							
												{ 
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Single-family",
													value	: 100,
													extra	: "data-change-value='true' data-original-value='100'"
												},
												{
													label	: "Two family",
													value	: 101
												},
												{
													label	: "Three family",
													value	: 102,
													extra	: "data-new-href='#/section=3&step=3.1.1&error=212' data-new-href-block='true'"
												},
												{
													label	: "Four family",
													value	: 103,
													extra	: "data-new-href='#/section=3&step=3.1.1&error=213' data-new-href-block='true'"
												},
												{
													label	: "More than four family",
													value	: 104,
													extra	: "data-new-href='#/section=3&step=3.1.1&error=213' data-new-href-block='true'"
												}
											],

							HomeType_NY_DP3: [

												{
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Single-family",
													value	: 100,
													extra	: "data-change-value='true' data-original-value='100'"
												},
												{
													label	: "Two family",
													value	: 101
												},
												{
													label	: "Three family",
													value	: 102
												},
												{
													label	: "Four family",
													value	: 103
												},
												{
													label	: "More than four family",
													value	: 104,
													extra	: "data-new-href='#/section=3&step=3.1.1&error=213' data-new-href-block='true'"
												}
											],
							HomeType_TX: [

												{
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Single-family",
													value	: 100,
													extra	: "data-change-value='true' data-original-value='100'"
												},
												{
													label	: "Two family",
													value	: 101
												},
												{
													label	: "Three family",
													value	: 102
												},
												{
													label	: "Four family",
													value	: 103
												},
												{
													label	: "More than four family",
													value	: 104,
													extra	: "data-new-href='#/section=3&step=3.1.1&error=213' data-new-href-block='true'"
												}
											],

							HomeType_SC_DP3: [

												{
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Single-family",
													value	: 100,
													extra	: "data-change-value='true' data-original-value='100'"
												},
												{
													label	: "Two family",
													value	: 101
												},
												{
													label	: "Three family",
													value	: 102
												},
												{
													label	: "Four family",
													value	: 103
												},
												{
													label	: "More than four family",
													value	: 104,
													extra	: "data-new-href='#/section=3&step=3.1.1&error=213' data-new-href-block='true'"
												}
											],
							HomeType_NJ: [
											{
												label	: "(Select One)",
												value	: "",
												disabled: true,
												selected: true
											},
											{
												label	: "Single-family",
												value	: 100,
												extra	: "data-change-value='true' data-original-value='100'"
											},
											{
												label	: "Two family",
												value	: 101
											},
											{
												label	: "Three family",
												value	: 102
											},
											{
												label	: "Four family",
												value	: 103
											},
											{
												label	: "More than four family",
												value	: 104
											}
										],
							HomeType_AL: [
											{
												label	: "(Select One)",
												value	: "",
												disabled: true,
												selected: true
											},
											{
												label	: "Single-family",
												value	: 100,
												extra	: "data-change-value='true' data-original-value='100'"
											},
											{
												label	: "Two family",
												value	: 101
											},
											{
												label	: "Three family",
												value	: 102
											},
											{
												label	: "Four family",
												value	: 103
											},
											{
												label	: "More than four family",
												value	: 104
											}
										],
							HomeType_LA: [

											{
												label	: "(Select One)",
												value	: "",
												disabled: true,
												selected: true
											},
											{
												label	: "Single-family",
												value	: 100,
												extra	: "data-change-value='true' data-original-value='100'"
											},
											{
												label	: "Two family",
												value	: 101
											},
											{
												label	: "Three family",
												value	: 102
											},
											{
												label	: "Four family",
												value	: 103
											},
											{
												label	: "More than four family",
												value	: 104
											}
										],
							HomeType_FL: [

											{
												label	: "(Select One)",
												value	: "",
												disabled: true,
												selected: true
											},
											{
												label	: "Single-family",
												value	: 100,
												extra	: "data-change-value='true' data-original-value='100'"
											},
											{
												label	: "Two family/Duplex",
												value	: 101
											},
											{
												label	: "Three family",
												value	: 102,
												extra	: "data-new-href='#/section=3&step=3.1.1&error=212' data-new-href-block='true'"
											},
											{
												label	: "Four family",
												value	: 103,
												extra	: "data-new-href='#/section=3&step=3.1.1&error=213' data-new-href-block='true'"
											},
											{
												label	: "Row/Townhouse",
												value	: 105
											}
										],
							NumberOfStories: [
												{ 
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												
												{
													label	: "One",
													value	: 100,
													extra	: "data-show='home-style'"
												},
												{
													label	: "One + Half",
													value	: 150,
													extra	: "data-show='home-style'"
												},
												{
													label	: "Two",
													value	: 200,
													extra	: "data-show='home-style'"
												},
												{
													label	: "Two + Half",
													value	: 250,
													extra	: "data-show='home-style'"
												},
												{
													label	: "Three",
													value	: 300,
													extra	: "data-show='home-style'"
												},
												{
													label	: "Three + Half",
													value	: 350,
													extra	: "data-show='home-style'"
												},
												{
													label	: "Four",
													value	: 400,
													extra	: "data-show='home-style'"
												}
							
							
											],	
											
							GarageSize: 	[
												{ 
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "No Garage",
													value	: 1
												},
												{
													label	: "1 car",
													value	: 10,
													extra	: "data-show='garage-type'"
												},
												{
													label	: "2 car",
													value	: 20,
													extra	: "data-show='garage-type'"
												},
												{
													label	: "3 car",
													value	: 30,
													extra	: "data-show='garage-type'"
												}
																								
											],
							GarageSizeSqFt: [
												{
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "250 sq ft",
													value	: 250
												},
												{
													label	: "300 sq ft",
													value	: 300
												},
												{
													label	: "350 sq ft",
													value	: 350
												},
												{
													label	: "400 sq ft",
													value	: 400
												},
												{
													label	: "450 sq ft",
													value	: 450
												},
												{
													label	: "500 sq ft",
													value	: 500
												},
												{
													label	: "550 sq ft",
													value	: 550
												},
												{
													label	: "600 sq ft",
													value	: 600
												},
												{
													label	: "650 sq ft",
													value	: 650
												},
												{
													label	: "700 sq ft",
													value	: 700
												},
												{
													label	: "750 sq ft",
													value	: 750
												},
												{
													label	: "800 sq ft",
													value	: 800
												},
												{
													label	: "850 sq ft",
													value	: 850
												},
												{
													label	: "900 sq ft",
													value	: 900
												},
												{
													label	: "950 sq ft",
													value	: 950
												},
												{
													label	: "1000 sq ft",
													value	: 1000
												},
												{
													label	: "1050 sq ft",
													value	: 1050
												},
												{
													label	: "1100 sq ft",
													value	: 1100
												},
												{
													label	: "1150 sq ft",
													value	: 1150
												},
												{
													label	: "1200 sq ft",
													value	: 1200
												},
												{
													label	: "1250 sq ft",
													value	: 1250
												},
												{
													label	: "1300 sq ft",
													value	: 1300
												},
												{
													label	: "1350 sq ft",
													value	: 1350
												},
												{
													label	: "1400 sq ft",
													value	: 1400
												},
												{
													label	: "1450 sq ft",
													value	: 1450
												},
												{
													label	: "1500 sq ft",
													value	: 1500
												},

							],
							FoundationType : [
												{
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Slab",
													value	: 100
												},
												{
													label	: "Slab/Basement",
													value	: 150
												},
												{
													label	: "Basement",
													value	: 300
												},
												{
													label	: "Open - Pilings/Stilts/Piers",
													value	: 400
												},
												{
													label	: "Open - crawl space",
													value	: 200
												},
												{
													label	: "Closed - crawl space",
													value	: 205
												}
							
											],
							FoundationType_FL : [
												{
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Slab",
													value	: 100
												},
												{
													label	: "Crawlspace",
													value	: 200
												},
												{
													label	: "Basement",
													value	: 300
												},
												{
													label	: "Pilings/Stilts of Wood Pole Construction",
													value	: 410
												},
												{
													label	: "Pilings/Stilts of Reinforced Masonry Construction",
													value	: 420
												}
							],

    						ConstructionType : [
												{ 
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Frame",
													value	: 100,
													extra	: "data-show='cladding-type'"
												},
												{
													label	: "Masonry",
													value	: 200
												},
												{
													label	: "Masonry Veneer",
													value	: 101,
													extra	: "data-show='masonry-veener-type'"
												}
												
											],

							ConstructionType_FL : [
												{
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Frame",
													value	: 100,
													extra	: "data-show='cladding-type'"
												},
												{
													label	: "Masonry Veneer",
													value	: 101,
													extra	: "data-show='masonry-veener-type'"
												},
												{
													label	: "Masonry",
													value	: 200
												},
												{
													label	: "Superior",
													value	: 202
												}

											],
					
							CladdingType : [
											{
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Vinyl siding",
													value	: 900
												},
												{
													label	: "Hardboard",
													value	: 901
												},
												{
													label	: "Cement fiber/asbestos",
													value	: 1000
												},
												{
													label	: "Aluminium siding",
													value	: 400
												},
												{
													label	: "Wood siding",
													value	: 500
												},
												{
													label	: "Wood shakes",
													value	: 501
												},
												{
													label	: "Stucco",
													value	: 302
												},
												{
													label	: "Unknown or other",
													value	: 0
												}
											],
							CladdingType_FL : [
												{
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Cement fiber/asbestos",
													value	: 1000
												},
												{
													label	: "Stucco",
													value	: 302
												},
												{
													label	: "Aluminium siding",
													value	: 400
												},
												{
													label	: "Wood siding",
													value	: 500
												},
												{
													label	: "Wood shakes",
													value	: 501
												},
												{
													label	: "Vinyl siding",
													value	: 900
												},
												{
													label	: "Hardboard",
													value	: 901
												},
												{
													label	: "Asbestos",
													value	: 1100
												},
												{
													label	: "Unknown or Other",
													value	: 0
												}
											],
							MasonryVeenerType : [
												{ 
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Less than 1/3",
													value	: 1000
												},
												{
													label	: "Between 1/3 and 2/3",
													value	: 3400
												},
												{
													label	: "More than 2/3",
													value	: 6700
												}
							
											],	
			
							NumberOfKitchens : [
												{ 
													label	: "--",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "1",
													value	: 1
												},
												{
													label	: "2",
													value	: 2
												},
												{
													label	: "3",
													value	: 3
												},
												{
													label	: "4",
													value	: 4
												},
												{
													label	: "5",
													value	: 5
												}
							
											],
											
							KitchenGrade : [
												{ 
													label	: "(Kitchen Grade)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Basic",
													value	: 0
												},
												{
													label	: "Builders grade",
													value	: 100
												},
												{
													label	: "Semi-custom",
													value	: 200
												},
												{
													label	: "Custom",
													value	: 300
												},
												{
													label	: "Designer",
													value	: 400
												}
											],				
											
							NumberOfFullBathrooms : [
												{ 
													label	: "--",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "1",
													value	: 1
												},
												{
													label	: "2",
													value	: 2
												},
												{
													label	: "3",
													value	: 3
												},
												{
													label	: "4",
													value	: 4
												},
												{
													label	: "5",
													value	: 5
												}
							
											],	
							FullBathroomGrade : [
												{ 
													label	: "(Full Bathroom Grade)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Basic",
													value	: 0
												},
												{
													label	: "Builders grade",
													value	: 100
												},
												{
													label	: "Semi-custom",
													value	: 200
												},
												{
													label	: "Custom",
													value	: 300
												},
												{
													label	: "Designer",
													value	: 400
												}
											],			
											
							NumberOfHalfBathrooms : [
												{ 
													label	: "--",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "0",
													value	: 0,
													extra	: "data-change-required='false'"
												},
												{
													label	: "1",
													value	: 1
												},
												{
													label	: "2",
													value	: 2
												},
												{
													label	: "3",
													value	: 3
												},
												{
													label	: "4",
													value	: 4
												},
												{
													label	: "5",
													value	: 5
												}
							
											],		
											
							HalfBathroomGrade : [
												{ 
													label	: "(Half Bathroom Grade)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Basic",
													value	: 0
												},
												{
													label	: "Builders grade",
													value	: 100
												},
												{
													label	: "Semi-custom",
													value	: 200
												},
												{
													label	: "Custom",
													value	: 300
												},
												{
													label	: "Designer",
													value	: 400
												}
											],	
																
							NumberOfFireplaces : [
												{ 
													label	: "--",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "0",
													value	: 0
												},
												{
													label	: "1",
													value	: 1
												},
												{
													label	: "2",
													value	: 2
												},
												{
													label	: "3",
													value	: 3
												},
												{
													label	: "4",
													value	: 4
												}
							
											],

							WallHeight : [
												{
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "8ft",
													value   : 8
												},
												{
													label	: "9ft",
													value	: 9
												},
												{
													label	: "10ft",
													value	: 10
												}
											],
    						FloorCoveringType : [
												{
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Hardwood",
													value   : 100
												},
												{
													label	: "Carpet, Acrylic/Nylon",
													value	: 200
												},
												{
													label	: "Carpet, Wool/Berber",
													value	: 210
												},
												{
													label	: "Carpet over Hardwood, Acrylic/Nylon",
													value	: 220
												},
												{
													label	: "Carpet over Hardwood, Wool/Berber",
													value	: 230
												},
												{
													label	: "Carpet over Hardwood, Custom Acrylic",
													value	: 240
												},
												{
													label	: "Carpet, Custom Acrylic/Nylon",
													value	: 250
												},
												{
													label	: "Parquet",
													value	: 300
												},
												{
													label	: "Vinyl",
													value	: 400
												},
												{
													label	: "Tile, Ceramic",
													value	: 500
												},
												{
													label	: "Tile, Marble",
													value	: 510
												},
												{
													label	: "Tile, Ceramic, Imported",
													value	: 520
												},
												{
													label	: "Tile, Mural",
													value	: 530
												},
												{
													label	: "Tile, Terrazzo",
													value	: 540
												},
												{
													label	: "Slate",
													value	: 600
												},
												{
													label	: "Plank",
													value	: 700
												},
												{
													label	: "Brick",
													value	: 800
												},
												{
													label	: "Flagstone",
													value	: 900
												},
												{
													label	: "Granite",
													value	: 1000
												},
												{
													label	: "Plywood (only)",
													value	: 1100
												},
												{
													label	: "Stone",
													value	: 1200
												},
												{
													label	: "Laminated Wood Flooring",
													value	: 1300
												},
												{
													label	: "Cork",
													value	: 1400
												},
												{
													label	: "Concrete, Stamped/Textured",
													value	: 1500
												},
												{
													label	: "Rubber",
													value	: 1600
												}
											],
							NumberOfStepsRisersWithoutHandrails : [
												{
													label	: "3 steps or less",
													value	: 1
												},
												{
													label	: "4 or 5 steps",
													value	: 4
												},
												{
													label	: "6 or more steps",
													value	: 6,
													extra	: "data-new-href='#/section=3&step=3.3.1&error=0' data-new-href-block='true'"
												}
											],
							NumberOfStepsRisersWithoutHandrails_NY_DP3 : [
												{
													label	: "3 steps or less",
													value	: 1
												},
												{
													label	: "4 or 5 steps",
													value	: 4,
													extra	: "data-new-href='#/section=3&step=3.3.1&error=0' data-new-href-block='true'"
												},
												{
													label	: "6 or more steps",
													value	: 6,
													extra	: "data-new-href='#/section=3&step=3.3.1&error=0' data-new-href-block='true'"
												}
											],
							HomeFeatureSqFt : [
												
												{ 
													label	: "(Total Sq. Ft.)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Up to 100 sq ft",
													value	: 100
												},
												{
													label	: "101 to 200 sq ft",
													value	: 200
												},
												{
													label	: "201 to 300 sq ft",
													value	: 300
												},
												{
													label	: "301 to 400 sq ft",
													value	: 400
												},
												{
													label	: "401 to 500 sq ft",
													value	: 500
												},
												{
													label	: "501 to 600 sq ft",
													value	: 600
												},
												{
													label	: "601 to 700 sq ft",
													value	: 700
												},
												{
													label	: "701 to 800 sq ft",
													value	: 800
												},
												{
													label	: "801 to 900 sq ft",
													value	: 900
												},
												{
													label	: "901 to 1000 sq ft",
													value	: 1000
												},
												{
													label	: "1001 to 1100 sq ft",
													value	: 1100
												},
												{
													label	: "1101 to 1200 sq ft",
													value	: 1200
												},
												{
													label	: "1201 to 1300 sq ft",
													value	: 1300
												},
												{
													label	: "1301 to 1400 sq ft",
													value	: 1400
												},
												{
													label	: "Over 1400 sq ft",
													value	: 1500
												}
												
											],			
											
						DistanceToFireHydrant : [
												{ 
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Up to 1000 feet",
													value	: 1000
												},
												{
													label	: "Over 1000 feet",
													value	: 2000
												}
											
											],
						
						SwimmingPool : [
												{ 
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "No Pool",
													value	: 1
												},
												{
													label	: "In Ground",
													value	: 100,
													extra	: "data-show='in-ground-pool'"
												},
												{
													label	: "Above Ground",
													value	:  200,
													extra	: "data-show='above-ground-pool'"
												}
											],

    					RoofDeckAttachmentType : [
												{
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "A 6d 6/12 inch spacing",
													value	: 401
												},
												{
													label	: "B 8d 6/12 inch spacing",
													value	: 402
												},
												{
													label	: "C 8d 6/6 inch spacing",
													value	: 403
												},
												{
													label	: "D Dimensional Lumber Deck",
													value	: 404
												},
												{
													label	: "Reinforce Concrete Structurally Connected",
													value	: 701
												},
												{
													label	: "Other/Unknown/Unidentified/No Attic Access",
													value   : 0
												},
						],

    					RoofWallConnectionType : [
												{
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "Single Wraps",
													value   : 100
												},
												{
													label	: "Double Wraps",
													value   : 101
												},
												{
													label	: "Toe Nailed",
													value   : 200
												},
												{
													label	: "Structurally Connected",
													value   : 600
												},
												{
													label	: "Hurricane Clips",
													value   : 700
												},
												{
													label	: "Other/Unknown/Unidentified/No Attic Access",
													value   : 0
												},
											],
    					SecondaryWaterResistance : [
												{
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "SWR - Yes",
													value   : 100
												},
												{
													label	: "No SWR",
													value   : 200
												},
												{
													label	: "Unknown",
													value   : 0
												},
											],
    					OpeningProtectionTypeWLMForm : [
												{
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "2012 Form / A + A1",
													value   : 201201
												},
												{
													label	: "2012 Form / A + (A2 or A3)",
													value   : 201202
												},
												{
													label	: "2012 Form / B + (B1, B2, or B3)",
													value   : 201203
												},
												{
													label	: "2012 Form C, N, or X",
													value   : 201204
												},
											],
    					RoofGeometryTypeWLMForm : [
							                    {
							                        label: "(Select One)",
                                                    value: "",
                                                    disabled: true,
                                                    selected: true
							                    },
                                                {
                                                    label: "Other",
                                                    value: 0
                                                },
                                                {
                                                    label: "Flat",
                                                    value: 100
                                                },
                                                {
                                                    label: "Hip",
                                                    value: 300
                                                }
						],
						FireAlarmLocation : [
												{ 
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "None",
													value	: 1,
													extra	: "data-uncheck='S4_FireAlarm'"
												},
												{
													label	: "Local",
													value	: 2,
													extra	: "data-check='S4_FireAlarm'"
												},
												{
													label	: "Central",
													value	: 4,
													extra	: "data-check='S4_FireAlarm'"
												}
						
						],		
						
						BurglarAlarmLocation : [
												{ 
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "None",
													value	: 1,
													extra	: "data-uncheck='S4_BurglarAlarm'"
												},
												{
													label	: "Local",
													value	: 2,
													extra	: "data-check='S4_BurglarAlarm'"
												},
												{
													label	: "Central",
													value	: 4,
													extra	: "data-check='S4_BurglarAlarm'"
												}
						
						],	
						
						SprinklersLocation : [
												{ 
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "None",
													value	: 1,
													extra	: "data-uncheck='S4_Sprinklers'"
												},
												{
													label	: "Full Coverage",
													value	: "A",
													extra	: "data-check='S4_Sprinklers'"
												},
												{
													label	: "Partial Coverage",
													value	: "B",
													extra	: "data-check='S4_Sprinklers'"
												}
						
						],
										
						QuoteOtherStructures : [
												
												{
													label	: "10%",
													value	: 1000,
													selected: true
												}
												
											],

						QuoteOtherStructures_FL : [
												{
													label	: "(Select One)",
													value	: "",
													disabled: true,
													selected: true
												},
												{
													label	: "1%",
													value	: 100
												},
												{
													label	: "2%",
													value	: 200
												},
												{
													label	: "5%",
													value	: 500
												},
												{
													label	: "10%",
													value	: 1000
												},
												{
													label	: "15%",
													value	: 1500
												},
												{
													label	: "20%",
													value	: 2000
												}

											],
											
						QuoteSettlementType : [
						
												{
													label	: "Replacement Cost",
													value	: 100
												},
												{
													label	: "Actual Cash Value",
													value	: 200
												}
						
											],

						QuoteSettlementType_SC_DP3 : [

											{
												label	: "Actual Cash Value",
												value	: 200
											}
										],
											
						QuoteLossOfUse : [
												
												{
													label	: "30%",
													value	: 3000,
													selected: true
												}
												
											],
											
						QuoteLossOfUse_VA : [
												
												{
													label	: "20%",
													value	: 2000,
													selected: true
												}
												
											],
						QuoteLossOfUse_AL : [

												{
													label	: "20%",
													value	: 2000,
													selected: true
												}

											],
						QuoteLossOfUse_LA : [

												{
													label	: "20%",
													value	: 2000,
													selected: true
												}

											],
						QuoteLossOfUse_NJ : [

												{
													label	: "20%",
													value	: 2000,
													selected: true
												}

											],
						QuoteLossOfUse_SC : [

												{
													label	: "30%",
													value	: 3000,
													selected: true
												}

											],
						QuoteLossOfUse_SC_DP3 : [

											{
												label	: "20%",
												value	: 2000,
												selected: true
											}

										],
						QuoteLossOfUse_TX : [

											{
												label	: "10%",
												value	: 1000
											},
											{
												label	: "15%",
												value	: 1000
											},
											{
												label	: "20%",
												value	: 2000,
												selected: true
											},
											{
												label	: "25%",
												value	: 2500
											},
											{
												label	: "30%",
												value	: 3000
											}

										],

						QuoteAdditionalLimits : [
												
												{
													label	: "0% - Excluded",
													value	: 0
												},
												{
													label	: "25%",
													value	: 2500
												},
												{
													label	: "50%",
													value	: 5000
												}
												
											],
										
						PersonalPossessions : [
												
												{
													label	: "70%",
													value	: 7000
												},
												{
													label	: "75%",
													value	: 7500
												},
												{
													label	: "80%",
													value	: 8000
												},
												{
													label	: "85%",
													value	: 8500
												},
												{
													label	: "90%",
													value	: 9000
												},
												{
													label	: "95%",
													value	: 9500
												},
												{
													label	: "100%",
													value	: 10000
												}
						
											
											],
											
						PersonalPossessions_VA : [
												
												{
													label	: "70%",
													value	: 7000
												},
												{
													label	: "75%",
													value	: 7500
												},
												{
													label	: "80%",
													value	: 8000
												},
												{
													label	: "85%",
													value	: 8500
												},
												{
													label	: "90%",
													value	: 9000
												},
												{
													label	: "95%",
													value	: 9500
												},
												{
													label	: "100%",
													value	: 10000
												}
						
											
											],
						PersonalPossessions_AL : [

												{
													label	: "70%",
													value	: 7000
												},
												{
													label	: "75%",
													value	: 7500
												},
												{
													label	: "80%",
													value	: 8000
												},
												{
													label	: "85%",
													value	: 8500
												},
												{
													label	: "90%",
													value	: 9000
												},
												{
													label	: "95%",
													value	: 9500
												},
												{
													label	: "100%",
													value	: 10000
												}


											],

						PersonalPossessions_LA : [

												{
													label	: "70%",
													value	: 7000
												},
												{
													label	: "75%",
													value	: 7500
												},
												{
													label	: "80%",
													value	: 8000
												},
												{
													label	: "85%",
													value	: 8500
												},
												{
													label	: "90%",
													value	: 9000
												},
												{
													label	: "95%",
													value	: 9500
												},
												{
													label	: "100%",
													value	: 10000
												}


											],

						PersonalPossessions_NJ : [

											{
												label	: "70%",
												value	: 7000
											},
											{
												label	: "75%",
												value	: 7500
											},
											{
												label	: "80%",
												value	: 8000
											},
											{
												label	: "85%",
												value	: 8500
											},
											{
												label	: "90%",
												value	: 9000
											},
											{
												label	: "95%",
												value	: 9500
											},
											{
												label	: "100%",
												value	: 10000
											}


										],

						PersonalPossessions_SC : [

												{
													label	: "25%",
													value	: 2500
												},
												{
													label	: "30%",
													value	: 3000
												},
												{
													label	: "35%",
													value	: 3500
												},
												{
													label	: "40%",
													value	: 4000
												},
												{
													label	: "45%",
													value	: 4500
												},
												{
													label	: "50%",
													value	: 5000
												},
												{
													label	: "55%",
													value	: 5500
												},
												{
													label	: "60%",
													value	: 6000
												},
												{
													label	: "65%",
													value	: 6500
												},
												{
													label	: "70%",
													value	: 7000
												},
												{
													label	: "75%",
													value	: 7500
												},
												{
													label	: "80%",
													value	: 8000
												},
												{
													label	: "85%",
													value	: 8500
												},
												{
													label	: "90%",
													value	: 9000
												},
												{
													label	: "95%",
													value	: 9500
												},
												{
													label	: "100%",
													value	: 10000
												}


											],
						PersonalPossessions_SC_DP3 : [

												{
													label	: "0%",
													value	: 0
												},
												{
													label	: "5%",
													value	: 500
												},
												{
													label	: "10%",
													value	: 1000
												},
												{
													label	: "15%",
													value	: 1500
												},
												{
													label	: "20%",
													value	: 2000
												},
												{
													label	: "25%",
													value	: 2500
												},
												{
													label	: "30%",
													value	: 3000
												},
												{
													label	: "35%",
													value	: 3500
												},
												{
													label	: "40%",
													value	: 4000
												},
												{
													label	: "45%",
													value	: 4500
												},
												{
													label	: "50%",
													value	: 5000
												}
											],
						PersonalPossessions_NY : [
												
												{
													label	: "70%",
													value	: 7000
												},
												{
													label	: "75%",
													value	: 7500
												},
												{
													label	: "80%",
													value	: 8000
												},
												{
													label	: "85%",
													value	: 8500
												},
												{
													label	: "90%",
													value	: 9000
												},
												{
													label	: "95%",
													value	: 9500
												},
												{
													label	: "100%",
													value	: 10000
												}
						
											
											],
																				
						PersonalPossessions_NY_DP3 : [
												
												{
													label	: "5%",
													value	: 500
												},
												{
													label	: "10%",
													value	: 1000
												},
												{
													label	: "15%",
													value	: 1500
												},
												{
													label	: "20%",
													value	: 2000
												},
												{
													label	: "25%",
													value	: 2500
												}
						
											],

						PersonalPossessions_TX : [

												{
													label	: "20%",
													value	: 2000
												},
												{
													label	: "25%",
													value	: 2500
												},
												{
													label	: "30%",
													value	: 3000
												},
												{
													label	: "35%",
													value	: 3500
												},
												{
													label	: "40%",
													value	: 4000
												},
												{
													label	: "45%",
													value	: 4500
												},
												{
													label	: "50%",
													value	: 5000
												},
												{
													label	: "55%",
													value	: 5500
												},
												{
													label	: "60%",
													value	: 6000
												},
												{
													label	: "65%",
													value	: 6500
												},
												{
													label	: "70%",
													value	: 7000
												},
												{
													label	: "75%",
													value	: 7500
												},
												{
													label	: "80%",
													value	: 8000
												},
												{
													label	: "85%",
													value	: 8500
												},
												{
													label	: "90%",
													value	: 9000
												},
												{
													label	: "95%",
													value	: 9500
												},
												{
													label	: "100%",
													value	: 10000
												}

						],
						PersonalPossessions_FL : [

												{
													label	: "0% - Exclude Personal Property",
													value	: 0
												},
												{
													label	: "25%",
													value	: 2500
												},
												{
													label	: "30%",
													value	: 3000
												},
												{
													label	: "35%",
													value	: 3500
												},
												{
													label	: "40%",
													value	: 4000
												},
												{
													label	: "45%",
													value	: 4500
												},
												{
													label	: "50%",
													value	: 5000
												},
												{
													label	: "55%",
													value	: 5500
												},
												{
													label	: "60%",
													value	: 6000
												},
												{
													label	: "65%",
													value	: 6500
												},
												{
													label	: "70%",
													value	: 7000
												}

											],
						QuotePersonalLiability : [
												
												{
													label	: "$100,000",
													value	: 100000
												},
												{
													label	: "$200,000",
													value	: 200000
												},
												{
													label	: "$300,000",
													value	: 300000
												},
												{
													label	: "$500,000",
													value	: 500000
												}					
											
											],
											
						QuotePersonalLiability_NY_DP3 : [
												
												{
													label	: "$0 - Excluded",
													value	: 0
												},
												{
													label	: "$100,000",
													value	: 100000
												},
												{
													label	: "$200,000",
													value	: 200000
												},
												{
													label	: "$300,000",
													value	: 300000
												},
												{
													label	: "$500,000",
													value	: 500000
												}					
											
											],

						QuotePersonalLiability_TX : [

											{
												label	: "$100,000",
												value	: 100000
											},
											{
												label	: "$200,000",
												value	: 200000
											},
											{
												label	: "$300,000",
												value	: 300000
											},
											{
												label	: "$500,000",
												value	: 500000
											}

										],
						QuotePersonalLiability : [

											{
												label	: "$100,000",
												value	: 100000
											},
											{
												label	: "$200,000",
												value	: 200000
											},
											{
												label	: "$300,000",
												value	: 300000
											},
											{
												label	: "$500,000",
												value	: 500000
											},
											{
												label	: "$1,000,000",
												value	: 1000000
											}

										],

						QuoteTheftCoverage : [
												
												{
													label	: "On Premises Only",
													value	: 100
												},
												{
													label	: "On and Off Premises",
													value	: 200
												}					
											
											],
											
                        QuoteTheftCoverage_NY_DP3 : [

												{
													label	: "Excluded",
													value	: 1
												},
												{
													label	: "On Premises Only",
													value	: 100
												}
					
											],
						QuoteTheftCoverage_SC_DP3 : [

											{
												label	: "Excluded",
												value	: 1
											},
											{
												label	: "On Premises Only",
												value	: 100
											}

										],
						QuoteIdentityFraudCoverage : [
												
												{
													label	: "$0 - Excluded",
													value	: 0
												},
												{
													label	: "$25,000",
													value	: 25000
												}					
											
											],
											
						QuoteJewlryCoverage : [
											
												{
													label	: "$1,500",
													value	: 1500
												},
												{
													label	: "$2,000",
													value	: 2000
												},
												{
													label	: "$2,500",
													value	: 2500
												},
												{
													label	: "$3,000",
													value	: 3000
												},
												{
													label	: "$3,500",
													value	: 3500
												},
												{
													label	: "$4,000",
													value	: 4000
												},
												{
													label	: "$4,500",
													value	: 4500
												},
												{
													label	: "$5,000",
													value	: 5000
												},
												{
													label	: "$5,500",
													value	: 5500
												},
												{
													label	: "$6,000",
													value	: 6000
												},
												{
													label	: "$6,500",
													value	: 6500
												}
												
											],

						QuoteJewlryCoverage_SC : [

												{
													label	: "$1,500",
													value	: 1500
												},
												{
													label	: "$2,500",
													value	: 2500
												},
												{
													label	: "$3,500",
													value	: 3500
												},
												{
													label	: "$4,500",
													value	: 4500
												},
												{
													label	: "$5,500",
													value	: 5500
												},
												{
													label	: "$6,500",
													value	: 6500
												}

											],
											
						QuoteMedicalPayments : [
												
												{
													label	: "$1,000",
													value	: 1000
												},
												{
													label	: "$2,000",
													value	: 2000
												},
												{
													label	: "$5,000",
													value	: 5000
												}
												
											],
											
											
						QuoteMedicalPayments_NY_DP3 : [
												
												{
													label	: "$0 - Excluded",
													value	: 0
												},
												{
													label	: "$1,000",
													value	: 1000
												},
												{
													label	: "$2,000",
													value	: 2000
												},
												{
													label	: "$5,000",
													value	: 5000
												}
												
											],

						QuoteMedicalPayments_TX : [

												{
													label	: "$1,000",
													value	: 1000
												},
												{
													label	: "$2,000",
													value	: 2000
												},
												{
													label	: "$5,000",
													value	: 5000
												}

											],
											
						QuoteOverflowCoverage : [
												
												{
													label	: "$0 - Excluded",
													value	: 0
												},
												{
													label	: "$5,000",
													value	: 5000
												}
												
											],
												
						QuoteLossAssessment : [
												
												{
													label	: "$1,000",
													value	: 1000
												},
												{
													label	: "$2,000",
													value	: 2000
												},
												{
													label	: "$5,000",
													value	: 5000
												},
												{
													label	: "$10,000",
													value	: 10000
												},
												{
													label	: "$15,000",
													value	: 15000
												},
												{
													label	: "$20,000",
													value	: 20000
												},
												{
													label	: "$25,000",
													value	: 25000
												},
												{
													label	: "$30,000",
													value	: 30000
												},
												{
													label	: "$35,000",
													value	: 35000
												},
												{
													label	: "$40,000",
													value	: 40000
												},
												{
													label	: "$45,000",
													value	: 45000
												},
												{
													label	: "$50,000",
													value	: 50000
												}
												
											],

						QuoteLossAssessment_NY_HO3 : [

											{
												label	: "$1,000",
												value	: 1000
											},
											{
												label	: "$2,000",
												value	: 2000
											},
											{
												label	: "$5,000",
												value	: 5000
											},
											{
												label	: "$10,000",
												value	: 10000
											},
											{
												label	: "$15,000",
												value	: 15000
											},
											{
												label	: "$20,000",
												value	: 20000
											},
											{
												label	: "$25,000",
												value	: 25000
											}

										],
						QuoteLossAssessment_SC : [

												{
													label	: "$2,000",
													value	: 2000
												},
												{
													label	: "$5,000",
													value	: 5000
												},
												{
													label	: "$10,000",
													value	: 10000
												}

											],
						QuoteLossAssessment_SC_DP3 : [
												{
													label	: "0%",
													value	: 0
												},
												{
													label	: "$1,000",
													value	: 1000
												},
												{
													label	: "$2,000",
													value	: 2000
												},
												{
													label	: "$5,000",
													value	: 5000
												},
												{
													label	: "$10,000",
													value	: 10000
												}

											],
						QuoteLossAssessment_NJ : [

												{
													label	: "$1,000",
													value	: 1000
												},
												{
													label	: "$2,000",
													value	: 2000
												},
												{
													label	: "$5,000",
													value	: 5000
												},
												{
													label	: "$10,000",
													value	: 10000
												},
												{
													label	: "$15,000",
													value	: 15000
												},
												{
													label	: "$20,000",
													value	: 20000
												},
												{
													label	: "$25,000",
													value	: 25000
												}

											],
						QuoteLossAssessment_AL : [

												{
													label	: "$1,000",
													value	: 1000
												},
												{
													label	: "$2,000",
													value	: 2000
												},
												{
													label	: "$5,000",
													value	: 5000
												},
												{
													label	: "$10,000",
													value	: 10000
												},
												{
													label	: "$15,000",
													value	: 15000
												},
												{
													label	: "$20,000",
													value	: 20000
												},
												{
													label	: "$25,000",
													value	: 25000
												}

											],
						QuoteLossAssessment_LA : [

												{
													label	: "$1,000",
													value	: 1000
												},
												{
													label	: "$2,000",
													value	: 2000
												},
												{
													label	: "$5,000",
													value	: 5000
												},
												{
													label	: "$10,000",
													value	: 10000
												},
												{
													label	: "$15,000",
													value	: 15000
												},
												{
													label	: "$20,000",
													value	: 20000
												},
												{
													label	: "$25,000",
													value	: 25000
												}

											],
						QuoteLossAssessment_FL : [

												{
													label	: "$1,000 - Included",
													value	: 1000
												},
												{
													label	: "$2,000",
													value	: 2000
												},
												{
													label	: "$3,000",
													value	: 3000
												}

											],
						QuoteLawOrdinanceCoverage : [
												
												{
													label	: "10%",
													value	: 1000
												},
												{
													label	: "25%",
													value	: 2500
												},
												{
													label	: "50%",
													value	: 5000
												}
												
											],

						QuoteLawOrdinanceCoverage_VA : [
												
												{
													label	: "10%",
													value	: 1000
												},
												{
													label	: "25%",
													value	: 2500
												}
												
											],
						QuoteLawOrdinanceCoverage_AL : [

												{
													label	: "10%",
													value	: 1000
												},
												{
													label	: "25%",
													value	: 2500
												}

											],
						QuoteLawOrdinanceCoverage_LA : [

												{
													label	: "10%",
													value	: 1000
												},
												{
													label	: "25%",
													value	: 2500
												}

											],
						QuoteLawOrdinanceCoverage_NJ : [

												{
													label	: "10%",
													value	: 1000
												},
												{
													label	: "25%",
													value	: 2500
												}

											],

						QuoteLawOrdinanceCoverage_TX : [

												{
													label	: "10%",
													value	: 1000
												},
												{
													label	: "25%",
													value	: 2500
												},
												{
													label	: "50%",
													value	: 5000
												}

											],
						QuoteLawOrdinanceCoverage_SC : [

												{
													label	: "10%",
													value	: 1000
												},
												{
													label	: "25%",
													value	: 2500
												},
												{
													label	: "50%",
													value	: 5000
												}

											],

						QuoteLawOrdinanceCoverage_FL : [

												{
													label	: "25%",
													value	: 2500
												},
												{
													label	: "50%",
													value	: 5000
												}

											],
											
						QuoteLawHurricaneDeductible : [
												
												{ 
													label	: "N/A",
													value	: 0
												},
												{
													label	: "1%",
													value	: 100
												},
												{
													label	: "2%",
													value	: 200
												},
												{
													label	: "3%",
													value	: 300
												},
												{
													label	: "3% - Category 2 (NY only)",
													value	: 3002
												},
												{
													label	: "4%",
													value	: 400
												},
												{
													label	: "5%",
													value	: 500
												}
												
											],
											
						QuoteRegularLoss : [
												
												{ 
													label	: "$500",
													value	: 5
												},
												{
													label	: "$1,000",
													value	: 10
												},
												{
													label	: "$2,500",
													value	: 25
												},
												{
													label	: "$5,000",
													value	: 50
												}
												
											],

						QuoteRegularLoss_TX : [
												{
													label	: "1%",
													value	: 100
												},
												{
													label	: "2%",
													value	: 200
												},
												{
													label	: "3%",
													value	: 300
												},
												{
													label	: "4%",
													value	: 400
												},
												{
													label	: "5%",
													value	: 500
												},
												{
													label	: "$1,000",
													value	: 10
												},
												{
													label	: "$1,500",
													value	: 15
												},
												{
													label	: "$2,000",
													value	: 20
												},
												{
													label	: "$2,500",
													value	: 25
												},
												{
													label	: "$3,000",
													value	: 30
												},
												{
													label	: "$4,000",
													value	: 40
												},
												{
													label	: "$5,000",
													value	: 50
												},
												{
													label	: "$10,000",
													value	: 101
												}

											],
						QuoteRegularLoss_SC : [

												{
													label	: "$500",
													value	: 5
												},
												{
													label	: "$1,000",
													value	: 10
												},
												{
													label	: "$1,500",
													value	: 15
												},
												{
													label	: "$2,000",
													value	: 20
												},
												{
													label	: "$2,500",
													value	: 25
												},
												{
													label	: "$3,000",
													value	: 30
												},
												{
													label	: "$4,000",
													value	: 40
												},
												{
													label	: "$5,000",
													value	: 50
												}

											],

						QuoteRegularLoss_SC_DP3 : [

											{
												label	: "$1,000",
												value	: 10
											},
											{
												label	: "$1,500",
												value	: 15
											},
											{
												label	: "$2,000",
												value	: 20
											},
											{
												label	: "$2,500",
												value	: 25
											},
											{
												label	: "$3,000",
												value	: 30
											},
											{
												label	: "$4,000",
												value	: 40
											},
											{
												label	: "$5,000",
												value	: 50
											}

										],

						HurricaneDeductible : [

												{
													label	: "2%",
													value	: 200
												},
												{
													label	: "3%",
													value	: 300
												},
												{
													label	: "4%",
													value	: 400
												},
												{
													label	: "5%",
													value	: 500
												}

											],
						HurricaneDeductible_SC : [

												{
													label	: "None",
													value	: 0
												},
												{
													label	: "1%",
													value	: 100
												},
												{
													label	: "2%",
													value	: 200
												},
												{
													label	: "3%",
													value	: 300
												},
												{
													label	: "4%",
													value	: 400
												},
												{
													label	: "5%",
													value	: 500
												}

											],
						HurricaneDeductible_NJ : [

												{
													label	: "None",
													value	: 0
												},
												{
													label	: "2%",
													value	: 200
												},
												{
													label	: "3%",
													value	: 300
												},
												{
													label	: "4%",
													value	: 400
												},
												{
													label	: "5%",
													value	: 500
												}

											],
						HurricaneDeductible_FL : [

												{
													label	: "2%",
													value	: 200
												},
												{
													label	: "3%",
													value	: 300
												},
												{
													label	: "4%",
													value	: 400
												},
												{
													label	: "5%",
													value	: 500
												},
												{
													label	: "10%",
													value	: 1000
												},
												{
													label	: "$500",
													value	: 5
												}

											],
						WindHailDeductible : [

												{
													label	: "3%",
													value	: 300
												},
												{
													label	: "4%",
													value	: 400
												},
												{
													label	: "5%",
													value	: 500
												}

											],
						WindHailDeductible_AL : [
											{
												label	: "2%",
												value	: 200
											},
											{
												label	: "3%",
												value	: 300
											},
											{
												label	: "4%",
												value	: 400
											},
											{
												label	: "5%",
												value	: 500
											}

										],
						WindHailDeductible_LA : [

											{
												label	: "2%",
												value	: 200
											},
											{
												label	: "3%",
												value	: 300
											},
											{
												label	: "4%",
												value	: 400
											},
											{
												label	: "5%",
												value	: 500
											}

										]
									
	
}