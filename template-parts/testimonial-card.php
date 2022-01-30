<?php 
	// $x index starts at zero, so add 1 to print it starting from 1
	$curr = $x + 1; 
?>
<li 
	class="testimonials__slide <?php echo $x === $main_slide ? "testimonials__slide--main" : "" ?>"
	aria-role="group" 
	aria-roledescription="slide" 
	aria-label="<?php _e( "Testimonial $curr", 'fluente' ) ?>" 
	data-index="<?php echo $x ?>"
>
	<div>
		<?php echo $content; ?>
		<img
			src="<?php echo $image; ?>"
			alt="<?php echo $title; ?>"
		/>
		<h5><?php echo $title; ?></h5>
		<p><?php echo $excerpt; ?></p>
	</div>
</li>