exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	capabilities: {
    'browserName': 'chrome'
    
  },

	baseUrl: 'http://localhost:3000',
	framework: 'jasmine',
	specs: ['test/e2e/*.js'],
	jasmineNodeOpts: {
		showColors: true
	}
};