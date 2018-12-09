<?php require("../../functions.php");?>

<?php previousArrow("#/section=3&step=3.2");?>

<div class="content-wrapper">
    <h1>Additional Home Details</h1>

    <form name="S3_3_FORM">

    <div class="two-col">
        <div class="left">
            <div class="sub-col-wrapper tb-margin-15px">
                <label>Number of Kitchens: <a href="#" onClick="javascript:return false;" class="load-selection-popup" data-filename="section/3/step-kitchen-grade-popup.html"><img src="assets/help-icon.png"/></a></label>
                <div class="col-25-percent">
                    <select name="S3_3_NumberOfKitchens" data-dropdown-menus="NumberOfKitchens"></select>
                </div>
                <div class="col-75-percent">
                	<select name="S3_3_KitchenGrade" data-dropdown-menus="KitchenGrade"></select>
                </div>
                <div class="hardcoded-editable-wrapper">
                    <label>Number of Full Bathrooms: <a href="#" onClick="javascript:return false;" class="load-selection-popup" data-filename="section/3/step-bathroom-grade-popup.html"><img src="assets/help-icon.png"/></a><a class="edit-icon" data-filename="section/3/step-select-structure-type.html"><img src="assets/pencil-icon.png"/> Edit</a></label>
                    <div class="hardcoded">
                        <div>
                            <span class="text S3_3_NumberOfFullBathrooms"></span>
                            <span class="text S3_3_FullBathroomGrade"></span>
                        </div>

                        <div class="col-25-percent">
                            <input type="hidden" name="S3_3_NumberOfFullBathrooms" class="numbersOnly" data-local-storage="NumberOfFullBathsRetrieved" placeholder="1" maxlength="4" />
                        </div>
                        <div class="col-75-percent">
                            <input type="hidden" name="S3_3_FullBathroomGrade" placeholder="1" maxlength="4" />
                        </div>
                        <div class="tb-15-margin"></div>
                    </div>
                    <div class="editable">
                        <div class="col-25-percent">
                            <select name="S3_3_NumberOfFullBathrooms" data-dropdown-menus="NumberOfFullBathrooms"></select>
                        </div>
                        <div class="col-75-percent">
                            <select name="S3_3_FullBathroomGrade" data-dropdown-menus="FullBathroomGrade"></select>
                        </div>
                        <div class="col-25-percent">
                            <a class="button orange update-select">Update</a>
                        </div>
                    </div>
                </div>
                <div class="hardcoded-editable-wrapper">
                    <label>Number of Half Bathrooms: <a href="#" onClick="javascript:return false;" class="load-selection-popup" data-filename="section/3/step-bathroom-grade-popup.html"><img src="assets/help-icon.png"/></a><a class="edit-icon" data-filename="section/3/step-select-structure-type.html"><img src="assets/pencil-icon.png"/> Edit</a></label>
                    <div class="hardcoded">
                        <div>
                            <span class="text S3_3_NumberOfHalfBathrooms"></span>
                            <span class="text S3_3_HalfBathroomGrade"></span>
                        </div>

                        <div class="col-25-percent">
                            <input type="hidden" name="S3_3_NumberOfHalfBathrooms" class="numbersOnly" data-local-storage="NumberOfHalfBathsRetrieved" placeholder="1" maxlength="4" />
                        </div>
                        <div class="col-75-percent">
                            <input type="hidden" name="S3_3_HalfBathroomGrade" placeholder="1" maxlength="4" />
                        </div>
                        <div class="tb-15-margin"></div>
                    </div>
                    <div class="editable">
                        <div class="col-25-percent">
                            <select name="S3_3_NumberOfHalfBathrooms" data-dropdown-menus="NumberOfHalfBathrooms"></select>
                        </div>
                        <div class="col-75-percent">
                            <select name="S3_3_HalfBathroomGrade" data-dropdown-menus="HalfBathroomGrade"></select>
                        </div>
                        <div class="col-25-percent">
                            <a class="button orange update-select">Update</a>
                        </div>
                    </div>
                </div>
                <div class="hardcoded-editable-wrapper">
                    <label>Number of Fireplaces:<a class="edit-icon" data-filename="section/3/step-select-structure-type.html"><img src="assets/pencil-icon.png"/> Edit</a></label>
                    <div class="hardcoded">
                        <div class="text S3_3_NumberOfFireplaces"></div>
                        <div class="col-25-percent">
                            <input type="hidden" name="S3_3_NumberOfFireplaces" class="numbersOnly" data-local-storage="NumberOfFireplacesRetrieved" placeholder="1" maxlength="4" />
                        </div>
                        <div class="tb-15-margin"></div>
                    </div>
                    <div class="editable">
                        <div class="col-25-percent">
                            <select name="S3_3_NumberOfFireplaces" data-dropdown-menus="NumberOfFireplaces"></select>
                        </div>
                        <div class="col-50-percent"></div>
                        <div class="col-25-percent">
                            <a class="button orange update-select">Update</a>
                        </div>
                    </div>
                </div>

            </div>

    	</div>
        <div class="right">
            <div class="sub-col-wrapper">

            	<div class="radio-error">
                    <label>Is there a heat pump? <a href="#" onClick="javascript:return false;" class="tooltip-parent"><img src="assets/help-icon.png"/><div class="tooltip">Heat Pump is a system that can be reversed to either heat or cool a home. System has two parts: an indoor unit called an air handler and an outdoor unit similar to a central air conditioner, but referred to as a heat pump. </div></a></label>
                    <div class="col-50-percent">
                        <input type="radio" name="S3_3_HeatPump" value="100" id="S3_3_HeatPump-yes"><label for="S3_3_HeatPump-yes" class="inline-block">Yes</label>
                    </div>
                    <div class="col-50-percent radio-error">
                        <input type="radio" name="S3_3_HeatPump" value="200" id="S3_3_HeatPump-no"><label for="S3_3_HeatPump-no" class="inline-block">No</label>
                    </div>
                </div>

                <div class="tb-15-margin"></div>

                <div class="radio-error">
                    <label>Is there central air conditioning?</label>
                    <div class="col-50-percent">
                        <input type="radio" name="S3_3_CentralAir" value="100" id="S3_3_CentralAir-yes"><label for="S3_3_CentralAir-yes" class="inline-block">Yes</label>
                    </div>
                    <div class="col-50-percent">
                        <input type="radio" name="S3_3_CentralAir" value="200" id="S3_3_CentralAir-no"><label for="S3_3_CentralAir-no" class="inline-block">No</label>
                    </div>
                </div>

                <div class="tb-15-margin"></div>

                <div class="radio-error">
                    <label>Is there a wood, pellet, or coal stove?</label>
                    <div class="col-50-percent">
                        <input type="radio" name="S3_3_WoodStove" value="100" id="S3_3_WoodStove-yes" data-new-href="#/section=3&step=3.3.1&error=0" data-new-href-block="true"><label for="S3_3_WoodStove-yes" class="inline-block">Yes</label>
                    </div>
                    <div class="col-50-percent">
                        <input type="radio" name="S3_3_WoodStove" value="200" id="S3_3_WoodStove-no"><label for="S3_3_WoodStove-no" class="inline-block">No</label>
                    </div>
                </div>

            </div>

        </div>
	</div>

    </form>

</div>

<?php nextArrow("#/section=3&step=3.4");?>

<script src="../../js/analytics.js"></script>
<script src="../../js/mixpanel.js"></script>
