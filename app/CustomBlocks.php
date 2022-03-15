<?php 

namespace app;

class CustomBlocks {

	public function __construct() {

		if( function_exists('acf_register_block_type') ) {

			// Register custom category
			add_filter( 'block_categories_all', array( $this, 'custom_block_categories' ), 10, 2 );

			// Custom blocks
			include_once('blocks/hero.php');
			include_once('blocks/teams.php');
			include_once('blocks/fast.php');
			include_once('blocks/gallery.php');
			include_once('blocks/bio.php');
			include_once('blocks/testimonials.php');
			include_once('blocks/pricing.php');
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