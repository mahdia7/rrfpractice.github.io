<?php
session_start();

require '../../../autoload.php';

config_load();
main_load();


?>

<!DOCTYPE html>

<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

		<title>Confirmation</title>

		<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,600i,700,700i" rel="stylesheet">
		
		<!-- Bootstrap CDN -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
		
		<!-- Font Awesome CDN -->
		<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
		
		<link href="assets/css/upsell2.css" rel="stylesheet">

		<style type="text/css">
			h4{font-size: 1rem!important;}
		</style>
	</head>

<body>
<div class="container">
	<div class="jumbotron jumbotron-fluid">
		<div class="container">
			<h3 class="">Order Confirmation</h3>
			<!-- <p class="lead">Please verify your order.</p> -->
		</div>
	</div>
	<table id="cart" class="table table-hover table-condensed">
		<thead>
			<tr>
				<th style="width:50%">Product</th>
				<th style="width:10%">Price</th>
				<th style="width:8%">Quantity</th>
				<th style="width:22%" class="text-center">Subtotal</th>
				<th style="width:10%"></th>
			</tr>
		</thead>
		<tbody>
			<?php if ( $_SESSION['product']['main'] == 'yes'){ $product = get_product('main'); $ship1 = $product['product_ship']; $price1 = $product['product_charge'];?>
			<tr>
				<td data-th="Product"><h4 class="nomargin"><?php echo $product['name']; ?></h4></td>
				<td data-th="Price"><del>$79.99</del> $0.00</td>
				<td data-th="Quantity">1</td>
				<td data-th="Subtotal" class="text-center">$0.00</td>
				<td class="actions" data-th="">
					<!-- <button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button> -->
					<!-- <button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>                                 -->
				</td>
			</tr>
			<?php } ?>
			<?php
			if ( $_SESSION['product']['upsell1'] == 'yes'){ $product = get_product('upsell1'); $ship2 = $product['product_ship']; $price2 = $product['product_charge'];?>
			<tr>
				<td data-th="Product"><h4 class="nomargin"><?php echo $product['name']; ?></h4></td>
				<td data-th="Price"><del>$69.99</del> $0.00</td>
				<td data-th="Quantity">1</td>
				<td data-th="Subtotal" class="text-center">$0.00</td>
				<td class="actions" data-th="">
					<a class="btn btn-danger btn-sm" href="process.php?action=delete&id=1"><i class="fa fa-trash-o"></i></a>                                
				</td>
			</tr>
			<?php } ?>
			<?php
			if ( $_SESSION['product']['upsell2'] == 'yes'){ $product = get_product('upsell2'); $ship3 = $product['product_ship']; $price3 = $product['product_charge'];?>
			<tr>
				<td data-th="Product"><h4 class="nomargin"><?php echo $product['name']; ?></h4></td>
				<td data-th="Price"><del>$59.99</del> $29.99</td>
				<td data-th="Quantity">1</td>
				<td data-th="Subtotal" class="text-center">$29.99</td>
				<td class="actions" data-th="">
					<a class="btn btn-danger btn-sm" href="process.php?action=delete&id=2"><i class="fa fa-trash-o"></i></a>                                
				</td>
			<?php } ?>
		</tbody>
		<tfoot>
			<tr>
				<td colspan="2"></td>
				<td>Sub Total</td>
				<td data-th="Subtotal" class="text-center">$<?php $subtotal = $price1+$price2+$price3; echo number_format((float)$subtotal, 2, '.', ''); ?></td>
				<td></td>
			</tr>
			<tr>
				<td colspan="2"></td>
				<td>Shipping</td>
				<td data-th="Shipping" class="text-center">$<?php $ship = $ship1+$ship2+$ship3; echo number_format((float)$ship, 2, '.', ''); ?></td>
				<td></td>
			</tr>
			<tr>
				<td colspan="2"></td>
				<td>Total</td>
				<td data-th="Total" class="text-center"><strong>$<?php $total = $subtotal+$ship; echo number_format((float)$total, 2, '.', ''); ?></strong></td>
				<td><!-- <a href="process.php?action=confirm&type=yes" class="btn btn-success btn-block">Checkout <i class="fa fa-angle-right"></i></a> --></td>
			</tr>
		</tfoot>
	</table>
	<a href="process.php?action=confirm&type=yes" class="btn hiddenmobile btn-success btn-block">COMPLETE CHECKOUT <i class="fa fa-angle-right"></i></a>
	<div class="row">
		<!-- <div class="col-md-3 col-md-offset-4"><a href="process.php?action=confirm&type=yes" class="btn btn-lg btn-success"><span class="glyphicon glyphicon-ok"></span> Confirm</a></div> -->
		<!-- <div class="col-md-3"><a href="process.php?action=confirm&type=no" class="btn btn-lg btn-danger"><span class="glyphicon glyphicon-remove"></span> Cancel</a></div> -->
		<span class="checkoutbtnmobile" style="padding: 40px 20px; margin: 0; border: 0px; position: fixed; bottom: 0px; top: auto; right: auto; left: 0px; z-index: 10001; background-color: #E9ECEF; height: auto; width: 100%;" class="safe-buy showdesktop"><a href="process.php?action=confirm&type=yes" class="btn shownmobile btn-success btn-block">COMPLETE CHECKOUT <i class="fa fa-angle-right"></i></a></span>
	</div>
	<?php debug_status(); ?>
	<?php ga_insert('UA-104805345-1'); ?>
	<!-- Piwik -->
<script type="text/javascript">
  var _paq = _paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
  _paq.push(["setCookieDomain", "*.quadrall.com"]);
  _paq.push(["setDomains", ["*.quadrall.com/r2/v1/default/desktop"]]);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//log.crmcp.net/track/";
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', '2']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<noscript><p><img src="//log.crmcp.net/track/piwik.php?idsite=2&rec=1" style="border:0;" alt="" /></p></noscript>
<!-- End Piwik Code -->
</div>
<br>
<br>
<br>
<footer>
    <div class="container">
        <div class="row copyright">
            <div class="col">
                <p>Copyright &copy; <?php echo date("Y"); ?> Quadrall LLC. All Rights Reserved.</p>
            </div>
            <div class="col text-right">
                <ul class="list-inline">
                    <li class="list-inline-item"><a href="/legal/terms-and-conditions.php">Terms and Conditions</a></li>
                    <li class="list-inline-item"><a href="/legal/privacy-policy.php">Privacy Policy</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
</body>
</html>