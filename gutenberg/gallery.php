<?php 
	if( is_admin() ):

		echo '<h3>Bloco: Gallery</h3>';

	else:
		
		$title      = get_field( 'gallery_title' );
		$subtitle   = get_field( 'gallery_subtitle' );
		$photos     = get_field( 'gallery_photos' );
?>

<section class="gallery section">
		<header class="section__title">
			<h2><?php echo $title ?></h2>
			<h4><?php echo $subtitle ?></h4>
		</header>

		<div class="wrapper">

			<?php if( $photos ): ?>

				<ul class="gallery__list">

					<?php foreach($photos as $photo): ?>

						<li class="gallery__item">
							<?php echo wp_get_attachment_image( $photo, 'full' ) ?>
						</li>
					
					<?php endforeach; ?>
				</ul>

			<?php endif; ?>

		</div>
	</section>

<?php
	endif;
?>