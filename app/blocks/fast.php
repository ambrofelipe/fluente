<?php
acf_register_block_type(array(
    'name'              => 'fast',
    'title'             => __('Fast courses', 'fluente'),
    'render_template'   => 'gutenberg/fast.php',
    'mode'              => 'auto',
    'enqueue_style'     => get_template_directory_uri() . '/style.css',
    'category'          => 'fluente-blocks',
    'icon'              => 'grid-view',
    'keywords'          => array( 'exam', 'prep', 'tourism', 'esp', 'work', 'business' ),
    'post_types'        => array( 'page' ),
));
