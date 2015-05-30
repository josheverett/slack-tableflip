# slack-tableflip

(╯°□°）╯︵ ┻━┻

`/tableflip` for slack.

## Usage

`/tableflip`
(╯°□°）╯︵ ┻━┻

`/tableflip foobar`
(╯°□°）╯︵ ɹɐqooɟ

![Example](http://i.imgur.com/P0tqsgo.png)

## Setup

### Slash Command

Create a Slash Command called /tableflip, and point the URL to:

http://your-slack-tableflip-instance.example.com/

The rest of the options are up to you.

### Webhook

Create a new Incoming Webhook. You can pick any channel to post to -- this
will be overridden with the channel/DM chat from which the command is used.

Likewise, the icon you select will be overridden with the :rage1: emoji. If
you'd like to disable this, use the `-norage` option.

Give your Webhook a name. I recommend "Table Flip Bot". :)

### Server

Run the slack-tableflip server with your Slack Command token and your
Webhook URL:

`$ node server.js --token=<token> --webhook=<webhook>`
