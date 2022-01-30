<?php

namespace app;

/**
 * Register Custom Post Types
 *
 * @package app
 */
class PostTypes {
	
	
	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_cpt_testimonials' ) );
	}

	public function register_cpt_testimonials() {
		$labels = array(
			"name" => __( "Testemunhos", "fluente" ),
			"singular_name" => __( "Testemunho", "fluente" ),
			"add_new" => __( "Adicionar Testemunho", "fluente" ),
			"add_new_item" => __( "Adicionar Novo Testemunho", "fluente" ),
			"edit_item" => __( "Editar Testemunho", "fluente" ),
			"new_item" => __( "Novo Testemunho", "fluente" ),
		);

		$args = array(
			"label" => __( "Testemunhos", "fluente" ),
			"labels" => $labels,
			"description" => "",
			"public" => true,
			"publicly_queryable" => true,
			"show_ui" => true,
			"delete_with_user" => false,
			"show_in_rest" => true, 
			"rest_base" => "",
			"rest_controller_class" => "WP_REST_Posts_Controller",
			"has_archive" => false,
			"show_in_menu" => true,
			"show_in_nav_menus" => true,
			"exclude_from_search" => true,
			"capability_type" => "post",
			"map_meta_cap" => true,
			"hierarchical" => false,
			"query_var" => true,
			"rewrite" => array( "slug" => "testimonials", "with_front" => false ),
			"menu_icon" => "dashicons-smiley",
			"supports" => array( "title", "editor", "excerpt", "thumbnail" ),
		);

		register_post_type( "testimonials", $args );
	}

}

