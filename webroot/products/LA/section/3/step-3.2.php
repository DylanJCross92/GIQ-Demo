<?php require("../../functions.php");?>

<?php previousArrow("#/section=3&step=3.1");?>

<div class="content-wrapper">
    <h1>Property Construction</h1>

    <form name="S3_2_FORM">

    <div class="two-col">
        <div class="left">

            <label>What type of garage do you have?</label>
            <select name="S3_2_GarageSize" data-for="garage-size-parent" data-dropdown-menus="GarageSize"></select>

            <div class="gray-box-wrapper toggle-box garage-type garage-size-parent" style="display:none;">
                <label>Choose the image that best represents your garage:</label>

                	 <ul class="selection-wrapper tb-15-margin remove-margin-b">
                        <li class="S3_2_GarageType select radio-error">
                        	<a class="edit-icon load-selection-popup" data-filename="section/3/step-select-garage-type.html"><img src="assets/pencil-icon.png"/> Edit</a>

                            <a class="button orange selection load-selection-popup" data-filename="section/3/step-select-garage-type.html">Select</a>

                            <div class="selection-value-wrapper">
                                <img src="assets/checkmark-small.png"/>
                                <div class="selection-value"></div>
                            </div>
                            <input name="S3_2_GarageType" type="hidden"/>
                        </li>
					</ul>
                <div class="tb-15-margin"></div>
                <label>Garage Square Footage:</label>
                <select name="S3_2_GarageSizeSqFt" data-dropdown-menus="GarageSizeSqFt"></select>
            </div>

    	</div>
        <div class="right">

            <label>Foundation Type:
            	<a href="#" onClick="javascript:return false;" class="tooltip-parent"><img src="assets/help-icon.png"/><div class="tooltip">
            		Slab - Residence is built on slab.
					<p>
                    Slab / Basement - Combination of slab and basement.
                    </p>
                    Basement - An area, usually below grade, which includes walls, a slab floor and a stairway from the ground floor.
                    <p>
                    Open - Pilings/Stilts/Piers - Dwelling is elevated above the ground on pilings, piers or posts.
                    </p>
                    Open - Crawl Space - An open area below the residence that is generally used for access to plumbing and heating equipment or for storage.
                    </p>
                    Closed - Crawl Space - An enclosed area below the residence that is generally used for access to plumbing and heating equipment or for storage.

            	</div></a>
            </label>
            <select name="S3_2_FoundationType" data-dropdown-menus="FoundationType"></select>

            <label>Construction Type:</label>
            <select name="S3_2_ConstructionType" data-dropdown-menus="ConstructionType" data-for="S3_2_ConstructionType-parent"></select>

            <div class="gray-box-wrapper toggle-box cladding-type S3_2_ConstructionType-parent" style="display:none;">
                <label>Cladding:</label>
                <select name="S3_2_CladdingType" class="remove-margin-b" data-dropdown-menus="CladdingType"></select>
            </div>

            <div class="gray-box-wrapper toggle-box masonry-veener-type S3_2_ConstructionType-parent" style="display:none;">
                <label>Masonry Veener Percentage:</label>
                <select name="S3_2_MasonryVeenerType" class="remove-margin-b" data-dropdown-menus="MasonryVeenerType"></select>
            </div>



        </div>
	</div>

    </form>

</div>

<?php nextArrow("#/section=3&step=3.3");?>

<script src="../../js/analytics.js"></script>
<script src="../../js/mixpanel.js"></script>
