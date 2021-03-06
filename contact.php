<?PHP
	session_start();

	require_once 'assets/security.php';
	$errors = isset($_SESSION['errors']) ? $_SESSION['errors'] : [];
	$fields = isset($_SESSION['fields']) ? $_SESSION['fields'] : [];


?>

<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"> 
		
		<link href="./assets/logo.ico" rel="SHORTCUT ICON" />

		<meta content="EN" http-equiv="content-language" />
		<meta content="width=device-width, initial-scale=1, maximum-scale=1" name="viewport" />
		<meta content="Vector Tech is a BITSian start-up where we believe in creating flawless user experience with cutting edge technology.
							We at Vector Tech thrieve for perfection and create online reflection of your business throuh our work." name="description" />
		<meta content="vector tech, tech, web devlopment,website  , bits pilani, website devlopment, Yavatmal, designing, web designing,
		               BITS Goa, Vidharbh, Goa, Nagpur" name="keywords" />
		<meta content="index, follow" name="robots" />
		<meta content="index, follow" name="googlebot" />
		<meta content="Copyright © 2015 Vector Technologies." name="copyright" />
		<meta content="Vector Tech" name="author" />
		<meta content="amey@vectortech.in" name="email" />
		<meta content="general" name="rating" />
		<meta content="Global" name="distribution" />
		<meta content="1 days" name="revisit-after" />

		<script type="text/javascript">
    		if (screen.width <= screen.height) {
				window.location = "http://m.vectortech.in/";
			}
    	</script>

		<link href='./assets/style.css' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Michroma' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Glegoo' rel='stylesheet' type='text/css'>
    	
    	<title>Vector Tech</title> 
    	

    	
	</head> 
	<body> 
	    <div id="container"></div>
	    <div id="WebGL-output"> </div>

	    <nav class="navigator" id="navigator">
	  		<a href="#navigator">Home</a>
	  		<a href="#navigator">About</a>
	  		<a href="#navigator">Services</a>
			<a href="#navigator">Contact</a>
			<!-- <a href="#navigator">Work</a> -->	
	    </nav>

    <div id="logo"><img src="./assets/vectortech.svg" height="100%" /></div>
   
    <div id="text_wrap">

		<div class ="title">
			<div id="inner">
				<h1>Home</h1>
			</div>
		</div>

		<div id="text">

			<div id="Home" >
				<span id="quote"></span>
				<span id="cursor">|</span>
				<br><br>
				<span id="ps" style="float:right;"></span></p>
			</div>

			<div id="about">
				<p>
					Vector Tech is a BITSian start-up where we believe in creating flawless user experience with cutting edge technology.</br></br>
					We at Vector Tech thrieve for perfection and create online reflection of your business throuh our work.
				</p>
			</div>

			<div id="Services">
				<div class="skills"><p>Web Designing</p>
					<ul>
						<li>Web Design</li>
						<li>Logo Design</li>
						<li>Graphics Design</li>
						<li>PSD to XHTML</li>
					</ul>

				</div>
				
				<div class="skills"><p>Web Development</p>
					<ul>
						<li>PHP development</li>
						<li>Database suppport</li>
						<li>Node.js framework</li>
						<li>Search engine frienldy</li>
					</ul>
				</div>
			</div>

			<div id="Contact">
				<div class="form">
					<FORM action="assets/mail.php" method="POST" class="form_style">
					    <label>
						    <span style="width:70%; text-align:left;margin-left:21%;margin-bottom:2.5%;margin-top:0;line-height:150%;"> 
						        <?PHP
							    	if(isset($_GET['status'])){
									    $status = $_GET['status'];
									    if($status == 1){
									        echo "Thank you for your message";
									    }else if($status == 0){
									        echo "Unable to send message<br>";
									        echo implode('<br>',$errors);
									    }
								    }
						    	?>
						    </span> 
						</label>
					    <label>
					        <span>Your Name :</span>
					        <input id="name" type="text" name="name" placeholder="Your Full Name" <? PHP echo isset($fields['name']) ? 'value="'.e($feilds['name']).'"' : ?>/>
					    </label>
					    
					    <label>
					        <span>Your Email :</span>
					        <input id="email" type="email" name="email" placeholder="Valid Email Address" <? PHP echo isset($fields['email']) ? 'value="'.e($feilds['email']).'"' : ?>/>
					    </label>
					    
					    <label>
					        <span>Message :</span>
					        <textarea id="message" name="message" placeholder="Your Message to Us"> </textarea>
					    </label>  
					     <label>
					        <input type="submit" class="button" value="Send" /> 
					    </label>    
					</form>
				</div>
			</div>

			<!-- <div id="Work">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div> -->			
		</div>
   </div>
   			<a href="http://facebook.com/vectortech.in/">
				<svg id="fb" xmlns="http://www.w3.org/2000/svg" xml: width="100%"  version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
				viewBox="0 0 4520 4530"
				 xmlns:xlink="http://www.w3.org/1999/xlink">
				 <defs>
				  <style type="text/css">
				   <![CDATA[
				    .fil0 {fill:#ff0000}
				   ]]>
				  </style>
				 </defs>
				 <g id="Layer_x0020_1">
				  <metadata id="CorelCorpID_0Corel-Layer"/>
				  <path class="fil0" d="M-1 4522l2426 8 0 -1744 -614 0 -4 -705 618 0c0,-542 -95,-1334 745,-1443 193,-25 500,-6 699,14 24,80 9,520 9,638 -814,0 -733,-13 -733,791l701 1 -89 698 -612 6 0 1735 1376 0 -1 -4520 -4521 -1 0 4522z"/>
				 </g>
				</svg>
			</a>
   			<a href="http://twitter.com/vectortech0/">
				<svg id="tw" xmlns="http://www.w3.org/2000/svg" xml:space= width="100%"  version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
				viewBox="0 0 4520 4530"
				 xmlns:xlink="http://www.w3.org/1999/xlink">
				 <defs>
				  <style type="text/css">
				   <![CDATA[
				    .fil0 {fill:#ff0000}
				   ]]>
				  </style>
				 </defs>
				 <g id="Layer_x0020_1">
				  <metadata id="CorelCorpID_0Corel-Layer"/>
				  <path class="fil0" d="M3314 1511c109,-11 208,-64 280,-71 -40,51 -75,108 -119,155 -46,49 -121,85 -149,141 0,681 -344,1153 -733,1392 -234,144 -504,229 -830,228 -245,0 -703,-107 -827,-245 176,-2 285,4 448,-48 107,-34 280,-109 331,-179 -131,-22 -231,-53 -311,-123 -57,-50 -163,-157 -178,-264 89,10 133,16 217,-10 -241,-101 -402,-222 -415,-540 86,21 128,60 233,56 -177,-147 -331,-427 -152,-725 51,93 319,300 450,376 183,106 428,180 675,194 -67,-658 578,-815 887,-551 72,62 75,54 190,14 72,-25 139,-67 207,-87 -39,153 -121,204 -204,287zm-3314 3019l4520 0 0 -4530 -4520 0 0 4530z"/>
				 </g>
				</svg>
			</a>
    <script type="text/javascript" src="./assets/three.min.js"></script>
	<script type="text/javascript" src="./assets/back.js"></script>
	<script type="text/javascript" src="./assets/knot.js"></script>
  	<script type="text/javascript" src="./assets/engine.js"></script>
  	<script type="text/javascript">activate(document.getElementsByClassName('navigator')[0].childNodes[7]);</script>
  	
 	</body>
</html>

<?PHP
	unset($_SESSION['errors']);
	unset($_SESSION['feilds']);
?>