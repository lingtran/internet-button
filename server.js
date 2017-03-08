var Particle = require('particle-api-js');
var particle = new Particle();
var token = '{some_token}';

particle.login({username: '{some_email_address}', password: '{some_password}'}).then(
  function(data) {
    // token = data.body.access_token;
    console.log('Success for logging in!');
  },
  function (err) {
    console.log('Could not log in.', err);
  }
);

var devicesPr = particle.listDevices({ auth: token });

devicesPr.then(
  function(devices){
    console.log('Success with Devices: ', devices);
  },
  function(err) {
    console.log('List devices call failed: ', err);
  }
);

var fnPr = particle.callFunction({ deviceId: '{some_device_id}', name: 'fake', argument: 'hello', auth: token });

fnPr.then(
  function(data) {
    console.log('******* Function called successfully:', data + 'DONE WITH DATA *****');
  }, function(err) {
    console.log('An error occurred for function call:', err);
  });

var testCreateTicket = particle.callFunction({ deviceId: '{some_device_id}', name: '{some alias for ticket event}', argument: 'testing create ticket', auth: token });

testCreateTicket.then(
  function(data) {
    console.log('******* Second Function called successfully:', data + 'DONE WITH DATA *****');
  }, function(err) {
    console.log('An error occurred for second function call:', err);
  });
