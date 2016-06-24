
function Team(city, state, mascot, league, coach, colors, stadium, wins, losses) {
  this.name = name;
  this.getName = function (){
    return this.name;
  }
  this.setName = function(newName){
    this.name = newName;
  }
  this.city = city;
  this.state = state;
  this.mascot = mascot;
  this.league = league;
  this.coach = coach;
  this.colors = colors;
  this.stadium = stadium;
  this.wins = wins;
  this.losses = losses;
  this.getWinPercentage = function(){
      return Math.round(this.wins / this.losses * 100);
    }
}

var wolves = new Team('Minneapolis', 'Minnesota', 'Crunch', 'NBA', 'Tom Thibodeau', ['black', 'blue', 'white', 'gray'], 'Target Center', 29, 53);

wolves.setName('Timberwolves');

console.log('The ' + wolves.state + ' ' + wolves.getName() + ' is an ' + wolves.league + ' team in ' + wolves.city + ', ' + wolves.state + '. ' + 'The are coached by ' + wolves.coach + ' and cheered on by their mascot, ' + wolves.mascot + '. When they are home, the ' + wolves.getName() + ' play at the ' + wolves.stadium + ' which will have their colors: ' + wolves.colors[0] + ', ' + wolves.colors[1] + ', ' + wolves.colors[2] + ', and ' + wolves.colors[3] + '. In the 2015-2016 season, their winning percentage was ' + wolves.getWinPercentage() + '% which consisted of ' + wolves.wins + ' wins and ' + wolves.losses + ' losses.');
