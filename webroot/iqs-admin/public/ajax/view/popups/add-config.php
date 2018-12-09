<?php require "../../../../app/init.php";

$Auth = new Auth();
if(!$Auth->is_logged_in())
{
	$Auth->not_logged_in();	
}
?>

<div class="add-config">
<h1>Add a Configuration Element</h1>

<form name="add_config" action="" method="post">
    <div class="row multi-cols">
        <div class="col-1">
            <label>Configuration Section</label>
        </div>
        <div class="col-2">
            <select name="conf_section">
                <option value="env">Env</option>
                <option value="logging">Logging</option>
                <option value="ezquoteapi">EZ Quote API</option>
                <option value="statesenabled">States Enabled</option>
                <option value="productsenabled">Products Enabled</option>
                <option value="whitelistenabled">Whitelist Enabled</option>
            </select><br/>
        </div>
    </div>
    <div class="row multi-cols">
        <div class="col-1">
            <label>Configuration Element</label>
        </div>
        <div class="col-2">
            <input type="text" name="confElement" placeholder="Configuration Element" /><br/>
        </div>
    </div>
    <div class="multi-cols row">
        <div class="col-1">
            <label>Value</label>
        </div>
        <div class="col-2">
            <input type="text" name="confValue"  placeholder="Value" /></form><br/>
        </div>
    </div>


    <a class="button light-gray cancel">Cancel</a>
    <input name="submit" type="submit" class="button green config-submit" value="Add"/>
</form>

<div class="loading-wrapper">
	<div class="loader">Loading...</div>
</div>

</div>