var bodyParser = require('body-parser'),
    express = require('express'),
    flip = require('flip'),
    request = require('request'),

    argv = require('minimist')(process.argv.slice(2), {
      default: {
        token: null,
        webhook: null,
        norage: false,
        port: 3000
      }
    }),

    app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/health', function (req, res) {
  res.json({ wow: 'such health' });
});

app.post('/tableflip', function (req, res) {
  var channel, text, payload;

  if (req.body.token !== argv.token) {
    return res.status(401).send({ success: false, error: 'Invalid token.' });
  }

  channel = req.body.channel_name === 'directmessage' ?
    req.body.channel_id : '#' + req.body.channel_name;

  text = req.body.text ? flip(text) : '┻━┻';

  payload = {
    channel: channel,
    text: text,
    icon_emoji: ':rage1:'
  };

  if (argv.norage) {
    delete payload.icon_emoji;
  }

  request.post({
    url: argv.webhook,
    form: { payload: JSON.stringify(payload) }
  }, function (err, resp, body) {
    if (err) {
      return res.status(500).send({ success: false, error: err.message });
    }

    res.send({ success: true });
  });
});

app.listen(argv.port);
