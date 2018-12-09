<?php require("../../functions.php");?>

<?php previousArrow("#/section=1&step=1.1");?>

<div class="content-wrapper">
    <h1>Current Home Insurance</h1>

    <form name="S2_FORM">
		<div class="two-col">
            <div class="left">

                <label>Do you have property insurance for this location?</label>
                <select name="S2_CurrentInsurance" data-for="S2_CurrentInsurance-parent" data-dropdown-menus="CurrentInsurance"></select>

                <div class="gray-box-wrapper toggle-box home-insurance S2_CurrentInsurance-parent" style="display:none;">

                    <label>Who is your current home insurance company?</label>
                    <select name="S2_InsuranceAgencies" data-dropdown-menus="InsuranceAgencies" data-for="S2_PriorCarrierOther-parent"></select>

                    <div class="toggle-box PriorCarrierOther S2_PriorCarrierOther-parent" style="display:none;">
                        <label id="PriorCarrierOther">Name of Carrier:</label>
                        <input type="text" name="S2_PriorCarrierOther" id="PriorCarrierOther"/>
                    </div>

                    <div class="sub-col-wrapper tb-margin-15px">
                        <label for="S2_Date1">When does your current policy expire?</label>
                        <div class="col-50-percent">
                            <input type="text" name="S2_PolicyExpiration" placeholder="MM/DD/YYYY" id="S2_Date1" class="datepicker"/>
                        </div>
                        <div class="col-50-percent">
                            <label style="margin-left:10px;" for="S2_Date1"><img class="date-selector" src="assets/calendar-icon.png"/></label>
                        </div>
                        <label for="S2_DwellingCoverage">What is your current Coverage A (dwelling coverage) amount?</label>
                        <div class="col-50-percent">
                            <input type="text" name="S2_DwellingCoverage" id="S2_DwellingCoverage" class="remove-margin-b formatCurrency">
                        </div>
                        <div class="col-50-percent"></div>
                    </div>

                </div>

            </div>

            <div class="right">
                <label>During the past 6 years how many claims have you had at this property or any residential property that you own?</label>
                <select name="S2_NumberOfClaims" data-dropdown-menus="NumberOfClaims"></select>
            </div>
        </div>
    </form>

</div>

<?php nextArrow("#/section=2&step=2.2");?>

<script src="../../js/analytics.js"></script>
<script src="../../js/mixpanel.js"></script>
