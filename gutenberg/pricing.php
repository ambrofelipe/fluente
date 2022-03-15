<?php 
	if( is_admin() ):

		echo '<h3>Bloco: Pricing table</h3>';

	else:

		$open_enrolment = wp_cache_get( 'open_enrolment' );

		$title      = get_field( 'table_title' );
		$subtitle   = get_field( 'table_subtitle' );
		$background = get_field( 'table_background' );
		$opening    = get_field( 'table_opening' );
?>

<section class="pricing section" id="teams">
	<header class="section__title">
		<h2><?php echo $title ?></h2>
		<h4>
			<?php echo $subtitle ?>
		</h4>
	</header>

	<?php if( have_rows( 'table_desc' ) ): ?>

		<ul class="section__details">

			<?php 
				while( have_rows( 'table_desc' ) ) {

					the_row(); 

					$desc_title    = get_sub_field( 'table_desc_title' );
					$desc_subtitle = get_sub_field( 'table_desc_subtitle' );
					$desc_icon     = get_sub_field( 'table_desc_icon' );

					include( locate_template( 'template-parts/pricing-desc.php' ) );

				}
			?>

		</ul>

	<?php endif; ?>

	<?php if( have_rows( 'table_prices' ) ): ?>
	
		<div class="pricing__table pricing__table--<?php echo $background ?>">
			<div class="pricing__overlay">
				<p class="pricing__opener">
					<?php echo $opening ?>
				</p>
				<ol class="pricing__options">

					<?php 
						
						while( have_rows( 'table_prices' ) ) {
						
							the_row();

							$course      = get_sub_field( 'table_prices_course' );
							$instalments = get_sub_field( 'table_prices_instalments' );
							$fee         = get_sub_field( 'table_prices_fee' );
							$line_1      = get_sub_field( 'table_prices_line_1' );
							$line_2      = get_sub_field( 'table_prices_line_2' );
							$line_3      = get_sub_field( 'table_prices_line_3' );
							$line_4      = get_sub_field( 'table_prices_line_4' );
							$link        = get_sub_field( 'table_prices_link' );
							$tc          = get_sub_field( 'table_prices_tc' );
							$icon        = get_sub_field( 'table_prices_icon' );

							include( locate_template( 'template-parts/pricing-table.php' ) );

						}
					?>

				</ol>
			</div>
		</div>
		
	<?php endif; ?>

	</section>

<?php
	endif;
?>