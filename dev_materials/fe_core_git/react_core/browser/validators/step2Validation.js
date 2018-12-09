import { createValidator, required, maxLength, minLength, maxValue, text, alphaNumeric, address, currentState, numeric, checkField, date, futureDate, currency, claimNumber } from './validationRules.js'
import TermNames from '../frontendOptions/termNames.js'

const step2Validation = createValidator({
    [TermNames.CurrentInsurance] : [required ],
    [TermNames.PriorCarrierNumber] : [checkField(TermNames.CurrentInsurance, '-')],
    [TermNames.PriorCarrierOther] : [checkField(TermNames.PriorCarrierNumber, '999'), alphaNumeric],
    [TermNames.PriorExpirationDate] : [checkField(TermNames.CurrentInsurance, '-'), date],
    [TermNames.PriorCoverageA] : [checkField(TermNames.CurrentInsurance, '-'), maxLength(999999)],
    [TermNames.NumberOfClaims] : [required, maxLength(20), numeric],
    [TermNames.LossDate1] : [claimNumber(1), date, futureDate],
    [TermNames.LossAmount1]: [claimNumber(1), currency, maxValue(5000000)],
    [TermNames.LossType1]: [claimNumber(1)],
    [TermNames.LossCatIndicator1]: [claimNumber(1)],
    [TermNames.LossDescription1]: [claimNumber(1), maxLength(5000)],
    [TermNames.LossDate2]: [claimNumber(2), date, futureDate],
    [TermNames.LossAmount2]: [claimNumber(2), currency, maxValue(5000000)],
    [TermNames.LossType2]: [claimNumber(2)],
    [TermNames.LossCatIndicator2]: [claimNumber(2)],
    [TermNames.LossDescription2]: [claimNumber(2), maxLength(5000)],
    [TermNames.LossDate3]: [claimNumber(3), date, futureDate],
    [TermNames.LossAmount3]: [claimNumber(3), currency, maxValue(5000000)],
    [TermNames.LossType3]: [claimNumber(3)],
    [TermNames.LossCatIndicator3]: [claimNumber(3)],
    [TermNames.LossDescription3]: [claimNumber(3), maxLength(5000)],
})

export default step2Validation