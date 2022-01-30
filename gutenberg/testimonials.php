<?php 
	if( is_admin() ) {

		echo '<h3>Bloco: Testemunhos</h3>';

	} else {
		
		$testimonials = \app\Models\Testimonials::get_all_testimonials();

		$main_slide = 2;

	?>


	<section class="testimonials section">
		<h2 class="section__title testimonials__title"><?php _e( 'Testimonials', 'fluente' ) ?></h2>

		<div class="testimonials__slider slider" role="region" aria-roledescription="carousel" aria-label="<?php _e( 'Testimonials', 'fluente' ) ?>" data-index="<?php echo $main_slide ?>">
			
			<?php if( $testimonials ) { $x = 0; ?>

				<ul id="testimonials__slider" aria-live="on" aria-live="polite">

					

					<?php

						foreach( $testimonials as $testimonial ) {
							extract( $testimonial );
							include( locate_template( 'template-parts/testimonial-card.php' ) );
							$x++;
						}

					?>

				</ul>

				<ol class="testimonials__dots">

					<?php

						for( $i = 0; $i <= (count( $testimonials ) - 1); $i++ ) {
						include( locate_template( 'template-parts/testimonial-dot.php' ) );
						}

					?>

				</ol>

				<?php 
			} ?>


		</div>

		<a class="button testimonials__button button--primary" href="<?php echo home_url(); ?>/portfolio-cases/"
			><?php _e( 'Check out our Portfolio & Case Studies', 'fluente' ) ?></a
		>
	</section>


<?php
	}
?>