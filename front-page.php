<?php /* Template Name: Homepage */ ?>

<?php get_header(); ?>

	<?php while ( have_posts() ) : the_post(); ?>
		
		<?php the_content(); ?>
	
	<?php endwhile; // end of the loop. ?>

	<?php
		$nonce    = wp_create_nonce('fluente_' . get_the_ID());
	?>
	<section class="subscribe side section">
		<div class="wrapper">
			<header class="section__title section__title--side">
				<h2>Quero brinde</h2>
				<h4>Complete com seu nome e e-mail.</h4>
				<p>Obrigado por ler até aqui. Para ajudar no pontapé inicial da sua jornada em inglês, toma um brinde!</p>
				<p>📘 um guia para atividades divertidas em inglês</p>
				<p>🔒 Seus dados nunca serão cedidos.</p>
			</header>
			<form class="subscribe__form" id="brinde-form" action="">
				<label>
					<span><?php _e( 'Seu nome', 'fluente' ) ?></span>
					<input
						type="text"
						autocomplete="name"
						id="name"
						name="name"
						required
					/>
					<p class="error"><?php _e( 'Por favor, complete com seu nome', 'fluente' ) ?></p>
				</label>
				<label>
					<span><?php _e( 'Seu email', 'fluente' ) ?></span>
					<input
						type="email"
						inputmode="email"
						autocomplete="email"
						id="email"
						name="email"
						required
					/>
					<p class="error"><?php _e( 'Por favor, complete com seu email', 'fluente' ) ?></p>
				</label>

				<button 
					type="submit"
					class="button subscribe__button button--primary"
					data-nonce="<?php echo $nonce; ?>"
					data-post="<?php echo get_the_ID(); ?>"
				>
					<?php _e( 'Manda!', 'fluente' ) ?> <span class="loading"></span>
				</button>
			</form>
		</div>
		
	</section>

<?php

	get_footer(); 

?>