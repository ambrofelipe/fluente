<?php
acf_register_block_type(array(
    'name'              => 'testimonails',
    'title'             => __('Testemunhos', 'fluente'),
    'render_template'   => 'gutenberg/testimonials.php',
    'mode'              => 'auto',
    'enqueue_style'     => get_template_directory_uri() . '/style.css',
    'category'          => 'wy-blocks',
    'icon'              => 'smiley',
    'keywords'          => array( 'testemunhos' ),
    'post_types'        => array( 'page' ),
));

