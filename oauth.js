module.exports = function (express) {
  var oauth = express();

  oauth.get('/', function (req, res) {
    res.send('OAuth: root');
  });

  oauth.get('/login', function (req, res) {
    res.send('OAuth: login');
  });

  return oauth;
};

