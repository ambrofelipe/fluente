<?php
	$facebook	= get_field( 'facebook', 'option' );
	$instagram	= get_field( 'instagram', 'option' );
	$linkedin	= get_field( 'linkedin', 'option' );
	$email		= get_field( 'email', 'option' );
	$phone		= get_field( 'phone', 'option' );
?>
		
		<footer class="footer">
			<div class="wrapper">
				<a class="footer__home" href="https://fluente.me" title="Go to the home page"></a>
				<nav class="footer__nav">
					<?php 
						wp_nav_menu( 
							array( 
								'menu'           => 'Footer',
								'menu_class'     => 'footer__list',
								'theme_location' => 'primary', 
								'container'      => false,
								'item_class'     => 'footer__item'
							) 
						);
					?>
				</nav>
				<nav class="footer__social">
					<ul class="footer__list">

						<?php if( $facebook ): ?>
							<li class="footer__item footer__item--fb">
								<a href="<?php echo $facebook ?>" target="_blank" title="Facebook (opens in another tab)"></a>
							</li>
						<?php endif; ?>

						<?php if( $instagram ): ?>
						<li class="footer__item footer__item--ig">
							<a href="<?php echo $instagram ?>" target="_blank" title="Instagram (opens in another tab)"></a>
						</li>
						<?php endif; ?>

						<?php if( $linkedin ): ?>
							<li class="footer__item footer__item--in">
								<a href="<?php echo $linkedin ?>" target="_blank" title="LinkedIn (opens in another tab)"></a>
							</li>
						<?php endif; ?>
					</ul>
				</nav>
				<div class="footer__info">
					<p>Todo mundo é capaz de aprender inglês online, e a melhor forma é divertindo-se e fazendo o que você gosta.</p>
					<address>
						<p><?php echo $email ?></p>
						<p><?php echo $phone ?></p>
					</address>
				</div>

			</div>
			
		</footer>

		<div class="dim"></div>
		<dialog class="modal">
			<button aria-label="<?php _e( 'Close', 'fluente' ) ?>"><i class="booked-icon booked-icon-close"></i></button>
			<h1></h1>
			<div></div>
		</dialog>
		<dialog class="thanks">
			<button aria-label="<?php _e( 'Close', 'fluente' ) ?>"><i class="booked-icon booked-icon-close"></i></button>
			<h1></h1>
			<p></p>
		</dialog>
		<?php wp_footer(); ?>

	</body>
</html>