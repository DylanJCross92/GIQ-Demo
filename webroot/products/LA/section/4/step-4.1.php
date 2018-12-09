<?php require("../../functions.php");?>

<?php previousArrow("#/section=3&step=3.5");?>     	

<div class="content-wrapper">                
    <h1>Discounts</h1>
    
    <form name="S4_FORM">
    
    <div class="two-col">
        <div class="left">
            
            <div class="sub-col-wrapper">
            	<div class="radio-error">
                    <label>Do you currently have an auto policy with GEICO?</label>
                    <div class="col-50-percent">
                        <input type="radio" name="S4_MultiPolicy" value="100" id="S4_MultiPolicy-yes" data-for="S4_MultiPolicy-parent" data-show="AutoPolicyNumber"><label for="S4_MultiPolicy-yes" class="inline-block">Yes</label>
                    </div>
                    <div class="col-50-percent">
                        <input type="radio" name="S4_MultiPolicy" value="200" id="S4_MultiPolicy-no" data-for="S4_MultiPolicy-parent"><label for="S4_MultiPolicy-no" class="inline-block">No</label>
                    </div>
                </div>
                
                    <div class="gray-box-wrapper toggle-box AutoPolicyNumber S4_MultiPolicy-parent tb-15-margin" style="display:none;">
                        <label for="S4_AutoPolicyNumber">GEICO Auto Policy Number <a href="#" onClick="javascript:return false;" class="tooltip-parent"><img src="assets/help-icon.png"/><div class="tooltip">Your Auto Policy must be all numbers and must not exceed 10 characters.</div></a></label>
                        <input name="S4_AutoPolicyNumber" id="S4_AutoPolicyNumber" type="text" class="remove-margin-b" maxlength="10"/>
                    </div>
                
                <div class="tb-15-margin"></div>
                
                <div class="radio-error">
                    <label>Are you over 50 years old, retired and living in your home more than 10 months of the year?</label>
                    <div class="col-50-percent">
                        <input type="radio" name="S4_PrimeTimeDiscount" value="100" id="S4_PrimeTimeDiscount-yes" data-show="Insured1BirthDate"><label for="S4_PrimeTimeDiscount-yes" class="inline-block">Yes</label>
                    </div>
                    <div class="col-50-percent">
                        <input type="radio" name="S4_PrimeTimeDiscount" value="200" id="S4_PrimeTimeDiscount-no"><label for="S4_PrimeTimeDiscount-no" class="inline-block">No</label>
                    </div>
                </div>
                
                <div class="tb-15-margin"></div>
                
                <label for="S4_Insured1BirthDate">What is your date of birth?</label>
                <input name="S4_Insured1BirthDate" id="S4_Insured1BirthDate" type="text" class="remove-margin-b" placeholder="MM/DD/YYYY"/>
                
            </div> 
            
    	</div>
        <div class="right">
        
			<div class="sub-col-wrapper">
                <label>Home safety devices (check all that apply):<a href="#" onClick="javascript:return false;" class="tooltip-parent"><img src="assets/help-icon.png"/><div class="tooltip">A central station alarm is monitored by a security company that you are paying to dispatch personnel to your house when the alarm is tripped. A local alarm rings inside your house only.</div></a></label>
                <div class="col-50-percent">
                    <input type="checkbox" value="" class="inline-block modify-dropdown" data-select="1" name="S4_FireAlarm" id="S4_FireAlarm" data-required-field="S4_FireAlarmLocation" data-change-required="true"><label for="S4_FireAlarm" class="inline-block remove-margin-b">Fire Alarm</label>
                </div>
                <div class="col-50-percent">
                    <select name="S4_FireAlarmLocation" class="select-check-parent" data-dropdown-menus="FireAlarmLocation"></select>
                </div>
                
                <div class="col-50-percent">
                    <input type="checkbox" value="" class="inline-block modify-dropdown" data-select="1" name="S4_BurglarAlarm" id="S4_BurglarAlarm" data-required-field="S4_BurglarAlarmLocation" data-change-required="true"><label for="S4_BurglarAlarm" class="inline-block remove-margin-b">Burglar Alarm</label>
                </div>
                <div class="col-50-percent">
                    <select name="S4_BurglarAlarmLocation" class="select-check-parent" data-dropdown-menus="BurglarAlarmLocation"></select>
                </div>
                
                <div class="col-50-percent">
                    <input type="checkbox" value="" class="inline-block modify-dropdown" data-select="1" name="S4_Sprinklers" id="S4_Sprinklers" data-required-field="S4_SprinklersLocation" data-change-required="true"><label for="S4_Sprinklers" class="inline-block remove-margin-b">Sprinklers</label>
                </div>
                <div class="col-50-percent">
                	<select name="S4_SprinklersLocation" class="select-check-parent" data-dropdown-menus="SprinklersLocation"></select>
                </div>
             
            </div> 
            
            <div class="tb-15-margin"></div>
        
        	<label for="S4_Insured1SSN">Social Security Number (Required): <a href="#" onClick="javascript:return false;" class="tooltip-parent"><img src="assets/help-icon.png"/><div class="tooltip">We will not sell, rent, or lease your personal information to others. Your Social Security Number is secured by VeriSign and can qualify you for valuable discounts. </p>Important Note: SSN cannot be updated if you save your quote or after submission.</div></a></label>
            <input name="S4_Insured1SSN" type="text" id="S4_Insured1SSN" maxlength="11"/>
            
            <label for="S4_InsuredEmailAddress">Email Address: <a href="#" onClick="javascript:return false;" class="tooltip-parent"><img src="assets/help-icon.png"/><div class="tooltip">We will not sell, rent or lease your personal information to others. You may receive a copy of your quote via email. You will need your email address to retrieve a saved quote online.</div></a></label>
            <input name="S4_InsuredEmailAddress" type="text" id="S4_InsuredEmailAddress" maxlength="50"/>
        
        </div>
	</div>
	
    <div class="legal-information tb-15-margin">
        <h1 class="remove-margin-b">Legal Disclosure Information</h1>
        
        <div class="body small tb-15-margin remove-margin-b">In order to provide you with the most accurate quote, Federated National Insurance Company will use information provided by
    consumer reporting agencies, such as your insurance credit score. Please review our <a href="http://www.fednat.com/home/privacy-policy/" target="_blank">privacy policy</a>
    for more information.
        </div>
        
        <div class="tb-15-margin remove-margin-b radio-error">
            <input type="checkbox" val="true" class="inline-block" name="S4_AcceptLegalTerms" id="S4_AcceptLegalTerms"><label for="S4_AcceptLegalTerms" class="inline-block remove-margin-b small">I authorize the use of consumer report information</label>
        </div>
	</div>

    <div class="tb-15-margin remove-margin-b" style="text-align:center;">
        <a class="button orange large next-step" href="viewquote.html" data-original-href="viewquote.html">Get Quote</a>
    </div>

	</form>
	
</div>

<?php nextArrow(false, "display-none");?>

<script src="../../js/analytics.js"></script>
<script src="../../js/mixpanel.js"></script>