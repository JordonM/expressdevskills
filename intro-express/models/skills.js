const skills = [
    {student: 'Jone Doe', skilled: true},
    {student: 'Jane Doe', skilled: true},
    {student: 'Joe Doe', skilled: false},
    {student: 'Mike Smith', skilled: false},
    {student: 'Tim Love', skilled: false},
    {student: 'Jill Jones', skilled: false},
    {student: 'Tyler Lim', skilled: true},
    {student: 'Kim Bron', skilled: false},
  ];

  module.exports = {
    getAll: function() {
      return skills;
    }
};