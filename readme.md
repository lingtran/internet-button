Installing the Particle CLI

    $ npm install -g particle-cli

Connecting to device

    $ particle setup

..if having wifi issues

    $ particle serial wifi

To find deviceID

    $ particle serial identify


To run function:

in web IDE --

    save code
    verify (compile)
    flash (sync button)
    button will flash green, wait for it to turn cyan again

in particle CLI –

    login
    particle call – see button and what functions are available
    run “node <insert file name>”

    WEBHOOK:

        create webhook (something.json) – check resources for example
        particle webhook create <json file name>
        publish event to trigger webhook (particle publish <eventname> “data”
        can also publish event by making a function in web IDE (see integrations page for example code)
            remember to flash (sync) after changing code!


**Other Notes**
- zendesk.json
  - the test file used for the CLI command `particle webook create <json file name>`
  - properties other than 'json' pertain to Particle's API webhook requirements; content of 'json' pertains to Zendesk API create ticket endpoint requirements
