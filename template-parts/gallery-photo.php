<?php 
	// $x index starts at zero, so add 1 to print it starting from 1
	$curr = $x + 1; 
?>
<li 
	class="gallery__photo"
	aria-role="img" 
	aria-roledescription="slide" 
	aria-label="<?php _e( "Photo $curr", 'fluente' ) ?>"
>
	<img src="<?php echo $image; ?>" alt="<?php echo $alt; ?>" />
</li>