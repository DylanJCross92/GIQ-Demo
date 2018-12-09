<?php require("../../functions.php");?>

<?php previousArrow(false, "display-none");?>

<div class="content-wrapper">

    <h1>Call us now at (800) 566-1518,</h1>
    <p class="hcolor">and provide your quote number: <span class="QuoteID"></span></p>

    <div class="body">Thank you for requesting a quote.
        <br/>
        Based on the information you provided we are unable to provide you with an online quote.</div>

</div>

<?php nextArrow(false, "display-none");?>

<script>
$(function(){
	SendErrorReport(get("error"));
});
</script>

<script src="../../js/analytics.js"></script>
<script src="../../js/mixpanel.js"></script>
