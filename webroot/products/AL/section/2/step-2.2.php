<?php require("../../functions.php");?>

<?php previousArrow("#/section=2&step=2.1");?>

<div class="content-wrapper">
    <h1>Claim or Loss Information</h1>

    <form name="S2_2_FORM">

  	<script>
	$(function(){

		var NumberOfClaims = formData.S2_FORM.S2_NumberOfClaims;

		if(NumberOfClaims > 0 && NumberOfClaims <= 3)
		{
			for (var n = 1; n <= NumberOfClaims; ++ n)
			{
				$(".content-wrapper .claim-"+n).removeClass("claim-"+n);
			}
		}

	});
    </script>

    <style>
	.claim-1, .claim-2, .claim-3 {
		display:none !important;
	}
	</style>

    <div class="multi-col">

        <div class="one-third claim-1">
        	<h2>Claim 1</h2>
            <div class="sub-col-wrapper">
            	<label for="S2_2_Date1">Approximate date of Loss:</label>
            	<div class="col-75-percent">
                	<input class="datepicker no-future" type="text" name="S2_2_DateOfLoss:1" id="S2_2_Date1" placeholder="MM/DD/YYYY"/>
                </div>
                <div class="col-25-percent">
                	<label style="margin-left:10px;" for="S2_2_Date1"><img class="date-selector" src="assets/calendar-icon.png"/></label>
                </div>

                <label for="S2_2_LossAmountPaid1">Total amount paid for Loss:</label>
            	<div class="col-75-percent">
                	<input type="text" name="S2_2_LossAmountPaid:1" id="S2_2_LossAmountPaid1" class="formatNumber"/>
                </div>
                <div class="col-25-percent"></div>
            </div>

            <label>Type of Loss:</label>
            <select name="S2_2_LossType:1" data-dropdown-menus="LossType"></select>

            <div class="sub-col-wrapper tb-15-margin radio-error">
            	<label>Was Loss result of a Catastrophe (e.g. Hurricane, Tornado)?</label>
            	<div class="col-50-percent">
                    <input type="radio" name="S2_2_LossCatastrophe:1" value="100" id="S2_2_LossCatastrophe1-yes"><label for="S2_2_LossCatastrophe1-yes" class="inline-block">Yes</label>
                </div>
                <div class="col-50-percent">
                    <input type="radio" name="S2_2_LossCatastrophe:1" value="200" id="S2_2_LossCatastrophe1-no"><label for="S2_2_LossCatastrophe1-no" class="inline-block">No</label>
                </div>
           	</div>

            <label for="S2_2_LossDescription1">Description of Loss:</label>
            <textarea name="S2_2_LossDescription:1" id="S2_2_LossDescription1"></textarea>
        </div>

       <div class="one-third claim-2">
        	<h2>Claim 2</h2>
            <div class="sub-col-wrapper">
            	<label for="S2_2_Date2">Approximate date of Loss:</label>
            	<div class="col-75-percent">
                	<input  class="datepicker no-future" type="text" name="S2_2_DateOfLoss:2" id="S2_2_Date2" placeholder="MM/DD/YYYY"  data-type="isDate" data-required="true"/>
                </div>
                <div class="col-25-percent">
                	<label style="margin-left:10px;" for="S2_2_Date2"><img class="date-selector" src="assets/calendar-icon.png"/></label>
                </div>

                <label for="S2_2_LossAmountPaid1">Total amount paid for Loss:</label>
            	<div class="col-75-percent">
                	<input type="text" name="S2_2_LossAmountPaid:2" id="S2_2_LossAmountPaid1" class="formatNumber" data-type="isCurrency" data-length="5000000" data-required="true"/>
                </div>
                <div class="col-25-percent"></div>
            </div>

            <label>Type of Loss:</label>
            <select name="S2_2_LossType:2" data-dropdown-menus="LossType" data-type="dropdownSelection" data-required="true"></select>

            <div class="sub-col-wrapper tb-15-margin radio-error">
            	<label>Was Loss result of a Catastrophe (e.g. Hurricane, Tornado)?</label>
            	<div class="col-50-percent">
                    <input type="radio" name="S2_2_LossCatastrophe:2" value="100" id="S2_2_LossCatastrophe2-yes" data-type="radioSelection" data-required="true"><label for="S2_2_LossCatastrophe2-yes" class="inline-block">Yes</label>
                </div>
                <div class="col-50-percent">
                    <input type="radio" name="S2_2_LossCatastrophe:2" value="200" id="S2_2_LossCatastrophe2-no" data-type="radioSelection" data-required="true"><label for="S2_2_LossCatastrophe2-no" class="inline-block">No</label>
                </div>
           	</div>

            <label for="S2_2_LossDescription1">Description of Loss:</label>
            <textarea name="S2_2_LossDescription:2" id="S2_2_LossDescription1" data-type="maxLength" maxlength="5000" data-required="true"></textarea>
        </div>

       <div class="one-third claim-3">
        	<h2>Claim 3</h2>
            <div class="sub-col-wrapper">
            	<label for="S2_2_Date3">Approximate date of Loss:</label>
            	<div class="col-75-percent">
                	<input  class="datepicker no-future" type="text" name="S2_2_DateOfLoss:3" id="S2_2_Date3" placeholder="MM/DD/YYYY"  data-type="isDate" data-required="true"/>
                </div>
                <div class="col-25-percent">
                	<label style="margin-left:10px;" for="S2_2_Date3"><img class="date-selector" src="assets/calendar-icon.png"/></label>
                </div>

                <label for="S2_2_LossAmountPaid1">Total amount paid for Loss:</label>
            	<div class="col-75-percent">
                	<input type="text" name="S2_2_LossAmountPaid:3" id="S2_2_LossAmountPaid1" class="formatNumber" data-type="isCurrency" data-length="5000000" data-required="true"/>
                </div>
                <div class="col-25-percent"></div>
            </div>

            <label>Type of Loss:</label>
            <select name="S2_2_LossType:3" data-dropdown-menus="LossType" data-type="dropdownSelection" data-required="true"></select>

            <div class="sub-col-wrapper tb-15-margin radio-error">
            	<label>Was Loss result of a Catastrophe (e.g. Hurricane, Tornado)?</label>
            	<div class="col-50-percent">
                    <input type="radio" name="S2_2_LossCatastrophe:3" value="100" id="S2_2_LossCatastrophe3-yes" data-type="radioSelection" data-required="true"><label for="S2_2_LossCatastrophe3-yes" class="inline-block">Yes</label>
                </div>
                <div class="col-50-percent">
                    <input type="radio" name="S2_2_LossCatastrophe:3" value="200" id="S2_2_LossCatastrophe3-no" data-type="radioSelection" data-required="true"><label for="S2_2_LossCatastrophe3-no" class="inline-block">No</label>
                </div>
           	</div>

            <label for="S2_2_LossDescription1">Description of Loss:</label>
            <textarea name="S2_2_LossDescription:3" id="S2_2_LossDescription1" data-type="maxLength" maxlength="5000" data-required="true"></textarea>
        </div>

    </div>

    </form>

</div>

<?php nextArrow("#/section=3&step=3.1");?>

<script src="../../js/analytics.js"></script>
<script src="../../js/mixpanel.js"></script>
