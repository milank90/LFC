document.getElementById('datacenter').addEventListener('change', function() {
  var datacenter = this.value;
  var worldDropdown = document.getElementById('world');

  // Clear existing options
  worldDropdown.innerHTML = '';

  // Add new options based on the selected data center
  if (datacenter === 'Aether') {
      addWorldOptions(['Adamantoise', 'Cactuar', 'Faerie', 'Gilgamesh', 'Jenova', 'Midgardsormr', 'Sargatanas', 'Siren']);
  } else if (datacenter === 'Crystal') {
      addWorldOptions(['Balmung', 'Brynhildr', 'Coeurl', 'Diabolos', 'Goblin', 'Malboro', 'Mateus', 'Zalera']);
  } else if (datacenter === 'Dynamis') {
      addWorldOptions(['Halicarnassus', 'Maduin', 'Marilith', 'Seraph']);
  } else if (datacenter === 'Primal') {
  addWorldOptions(['Behemoth', 'Excalibur', 'Exodus', 'Famfrit', 'Hyperion', 'Lamia', 'Leviathan', 'Ultros']);
  }
});

function addWorldOptions(options) {
  var worldDropdown = document.getElementById('world');
  options.forEach(function(option) {
      var optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.textContent = option;
      worldDropdown.appendChild(optionElement);
  });
}