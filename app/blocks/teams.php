<?php
acf_register_block_type(array(
    'name'              => 'teams',
    'title'             => __('English in Teams', 'fluente'),
    'render_template'   => 'gutenberg/teams.php',
    'mode'              => 'auto',
    'enqueue_style'     => get_template_directory_uri() . '/style.css',
    'category'          => 'fluente-blocks',
    'icon'              => 'grid-view',
    'keywords'          => array( 'teams' ),
    'post_types'        => array( 'page' ),
));

