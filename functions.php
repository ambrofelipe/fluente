<?php
/**
 * Autoloader
 *
 * @param string $class class name
 *
 * @return void
 */
function app_autoloader($class) {

	$path = dirname(__FILE__) . DIRECTORY_SEPARATOR;

	$class = str_replace("\\", DIRECTORY_SEPARATOR, $class);
	if ( file_exists($path . $class . '.php') ) {
		include $path . $class . '.php';
	}

}
// Register autoloader
spl_autoload_register('app_autoloader');

// Theme setup
new \app\Setup();

// JS and CSS
new \app\Enqueue();

// Custom Post Types
new \app\PostTypes();

// Log in and log out button
new \app\Loginout();

// Options page
new \app\OptionsPage();

// Custom Blocks
new \app\CustomBlocks();

// Custom fields
new \app\CustomFields();

// Custom Taxonomies
//new \app\Taxonomies();

// AJAX functions
//new \app\ajax();

// General functions
//new \app\General();
