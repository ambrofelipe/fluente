<?php 

namespace app;

class Ajax{

	/**
	 * Constructor
	 */
	public function __construct(){

		$handlers = array(
			'ajax_example'
		);

		if ( is_user_logged_in() ) {
			/**
			 * Fires authenticated AJAX actions for logged-in users.
			 */
			foreach ($handlers as $handler){
				add_action( 'wp_ajax_' . $handler . '_handler' , array($this,$handler . '_handler') );
			}
		} else {
			/**
			 * Fires non-authenticated AJAX actions for logged-out users.
			 */
			foreach ($handlers as $handler){
				add_action( 'wp_ajax_nopriv_' . $handler . '_handler', array( $this, $handler . '_handler' ) );
			}
		}

	}


	public function ajax_example_handler(){

		wp_die();
	}


}


?>