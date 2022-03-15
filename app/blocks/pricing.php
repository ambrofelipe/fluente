<?php
acf_register_block_type(array(
    'name'              => 'pricing',
    'title'             => __('Pricing table', 'fluente'),
    'render_template'   => 'gutenberg/pricing.php',
    'mode'              => 'auto',
    'enqueue_style'     => get_template_directory_uri() . '/style.css',
    'category'          => 'fluente-blocks',
    'icon'              => 'money-alt',
    'keywords'          => array( 'precificação', 'preços', 'valores', 'tabela' ),
    'post_types'        => array( 'page' ),
));