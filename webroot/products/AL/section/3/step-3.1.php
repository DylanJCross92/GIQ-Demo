<?php require("../../functions.php");?>

<?php previousArrow("#/section=2&step=2.2");?>

<div class="content-wrapper">
    <h1>Property Construction</h1>

    <form name="S3_FORM">

    <div class="two-col">
        <div class="left">
            <div class="sub-col-wrapper">
                <div class="hardcoded-editable-wrapper">
                    <label for="S3_YearBuilt">Year Built: <a class="edit-icon" data-filename="section/3/step-select-structure-type.html"><img src="assets/pencil-icon.png"/> Edit</a></label>
                    <div class="hardcoded">
                        <div class="text S3_YearBuilt"></div>
                        <input type="hidden" name="S3_YearBuilt" class="numbersOnly" data-local-storage="ConstructionYearRetrieved" placeholder="YYYY" maxlength="4" />
                        <div class="tb-15-margin"></div>
                    </div>
                    <div class="editable">
                        <div class="col-50-percent">
                            <input type="text" name="S3_YearBuilt" class="numbersOnly" id="S3_YearBuilt" placeholder="YYYY" maxlength="4" />
                        </div>
                        <div class="col-50-percent">
                            <a class="button orange update">Update</a>
                        </div>
                    </div>
                </div>
                <div class="col-50-percent"></div>
                <div class="hardcoded-editable-wrapper">
                    <label for="S3_LivingArea">Approx. total living area (sq ft): <a href="#" onClick="javascript:return false;" class="tooltip-parent"><img src="assets/help-icon.png"/><div class="tooltip">Enter the area for all floors including wings, additions & built-in or attached garages with living area above.
                                </p>
                                <div><strong>Do not include:</strong></div>
                                <div>- Area for basements or attics (even if finished)</div>
                                <div>- Basement garages (aka garage under, this is a garage built below the grade level of the home)</div>
                                <div>- One-story attached garages with no living area above</div>
                                <div>- Area for porches, breezeways, decks</div>
                                <div>- Living space above detached garages</div>

                            </div></a>

                        <a class="edit-icon" data-filename="section/3/step-select-structure-type.html"><img src="assets/pencil-icon.png"/> Edit</a>
                    </label>
                    <div class="hardcoded">
                        <input type="hidden" name="S3_LivingArea" maxlength="5" data-local-storage="SquareFootUnderRoofRetrieved" class="numbersOnly"/>
                        <div class="text S3_LivingArea"></div>
                        <div class="tb-15-margin"></div>
                    </div>
                    <div class="editable">
                        <div class="col-50-percent">
                            <input type="text" name="S3_LivingArea" maxlength="5" class="numbersOnly" id="S3_LivingArea"/>
                        </div>
                        <div class="col-50-percent">
                            <a class="button orange update">Update</a>
                        </div>
                    </div>
                </div>
                <label>Type of Home:</label>
                <select name="S3_HomeType" data-dropdown-menus="HomeType"></select>

                <div class="col-25-percent"></div>
            </div>

        	<label>Number of Stories:</label>
            <select name="S3_NumberOfStories" data-for="NumberOfStories-parent" data-dropdown-menus="NumberOfStories"></select>

            <div class="tb-15-margin"></div>

            <div class="toggle-box home-style NumberOfStories-parent"  style="display:none;">

                <ul class="selection-wrapper">
                    <li class="S3_StructureType select radio-error">
                        <a class="edit-icon load-selection-popup" data-filename="section/3/step-select-structure-type.html"><img src="assets/pencil-icon.png"/> Edit</a>

                        <div class="title">Home Style:</div>

                        <a class="button orange selection load-selection-popup" data-filename="section/3/step-select-structure-type.html">Select</a>

                        <div class="selection-value-wrapper">
                            <img src="assets/checkmark-small.png"/>
                            <div class="selection-value"></div>
                        </div>

                        <input name="S3_StructureType" type="hidden"/>
                    </li>
                </ul>

			</div>

        </div>
        <div class="right">
            <div class="sub-col-wrapper">
                <div class="col-75-percent"></div>
                <label for="S3_RoofInstalled">What year was current roof installed? <a href="#" onClick="javascript:return false;" class="tooltip-parent"><img src="assets/help-icon.png"/><div class="tooltip">Enter the year the current roof was installed. The roof installed must be a new roof and does not include minor repairs to an existing roof. This will ensure you receive the most accurate quote.</div></a></label>
                <div class="col-25-percent">
                    <input type="text" name="S3_RoofInstalled" class="numbersOnly" id="S3_RoofInstalled" placeholder="YYYY" maxlength="4" />
                </div>
            </div>
            <ul class="selection-wrapper">

                <li class="S3_RoofType select radio-error">
                	<a class="edit-icon load-selection-popup" data-filename="section/3/step-select-roof-type.html"><img src="assets/pencil-icon.png"/> Edit</a>

                    <div class="title">Roof Type:</div>

                	<a class="button orange selection load-selection-popup" data-filename="section/3/step-select-roof-type.html">Select</a>

                    <div class="selection-value-wrapper">
                    	<img src="assets/checkmark-small.png"/>
                        <div class="selection-value"></div>
                    </div>

                    <input name="S3_RoofType" type="hidden"/>
                </li>
                <li class="S3_RoofShape select radio-error">
                	<a class="edit-icon load-selection-popup" data-filename="section/3/step-select-roof-shape.html"><img src="assets/pencil-icon.png"/> Edit</a>
                	<div class="title">Roof Shape:</div>

                	<a class="button orange selection load-selection-popup" data-filename="section/3/step-select-roof-shape.html">Select</a>

                    <div class="selection-value-wrapper">
                    	<img src="assets/checkmark-small.png"/>
                        <div class="selection-value"></div>
                    </div>

                    <input name="S3_RoofShape" type="hidden"/>
            	</li>
            </ul>

        </div>
	</div>

    </form>

</div>

<?php nextArrow("#/section=3&step=3.2");?>

<script>
$(function(){
	if(formData.S2_FORM.S2_NumberOfClaims == 0)
	{
		$(".back-arrow").attr("href", "#/section=2&step=2.1");
	}
});
</script>
<script src="../../js/analytics.js"></script>
<script src="../../js/mixpanel.js"></script>
