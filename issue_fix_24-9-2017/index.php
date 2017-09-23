<?php
session_start();

require '../../../autoload.php';

config_load();
main_load();

state_check('home','checkout.php');


?><!DOCTYPE html>
<html>
	<head>
		<title>Quadrall</title>
		<link href="css/style.css" rel="stylesheet" type="text/css">
		<link href="css/jquery.fancybox.css" rel="stylesheet" type="text/css">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
		<script type="text/javascript" src="js/jquery.validate.min.js"></script>
		<script type="text/javascript" src="js/offer.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
		<style type="text/css">
			.fancybox-margin {
				margin-right: 15px;
			}
		</style>
		<link rel="stylesheet" href="css/global.css" />
		<link href="css/homepage.css" rel="stylesheet">
		<link rel="stylesheet" media="screen and (min-device-width: 320px)" href="css/main-320.css">
		<link rel="stylesheet" media="screen and (min-device-width: 1004px)" href="css/main-1006.css">
	</head>
<body>

		<div id="pagecontainer">
			<div id="topsection">
				<div class="gridContainer clearfix">
					<div id="LayoutDiv1">
						<div class="topsecinner">
							<ul class="topseclist">
								<li class="one">
									<p class="warning">warning</p>
								</li>
								<li class="two">
									<p class="warningtxt">Due to high demand from recent media coverage we can no longer guarantee supply.<br> As of <span style="color: red;"><?php echo date('l jS F Y');?></span> we currently have product IN-STOCK and will ship within 24 hours of purchase.</p>
								</li>
							</ul>

						</div>
					</div>
				</div>
			</div>
			<div id="section1">
				<div class="gridContainer clearfix">
					<div id="LayoutDiv1">
						<div class="sec1left">
							<img src="images/sec1lft-640.jpg" alt="" class="sec1leftimg"> </div>
						<div class="sec1rgt">
							<div class="form">
								<div class="formtop">
									<!-- <img src="images/formtop-640.png" alt="" class="formtopimg-320"> -->
								</div>
								<div class="formmid">
									<div style="text-align:center;">
										<form id="prospect" name="prospect" class="partialform" action="process.php?action=customer" method='post'>
											<input type="hidden" name="country" value="US" />
											<div class="formitem">
												<label>First Name:</label>
												<input id="firstName" name="firstName" type="text" tabindex="1" required>
											</div>

											<div style="clear:both;"></div>

											<div class="formitem">
												<label>Last Name:</label>
												<input id="lastName" name="lastName" type="text" tabindex="2" required>
											</div>

											<div style="clear:both;"></div>

											<div class="formitem">
												<label>Address:</label>
												<input id="address1" name="address1" type="text" tabindex="3" required>
												<input id="address2" name="address2" type="hidden">
											</div>

											<div style="clear:both;"></div>

											<div class="formitem">
												<label>City:</label>
												<input id="city" name="city" type="text" tabindex="4" required>
											</div>

											<div style="clear:both;"></div>

											<div class="formitem">
												<label>State</label>
												<select name="state" class="lg-input state" tabindex="5">
													<option disabled selected>Select State</option>
													<option value="AL">Alabama (AL)</option>
													<option value="AK">Alaska (AK)</option>
													<option value="AZ">Arizona (AZ)</option>
													<option value="AR">Arkansas (AR)</option>
													<option value="CA">California (CA)</option>
													<option value="CO">Colorado (CO)</option>
													<option value="CT">Connecticut (CT)</option>
													<option value="DE">Delaware (DE)</option>
													<option value="DC">District of Columbia (DC)</option>
													<option value="FL">Florida (FL)</option>
													<option value="GA">Georgia (GA)</option>
													<option value="GU">Guam (GU)</option>
													<option value="HI">Hawaii (HI)</option>
													<option value="ID">Idaho (ID)</option>
													<option value="IL">Illinois (IL)</option>
													<option value="IN">Indiana (IN)</option>
													<option value="IA">Iowa (IA)</option>
													<option value="KS">Kansas (KS)</option>
													<option value="KY">Kentucky (KY)</option>
													<option value="LA">Louisiana (LA)</option>
													<option value="ME">Maine (ME)</option>
													<option value="MD">Maryland (MD)</option>
													<option value="MA">Massachusetts (MA)</option>
													<option value="MI">Michigan (MI)</option>
													<option value="MN">Minnesota (MN)</option>
													<option value="MS">Mississippi (MS)</option>
													<option value="MO">Missouri (MO)</option>
													<option value="MT">Montana (MT)</option>
													<option value="NE">Nebraska (NE)</option>
													<option value="NV">Nevada (NV)</option>
													<option value="NH">New Hampshire (NH)</option>
													<option value="NJ">New Jersey (NJ)</option>
													<option value="NM">New Mexico (NM)</option>
													<option value="NY">New York (NY)</option>
													<option value="NC">North Carolina (NC)</option>
													<option value="ND">North Dakota (ND)</option>
													<option value="OH">Ohio (OH)</option>
													<option value="OK">Oklahoma (OK)</option>
													<option value="OR">Oregon (OR)</option>
													<option value="PA">Pennsylvania (PA)</option>
													<option value="PR">Puerto Rico (PR)</option>
													<option value="RI">Rhode Island (RI)</option>
													<option value="SC">South Carolina (SC)</option>
													<option value="SD">South Dakota (SD)</option>
													<option value="TN">Tennessee (TN)</option>
													<option value="TX">Texas (TX)</option>
													<option value="UT">Utah (UT)</option>
													<option value="VT">Vermont (VT)</option>
													<option value="VA">Virginia (VA)</option>
													<option value="WA">Washington (WA)</option>
													<option value="WV">West Virginia (WV)</option>
													<option value="WI">Wisconsin (WI)</option>
													<option value="WY">Wyoming (WY)</option>
												</select>
											</div>

											<div style="clear:both;"></div>

											<div class="formitem">
												<label>Postal Code:</label>
												<input id="zip" name="zip" type="text" tabindex="6"  required>
											</div>

											<div style="clear:both;"></div>

											<div class="formitem">
												<label>Phone:</label>
												<input type="text" name="phone" id="phone" tabindex="7"  required>
											</div>

											<div style="clear:both;"></div>

											<div class="formitem">
												<label>Email:</label>
												<input type="email" name="email" value="" class="email" tabindex="8"  required>
											</div>

											<div style="clear:both;"></div>

											<input id="partialsubmitbutton" type="image" class="btn btn-lg btn-block btn-primary" src="images/home-form-btn.png" />
										</form>
									</div>
									<div style="clear:both;height: 5px;"></div>
									<div style="text-align:center;">
										<img src="images/secure-2.png" height="33" width="257" style="margin: 0 auto;">
									</div>
									<img src="images/lock.png" alt="" class="lock">
									<img src="images/chklock.png" alt="" class="lock-320">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="section2">
				<div class="gridContainer clearfix">
					<div id="LayoutDiv1">
						<div class="sec2inner">
							<img src="images/sec2btm-640.jpg" alt="" class="sec2btmimg">
							<p class="sec2txt1">What Is Pure Natural CBD?</p>
							<p class="sec2txt2">Why Is Everyone Talking About CBD?</p>
							<p class="sec2txt3">Breaking News: Pure Natural CBD is excited to announce our latest and greatest formula is now available. Pure Natural CBD is scientifically formulated to be the best product on the market. Our customers are extremely excited about the results they feel. Pure Natural CBD was formulated to have a high CBD absorption rate. We have listened to YOU, Our customers wanted a high quality CBD that actually works. Pure Natural CBD Delivers!</p>
						</div>
						<div style="width:1000px; height:115px; margin:0 auto;" class="showdesktop">
							<a href="#prospect"><img src="images/freetrialbutton.jpg" alt="" class="showdesktop"></a>
						</div>
					</div>
				</div>
			</div>
			<div class="mobexsec1">
				<div class="gridContainer clearfix">
					<div id="LayoutDiv1">
						<img src="images/640exsec1.jpg" alt="" class="sec3rgtbtl" style="margin-top:15px;">
						<a href="#prospect"><img src="images/orderbtn-640.png" alt="" class="mobexsec1btn"></a>
					</div>
				</div>
			</div>
			<div id="section3">
				<div class="sec3inner">
					<div class="gridContainer clearfix">
						<div id="LayoutDiv1">
							<div class="sec3lft">
								<p class="sec3lfttxt1">How do You Benefit from CBD?</p>
								<p class="sec3lfttxt2">Pure Natural CBD is the highest quality Cannabidiol on the market and provides a variety of benefits. This product is safe for use and legal in all 50 states.</p>
								<br>
								<p class="sec3lfttxt3"><img src="images/sec3lftimg1.png" alt="" class="imgone">100% Natural Formula <br> Pure Natural CBD uses natural ingredients that are toxin-free. Pure Natural CBD is 100% natural and does not contain any dangerous synthetic chemicals or stimulants.</p>
								<p class="sec3lfttxt3"><img src="images/sec3lftimg2.png" alt="" class="imgtwo">No Side Effects<br> Pure Natural CBD does not contain THC, therefore you don't have any of the side effects. THC is the cannaboid in Marijuana that gets smokers "High." Fortunately for you the health benefit comes from the CBD and not from the THC.</p>
								<p class="sec3lfttxt3"><img src="images/sec3lftimg3.png" alt="" class="imgthree">Lifestyle Benefits<br> The majority of the scientific community agrees that reducing stress levels help play a part in a healthier lifestyle. Try Pure Natural CBD today!<br><br>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="section4" style="display:none;">
				<div class="gridContainer clearfix">
					<div id="LayoutDiv1">
						<div class="sec4inner">	</div>
					</div>
				</div>
			</div>

			<div style="width:1000px; height:115px; margin:0 auto;" class="showdesktop">
				<a href="#prospect"><img src="images/freetrialbutton.jpg" alt="" class="showdesktop"></a>
			</div>

			<div id="section6">
				<div class="gridContainer clearfix">
					<div id="LayoutDiv1">
						<div class="sec6inner">
							<p class="sec6hding">Positive Feedback <br> from Our Customers</p>
							<p class="sec6txt1">Finally a Cannabidiol product that is of the highest quality, and effective! </p>
							<p class="sec6txt2">As a patient with chrones disease, pain is the hard reality. With all of the medications I take I don't see the results I wish for... I discovered Pure Natural CBD online after reading many articles about the benefits and decided to give it a try. I was worried about the legal side of things but then read about how it doesn't have the THC in it so it's ok. The results have been amazing. I would recommend this to anyone!</p>
							<p class="sec6txt3">Eric<br> Utah</p>
						</div>
					</div>
				</div>
			</div>

			<a href="#prospect">
				<div id="section8">
					<div class="sec8inner">
						<div class="gridContainer clearfix">
							<div id="LayoutDiv1">
								<img src="images/section8-640.jpg" alt="" class="sec8img">
							</div>
						</div>
					</div>
				</div>
			</a>

			<div id="hiddenOverlay"> </div>
			<div id="couponpath" style="display:none;">	<a href="discount.php"><img src="images/coupon1.jpg"></a> </div>

			<span style="padding: 0px; margin: 0px; border: 0px; position: fixed; bottom: 0px; top: auto; right: auto; left: 0px; z-index: 10001; background-color: transparent; height: auto; width: 100%;" class="safe-buy showmobile"><a href="#prospect"><img src="images/animated.gif" border="0" style="vertical-align: bottom;"></a></span>
		
			<span style="padding: 0px; margin: 0px; border: 0px; position: fixed; bottom: 0px; top: auto; right: auto; left: 0px; z-index: 10001; background-color: transparent; height: auto; width: auto;" class="safe-buy showdesktop"><a href="#prospect"><img src="images/safe321.png" border="0" style="vertical-align: bottom;"></a></span>
		
			<div class="sf-qualify-wrap">
				<div style="color:black;font-weight:bold;font-size:32px;padding:10px 0;">Checking Availability</div>
				<img src="images/loading-bars.gif" width="128" height="15" alt="loading">
				<div style="color:black;font-weight:bold;font-size:12px;padding:10px 0;">This may take up to one minute. We appreciate your patience.</div>
			</div>

			<div class="sf-back-overlay"></div>

			<div id="footer">
				<div class="left">
					Copyright &copy; 2017 Quadrall LLC. All Rights Reserved.
				</div>
				<div class="right">
					<a href="/r2/legal/terms-and-conditions.php" target="_blank">Terms and Conditions</a>
					&nbsp;|&nbsp;
					<a href="/r2/legal/privacy-policy.php" target="_blank">Privacy Policy</a>
				</div>
			</div>
			<div style="clear;both;"></div>
			<div id="footerlinks"> </div>

			<div id="disclaimer" style="clear:both;">This product is not for use by or sale to persons under the age of 18. This product should be used only as directed on the label. It should not be used if you are pregnant or nursing. Consult with a physician before use if you have a serious medical condition or use prescription medications. A Doctor's advice should be sought before using this and any supplemental dietary product. All trademarks and copyrights are the property of their respective owners and are not affiliated with nor do they endorse this product. These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure or prevent any disease. Individual weight loss results will vary. By using this site you agree to follow the Privacy Policy and all Terms &amp; Conditions printed on this site. Void Where Prohibited By Law.</div><br>
			<?php debug_status(); ?>
		</div>


	<script type="text/javascript" src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" type="text/javascript"></script>
	
	<?php ga_insert('UA-104805345-1'); ?>
	<!-- <script type="text/javascript">
		// Variable to hold request
		var request;

		// Bind to the submit event of our form
		$("#customer").submit(function(event){

			// Prevent default posting of form - put here to work in case of errors
			event.preventDefault();

			// Abort any pending request
			if (request) {
				request.abort();
			}
			// setup some local variables
			var $form = $(this);

			// Let's select and cache all the fields
			var $inputs = $form.find("input, select, button, textarea");

			// Serialize the data in the form
			var serializedData = $form.serialize();

			// Let's disable the inputs for the duration of the Ajax request.
			// Note: we disable elements AFTER the form data has been serialized.
			// Disabled form elements will not be serialized.
			$inputs.prop("disabled", true);

			// Fire off the request to /form.php
			request = $.ajax({
				url: "process.php?action=customer",
				type: "post",
				data: serializedData
			});

			// Callback handler that will be called on success
			request.done(function (response, textStatus, jqXHR){
				// Log a message to the console
				console.log(response);

			});

			// Callback handler that will be called on failure
			request.fail(function (jqXHR, textStatus, errorThrown){
				// Log the error to the console
				console.error(
					"The following error occurred: "+
					textStatus, errorThrown
				);
			});

			// Callback handler that will be called regardless
			// if the request failed or succeeded
			request.always(function () {
				// Reenable the inputs
				$inputs.prop("disabled", false);
			});

		});
	</script> -->
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
</body>
</html>