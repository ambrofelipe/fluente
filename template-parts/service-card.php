<div class="services__card">
    <div class="services__card--front">
		<img class="services__bg" src="<?php echo $image; ?>" alt="" />
		<h3 class="services__title"><?php echo $title; ?></h3>
		<p class="services__description">
			<?php echo $excerpt; ?>
		</p>
		<button class="services__open" aria-label="<?php _e( 'Open card', 'fluente' ) ?>"></button
		><span class="services__see"><?php _e( 'See Our Services', 'fluente' ) ?></span>
    </div>
    <div class="services__card--back">
		<h3 class="services__title"><?php echo $title; ?></h3>
		<div class="services__content">
			<?php echo $content; ?>
		</div> 
		<button class="services__close" aria-label="<?php _e( 'Close card', 'fluente' ) ?>"></button
		><span class="services__see close"><?php _e( 'Close', 'fluente' ) ?></span>
    </div>
</div>