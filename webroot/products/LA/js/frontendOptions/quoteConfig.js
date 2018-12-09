/*
	Quote Field Setup
*/


// List all Quote fields to be displayed
var quoteFields = Array("CoverageA", "ReplacementCostBuilding", "ReplacementCostRounded", "PersonalPropertyReplacementCost", "CoverageB", "CoverageC", "CoverageD", "CoverageE", "CoverageF","IdentityFraudCoverage", "JewelrySpecialLimits", "WaterBackupCoverage", "LossAssessmentCoverage", "AdditionalAmountsOfInsurance", "IncreasedOrdinanceLimit", "AllOtherPerilsDeductible", "PersonalInjuryCoverage", "MechanicalBreakdownCoverage", "EarthquakeCoverage", "WindHailDeductible");

//Format quote fields for currency
var currencyTerms = Array("TotalPremium", "CoverageA", "ReplacementCostBuilding", "ReplacementCostRounded", "CoverageB", "CoverageC", "CoverageD", "CoverageE", "CoverageF", "IdentityFraudCoverage", "JewelrySpecialLimits", "WaterBackupCoverage", "LossAssessmentCoverage", "AllOtherPerilsDeductible");

//Format quote fields to Yes/No
var YesNoTerms = Array("PersonalInjuryCoverage", "MechanicalBreakdownCoverage", "EarthquakeCoverage");