<?php
/**
 * @package Blinds
 * @version 0.0.7
 */

/**
 * Plugin Name: Blinds
 * Plugin URI: https://ikennaf1.github.io/blinds/
 * Description: A plugin that enables WordPress end users view a blog or website in night or dark mode
 * Author: Ike Felix
 * Version: 0.0.7
 * Author URI: ikennaf1.github.io
 * License: GPLv2 or later
 */

/**
 * Runs on activation of the Blinds plugin.
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	exit;
}

function osd_blinds_activation()
{
    register_activation_hook(__FILE__, 'osd_blinds_activation');
}

/**
 * Runs on plugin deactivation.
 * Deletes any cookies left on browser.
 */
function osd_blinds_deactivation()
{
    register_deactivation_hook(__FILE__, 'osd_blinds_deactivation');
    if (isset($_COOKIE['osd_blinds_cookie'])) {
        setcookie('osd_blinds_cookie', '', time()-3600);
        unset($_COOKIE['osd_blinds_cookie']);
    }
}

function osd_blinds_widget($content)
{
	global $post;
    $content .= '<div style="position: fixed; top: 3rem; right: 3rem; z-index: 9999999999;" id="osd_blinds_widget_id"></div>';
    if (is_admin() || is_network_admin()) {
        echo $content;
        return;
    }
	
	if ($post->post_type == 'post-new.php') {
		return $content;
	}
	
	if ($post->post_type == 'product') {
		echo $content;
	}
	
	return $content;
}

/**
 * Hooks the widget (switch or toggle or control) to the WordPress display.
 */
function osd_blinds_filter()
{
    add_filter('the_content', 'osd_blinds_widget');
    add_filter('the_excerpt', 'osd_blinds_widget');
	add_filter('woocommerce_before_shop_loop', 'osd_blinds_widget');
	add_filter('woocommerce_before_single_product', 'osd_blinds_widget');

    if (is_admin() || is_network_admin()) {
    add_filter('in_admin_header', 'osd_blinds_widget');
    return;
    }

	return;
}

//wp_enqueue_script('blinds.js', plugins_url('/blinds/blinds.js'), '', filemtime(dirname(__FILE__, 1).'/blinds.js'));
wp_enqueue_script('blinds.js', plugins_url('/blinds/blinds.js'));
osd_blinds_filter();
