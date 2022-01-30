
<div class="cases__card <?php echo $width ?>">
	<div class="cases__card--front">
		<span class="cases__overlay"></span>
		<img class="cases__bg" src="<?php echo $image; ?>" alt="" />
		<h3 class="cases__client"><?php echo $title; ?></h3>
		<?php echo $content; ?>
		<button class="cases__open cases__open--center" aria-label="<?php _e( 'Open case', 'fluente' ) ?>"></button>
	</div>
</div>