<?php
acf_register_block_type(array(
    'name'              => 'bio',
    'title'             => __('Bio', 'fluente'),
    'render_template'   => 'gutenberg/bio.php',
    'mode'              => 'auto',
    'enqueue_style'     => get_template_directory_uri() . '/style.css',
    'category'          => 'fluente-blocks',
    'icon'              => 'admin-users',
    'keywords'          => array( 'video', 'counters' ),
    'post_types'        => array( 'page' ),
));