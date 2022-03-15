<?php
acf_register_block_type(array(
    'name'              => 'gallery',
    'title'             => __('Gallery', 'fluente'),
    'render_template'   => 'gutenberg/gallery.php',
    'mode'              => 'auto',
    'enqueue_style'     => get_template_directory_uri() . '/style.css',
    'category'          => 'fluente-blocks',
    'icon'              => 'format-gallery',
    'keywords'          => array( 'photos' ),
    'post_types'        => array( 'page' ),
));
