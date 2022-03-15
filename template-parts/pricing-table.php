<li class="pricing__option pricing__option--<?php echo $icon ?>">
	<dl>
		<dt class="pricing__course"><?php echo $course ?></dt>
		<dd class="pricing__fee"><small><?php echo $instalments ?>x</small> R$ <?php echo $fee ?> <small>/mês</small></dd>
		<dd class="pricing__detail"><?php echo $line_1 ?></dd>
		<dd class="pricing__detail"><?php echo $line_2 ?></dd>
		<dd class="pricing__detail pricing__detail--spaced"><?php echo $line_3 ?></dd>
		<dd class="pricing__detail"><?php echo $line_4 ?></dd>

		<?php if( $open_enrolment ): ?>
			<a class="button button--primary" href="<?php echo $link ?>">Matrícula</a>
			<button class="terms terms--<?php echo $tc ?>">Termos & Condições</button>
		<?php else: ?>
			<a class="button button--primary" href="#">Reservar</a>
			<button class="terms terms--reserva">Termos & Condições</button>
		<?php endif; ?>
	</dl>
</li>