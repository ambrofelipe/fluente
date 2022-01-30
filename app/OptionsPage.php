<?php 
namespace app;


/**
 * Rgister ACF options page
 *
 * @package app
 */
class OptionsPage {

	/**
	 * Constructor.
	 */
	public function __construct() {

		if( function_exists('acf_add_options_page') ) {
			acf_add_options_page( array( 'page_title' => __('Site Options', 'fluente' ) ) );
		}


	}

}
