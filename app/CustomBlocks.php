<?php 

namespace app;

class CustomBlocks {

	public function __construct() {

		if( function_exists('acf_register_block_type') ) {

			// Register custom category
			add_filter( 'block_categories', array( $this, 'custom_block_categories' ), 10, 2 );

			// Custom blocks
			// include_once('blocks/testimonials.php');
		}

	}


	public function custom_block_categories( $categories, $post ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug' => 'fluente-blocks',
					'title' => __( 'Fluente', 'fluente' ),
				),
			)
		);
	}


}


?>