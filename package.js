Package.describe({
  "summary": 'A Winston Logentries transport for Meteor.',
  "version": "0.0.5",
  "git": "https://github.com/1024kilobyte/meteor-winston-logentries.git",
  "name": "1024kilobyte:winston-logentries"
});

Npm.depends({
    "winston": "0.7.2",
    "winston-logentries": "1.0.1"
});

Package.on_use(function (api, where) {
  
  api.addFiles('winston.js', 'server');
  api.add_files('winston-logentries.js', 'server');
  
  if(api.export){
    api.export('Winston');
    api.export('Winston_Logentries');
  }
});