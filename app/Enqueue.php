<?php

namespace app;

/**
 * Enqueue JS and CSS assets
 * @package app
 */
class Enqueue {

	/**
	 * Enqueue constructor.
	 */
	public function __construct() {

		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_styles' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
		
	}

	
	public function asset_path( $filename ) {

		$manifest_path = get_template_directory() . '/dist/rev-manifest.json';
		$assets_path   = get_template_directory_uri() . '/dist/';

		if ( file_exists( $manifest_path ) ) {
			$manifest = json_decode( file_get_contents( $manifest_path ), true );
		} else {
			$manifest = array();
		}

		if ( array_key_exists( $filename, $manifest ) ) {
			return $assets_path . $manifest[ $filename ];
		}

		return $assets_path . $filename;

	}


	/**
	 * Add JS
	 */
	public function enqueue_scripts() {

		wp_enqueue_script(
			'fluente-vendor',
			$this->asset_path( 'js/vendor.js' ),
			array( 'jquery' ),
			false,
			true
		);

		wp_enqueue_script(
			'fluente-scripts',
			$this->asset_path( 'js/main.js' ),
			array( 'jquery' ),
			false,
			true
		);

		// declare the URL to the file that handles the AJAX request (wp-admin/admin-ajax.php)
		wp_localize_script( 'fluente-scripts', 'ajaxObj', 
		array( 
			'ajaxurl' => admin_url( 'admin-ajax.php' ),
			'nonce' => wp_create_nonce( "ajax-nonce" ) 
			) 
		);

	}
	
	
	/**
	 * Add CSS
	 */
	public function enqueue_styles() {

		wp_enqueue_style(
			'fluente-styles',
			$this->asset_path( 'css/main.css' ),
			array(),
			null,
			false
		);

	}

}