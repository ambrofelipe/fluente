<?php

namespace app;

/**
 * Adds a Log in / Log out link to the menu
 *
 * @package app
 */
class Loginout {

	/**
	 * Loginout constructor
	 */
	public function __construct() {

		add_filter( 'wp_nav_menu_items', array( $this, 'fluente_login_logout_link' ), 10, 2 );
		
	}
	
	public function fluente_login_logout_link( $items, $args ) {
	
		ob_start();
		wp_loginout( 'index.php' );
		$loginoutlink = ob_get_contents();
		ob_end_clean();
		$items .= '<li class="menu-item menu-user">' . $loginoutlink . '</li>';
		
		return $items; 
	
	}

}