<?php

namespace app;


class Setup {

	/**
	 * Theme setup constructor.
	 */
	public function __construct() {
		add_action( 'after_setup_theme', array( $this, 'fluente_setup' ) );
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


		// Register image sizes
		//add_image_size( 'example', 760, 500, true );


	}

}