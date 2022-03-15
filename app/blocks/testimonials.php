<?php
acf_register_block_type(array(
    'name'              => 'testimonials',
    'title'             => __('Testimonials', 'fluente'),
    'render_template'   => 'gutenberg/testimonials.php',
    'mode'              => 'auto',
    'enqueue_style'     => get_template_directory_uri() . '/style.css',
    'category'          => 'fluente-blocks',
    'icon'              => 'smiley',
    'keywords'          => array( 'depoimentos', 'testemunhos' ),
    'post_types'        => array( 'page' ),
));

