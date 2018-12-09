<?php require("../../functions.php");?>

<?php previousArrow("#/section=3&step=3.3");?>

<div class="content-wrapper">
	<h1>Additional Home Features</h1>

    <form name="S3_4_FORM">

   	<div class="body underwriting-block"><strong>We allow up to three additional features.</strong> If you have more than one of the same feature, please include your total square footage for that feature. If your property has more than three features, please call GEICO Insurance Agency at (800) 566-1518.</div>

   	<ul class="home-features">
    	<li>
        	<label for="S3_4_WoodDeck">
        		<img src="assets/other_features/wood-deck.png"/>
            </label>
            <div class="features-dropdown-wrapper">
            	<input type="checkbox" value="800" data-for="S3_4_WoodDeck-parent" data-show="wood-deck-sqft" name="S3_4_WoodDeck" id="S3_4_WoodDeck"><label for="S3_4_WoodDeck" class="inline-block">Wood Deck</label>

                <div class="toggle-box wood-deck-sqft S3_4_WoodDeck-parent" style="display:none;">
                   	<select name="S3_4_WoodDeckSqFt" data-dropdown-menus="HomeFeatureSqFt">
                    </select>
            	</div>

            </div>
        </li>

        <li>
        	<label for="S3_4_CompositeDeck">
        		<img src="assets/other_features/composite-deck.png"/>
            </label>
            <div class="features-dropdown-wrapper">
            	<input type="checkbox" value="900" data-for="S3_4_CompositeDeck-parent" data-show="composite-deck-sqft" name="S3_4_CompositeDeck" id="S3_4_CompositeDeck"><label for="S3_4_CompositeDeck" class="inline-block">Composite Deck</label>

                <div class="toggle-box composite-deck-sqft S3_4_CompositeDeck-parent" style="display:none;">
                   	<select name="S3_4_CompositeDeckSqFt" data-dropdown-menus="HomeFeatureSqFt"></select>
            	</div>

            </div>
        </li>

        <li>
        	<label for="S3_4_OpenPorch">
        		<img src="assets/other_features/open-porch.png"/>
            </label>
            <div class="features-dropdown-wrapper">
            	<input type="checkbox" value="100" data-for="S3_4_OpenPorchSqFt-parent" data-show="open-porch-sqft" name="S3_4_OpenPorch" id="S3_4_OpenPorch"><label for="S3_4_OpenPorch" class="inline-block">Open Porch</label>

                <div class="toggle-box open-porch-sqft S3_4_OpenPorchSqFt-parent" style="display:none;">
                   	<select name="S3_4_OpenPorchSqFt" data-dropdown-menus="HomeFeatureSqFt"></select>
            	</div>

            </div>
        </li>

        <li>
        	<label for="S3_4_Greenhouse">
        		<img src="assets/other_features/greenhouse.png"/>
            </label>
            <div class="features-dropdown-wrapper">
            	<input type="checkbox" value="500" data-for="S3_4_Greenhouse-parent" data-show="greenhouse-sqft" name="S3_4_Greenhouse" id="S3_4_Greenhouse"><label for="S3_4_Greenhouse" class="inline-block">Greenhouse</label>

                <div class="toggle-box greenhouse-sqft S3_4_Greenhouse-parent" style="display:none;">
                   	<select name="S3_4_GreenhouseSqFt" data-dropdown-menus="HomeFeatureSqFt"></select>
            	</div>

            </div>
        </li>

        <li>
        	<label for="S3_4_ScreenedPorch">
        		<img src="assets/other_features/screened-porch.png"/>
            </label>
            <div class="features-dropdown-wrapper">
            	<input type="checkbox" value="200" data-for="S3_4_ScreenedPorch-parent" data-show="screened-porch-sqft" name="S3_4_ScreenedPorch" id="S3_4_ScreenedPorch"><label for="S3_4_ScreenedPorch" class="inline-block">Screened Porch</label>

                <div class="toggle-box screened-porch-sqft S3_4_ScreenedPorch-parent" style="display:none;">
                   	<select name="S3_4_ScreenedPorchSqFt" data-dropdown-menus="HomeFeatureSqFt"></select>
            	</div>

            </div>
        </li>

        <li>
        	<label for="S3_4_OpenBreezeway">
        		<img src="assets/other_features/open-breezeway.png"/>
            </label>
            <div class="features-dropdown-wrapper">
            	<input type="checkbox" value="300" data-for="S3_4_OpenBreezeway-parent" data-show="open-breezeway-sqft" name="S3_4_OpenBreezeway" id="S3_4_OpenBreezeway"><label for="S3_4_OpenBreezeway" class="inline-block">Open Breezeway</label>

                <div class="toggle-box open-breezeway-sqft S3_4_OpenBreezeway-parent" style="display:none;">
                   	<select name="S3_4_OpenBreezewaySqFt" data-dropdown-menus="HomeFeatureSqFt"></select>
            	</div>

            </div>
        </li>

        <li>
        	<label for="S3_4_ScreenedBreezeway">
        		<img src="assets/other_features/screened-breezeway.png"/>
            </label>
            <div class="features-dropdown-wrapper">
            	<input type="checkbox" value="400" data-for="S3_4_ScreenedBreezeway-parent" data-show="screened-breezeway-sqft" name="S3_4_ScreenedBreezeway" id="S3_4_ScreenedBreezeway"><label for="S3_4_ScreenedBreezeway" class="inline-block">Screened<br>Breezeway</label>

                <div class="toggle-box screened-breezeway-sqft S3_4_ScreenedBreezeway-parent" style="display:none;">
                   	<select name="S3_4_ScreenedBreezewaySqFt" data-dropdown-menus="HomeFeatureSqFt"></select>
            	</div>

            </div>
        </li>


    </ul>

   	</form>

</div>

<?php nextArrow("#/section=3&step=3.5", "step3-4");?>

<script src="../../js/analytics.js"></script>
<script src="../../js/mixpanel.js"></script>
