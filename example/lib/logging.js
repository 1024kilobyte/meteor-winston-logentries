if(Meteor.isServer) {

	//creating a global server logger
	log = Winston;
	
	//add Logentries transport
	log.add( Winston_Logentries, {
		token: 'YOUR_TOKEN'
	});
	
	log.info("=======> Meteor App restarted " + new Date( Date.now()) +" <=======");
}
