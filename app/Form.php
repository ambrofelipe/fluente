<?php

namespace app;

/**
 * Hook contact form into WP AJAX
 * @package app
 */
class Form {

	/**
	 * Constructor
	 */
	public function __construct() {
		// add_action('phpmailer_init', array($this, 'fluente_send_smtp'));
		add_action('wp_mail_failed', array($this, 'fluente_log_mailer_errors', 10, 1));
		add_action('wp_ajax_fluente_send_mail', array($this, 'fluente_send_mail'));
		add_action('wp_ajax_nopriv_fluente_send_mail', array($this, 'fluente_send_mail'));
	}

	public function send($mail) {
		if(!$mail) {
			throw new \Exception("Logged error");
		}

		return $mail;
	}

	function fluente_send_mail() {
		$data = $_POST;
		$body = "
			Novo pedido de contacto:<br /><br />
			Nome: " . sanitize_text_field($_POST['name'])  . "<br />
			Empresa: " . sanitize_text_field($_POST['company']) . "<br />
			Email: " . sanitize_text_field($_POST['email']) . "<br />
			Mensagem: " . sanitize_textarea_field($_POST['message']) . "<br />
			Consentimento: " . $_POST['consent'] . "<br />
			Origem: " . $_POST['url'] . "<br />
		";

		$response = array('success' => true, 'data' => $_POST); 

		$to = 'felipe@fluente.me';
		$subject = '👋 Novo pedido de contacto do site';
		$headers[] = 'Content-Type: text/html; charset=UTF-8';
		$headers[] = 'From: ' . $_POST['name'] . ' <' . $_POST['email'] . '>';
		$headers[] = 'Reply-To: ' . $_POST['name'] . ' <' . $_POST['email'] . '>';

		if(!check_ajax_referer( 'fluente_' . $_POST['post_id'], 'nonce', false)) {
			wp_send_json_error();
		}

		try {
			$this->send(wp_mail($to, $subject, $body, $headers));
			wp_send_json_success($response, 200);
		} catch (Exception $e) {
			// error_log($e->getMessage());
			wp_send_json_error();
		}
	}
	
	// function fluente_send_smtp($phpmailer) {
	// 	if (!is_object($phpmailer) ) {
	// 		$phpmailer = (object) $phpmailer;
	// 	}

	// 	$phpmailer->Mailer     = 'smtp';
	// 	$phpmailer->Host       = SMTP_HOST;
	// 	$phpmailer->SMTPAuth   = SMTP_AUTH;
	// 	$phpmailer->Port       = SMTP_PORT;
	// 	$phpmailer->Username   = SMTP_USER;
	// 	$phpmailer->Password   = SMTP_PASS;
	// 	$phpmailer->SMTPSecure = SMTP_SECURE;
	// 	$phpmailer->From       = SMTP_FROM;
	// 	$phpmailer->FromName   = SMTP_NAME;
	// }

	function fluente_log_mailer_errors($wp_error){
		$fn = ABSPATH . '/wp-content/debug.log';
		$fp = fopen($fn, 'a');
		fputs($fp, "Mailer Error: " . $wp_error->get_error_message() ."\n");
		fclose($fp);
	}
}