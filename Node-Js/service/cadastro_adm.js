const cadastro_adm = require('../models/cadastro_adm')

module.exports = {
  
    inserir(morador) {
      return cadastro_adm(morador);
    },
  
    
};

