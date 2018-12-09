import { createValidator, required, SocialSecurityNumber, maxLength, date, email,  checkField, checkNotField, minLength, text, alphaNumeric, address, currentState, numeric, futureDate, squareFoot, notAfter, primetime } from './validationRules.js'
import TermNames from '../frontendOptions/termNames.js'

const step3Validation = createValidator({
    [TermNames.MultiPolicy] : [required],
    [TermNames.AutoPolicyNumber] : [checkField(TermNames.MultiPolicy, '100'), alphaNumeric],
    [TermNames.PrimeTimeDiscount] : [required],
    [TermNames.Insured1BirthDate] : [required, date, primetime(50)],
    [TermNames.Insured1SSN] : [required, SocialSecurityNumber ],
    [TermNames.InsuredEmailAddress] : [required, email],
    [TermNames.AcceptLegalTerms] : [required],

})

export default step3Validation