<?php 
	if( is_admin() ):

		echo '<h3>Bloco: Bio</h3>';

	else:
		
		$video    = get_field( 'bio_video' );
		$title    = get_field( 'bio_title' );
		$subtitle = get_field( 'bio_subtitle' );
		$content  = get_field( 'bio_content' );
		$counters = get_field( 'bio_counters' );

?>
	
	<section class="bio side section">
		<div class="wrapper">
			<div class="bio__screen">
				<video class="device-content" muted autoplay playsinline>
					<source src="<?php echo $video ?>" type="video/mp4" />
					Seu navegador não oferece a funcionalidade de vídeos.
				</video>
			</div>
			<div class="bio__info">
				<header class="section__title section__title--side">
					<h2><?php echo $title ?></h2>
					<h4><?php echo $subtitle ?></h4>
				</header>

				<?php echo $content ?>

				<?php if( $counters ): ?>

					<ul class="bio__counters">

						<?php 

							foreach( $counters as $counter ) {
								extract( $counter );
								include( locate_template( 'template-parts/bio-counter.php' ) );
							} 

						?>

					</ul>

				<?php endif; ?>

			</div>
		</div>
	</section>

<?php
	endif;
?>