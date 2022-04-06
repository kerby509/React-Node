import React from "react";
//import './Login.css';
import logo from './logo.jpeg';
import fundo from './fundo.jpeg';
import beneficios from './beneficios.jpeg';




const Login = () => {
    return (
        
        <html lang="pt-br">
            <head>
             <title>Condominio Residencial Efapi</title>
             </head>
    

    
            
                

             <div className="Login"> 
             <body>
                <header>
             <div class="search">
                    <input className="srch"  type="search" placeholder="Type to text" />
                     <a href="#"> <button class="btn">Search</button></a>
                 </div>
            
             <h1 class="titulopricinpal">Condominio Residencial Efapi</h1>

               
                <div className="opcao">
                   <h1><img src={logo}></img></h1>
                   <nav>
                    <ul>
                        <li><a href="">Morador</a></li>
                        <li><a href="">morador</a></li>
                        <li><a href="">Lista Cliente</a></li> 
                        <li><a href="">Atualizar</a></li> 
                       
                        <li><a href="">Consulta</a></li>
                        
                        
                        
                    </ul>
                </nav>

                 </div>
                 </header>

                          
    

               
                
                    <main>
                    <section class="principal">
                    <h2 class="titulo-principal">Sobre Condominio Residencial da Efapi</h2>


                    <p>Localizado a leste de Chapeco <strong>O Condomínio Residencial da Efapi</strong>, no atual Setor 
                 Habitacional São Bartolomeu. A Fazenda Taboquinha, de onde se originam as terras de nosso
                Condomínio, tem documentação centenária, remontando ao início do século XIX, quando as transações
                imobiliárias eram anotadas pelas secretarias das igrejas católicas, por meio de “registros paroquiais”. Nosso Condomínio
                é resultante do parcelamento da fazenda original, denominado “Quinhão 11”, também conhecido por “Serrinha”, com a área de 218 hectares. A Fazenda
                Taboquinha, a partir de 1955, pertenceu a Pedro Ferreira Alves e Dona Romualda,  ocupando uma área de 1700 alqueires, abrangendo
                um território que tinha divisas, em termos contemporâneos, próximas à Ermida Dom Bosco, à QI-19 e ao Presídio da Papuda. Seus limites  faziam
                referência ao Córrego da Divisa, à Fazenda Paranoá, ao Córrego Cabeça de Veado, ao Córrego Mata Grande, ao Córrego Santo Antônio da Papuda, ao Córrego 
                Taboca e ao Rio São Bartolomeu. </p>
                
                <p>Durante o processo de instalação da capital Federal, uma parte
                da Fazenda Taboquinha foi negociada com o Governo, enquanto que vários quinhões foram mantidos,
                integralmente, sob o domínio e posse de seus proprietários.</p>

                <p id="missao" ><em>Nossa missão é :<strong> "proporcionar a qualidade
                de viver aos clientes".</strong>.</em></p>

            <p>Oferecemos as mudanças no mundo em relação do seu gosto, o atendimento possui padrão de
                excelencia e agilidade, garantindo qualidade e satisfação dos nossos clientes.
            </p>

         </section>

         <section class="beneficios">
         <h3 class="titulo-principal">Beneficios</h3>
         <div class="conteudo-beneficios">

         <ul class="lista-beneficios">
                    <li class="itens">Atendimento aos clientes</li>
                    <li class="itens">Localizada na leste da cidade</li>
                    <li class="itens">Espaço diferenciado</li>
                    <li class="itens">Picina</li>

                    <li class="itens">dois garagens por apartamento</li>
                </ul>
                
                <img  src={beneficios} class="image-beneficios" ></img >
                


         </div>




         </section>


        

                       

         </main>
                
              


             <footer class="footer-distributed">
			

                <div class="footer-center">
				<div>
					<i class="fa fa-map-marker"></i>
					<p><span> Rua vinte e cinco de julho </span> Efapi, Chapeco</p>
				</div>
				<div>
					<i class="fa fa-phone"></i>
					<p>49 98504-8890</p>
                    <p>49 98505-4745</p>

				</div>
				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="lubinsebastienlionel@gmail.com">resdencialefapi@chapeco.com.br</a></p>
                    <p><a href="lovinekerby99@gmail.com">resdencialefapi@chapeco.com.br</a></p>

				</div>
			</div>

            <div class="footer-right">
				<p class="footer-company-about">
					<span>Sobre o condomino</span>
					O Condomínio Residencial da Efapi está localizado a leste de Chapeco, no atual Setor
                    Habitacional São Bartolomeu.
				</p>
				<div class="footer-icons">
					<a href="https://www.facebook.com/sharer/sharer.php?u=#url" ><i class="fa fa-facebook"></i></a>


            <footer className="pied">
                <img src=""></img>
                <p>&copy; Condominio Residencial Efapi-2022</p>
                <p>All rights reserved.</p>
            </footer>
					
				</div>
			</div> 



      </footer>


                    


     </body>              
                
        </div>
 </html>
    
    )
     
    
}

export default Login;