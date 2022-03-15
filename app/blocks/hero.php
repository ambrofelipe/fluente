<?php
acf_register_block_type(array(
    'name'              => 'hero',
    'title'             => __('Hero', 'fluente'),
    'render_template'   => 'gutenberg/hero.php',
    'mode'              => 'auto',
    'enqueue_style'     => get_template_directory_uri() . '/style.css',
    'category'          => 'fluente-blocks',
    'icon'              => 'welcome-view-site',
    'keywords'          => array( 'hero' ),
    'post_types'        => array( 'page' ),
));
