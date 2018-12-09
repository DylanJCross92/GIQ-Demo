<?php require("../../functions.php");?>

<?php previousArrow(false, "display-none");?>

<div class="content-wrapper">
    <div class="return-wrapper"></div>

	<form name="S1_FORM">

	<div class="two-col">
	<div class="left">
		<h1>Contact Information</h1>

        <label for="S1_FirstName">First Name</label>
        <input name="S1_FirstName" type="text" id="S1_FirstName" required />

        <label for="S1_LastName">Last Name</label>
        <input name="S1_LastName" type="text" id="S1_LastName" required />

        <label for="S1_StreetAddress">Street Address</label>
        <input name="S1_StreetAddress" type="text" id="S1_StreetAddress" autocomplete="street-address"/>

          <label for="S1_City">City</label>
          <input type="text" name="S1_City" id="S1_City" />

          <div class="sub-col-wrapper">
              <div class="col-25-percent">
                  <label for="S1_State">State <a href="#" onClick="javascript:return false;" class="tooltip-parent"><img src="assets/help-icon.png"/><div class="tooltip">State may not be changed or modified.</div></a></label>
                  <input type="text" name="S1_State" id="S1_State" disabled required />
              </div>
              <div class="col-50-percent">
                  <label for="S1_Zipcode">Zip <a href="#" onClick="javascript:return false;" class="tooltip-parent"><img src="assets/help-icon.png"/><div class="tooltip">Zip code may not be changed or modified.</div></a></label>
                  <input type="text" name="S1_Zipcode" id="S1_Zipcode" required />
              </div>
          </div>

    </div>

    <div class="right">
    	<h1>Insured Property Information</h1>

        <label>How would you describe this home?</label>
        <select name="S1_PropertyUsage" data-for="PropertyUsage-parent" data-dropdown-menus="PropertyUsage"></select>


        <div class="gray-box-wrapper toggle-box time-unoccupied PropertyUsage-parent remove-margin-b" style="display:none;">
        	<label>Number of months continuously unoccupied</label>
            <select name="S1_TimeUnoccupied" class="remove-margin-b" data-dropdown-menus="TimeUnoccupied"></select>
        </div>

        <div class="toggle-box rental-property-fields PropertyUsage-parent" style="display: none;">

        <div class="radio-error gray-box-wrapper owned-by-corporation PropertyUsage-parent remove-margin-b">

        	<label>Is this property owned by a corporation, &nbsp;partnership, etc.?</label>
            <div class="sub-col-wrapper tb-15-margin remove-margin-b">
                <div class="col-50-percent">
                    <input type="radio" name="S1_OwnedBy" value="100" id="S1_OwnedBy-yes" data-for="S1_OwnedBy-parent" data-show="entity-name"><label for="S1_OwnedBy-yes" class="inline-block">Yes</label>
                </div>
                <div class="col-50-percent">
                    <input type="radio" name="S1_OwnedBy" value="200" id="S1_OwnedBy-no" data-for="S1_OwnedBy-parent"><label for="S1_OwnedBy-no" class="inline-block">No</label>
                </div>
            </div>
            <div class="toggle-box entity-name S1_OwnedBy-parent tb-15-margin remove-margin-b" style="display:none;">
            	<label for="S1_EntityName">Name of Entity</label>
            	<input type="text" name="S1_EntityName" class="remove-margin-b" id="S1_EntityName" />
        	</div>
        </div>

        <div class="gray-box-wrapper number-time-unoccupied PropertyUsage-parent remove-margin-b">
        	<label>Number of months continuously unoccupied</label>
            <select name="S1_NumberOfMonthsUnoccupied" class="remove-margin-b" data-dropdown-menus="TimeUnoccupied"></select>
        </div>

        <div class="radio-error gray-box-wrapper short-term-rental PropertyUsage-parent remove-margin-b">
        	<label>Any unit leased less than 6 months?</label>
            <div class="sub-col-wrapper tb-15-margin remove-margin-b">
                <div class="col-50-percent">
                    <input type="radio" name="S1_ShortTermRental" value="100" id="S1_ShortTermRental-yes"><label for="S1_ShortTermRental-yes" class="inline-block">Yes</label>
                </div>
                <div class="col-50-percent">
                    <input type="radio" name="S1_ShortTermRental" value="200" id="S1_ShortTermRental-no"><label for="S1_ShortTermRental-no" class="inline-block">No</label>
                </div>
            </div>
        </div>

        <div class="radio-error gray-box-wrapper single-occupancy PropertyUsage-parent remove-margin-b">
        	<label>Single tenants under age 30?</label>
            <div class="sub-col-wrapper tb-15-margin remove-margin-b">
                <div class="col-50-percent">
                    <input type="radio" name="S1_SingleOccupancy" value="100" id="S1_SingleOccupancy-yes"><label for="S1_SingleOccupancy-yes" class="inline-block">Yes</label>
                </div>
                <div class="col-50-percent">
                    <input type="radio" name="S1_SingleOccupancy" value="200" id="S1_SingleOccupancy-no"><label for="S1_SingleOccupancy-no" class="inline-block">No</label>
                </div>
            </div>
        </div>

        <div class="radio-error gray-box-wrapper student-occupancy PropertyUsage-parent remove-margin-b">
        	<label>Full-time student tenant?</label>
            <div class="sub-col-wrapper tb-15-margin remove-margin-b">
                <div class="col-50-percent">
                    <input type="radio" name="S1_StudentOccupancy" value="100" id="S1_StudentOccupancy-yes"><label for="S1_StudentOccupancy-yes" class="inline-block">Yes</label>
                </div>
                <div class="col-50-percent">
                    <input type="radio" name="S1_StudentOccupancy" value="200" id="S1_StudentOccupancy-no"><label for="S1_StudentOccupancy-no" class="inline-block">No</label>
                </div>
            </div>
        </div>

        </div>

        <div class="gray-box-wrapper toggle-box property-manager-type PropertyUsage-parent remove-margin-b" style="display: none;">
        	<label>Property Manager Type</label>
            <select name="S1_PropertyManagerType" class="remove-margin-b" data-dropdown-menus="PropertyManagerType" data-for="PropertyManagerType-parent"></select>

            <div class="toggle-box property-manager-address PropertyManagerType-parent tb-15-margin remove-margin-b" style="display:none;">

                <h5>Property Manager Address Information</h5>

                <label for="S1_PropertyManagerAddressLine1">Address Line 1</label>
                <input name="S1_PropertyManagerAddressLine1" type="text" id="S1_PropertyManagerAddressLine1"/>

                <label for="S1_PropertyManagerAddressLine2">Address Line 2</label>
                <input name="S1_PropertyManagerAddressLine2" type="text" id="S1_PropertyManagerAddressLine2"/>

                <label for="S1_PropertyManagerCity">City</label>
                <input name="S1_PropertyManagerCity" type="text" id="S1_PropertyManagerCity"/>

                <div class="sub-col-wrapper">
                    <div class="col-25-percent">
                        <label for="S1_PropertyManagerState">State</label>
                        <select name="S1_PropertyManagerState" id="S1_PropertyManagerState" class="remove-margin-b" data-dropdown-menus="PropertyManagerState" data-change-href="true"></select>
                    </div>
                    <div class="col-25-percent"></div>
                    <div class="col-50-percent">
                        <label for="S1_PropertyManagerZip">Zip code</label>
                        <input name="S1_PropertyManagerZip" type="text" id="S1_PropertyManagerZip"/>
                    </div>
                </div>

        	</div>

        </div>



    	</div>
	</div>

</form>

<script>
$(function(){

	if(BrowserOK)
	{
        if(OnLoadPopup == true && getSessionCookie() == null)
		{

			UpdateBeforeLoad();

			//display the popup
			$.ajax({
			type: "POST",
			url: "landing.html",
			success: function(html){

				$("body").after(html);
				OnLoadPopup = false;
				UpdateOnLoad();
			}
			});

		}

    function stateValidity(state) {
      i
    }

		if (getZipcode()) {
			if (typeof google != "undefined") {
				var zip = getZipcode() ? getZipcode() : false;
				var lat;
				var lng;
				var geocoder = new google.maps.Geocoder();
        var acceptedState = 'LA';
				geocoder.geocode({ 'address': zip }, function (results, status) {
					if (status == google.maps.GeocoderStatus.OK) {
						geocoder.geocode({'latLng': results[0].geometry.location}, function(results, status) {
						if (status == google.maps.GeocoderStatus.OK) {
							if (results[1]) {
								var state = getState(results);
								var city = getCity(results);
								$("form[name='S1_FORM'] [name='S1_State']").val(state);
								$("form[name='S1_FORM'] [name='S1_Zipcode']").val(zip);
                if (state !== acceptedState) {
                  $('.no-coverage').addClass('show');
                } else {
                  $('.no-coverage').removeClass('show');
                }
								if (!$("form[name='S1_FORM'] [name='S1_City']").val()) {
									$("form[name='S1_FORM'] [name='S1_City']").val(city);
								}

                /* Autofill Components, temporarily disabled
                var bounds = new google.maps.LatLngBounds(
                  new google.maps.LatLng(
                    results[0].geometry.location.lat() - 5,
                    results[0].geometry.location.lng() - 5
                  ),
                  new google.maps.LatLng(
                    results[0].geometry.location.lat() + 5,
                    results[0].geometry.location.lng() + 5
                  )
                );
                var input = document.getElementById('S1_Address');
                var options = { bounds: bounds };
                var autocomplete = new google.maps.places.Autocomplete(input, options);

                var fillInAddress = function() {
                  $('#S1_StreetNumber, #S1_StreetName, #S1_City, #S1_State, #S1_Zipcode').val('');
                  var place = autocomplete.getPlace();
                  for (var i = 0; i < place.address_components.length; i++) {
                    var component = place.address_components[i];
                    if (component.types.indexOf('street_number') > -1) {
                      document.getElementById('S1_StreetNumber').value = component.long_name;
                    } else if (component.types.indexOf('route') > -1) {
                      document.getElementById('S1_StreetName').value = component.short_name;
                    } else if (component.types.indexOf('sublocality') > -1 || component.types.indexOf('locality') > -1) {
                      document.getElementById('S1_City').value = component.long_name;
                    } else if (component.types.indexOf('administrative_area_level_1') > -1) {
                      document.getElementById('S1_State').value = component.short_name;
                      if (component.short_name !== acceptedState) {
                        $('.no-coverage').addClass('show');
                        $('#S1_Address').addClass('error');
                        input.setCustomValidity('Requires address in LA')
                      } else {
                        $('.no-coverage').removeClass('show');
                        $('#S1_Address').removeClass('error');
                        input.setCustomValidity('');
                      }
                    } else if (component.types.indexOf('postal_code') > -1) {
                      document.getElementById('S1_Zipcode').value = component.long_name;
                      var addressOutput = document.getElementById('S1_Address').value.split(', ');
                      addressOutput.splice(addressOutput.length - 1);
                      addressOutput.push(component.long_name);
                      document.getElementById('S1_Address').value = addressOutput.join(', ');
                    }
                  }
                };
                autocomplete.addListener('place_changed', fillInAddress);
                */
							}
						}
					});
					}
				});
			} else {
				$("form[name='S1_FORM'] [name='S1_Zipcode']").val(getZipcode());
				$("form[name='S1_FORM'] [name='S1_State']").val(Product_State);
			}
		}
	}

});
</script>

</div>

<?php nextArrow("#/section=2&step=2.1", "showAddressValidation");?>

<script src="../../js/analytics.js"></script>
<script src="../../js/mixpanel.js"></script>
