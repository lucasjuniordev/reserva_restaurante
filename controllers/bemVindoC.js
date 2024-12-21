
const path = require('path');

module.exports = {
  renderTelaBemVindo: (req, res) => {
    res.sendFile(path.join(__dirname, '../views/telaBemVindo.html')); 
  },
};


