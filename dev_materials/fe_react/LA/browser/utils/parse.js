import TermNames from '../frontendOptions/termNames.js'

export default function parse (value, name) {

    if(!value) return value;

    switch(name) {

        case TermNames.PriorExpirationDate:
        case TermNames.LossDate1:
        case TermNames.LossDate2:
        case TermNames.LossDate3:
            let day = value.getDate()
            day = day < 10 ? `0${day}` : day + ''
            let month = value.getMonth() + 1
            month = month < 10 ? `0${month}` : ''+month
            let year = value.getFullYear()
            return `${month}/${day}/${year}`

        case TermNames.PriorCoverageA:

            return value.replace(/[^0-9\.]+/g, '')

        case TermNames.Insured1SSN:
            let val = value.replace(/\D/g, '')
            let newVal = '';
            if(val.length > 4) {
                value = val;
            }
            if((val.length > 3) && (val.length < 6)) {
                newVal += val.substr(0, 3) + '-';
                val = val.substr(3);
            }
            if (val.length > 5) {
                newVal += val.substr(0, 3) + '-';
                newVal += val.substr(3, 2) + '-';
                val = val.substr(5);
            }
            newVal += val;
            return newVal;



        case TermNames.LossAmount1:
        case TermNames.LossAmount2:
        case TermNames.LossAmount3:
            value = value? value.trim() : ''
            // return  value ? value.replace(/[^\d\.\-\ ]/g, '') : ''
            console.log(value)
            if (value){
                value = value.replace(/\$/g, '').replace(/,/g, '').split('.')[0]
                value = value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
            }
             return value;

        case TermNames.Insured1BirthDate:
            let date = value;

            date = date.split("/");

            if(date.length == 1 && date[0].length == 8 ) {
                return `${date[0].slice(0,2)}/${date[0].slice(2,4)}/${date[0].slice(4)}`
            }

            let m = parseInt(date[0], 10);
            m = m < 10 ? 0+''+m : m;

            let d = parseInt(date[1], 10);
            d = d < 10 ? 0+''+d : d;

            if(m && d && date[2])
            {
                return m+"/"+d+"/"+date[2]
            }
            else return value



        default:
            return value;
    }


}