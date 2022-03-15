<?php

namespace app;


class Setup {

	/**
	 * Theme setup constructor.
	 */
	public function __construct() {
		add_action( 'after_setup_theme', array( $this, 'fluente_setup' ) );
		remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
		remove_action( 'wp_print_styles', 'print_emoji_styles' );
		add_filter( 'login_redirect', array( $this, 'fluente_login_redirect' ), 10, 3 );
		add_filter( 'nav_menu_css_class', array( $this, 'add_additional_class' ), 1, 3 );
	}


	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	public function fluente_setup() {

		/*
			* Make theme available for translation.
			* Translations can be filed in the /lang/ directory.
			*/
		load_theme_textdomain( 'fluente', get_template_directory() . '/lang' );

		/*
			* Let WordPress manage the document title.
			* By adding theme support, we declare that this theme does not use a
			* hard-coded <title> tag in the document head, and expect WordPress to
			* provide it for us.
			*/
		add_theme_support( 'title-tag' );

		/*
			* Enable support for Post Thumbnails on posts and pages.
			*
			* @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
			*/
		add_theme_support( 'post-thumbnails' );


		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'primary' => __( 'Main Menu', 'fluente' ),
			'footer' => __( 'Footer Menu', 'fluente' ),
		) );

		/*
			* Switch default core markup for search form, comment form, and comments
			* to output valid HTML5.
			*/
		add_theme_support( 'html5', array(
			'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'post-thumbnails'
		) );


		// Add excerpt to pages
		add_post_type_support( 'page', 'excerpt' );

	}

	/**
	 * Redirect user after successful login.
	 *
	 * @param string $url URL to redirect to.
	 * @param string $request URL the user is coming from.
	 * @param object $user Logged user's data.
	 * @return string
	 */

	public function fluente_login_redirect( $url, $request, $user ) {
		if ( $user && is_object( $user ) && is_a( $user, 'WP_User' ) ) {
			if ( $user->has_cap( 'edit_posts' ) ) {
				$url = admin_url();
			} else {
				$url = home_url( '/perfil/' );
			}
		}
		return $url;
	}

	/**
	 * Adds custom property to wp_nav_menu options array that lets us add CSS classes to the <li> element.
	 *
	 * @param object $classes Array of the CSS classes that are applied to the menu item's <li> element.
	 * @param string $item The current menu item object.
	 * @param object $args An object of wp_nav_menu() arguments.
	 * @return object
	 */

	function add_additional_class($classes, $item, $args) {
		if(isset($args->item_class)) {
			$classes[] = $args->item_class;
		}
		return $classes;
	}

}