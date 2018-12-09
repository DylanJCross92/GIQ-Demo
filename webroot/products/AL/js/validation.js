function Validator() {


	this.isQuoteID = function(string) {
		
		return true;
	}

	this.isZipCode = function (string) {
		
		string = $.trim(string);
		
        return /^\d{5}$/.test(string);
    }
	
	this.maxLength = function(string, maxLength) {
	
		string = $.trim(string);
		
		return string.length<=maxLength&&string.length>0;
		
	}
	
	this.text = function(string, maxLength) {
		
		string = $.trim(string);
		maxLength = maxLength ? maxLength : 1000;
		
		return /^[a-zA-Z ]+$/.test(string)&&this.maxLength(string, maxLength);
		
	}
	
	this.SocialSecurityNumber = function(string){
		
		string = $.trim(string);
		
		return /^\d{3}-?\d{2}-?\d{4}$/.test(string);
	}
	
	this.numeric = function(string, maxLength) {
		
		string = $.trim(string);
		
		maxLength = maxLength ? maxLength : 1000;
	
		//return /^\d+$/.test(string)&&this.maxLength(string, maxLength);	
		return /^\d+(-\d+)*$/.test(string)&&this.maxLength(string, maxLength);	
		
	}
	
	this.alphaNumeric = function(string, maxLength) {

		string = $.trim(string);
		maxLength = maxLength ? maxLength : 1000;
		
		return /^(?:(?:[a-zA-Z0-9.]+ *)+)$/.test(string)&&this.maxLength(string, maxLength);
		
	}

    this.date = function(string, maxAge){

        // maxAge = maxAge!=5000 ? maxAge : false;
         string = $.trim(string);
        // if(string.length !== 10) return false;
        var result = true;
        //
        // if(maxAge)
        // {
        //     var enteredYear = new Date(string).getFullYear();
        //     var currentYear = new Date().getFullYear();
        //
        //     var enteredAge = currentYear - enteredYear;
        //     result = enteredAge >= maxAge;
        //
			// /*var currentAge = Date.parse(string);
			//  var allowedAge = maxAge * 365 * 24 * 60 * 60;
			//  result = (allowedAge - currentAge) >= 0;*/
        // }

        return /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/.test(string) && result;

    }

    this.maxAge = function(string, maxAge){
         maxAge = maxAge!=5000 ? maxAge : false;
        string = $.trim(string);
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

	this.futureDate = function(string){
		
		var formattedDate = new Date(string);
		var futureDate = formattedDate.setFullYear(formattedDate.getFullYear());
		var todayDate = new Date();
		
		return futureDate < todayDate;
			
	}

	this.before1900 = function(string) {
		var result = true;
        var enteredYear = new Date(string).getFullYear();
        return enteredYear > 1900;
	}

	this.address = function(string, maxLength) {

		string = $.trim(string);
		maxLength = maxLength ? maxLength : 1000;

		return this.maxLength(string, maxLength);

	}

	this.futureYear = function(string){
		
		string = $.trim(string);
		var today = new Date().getFullYear();
		
		return today >= string;
		
	}
	
	this.year = function(string){
		
		string = $.trim(string);
		
		return /^(17|18|19|)\d{4}$/.test(string);
		
	}
	
	this.currency = function(string, maxLength) {
		
		string = $.trim(string);
		maxLength = maxLength ? maxLength : 1000;
		
		var cleanString = string.replace(/[^\d\.\-\ ]/g, '');

		return /^\$?(?!0.00)\d{1,3}(,\d{3})*(\.\d\d)?$/.test(string)&&cleanString<=maxLength;
			
	}
	
	this.email = function(string){
		
		string = $.trim(string);
		var regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]/\/\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regexp.test(string)&&this.maxLength(string, 50);

	}
	
	this.isEmail = function(string){
		
		return this.email(string);
	}
	
	this.dropdown = function(string, maxLength){
		
		string = $.trim(string);
	
		return string ? true : false;	
	}
	
	this.radio = function(string) {
	
		string = $.trim(string);
		
		return string ? true : false;
	}
	
	this.checkbox = function(string) {

		string = $.trim(string);
		
		return string ? true : false;
	}
	
}