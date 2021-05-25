// Get the hour
const today = new Date();
const hour = today.getHours();

// Here you can change your name
const name = ' Natry Nevnf';

// Here you can change your greetings
const gree1 = 'Porque no te duermes y no despiertas  ';
const gree2 = 'Sigues vivo .-.  ';
const gree3 = 'Oye   ';
const gree4 = 'Fuck U,  ';
const gree5 = 'U r a Shit,  ';
const gree6 = 'Muere perra,  ';

// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
  document.getElementById('greetings').innerText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
  document.getElementById('greetings').innerText = gree2 + name;
} else if (hour >= 12 && hour < 17) {
  document.getElementById('greetings').innerText = gree3 + name;
} else {
  document.getElementById('greetings').innerText = gree4 + name;
}
