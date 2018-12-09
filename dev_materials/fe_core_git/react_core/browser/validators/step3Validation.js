import { createValidator, required, maxLength, checkField, checkFeature, checkNotField, yearRoof, minLength, text, alphaNumeric, address, currentState, numeric, futureDate, squareFoot, notAfter, homeFeatures } from './validationRules.js'
import TermNames from '../frontendOptions/termNames.js'

const step3Validation = createValidator({
    [TermNames.ConstructionYear] : [required, maxLength(4), futureDate ],
    [TermNames.SquareFootUnderRoof] : [required, maxLength(20), numeric, squareFoot],
    [TermNames.NumberOfStories] : [required],
    [TermNames.StructureType] : [required],
    [TermNames.ConstructionYearRoof] : [required, maxLength(4), futureDate, yearRoof ],
    [TermNames.RoofCoveringType] : [required],
    [TermNames.RoofGeometryType] : [required],
    [TermNames.HomeStyle] : [required],
    [TermNames.GarageSize] : [required],
    [TermNames.GarageType] : [checkField(TermNames.GarageSize, '10'), checkField(TermNames.GarageSize, '20'), checkField(TermNames.GarageSize, '30')],
    [TermNames.SquareFootUnderRoofGarage] : [checkField(TermNames.GarageSize, '10'), checkField(TermNames.GarageSize, '20'), checkField(TermNames.GarageSize, '30')],
    [TermNames.FoundationType] : [required],
    [TermNames.ConstructionType] : [required],
    [TermNames.Cladding] : [checkField(TermNames.ConstructionType, '100')],
    [TermNames.MasonryVeneerPercentage] : [checkField(TermNames.ConstructionType, '101')],
    [TermNames.NumberOfKitchens] : [required],
    [TermNames.KitchenQuality] : [required],
    [TermNames.NumberOfFullBaths] : [required],
    [TermNames.FullBathQuality] : [required],
    [TermNames.NumberOfHalfBaths] : [required],
    [TermNames.HalfBathQuality] : [checkNotField([TermNames.NumberOfHalfBaths, '0'])],
    [TermNames.NumberOfFireplaces] : [required],
    [TermNames.HeatPump] : [required],
    [TermNames.CentralAir] : [required],
    [TermNames.WoodStove] : [required],
    [TermNames.Pets] : [required],
    [TermNames.Dogs] : [checkField(TermNames.Pets, '100')],
    [TermNames.DistanceFireHydrant] : [required],
    [TermNames.PoolType] : [required],
    [TermNames.DivingBoardSlide] : [checkNotField(TermNames.PoolType, '1')],
    [TermNames.ImmovablePoolLadder] : [checkField(TermNames.PoolType, '200')],
    [TermNames.PoolFence] : [checkField(TermNames.PoolType, '100')],
    [TermNames.HomeFeaturesWoodDeckSF] : [checkFeature(TermNames.HomeFeaturesWoodDeck)],
    [TermNames.HomeFeaturesCompositeDeckSF] : [checkFeature(TermNames.HomeFeaturesCompositeDeck)],
    [TermNames.HomeFeaturesOpenPorchSF] : [checkFeature(TermNames.HomeFeaturesOpenPorch)],
    [TermNames.HomeFeaturesGreenhouseSF] : [checkFeature(TermNames.HomeFeaturesGreenhouse)],
    [TermNames.HomeFeaturesScreenedPorchSF] : [checkFeature(TermNames.HomeFeaturesScreenedPorch)],
    [TermNames.HomeFeaturesOpenBreezewaySF] : [checkFeature(TermNames.HomeFeaturesOpenBreezeway)],
    [TermNames.HomeFeaturesScreenedBreezewaySF] : [checkFeature(TermNames.HomeFeaturesScreenedBreezeway)],
    [TermNames.HomeFeaturesWoodDeck] : [homeFeatures],
    [TermNames.HomeFeaturesCompositeDeck] : [homeFeatures],
    [TermNames.HomeFeaturesOpenPorch] : [homeFeatures],
    [TermNames.HomeFeaturesGreenhouse] : [homeFeatures],
    [TermNames.HomeFeaturesScreenedPorch] : [homeFeatures],
    [TermNames.HomeFeaturesOpenBreezeway] : [homeFeatures],
    [TermNames.HomeFeaturesScreenedBreezeway] : [homeFeatures]







})

export default step3Validation