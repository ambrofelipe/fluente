<?php
namespace app;

class Taxonomies {

	/**
	 * Constructor.
	 */
	public function __construct() {
		//add_action( 'init', array( $this, 'register_example_taxonomy' ) );
	}


	public function register_example_taxonomy() {
		$labels = array(
			"name" => __( "Example Category", "textdomain" ),
			"singular_name" => __( "Example Category", "textdomain" ),
		);

		$args = array(
			"label" => __( "Example Category", "textdomain" ),
			"labels" => $labels,
			"public" => true,
			"hierarchical" => true,
			"show_ui" => true,
			"show_in_menu" => true,
			"show_in_nav_menus" => true,
			"query_var" => true,
			"rewrite" => array( 'slug' => 'example_categories', 'with_front' => false ),
			"show_admin_column" => false,
			"show_in_rest" => true,
			"rest_base" => "",
			"show_in_quick_edit" => true,
		);
		
		register_taxonomy( "example_category", array( "example" ), $args );

	}


}
