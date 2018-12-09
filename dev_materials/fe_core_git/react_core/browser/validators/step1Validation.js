import { createValidator, required, maxLength, minLength, text, alphaNumeric, address, currentState, numeric, checkField } from './validationRules.js'
import TermNames from '../frontendOptions/termNames.js'

const step1Validation = createValidator({
    [TermNames.InsuredFirstName] : [required, maxLength(20), text ],
    [TermNames.InsuredLastName] : [required, maxLength(20), text],
    [TermNames.PropertyStreetAddress] : [required, maxLength(50)],
    [TermNames.PropertyCity] : [required, maxLength(50), text],
    [TermNames.PropertyState] : [required, maxLength(50), text, currentState],
    [TermNames.PropertyZipCode] : [required, maxLength(5), numeric ],
    [TermNames.PropertyUsage] : [required],
    [TermNames.MonthsUnoccupied] : [checkField(TermNames.PropertyUsage, '300-100'), checkField(TermNames.PropertyUsage, '200-100')]
})

export default step1Validation