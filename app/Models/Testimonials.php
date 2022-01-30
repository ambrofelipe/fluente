<?php 

namespace app\Models;
use app\Helpers;


class Testimonials {

    private static $post_type = 'testimonials';
    protected static $query_helper = null;


    /**
     * 
     */
    private static function query_helper(){
        if ( is_null( self::$query_helper ) ) {
            self::$query_helper = new Helpers\Query();
        }
        return self::$query_helper;
    }



     /**
     * 
     */
    public static function get_all_testimonials(){
        $args = self::query_helper()->get_all( self::$post_type );
        return self::prepare_query_and_return_results( $args );
    }



     /**
     * 
     */
    private static function prepare_query_and_return_results( $args ){

        $query = new \WP_Query($args);

        if( $query->have_posts() ){

            $posts = array();

            while( $query->have_posts() ){
                $query->the_post();
               
                $id = get_the_ID();
               
                $posts[] = array(
                    'id'      => $id,
                    'title'   => get_the_title( ),
                    'link'    => get_the_permalink(),
                    'excerpt' => get_the_excerpt(),
                    'image'   => get_the_post_thumbnail_url( $id, 'medium' ),
                    'content' => apply_filters( 'the_content', get_the_content() )
                );
            }
            wp_reset_postdata();

            return $posts;

        }

        return false;

    }

}


?>