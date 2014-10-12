module.exports = function (express) {
  var ae = express();

  ae.get('/', function (req, res) {
    res.send('AE: root');
  });

  ae.get('/artists', function (req, res) {
    res.send('AE: artists');
  });

  return ae;
};

