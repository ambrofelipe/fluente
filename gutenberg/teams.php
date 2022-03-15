<?php 
	if( is_admin() ):

		echo '<h3>Bloco: English in Teams</h3>';

	else:
		
		$title    = get_field( 'teams_title' );
		$subtitle = get_field( 'teams_subtitle' );

?>
	
	<section class="teams section">
		<header class="section__title">
			<h2><?php echo $title ?></h2>
			<h4>
				<?php echo $subtitle ?>
			</h4>
		</header>

		<?php if( have_rows( 'teams_desc' )): ?>
		<ul class="section__details">

			<?php 
				while( have_rows( 'teams_desc' )): the_row(); 

					$desc_title    = get_sub_field( 'teams_desc_title' );
					$desc_subtitle = get_sub_field( 'teams_desc_subtitle' );
					$desc_icon     = get_sub_field( 'teams_desc_icon' );

					include( locate_template( 'template-parts/teams-desc.php' ) );
			?>

			<?php
				endwhile;
			?>
		</ul>
		<?php endif; ?>
		<a class="button button--primary" href="contratar/#teams">Valores e matrícula</a>
	</section>

<?php
	endif;
?>