function index(req, res) {
    res.render('skills/index', {
      skills: skill.getAll()
    });
  }

  module.exports = {
    index
  };
	
  function index(req, res) {
    res.render('skills/index', {
      skills: skill.getAll()
    });
  }

  const skill = require('../models/skill');

  module.exports = {
    index
  };