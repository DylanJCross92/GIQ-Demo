var autopop = false;

$.address.externalChange(function(event){

	if(BrowserOK)
	{

		var section = null,
			step 	= null,
			redirect= null;
		var path	= $.address.path().toLowerCase();
			section = get("section") ? get("section") : false;
			step 	= get("step") ? get("step") : false;
			
		UpdateBeforeLoad();

		if(!redirecting)
		{

			if(getSessionCookie())
			{
				getSessionStorageData();
			}
			//else if(section == 1 && step == 1.1)
			else if(getZipcode() && PropertyQuotePage && ((!get("section") && !get("step")) || section == 1 && step == 1.1))
			{
				LoadPage();
			}
			else if(!getZipcode() && PropertyQuotePage && section == 1 && step == 1.1)
			{
				LoadPage();
			}
			else if(!getSessionCookie() && QuoteID)
			{
				if(get("error"))
				{
					LoadPage();
				}
				else
				{
					sessionTimedOut();
				}
			}
			else
			{
				noSessionError();
			}
		
		}
	
	}
	else
	{
		serverError();	
	}

});