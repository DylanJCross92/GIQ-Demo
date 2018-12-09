<?php 
	
	
function previousArrow($url, $classes = "")
{
	?>
    <div class="back-arrow-wrapper">
    	<div class="loader <?php echo $classes?>"></div>
        <a class="back-arrow <?php echo $classes?>" <?php if($url){?>href="<?php echo $url?>" data-original-href="<?php echo $url?>"<?php }?>></a>
    </div> 
    <?php
}

function nextArrow($url, $classes = "")
{
	?>
	<div class="forward-arrow-wrapper">
    	<div class="loader <?php echo $classes?>"></div>
    	<a class="forward-arrow <?php echo $classes?>" <?php if($url){?>href="<?php echo $url?>" data-original-href="<?php echo $url?>"<?php }?>></a>
	</div>
    <?php
}
?>