<?php 
namespace app;


/**
 * Rgister ACF fields
 *
 * @package app
 */
class CustomFields {

	/**
	 * Constructor.
	 */
	public function __construct() {
		if( function_exists('acf_add_local_field_group') ) {
			//$this->example_custom_fields();
		}
	}


	public function example_custom_fields() {
		
	}

}
