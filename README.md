# meteor-winston-logentries
A wrapper for [winston-logentries](https://github.com/alexgorbatchev/winston-logentries) as a transport for [winston](https://github.com/winstonjs/winston). Use [Logentries](https://logentries.com/) as a log service for your Meteor app.
Thanks to @stuartfenton for the inspiration who did the same for [Papertrail](https://papertrailapp.com/) with [meteor-winston-papertrail](https://github.com/stuartfenton/meteor-winston-papertrail).

# Install

`meteor add 1024kilobyte:winston-logentries`

# Usage

It's as simple as

```javascript
if(Meteor.isServer) {
  //creating a global server logger
  log = Winston;

  //add logentries transport
  log.add( Winston_Logentries, {
    token:'YOUR_TOKEN'
  });
}
```

After that you can check if it's working

```javascript
log.info("======> Meteor App restarted " + new Date() + " <======");
```
