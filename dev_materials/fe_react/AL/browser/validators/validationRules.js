import errors from '../frontendOptions/errorMessages.js'



const isEmpty = value => value === undefined || value === null || value === '';

const join = (rules) => (value, key, data) => rules.map(rule => rule(value, key, data)).filter(error => !!error)[0 /* first error */ ];

export function required(value, key) {

    if(isEmpty(value)) {
        return errors[key] && errors[key]['errorMessageEmpty'] ? errors[key]['errorMessageEmpty'] : "Unknown error";
    }
}

export function maxLength(max) {
    return (value, key) => {
        if (!isEmpty(value) && value.length > max) {
            return errors[key] && errors[key]['errorMessageMaxLength'] ? errors[key]['errorMessageMaxLength'] : (errors[key]['errorMessageInvalid'] ? errors[key]['errorMessageInvalid'] : "Unknown error")
        }
    };
}

export function minLength(min) {
    return value => {
        if (!isEmpty(value) && value.length < min) {
            return `Must be at least ${min} characters`;
        }
    };
}

export function text(string, key) {
    if(!isEmpty(string)) {
        string = string ? string.trim() : "";
        return !/^[a-zA-Z ]+$/.test(string) && (errors[key] && errors[key]['errorMessageInvalid'] ? errors[key]['errorMessageInvalid'] : "Unknown error");
    }
}

export function alphaNumeric(string, key){
    if(!isEmpty(string)) {
        string = string ? string.trim() : "";
        return !/^(?:(?:[a-zA-Z0-9.]+ *)+)$/.test(string) && (errors[key] && errors[key]['errorMessageInvalid'] ? errors[key]['errorMessageInvalid'] : "Unknown error");
    }
}

export function numeric (string, key){
    if(!isEmpty(string)) {
        string = string ? string.trim() : "";
        return !/^\d+(-\d+)*$/.test(string) && (errors[key] && errors[key]['errorMessageInvalid'] ? errors[key]['errorMessageInvalid'] : "Unknown error");
    }
}
export function currentState (string, key){
    if(!isEmpty(string)) {
        string = string ? string.trim() : "";
        return string != Product_State && 'Please enter an address in ${Product_state}';
    }
}

export function checkField(field, match) {
    return (value, key, data) => {



        if(data[field] == match && isEmpty(value)){
            return errors[key] && (errors[key]['errorMessageEmpty'] ? errors[key]['errorMessageEmpty'] : "Unknown error");
        }
    }
}

export function checkNotField(field, match) {
    return (value, key, data) => {


        if(data[field] != match && isEmpty(value)){
            return errors[key] && (errors[key]['errorMessageEmpty'] ? errors[key]['errorMessageEmpty'] : "Unknown error");
        }
    }
}

export function checkFeature(feature){
    return (value, key, data) => {
        if (data[feature] == true && isEmpty(value)){
            return errors[key] && (errors[key]['errorMessageEmpty'] ? errors[key]['errorMessageEmpty'] : "Unknown error");
        }
    }
}

export function notAfter(field) {

    return (value, key, data) => {
        if(!isEmpty(value)){
            if (+value > +data[field]){
                return errors[key]['errorMessageRoofBelowBuildYear'] ? errors[key]['errorMessageRoofBelowBuildYear'] : "Unknown error"
            }
        }

    }
}

export function date (string, key) {
    if(!isEmpty(string)) {

        return !/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/.test(string) && (errors[key] && errors[key]['errorMessageInvalid'] ? errors[key]['errorMessageInvalid'] : "Unknown Error")
    }
}

export function claimNumber (claim){
    return (value, key, data) => {
        if(claim <= data['NumberOfClaims'] && isEmpty(value)){
            return errors[key] && (errors[key]['errorMessageEmpty'] ? errors[key]['errorMessageEmpty'] : "Unknown error" )
        }
    }
}

export function futureDate(string, key) {
    if(!isEmpty(string)) {
        var formattedDate = new Date(string);
        var futureDate = formattedDate.setFullYear(formattedDate.getFullYear());
        var todayDate = new Date();

        return futureDate > todayDate && (errors[key] && errors[key]['errorMessageFutureDate'] ? errors[key]['errorMessageFutureDate'] : "Unknown error");
    }
}

export function currency (string, key) {
    if(!isEmpty(string)) {
        string = string ? string.trim() : "";


        // var cleanString = string.replace(/[^\d\.\-\ ]/g, '');

        return !/^\d{1,3}(,\d{3})*(\.\d+)?$/.test(string) && (errors[key] && errors[key]['errorMessageInvalid'] ? errors[key]['errorMessageInvalid'] : "Unknown Error")
    }
}

export function squareFoot (string, key) {
    if (!isEmpty(string)){
        string = string ? string.trim() : "";
        if (+string < 200){
            return (errors[key] && errors[key]['errorMessageInvalid'] ? errors[key]['errorMessageInvalid'] : "Unknown Error")
        }
    }
}

 export function email (string, key) {

     if(!isEmpty(string)) {
         string = string ? string.trim() : "";
         var regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]/\/\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         return !regexp.test(string) && (errors[key] && errors[key]['errorMessageInvalid'] ? errors[key]['errorMessageInvalid'] : "Unknown Error")
     }
}

export function SocialSecurityNumber (string, key){
    if(!isEmpty(string)) {
        string = string ? string.trim() : "";

        return !/^\d{3}-?\d{2}-?\d{4}$/.test(string) && (errors[key] && errors[key]['errorMessageInvalid'] ? errors[key]['errorMessageInvalid'] : "Unknown Error")
    }
}

export function primetime(Age) {
    return (string, key, data) => {

        if (!isEmpty(string)) {
            string = string ? string.trim() : "";
            if(data['PrimeTimeDiscount'] == '100') {
                return !maxAge(string, Age) && `Based on your retiree entry, your Date of Birth must be at least ${Age} years old`
            }
        }
    }
}

export function yearRoof(value, key, data){
    if(!isEmpty(value)){
        value = value ? value.trim() : ''
        if(+value < +data.ConstructionYear){
            return (errors[key] && errors[key]['errorMessageRoofBelowBuildYear']) ? errors[key]['errorMessageRoofBelowBuildYear'] : 'Unknown Error'
        }
    }
}


 const maxAge = function(string, maxAge){

    var result = true;

    if(maxAge) {
        var birthDate = new Date(string);
        var birthYear = birthDate.getFullYear();
        var birthMonth = birthDate.getMonth();
        var birthDay = birthDate.getDate();
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var currentMonth = currentDate.getMonth();
        var currentDay = currentDate.getDate();
        var calculatedAge = currentYear - birthYear;

        if (currentMonth < birthMonth - 1) {
            calculatedAge--;
        }
        if (birthMonth == currentMonth && currentDay < birthDay) {
            calculatedAge--;
        }

        result = calculatedAge >= maxAge
    }

    return /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/.test(string) && result;

}

export function createValidator(rules) {
    return (data = {}) => {
        const currentErrors = {};
        Object.keys(rules).forEach((key) => {
            const rule = join([].concat(rules[key])); // concat enables both functions and arrays of functions

            const error = rule(data[key], key, data);

            if (error) {
                currentErrors[key] = error;
            }
        });
        return currentErrors;
    };
}
