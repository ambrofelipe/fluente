app.showTC = {

	init: function() {
		const pricing = document.querySelector(".page-id-8");

		if(pricing !== null) {
			const terms = pricing.querySelectorAll(".terms");
			const teams = pricing.querySelectorAll(".terms--teams");
			const fast = pricing.querySelectorAll(".terms--fast");

			const modal = document.querySelectorAll(".dim, .modal");
			
			const title = document.querySelector(".modal h1");
			const container = document.querySelector(".modal div");
			const closeBtn = document.querySelector(".modal button");
			
			terms.forEach(btn => {
				btn.addEventListener("click", function() {
					modal.forEach(el => {
						el.classList.add("visible");
						el.classList.add("on");
					});
				});
			});

			closeBtn.addEventListener("click", function () {
				modal.forEach(el => {
					el.classList.remove("on");
					setTimeout(() => { el.classList.remove("visible"); }, 300);
				});
			});

			const teamsTC = `
				<h2>O CURSO</h2>
				<p>O Curso é a prestação de serviços educacionais de língua inglesa pela Contratada (Tutor) à Contratante (Estudante), composto por encontros entre Tutor e Estudante (Aulas).</p>

				<h2>OS DEVERES DE TUTOR</h2>
				<ul>
					<li>Ministrar Curso com a carga horária definida;</li>
					<li>Registrar índice de presença em Aulas;</li>
					<li>Monitorar o uso do programa de estudos individual;</li>
					<li>Atribuir conceito pelo programa avaliativo no nível de proficiência estudado;</li>
					<li>Fornecer certificado a Estudante que obtém aprovação;</li>
					<li>Ser pontual e ético.</li>
				</ul>

				<h2>OS DEVERES DE ESTUDANTE</h2>
				<ul>
					<li>Obter índice de presença mínimo de 75% e conceito mínimo de 60% para aprovação;</li>
					<li>Frequentar Aulas na frequência recomendada e manter nelas o uso da língua inglesa;</li>
					<li>Adquirir e portar material didático recomendado;</li>
					<li>Relacionar-se bem com Estudantes e Tutor;</li>
					<li>Efetuar os pagamentos em dia;</li>
					<li>Ser pontual e ético.</li>
				</ul>

				<h2>O PRAZO</h2>
				<p>O Prazo é de 6 meses, e inicia-se a partir da ativação do Curso, notificada a Estudante na mensagem de boas-vindas. Enquanto o Prazo estiver ativo, os Deveres de Tutor e de Estudante se aplicam.</p>
				<p>Sendo assim, a data de encerramento do Curso varia consoante a frequência de Aulas, a incidência de feriados, e pedidos de remarcações. No entanto, a duração não pode exceder o Prazo.</p>

				<h2>A AULA</h2>
				<p>A Aula tem datas e horários de livre escolha por Estudante, sujeitos à disponibilidade de Tutor, e ocorre em ambiente virtual por aplicação de videoconferência. A Aula deve ser agendada com antecedência mínima de 24 horas. A Aula não pode ser agendada para usufruto de terceiro.</p>
				<p>Em caso de instabilidade na chamada que impossibilite a comunicação entre Tutor e Estudante, sem sucesso em restabelecê-la por até 20 minutos a partir da interrupção, a Aula é remarcada.</p>

				<h2>O CANCELAMENTO</h2>
				<p>A Aula pode ser cancelada com 24 horas de antecedência mínima, e pode ser remarcada ao limite de 8 Aulas no Curso. A Aula não cancelada, ou cancelada sem a antecedência mínima, não pode ser remarcada.</p>

				<h2>A PONTUALIDADE</h2>
				<p>O tempo máximo de espera é de 30 minutos. Atrasos acima do tempo máximo de espera tem efeito de cancelamento da Aula sem direito a remarcação.</p>

				<h2>O TRANCAMENTO</h2>
				<p>O trancamento pode ser solicitado por Estudante a qualquer momento, com efeito imediato, com duração máxima de 30 dias. Durante o trancamento, o Prazo é suspenso. Ao término do trancamento, o Prazo é restabelecido automaticamente.</p>

				<h2>A RESCISÃO</h2>
				<p>Em caso de rescisão por Tutor, todo o valor pago por aulas pendentes é reembolsado.</p>
				<p>Caso haja interesse na rescisão por Estudante, pode solicitá-la sem ônus. Ela é solicitada com antecedência de 30 dias, durante os quais o Prazo mantém-se ativo, e somente após os quais a rescisão é emitida.</p>

				<h2>O PAGAMENTO</h2>
				<p>O valor da parcela e vencimentos são fixos. O valor da parcela deve ser pago até o dia do vencimento pela forma de pagamento ora fixada. Sobre a parcela em atraso incide multa por atraso de 2%, mais juros de 0,33% ao dia, limitados a 10% do valor mensal.</p>

				<h2>O FORO</h2>
				<p>Se necessário resolver questões judiciais, fica escolhido o Foro da Comarca de Vitória – ES.</p>
			`;

			const fastTC = `
				<h2>O CURSO</h2>
				<p>O Curso é a prestação de serviços educacionais de língua inglesa pela Contratada (Tutor) à Contratante (Estudante), composto por encontros entre Tutor e Estudante (Aulas).</p>

				<h2>O PRAZO</h2>
				<p>O Prazo é de 2 meses, e inicia-se a partir da ativação do Curso, notificada a Estudante na mensagem de boas-vindas. Sendo assim, a data de encerramento do Curso varia consoante a frequência de Aulas, a incidência de feriados, e pedidos de remarcações. No entanto, a duração não pode exceder o Prazo.</p>

				<h2>A AULA</h2>
				<p>A Aula tem datas e horários de livre escolha por Estudante, sujeitos à disponibilidade de Tutor. A duração é de 1h00min, e ocorre em ambiente virtual por aplicação de videoconferência. A Aula deve ser agendada com antecedência mínima de 24 horas. A Aula não pode ser agendada para usufruto de terceiro.</p>
				<p>Em caso de instabilidade na chamada que impossibilite a comunicação entre Tutor e Estudante, sem sucesso em restabelecê-la por até 20 minutos a partir da interrupção, a Aula é remarcada.</p>

				<h2>O CANCELAMENTO</h2>
				<p>A Aula pode ser cancelada com 24 horas de antecedência mínima, e pode ser remarcada ao limite de 3 Aulas no Curso. A Aula não cancelada, ou cancelada sem a antecedência mínima, não pode ser remarcada.</p>

				<h2>A PONTUALIDADE</h2>
				<p>O tempo máximo de espera é de 30 minutos. Atrasos acima do tempo máximo de espera tem efeito de cancelamento da Aula sem direito a remarcação.</p>

				<h2>O TRANCAMENTO</h2>
				<p>Não há opção de trancamento em cursos rápidos.</p>

				<h2>A RESCISÃO</h2>
				<p>Em caso de rescisão por Tutor, todo o valor pago por aulas pendentes é reembolsado.</p>
				<p>Caso haja interesse na rescisão por Estudante, pode solicitá-la sem ônus. Ela é solicitada com antecedência de 30 dias, durante os quais o Prazo e as condições mantem-se ativos, e somente após os quais a rescisão é emitida.</p>

				<h2>O PAGAMENTO</h2>
				<p>O valor da parcela e vencimentos são fixos. O valor da parcela deve ser pago até o dia do vencimento pela forma de pagamento ora fixada. Sobre a parcela em atraso incide multa por atraso de 2%, mais juros de 0,33% ao dia, limitados a 10% do valor mensal.</p>

				<h2>O FORO</h2>
				<p>Se necessário resolver questões judiciais, fica escolhido o Foro da Comarca de Vitória – ES.</p>
			`;

			teams.forEach(btn => {
				btn.addEventListener("click", function() {
					title.textContent = "English in Teams — Termos e Condições";

					container.innerHTML = teamsTC;
				});
			});

			fast.forEach(btn => {
				btn.addEventListener("click", function() {
					title.textContent = "Fast courses — Termos e Condições";

					container.innerHTML = fastTC;
				});
			});
			
		}
	}
}