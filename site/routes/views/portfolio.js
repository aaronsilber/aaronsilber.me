var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'portfolio';

    locals.portfolioPieces = [
            { thumb: 'site.png',      href:'site',     header:'aaronsilber.me', body: 'A portfolio website built for speed and security, with a NodeJS backend and full TLS sitewide.', time: '2014'},
            { thumb: 'javagaits.png',      href:'javagaits',     header:'JavaGaits', body: 'Java logic on top of OpenCV to track a robot\'s movement, and log it in real time for analysis.', time: '2012-2013'},
            { thumb: 'nws-sms.png',      href:'nwssms',     header:'Hazardous Weather SMS', body: 'A Twilio/PHP project to send me text messages in the field warning of severe weather patterns.', time: '2014'},
        ];


    // Render the view
	view.render('portfolio');
	
};
