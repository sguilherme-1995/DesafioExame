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
   }
   

   converter(){

    let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
    let url = `https://free.currconv.com/api/v7/convert?apiKey=do-not-use-this-key&q=${de_para}&compact=y`;

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

 
  
   
    render(){
        return(
            <div className="conversor">
                <h2 className="Moedas">{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}></input>
                <input type="button" value="Converter" onClick={this.converter} className="Botao"></input>
                <h2 className="ValorRetornado">${this.state.moedaB_valor}</h2>
            </div>
            
            
        )
        
    }
    
    
}
// function enterPress() {
//     document.addEventListener('keypress',function(e){
//         if(e.which === 13){
            
//         }
//     },false)
//    }




