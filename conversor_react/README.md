<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href=logo-exame.jpg />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Conversor de Moedas"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

    <link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>
    
    <title>Conversor Exame</title>
  </head>
  <body>
    <noscript>Você deve habilitar o JavaScipt para rodar a aplicação do conversor de moedas.</noscript>
    <div id="root"></div>
    <div>
      <img src="conversor.png" height="60" width="60" class="imagem2">
    </div>
    <div>
    
    <p><b>Feito por <i>Guilherme de Souza Nunes</i></b></p>
    <a href="https://www.linkedin.com/in/guilherme-de-souza-nunes-75a043102/detail/recent-activity/posts/" target="_blank"><img src="https://cdn.icon-icons.com/icons2/1269/PNG/512/1497553283-108_84845.png" width="70" height="70" class="linked"></a>
    </div>
    <div>
      <a href="https://exame.abril.com.br/" target="_blank"><img src="logo-exame.jpg" height="93" width="166" class="imagem"></a>
    </div>
    <script>
      import React,{ Component } from 'react'
import './Conversor.css'
export default class Conversor extends Component{
  
      constructor(props){
       super(props);

       this.state = {
           moedaA_valor:"",
           moedaB_valor:0,
       }
       this.converter = this.converter.bind(this)
       this.onEnterPress = this.onEnterPress.bind(this)
   }
   

   converter(){

    let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
    let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=149cc47bf37917e35410`;

    fetch(url)
    .then(res=>{

        return res.json()
    })
    .then(json=>{
        let cotacao = json[de_para].val
        let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2);
        this.setState({moedaB_valor})
    })

   }

   onEnterPress(e) {
        if(e.key === 'Enter'){    
            this.converter()
        }
   }
  
   
    render(){
        return(
            <div className="conversor">
                <h2 className="Moedas">{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}} onKeyPress={e => this.onEnterPress(e)}></input>
                <input type="button" value="Converter" onClick={this.converter} className="Botao"></input>
                <h2 className="ValorRetornado">${this.state.moedaB_valor}</h2>
            </div>
            
            
        )
        
    }}
    </script>
     <style>
      .conversor{
    padding: 20px;
    max-width: 300px;
    box-shadow: 0 4px 8px 0 black;
}
.ValorRetornado{
    text-align: center;
}
.Moedas{
    text-align: center;
    color: darkslategray;
}
.Botao{
    background-color: rgb(200, 245, 133);
}

    </style>
  </body>
</html>