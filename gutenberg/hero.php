<?php 
	if( is_admin() ):

		echo '<h3>Bloco: Hero</h3>';

	else:

?>

	<main class="main <?php echo is_front_page() ? "main__home" : "main__hire"; ?>">
		<div class="main__overlay">

			<?php if( is_front_page() ): ?>

				<?php echo do_shortcode("[booked-calendar]") ?>
				<header class="main__header">
					<h1 class="main__title">
						<strong>Todo mundo</strong> é capaz de aprender inglês online.
					</h1>
					<h2 class="main__subtitle">
						E a melhor forma é divertindo-se e fazendo o que gosta.
					</h2>
				</header>
			
			<?php elseif( is_page( 13 ) ):

				echo do_shortcode("[booked-calendar]");

			elseif( is_page( 145 )):

				echo do_shortcode("[get_certificate_search_form]");

			else:

				$open_enrolment    = get_field( 'open_enrolment' );
				$next_availability = get_field( 'next_available_date' );

				wp_cache_set( 'open_enrolment', $open_enrolment );

				if( $open_enrolment ): ?>

					<header class="main__header">
						<h1 class="main__title">
							As matrículas estão abertas
						</h1>
						<p class="main__desc">
							Matricule-se no melhor curso abaixo. É uma boa ideia conversarmos antes para definirmos seu melhor curso — mande-nos uma mensagem no Instagram!
						</p>
						<a class="button main__button button--primary" href="#teams">Ver cursos</a>
					</header> <?php

				else: ?>

					<header class="main__header">
						<h1 class="main__title">
							As reservas estão fechadas
						</h1>
						<p class="main__desc">
							Infelizmente, as vagas para este mês estão todas preenchidas. Veja como é fácil reservar a sua vaga sem pagar a mais por isso.
						</p>
					</header>
					<section>
						<h2 class="main__subtitle">Reserve já para o English in Teams</h2>
						<ul class="main__list">
							<li class="main__listitem">🗓 Comece em <?php echo $next_availability ?></li>
							<li class="main__listitem">🔖 O voucher para reserva é de R$199</li>
						</ul>
						<p class="main__desc">Não é uma taxa extra, pois o voucher é usado no primeiro mês de aulas.</p>
						<a class="button main__button button--primary" href="https://buy.stripe.com/14k2bqgNYdKpf5e6or">Quero reservar</a>
						<button class="terms terms--reservation">Termos & Condições</button>
					</section> <?php
					
				endif;
			endif; ?>
			
		</div>
	</main>

<?php 
	endif;
?>