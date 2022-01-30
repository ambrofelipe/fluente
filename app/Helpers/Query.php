<?php
namespace app\Helpers;

class Query {


	public function get_all( $post_type, $perPage = -1 ) {
		
        $args = array(
            'post_type'      => $post_type,
            'posts_per_page' => $perPage,
            'post_status'    => 'publish'
        );

        return $args;

	}

}
