<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="default" />

	<meta name="name" content="Todo mundo é capaz de aprender inglês online.">
	<meta name="keywords" content="inglês,fluente,aprender inglês,falar inglês,praticar inglês,ficar fluente,certificação inglês,ielts,toefl,cambridge,inglês para trabalho,inglês para turismo,felipe ambrosio,ruama vieras">
	<meta name="image" content="/favicon/e192.png">
	<meta name="md:locale" content="pt_BR">
	<meta
		name="description"
		content="E a melhor forma é divertindo-se e fazendo o que gosta. Escolha um curso de inglês por videoconferência que contempla seu objetivo pessoal, com professor experiente e ambiente de aula online profissional."
	/>
	<meta name="format-detection" content="telephone=no" />

	<!-- favicon -->
	<link rel="apple-touch-icon" sizes="192x192" href="<?php echo get_template_directory_uri(); ?>/dist/favicon/e192.png" />
	<link rel="apple-touch-icon" sizes="128x128" href="<?php echo get_template_directory_uri(); ?>/dist/favicon/e128.png" />
	<link rel="icon" type="image/png" sizes="64x64" href="<?php echo get_template_directory_uri(); ?>/dist/favicon/e64.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/dist/favicon/e32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/dist/favicon/e16.png" />
	<link rel="manifest" href="<?php echo get_template_directory_uri(); ?>/dist/favicon/manifest.json" />
	<link rel="canonical" href="https://fluente.me/" />

	<meta name="theme-color" media="(prefers-color-scheme: light)" content="#F2404C" />
	<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#2A3754" />

	<meta property="og:title" content="Todo mundo é capaz de aprender inglês online." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://fluente.me/" />
	<meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/dist/favicon/e192.png" />
	<meta
		property="og:description"
		content="E a melhor forma é divertindo-se e fazendo o que gosta. Escolha um curso de inglês por videoconferência que contempla seu objetivo pessoal, com professor experiente e ambiente de aula online profissional."
	/>

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Todo mundo é capaz de aprender inglês online." />
	<meta
		name="twitter:description"
		content="E a melhor forma é divertindo-se e fazendo o que gosta. Escolha um curso de inglês por videoconferência que contempla seu objetivo pessoal, com professor experiente e ambiente de aula online profissional."
	/>
	<meta name="twitter:image" content="<?php echo get_template_directory_uri(); ?>/dist/favicon/e192.png" />

	<style>
		#splash {
			display: flex;
			align-items: center;
			justify-content: center;
			visibility: visible;
			opacity: 1;
			position: fixed;
			inset: 0;
			z-index: 500;
			background: #022636;
			transition: opacity 300ms ease;
		}

		#splash img {
			width: clamp(12rem, 50vw, 25rem);
		}
	</style>

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?> >

	<?php if(is_front_page()) { ?>
	<div id="splash">
		<img src="<?php echo get_template_directory_uri(); ?>/dist/img/logo-dark.svg" alt="Fluente" />
	</div>
	<?php } ?>
	
	<header class="header">
		<div class="wrapper">
			<a href="/" class="header__logo" title="Fluente"></a>

			<button class="header__hamburger" aria-label="<?php _e( 'Toggle menu', 'fluente' ) ?>">
				<span></span>
				<span></span>
				<span></span>
			</button>

			<?php 
				wp_nav_menu( 
					array( 
						'theme_location'  => 'primary', 
						'container'       => 'nav', 
						'container_class' => 'header__nav', 
						'items_wrap'      => '<ul>%3$s</ul>'
					) 
				);
			?>
		</div>
	</header>



