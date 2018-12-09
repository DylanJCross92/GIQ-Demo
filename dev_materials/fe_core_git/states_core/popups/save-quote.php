<div class="overlay-wrapper save-quote">
    <div class="overlay-container">
    	<div class="close-x close-overlay-wrapper"></div>
        <div class="header">THANK YOU</div>
        <?php

        $recallURL = strpos($_SERVER["HTTP_HOST"].$_SERVER["REQUEST_URI"], '/giq') !== false ? "http://".$_SERVER["SERVER_NAME"]."/giq/recallquote.html" : "http://".$_SERVER["SERVER_NAME"]."/quotes/recallquote.html";

        ?>
        <div class="body">
      	Your quote has been saved. To retrieve your quote, please visit <a href="<?php echo $recallURL?>"><?php echo $recallURL;?></a>. You will need your quote number <strong><span class="QuoteID"></span></strong> and zip code.
        </div>
        
        <!--<div class="button-wrapper">
            <a class="button gray close-overlay-wrapper quit">Quit</a>
            <a class="button orange close-overlay-wrapper continue" style="float:right;">Continue</a>
        </div>-->
    
    </div>
</div>