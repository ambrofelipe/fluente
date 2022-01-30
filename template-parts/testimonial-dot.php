<li>
	<button 
		class="testimonials__dot <?php echo $i === $main_slide ? "testimonials__dot--active" : "" ?>" 
		aria-label="<?php _e( printf( 'Go to slide %d', $i + 1 ), 'fluente' ) ?>" 
		aria-controls="testimonials__slider" 
		data-index="<?php echo $i ?>">
	</button>
</li>