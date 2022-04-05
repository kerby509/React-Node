import React from "react";
import './Login.css';
import logo from './logo.jpeg';
import fundo from './fundo.jpeg';




const Login = () => {
    return (
    

            <div className="Login">
            
                <h1>Condomino Residencial</h1>
                    <h1>Efapi</h1>
                    <img src={logo}></img>

                <div class="search">
                    <input className="srch"  type="search" placeholder="Type to text" />
                     <a href="#"> <button class="btn">Search</button></a>
                 </div>
            
            
    

               
                <body>  
                    <div className="content">
                   <h2> Condomino  <span>Residencial da Efapi</span> Chapeco</h2>
                    <p class="par"> O Condomínio Residencial da Efapi está localizado a leste de Chapeco, no atual Setor <br></br>
                 Habitacional São Bartolomeu. A Fazenda Taboquinha, de onde se originam as terras de nosso<br></br>
                Condomínio, tem documentação centenária, remontando ao início do século XIX, quando as <br></br> transações
                imobiliárias eram anotadas pelas secretarias das igrejas católicas, por meio de <br></br> “registros paroquiais”. Nosso Condomínio
                é resultante do parcelamento da fazenda original, <br></br> denominado “Quinhão 11”, também conhecido por “Serrinha”, com a área de 218 hectares.<br></br> A Fazenda
                Taboquinha, a partir de 1955, pertenceu a Pedro Ferreira Alves e Dona Romualda, <br></br> ocupando uma área de 1700 alqueires, abrangendo
                um território que tinha divisas, em termos<br></br> contemporâneos, próximas à Ermida Dom Bosco, à QI-19 e ao Presídio da Papuda. Seus limites <br></br> faziam
                referência ao Córrego da Divisa, à Fazenda Paranoá, ao Córrego<br></br> Cabeça de Veado, ao Córrego Mata Grande, ao Córrego Santo Antônio da Papuda, ao Córrego<br></br> 
                Taboca e ao Rio São Bartolomeu. 
                Durante o processo de instalação da capital Federal, uma parte <br></br>
                da Fazenda Taboquinha foi negociada com o Governo, enquanto que vários quinhões foram mantidos,<br></br>
                integralmente, sob o domínio e posse de seus proprietários.</p>
                       

                    </div>
              </body>


                    


                   
                
        </div>
    
    )
     
    
}

export default Login;