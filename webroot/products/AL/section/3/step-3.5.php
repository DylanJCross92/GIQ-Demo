<?php require("../../functions.php");?>

<?php previousArrow("#/section=3&step=3.4");?>

<div class="content-wrapper">
	<h1>Additional Questions</h1>

    <form name="S3_5_FORM">

    <div class="two-col">
        <div class="left">

        	<div class="sub-col-wrapper">
            	<div class="radio-error">
                    <label class="dp3-title" title="Do any tenants own a dog?">Do you own a dog?</label>
                    <div class="col-50-percent">
                        <input type="radio" name="S3_5_DogOwner" value="100" id="S3_5_DogOwner-yes" data-for="dog-breeds-parent" data-show="dog-breeds"><label for="S3_5_DogOwner-yes" class="inline-block">Yes</label>
                    </div>
                    <div class="col-50-percent">
                        <input type="radio" name="S3_5_DogOwner" value="200" id="S3_5_DogOwner-no" data-for="dog-breeds-parent"><label for="S3_5_DogOwner-no" class="inline-block">No</label>
                    </div>
                </div>

                <div class="gray-box-wrapper toggle-box dog-breeds dog-breeds-parent tb-15-margin radio-error" style="display:none;">
                    <label class="normal dp3-title" title="Do any tenants own any of these breeds?">Do you own any of these breeds?</label>
                    <div class="sub-col-wrapper">
                        <div class="col-50-percent">
                            <input type="radio" name="S3_5_DogBreeds" value="100" id="S3_5_DogBreeds-yes" data-new-href="#/section=3&step=3.1.1&error=317" data-new-href-block="true" ><label for="S3_5_DogBreeds-yes" class="inline-block">Yes</label>
                        </div>
                        <div class="col-50-percent">
                            <input type="radio" name="S3_5_DogBreeds" value="200" id="S3_5_DogBreeds-no"><label for="S3_5_DogBreeds-no" class="inline-block">No</label>
                        </div>
                    </div>

                    <div class="body small tb-15-margin">
                    Akita<br>
                    Alaskan Malamute<br>
                    American Staffordshire Terrier<br>
                    Boxer<br>
                    Bull Mastiff<br>
                    Bull Terrier<br>
                    Chow<br>
                    Giant Schnauzer<br>
                    Great Dane<br>
                    Mastiff<br>
                    Neopolitan Mastiff<br>
                    Ovtcharka<br>
                    Pit Bull Terrier<br>
                    Presa Canario<br>
                    Rhodesian Ridgeback<br>
                    Rottweiler<br>
                    Siberian Husky<br>
                    Staffordshire Bull Terrier<br>
                    Wolf or Wolf Hybrid<br>
                    Any breed or mix of guard dog (i.e. Doberman Pinscher or German Shepherd)<br>
                    </div>

            	</div>
            </div>

        </div>
        <div class="right">
        	<label>Distance to nearest Fire Hydrant:</label>
            <select name="S3_5_DistanceToFireHydrant" data-dropdown-menus="DistanceToFireHydrant"></select>

            <label>Is there a Swimming Pool?</label>
            <select name="S3_5_SwimmingPool" data-for="S3_5_SwimmingPool-parent" data-dropdown-menus="SwimmingPool"></select>

            <div class="gray-box-wrapper toggle-box in-ground-pool S3_5_SwimmingPool-parent tb-15-margin" style="display:none;">

                <div class="sub-col-wrapper">
                	<div class="radio-error">
                        <label>Is property around pool fenced?</label>
                        <div class="col-50-percent">
                            <input type="radio" name="S3_5_PropertyFenced" value="100" id="S3_5_PropertyFenced-yes"><label for="S3_5_PropertyFenced-yes" class="inline-block">Yes</label>
                        </div>
                        <div class="col-50-percent">
                            <input type="radio" name="S3_5_PropertyFenced" value="200" id="S3_5_PropertyFenced-no" data-new-href="#/section=3&step=3.1.1&error=313" data-new-href-block="true"><label for="S3_5_PropertyFenced-no" class="inline-block">No</label>
                        </div>
                    </div>

                    <div class="tb-15-margin"></div>

                    <div class="radio-error">
                        <label>Is there a diving board or slide?</label>
                        <div class="col-50-percent">
                            <input type="radio" name="S3_5_BoardOrSlide" value="100" id="S3_5_BoardOrSlide-yes" data-new-href="#/section=3&step=3.1.1&error=314" data-new-href-block="true"><label for="S3_5_BoardOrSlide-yes" class="inline-block">Yes</label>
                        </div>
                        <div class="col-50-percent">
                            <input type="radio" name="S3_5_BoardOrSlide" value="200" id="S3_5_BoardOrSlide-no"><label for="S3_5_BoardOrSlide-no" class="inline-block">No</label>
                        </div>
                    </div>
                </div>

            </div>

            <div class="gray-box-wrapper toggle-box above-ground-pool S3_5_SwimmingPool-parent tb-15-margin" style="display:none;">

                <div class="sub-col-wrapper">
                	<div class="radio-error">
                        <label>Is there a diving board or slide?</label>
                        <div class="col-50-percent">
                            <input type="radio" name="S3_5_BoardOrSlide" value="100" id="S3_5_BoardOrSlide2-yes" data-new-href="#/section=3&step=3.1.1&error=315" data-new-href-block="true"><label for="S3_5_BoardOrSlide2-yes" class="inline-block">Yes</label>
                        </div>
                        <div class="col-50-percent">
                            <input type="radio" name="S3_5_BoardOrSlide" value="200" id="S3_5_BoardOrSlide2-no"><label for="S3_5_BoardOrSlide2-no" class="inline-block">No</label>
                        </div>
                    </div>

                    <div class="tb-15-margin"></div>

                    <div class="radio-error">
                        <label>Is there an immovable ladder?</label>
                        <div class="col-50-percent">
                            <input type="radio" name="S3_5_ImmovableLadder" value="100" id="S3_5_ImmovableLadder-yes" data-new-href="#/section=3&step=3.1.1&error=316" data-new-href-block="true"><label for="S3_5_ImmovableLadder-yes" class="inline-block">Yes</label>
                        </div>
                        <div class="col-50-percent">
                            <input type="radio" name="S3_5_ImmovableLadder" value="200" id="S3_5_ImmovableLadder-no"><label for="S3_5_ImmovableLadder-no" class="inline-block">No</label>
                        </div>
                	</div>
                </div>

            </div>


        </div>
    </div>

	</form>

</div>

<?php nextArrow("#/section=4&step=4.1");?>

<script src="../../js/analytics.js"></script>
<script src="../../js/mixpanel.js"></script>
