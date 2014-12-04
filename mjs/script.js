$(document).ready(function() {

	//pop over
	$('.portrait1').popover();

	//About us xs show
	$('.aboutxs').click(function() {
		$('.infoaboutxs').show('slide', 400);
	});

	// large info box up
	$('.alison, .sean, .munnery, .observer, .spire, .stoneface, .firehouse, .alporter').click(function() {
		$('.dim').fadeIn(400),
		$('.info').show('slide', 400);
	});

	// medium info box up
	$('.alisonmd, .seanmd, .munnerymd, .observermd, .spiremd, .stonefacemd, .firehousemd, .alportermd').click(function() {
		$('.dim').fadeIn(400),
		$('.infomd').show('slide', 400);
	});

	// small info box up
	$('.alisonsm, .seansm, .munnerysm, .observersm, .spiresm, .stonefacesm, .firehousesm, .alportersm').click(function() {
		$('.dim').fadeIn(400),
		$('.infosm').show('slide', 400);
	});

	// extra small info box up
	$('.alisonxs, .seanxs, .munneryxs, .observerxs, .spirexs, .stonefacexs, .firehousexs, .alporterxs').click(function() {
		$('.dim').fadeIn(400),
		$('.infoxs').show('slide', 400);
	});

	// all info box down
	$('.close, .info, .infomd, .infosm, .infoxs, .dim, .sidebar').click(function() {
		$('.dim').fadeOut(400),
		$('.info, .infomd, .infosm, .infoxs, .infoaboutxs').hide('slide', 400);
	});

	// alison info box content
	$('.alison, .alisonmd, .alisonsm, .alisonxs').click(function() {
		$('.infopadding').html('For Alison Spittle’s debut Edinburgh Fringe show Alison Spittle Needs an Agent, we wanted to convey the shoddy quality of Alison’s current set up, and took this somewhat unflattering portrait of her with a jacket as a backdrop. We took inspiration from actor’s headshots for the layout, so that when she was flyering, it was as if Alison was handing out headshots to any potential agents on the street in Edinburgh.')
	});

	// sean info box content
	$('.sean, .seanmd, .seansm, .seanxs').click(function() {
		$('.infopadding').html('Comedian Sean Nolan came to us for the posters and flyers for his debut Edinburgh show: The Joke Manifesto. We took inspiration from Leninist propaganda, 90’s art zines and woodcut portraits to make this bold, minimal design. It was illustrated by our collaborator Simon Mulholland, based on photographs by Conor.')
	});

	// munner info box content
	$('.munnery, .munnerymd, .munnerysm, .munneryxs').click(function() {
		$('.infopadding').html('To promote a show by legendary Bedford comedian Simon Munnery, we hand lettered this poster for the Laugh Out Loud comedy club in 2010, based around this amazing portrait of Munnery in front of a mountain backdrop.')
	});

	// observer info box content
	$('.observer, .observermd, .observersm, .observerxs').click(function() {
		$('.infopadding').html('The University Observer is UCD’s student newspaper, and in 2013 they decided to change size from berliner to broadsheet. Mosshouse implemented a total redesign, striving to give the paper the professional feel it deserved, along with something simple enough that the student designers of the paper would be able to replicate with ease in years to come. The paper won Newspaper of the Year at the Student Media Awards and the design was given special commendation at the ceremony.')
	});

	// spire info box content
	$('.spire, .spiremd, .spiresm, .spirexs').click(function() {
		$('.infopadding').html('Galway-based production company Spire Productions came to us to re-brand their business. They wanted something that would evoke the hands-on, sincere [probably totally imaginary] companies of the 1950s. We collaborated with them and came up this vintage-tinged solution.')
	});

	// stoneface info box content
	$('.stoneface, .stonefacemd, .stonefacesm, .stonefacexs').click(function() {
		$('.infopadding').html('Stoneface Films are a Dublin-based production company who Mosshouse work with frequently. We designed their aesthetic palate, along with their branding, so that they can attain a consistent visual identity through their printed and online materials.')
	});

	// firehouse info box content
	$('.firehouse, .firehousemd, .firehousesm, .firehousexs').click(function() {
		$('.infopadding').html('The Firehouse Film Contest required a logo which would look great online in a square, as well as in black and white in a low quality print. So we designed a single colour, circular logo by combining the aperture blades of a camera, flames, and those little perforations you see on the sides of rolls of film. We don’t know what they’re called.')
	});

	// al porter info box content
	$('.alporter, .alportermd, .alportersm, .alporterxs').click(function() {
		$('.infopadding').html('Rising star Al Porter approached Mosshouse wanting a new personal website. He wanted something relatively relaxed and comfortable, compared to Al’s hilarious high-energy act. Drawing inspiration from the TV shows, advertising, and corporate identities of the 1960s, we are developing this cool, responsive site as a hub for his fans.')
	});

});