function NationalPokedexCtrl($scope) {
  
  var bullbasour = new Pokemon({
    nombre      : "Bulbasaur",
    imagen      : 'http://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png',
    descripcion : "Pokemon planta",
    tipos       : [ 'grama', 'veneno' ],
    ataque      : 10,
    defensa     : 10,
    ataqueSP    : 10,
    defensaSP   : 10
  });
  
  var charmander = new Pokemon({
    nombre      : "Charmander",
    imagen      : 'http://cdn.bulbagarden.net/upload/7/73/004Charmander.png',
    descripcion : "Pokemon lagarto",
    tipos       : [ 'fuego' ],
    ataque      : 10,
    defensa     : 10,
    ataqueSP    : 20,
    defensaSP   : 20
  });
  
  var squirtle = new Pokemon({
    nombre      : "Squirtle",
    imagen      : 'http://cdn.bulbagarden.net/upload/3/39/007Squirtle.png',
    descripcion : "Pokemon tortuga",
    tipos       : [ 'agua' ],
    ataque      : 10,
    defensa     : 20,
    ataqueSP    : 10,
    defensaSP   : 20
  });
  
  
  $scope.pokedex = (function() {
    var tipos = [
      'normal',
      'agua',
      'fuego',
      'grama',
      'dragon',
      'volador',
      'venenoso',
      'insecto'
    ];
    
    function agregar(pokemon) {
      this.pokemons.push( pokemon );
      this.reiniciar();
    }
    
    function eliminar(pokemon) {
      var indice = this.pokemons.indexOf(pokemon);
      
      this.pokemons.splice(indice, 1);
    }
    
    function reiniciar() {
      this.nuevo            = new Pokemon();
      this.tipoSeleccionado = 'normal';
    }
    
    return {
      nuevo             : new Pokemon(),
      tipos             : tipos,
      tipoSeleccionado  : 'normal',
      agregar           : agregar,
      eliminar          : eliminar,
      reiniciar         : reiniciar,
      pokemons          : [ bullbasour, charmander, squirtle ]
    };
  })();
}


/* CLASE POKEMON: */
function Pokemon(data) {
  var predeterminados = {
    imagen  : 'http://imageshack.com/a/img440/3812/kzu.png',
    tipos   : []
  };
  
  angular.extend(this, predeterminados, data);
}

Pokemon.prototype.agregarTipo = function(tipo) {
  this.tipos.push( tipo );
}

Pokemon.prototype.eliminarTipo = function(tipo) {
  var indice = this.tipos.indexOf( tipo );
  
  this.tipos.splice( indice, 1 );
}