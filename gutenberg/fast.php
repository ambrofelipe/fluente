<?php 
	if( is_admin() ):

		echo '<h3>Bloco: Fast courses</h3>';

	else:
		
		$title      = get_field( 'fast_title' );
		$subtitle   = get_field( 'fast_subtitle' );
		$complement = get_field( 'fast_complement' );

?>

	<section class="side section">
		<div class="wrapper">
			<header class="section__title section__title--side">
				<h2><?php echo $title ?></h2>
				<h4>
					<?php echo $subtitle ?>
				</h4>
				<p>
					<?php echo $complement ?>
				</p>
			</header>
			<div>
				<?php if( have_rows( 'fast_desc' )): ?>
				<ul class="section__details">

					<?php 
						while( have_rows( 'fast_desc' )) {

							the_row(); 

							$desc_title    = get_sub_field( 'fast_desc_title' );
							$desc_subtitle = get_sub_field( 'fast_desc_subtitle' );
							$desc_icon     = get_sub_field( 'fast_desc_icon' );

							include( locate_template( 'template-parts/fast-desc.php' ) );
					
						}
					?>
				</ul>
				<?php endif; ?>
				<a class="button button--primary" href="contratar/#rapidos">Valores e matrícula</a>
			</div>
			
		</div>
		
	</section>

<?php 
	endif;
?>