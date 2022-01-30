<?php get_header(); ?>

<div class="archive">
	<div class="container-fluid">
		<?php while ( have_posts() ) : the_post(); ?>


		<?php  endwhile; // end of the loop. ?>
	</div>

</div>

<?php get_footer(); ?>
