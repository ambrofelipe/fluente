<?php 
	if( is_admin() ) {

		echo '<h3>Bloco: Depoimentos</h3>';

	} else {
		
		$title    = get_field( 'testimonials_title');
		$subtitle = get_field( 'testimonials_subtitle' );

		$testimonials = \app\Models\Testimonials::get_all_testimonials();

		$main_slide = 2;

	?>

	<section class="testimonials section">
		<header class="section__title">
			<h2><?php echo $title ?></h2>
			<h4><?php echo $subtitle ?></h4>
		</header>

		<?php if( $testimonials ): ?>

			<div class="wrapper">

				<?php

					foreach( $testimonials as $testimonial ) {
						extract( $testimonial );
						include( locate_template( 'template-parts/testimonial-card.php' ) );
					}

				?>

			</div>

		<?php endif; ?>
	</section>

<?php
	}
?>