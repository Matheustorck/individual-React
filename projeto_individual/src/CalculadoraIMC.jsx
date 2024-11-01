import React, { useState } from 'react';
import './CalculadoraIMC.css';


export default function CalculadoraIMC() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState('');
    const [classificacao, setClassificacao] = useState('');
  
    const calcularIMC = () => {
      const alturaMetros = altura / 100;
      const imc = (peso / (alturaMetros * alturaMetros)).toFixed(1);
  
      let classificacaoIMC = '';
      if (imc < 18.5) {
        classificacaoIMC = 'Baixo peso';
      } else if (imc >= 18.5 && imc <= 24.9) {
        classificacaoIMC = 'Peso Adequado';
      } else if (imc >= 25 && imc <= 29.9) {
        classificacaoIMC = 'Sobrepeso';
      } else if (imc >= 30 && imc <= 34.9) {
        classificacaoIMC = 'Obesidade Grau 1';
      } else if (imc >= 35 && imc <= 39.9) {
        classificacaoIMC = 'Obesidade Grau 2';
      } else {
        classificacaoIMC = 'Obesidade Extrema';
      }
  
      setResultado(`Seu IMC é ${imc}`);
      setClassificacao(classificacaoIMC);
    };
  
    return (
      <div className="container">
        <header className="header">
          <h1>Calculadora de IMC</h1>
        </header>
  
        <div className="formulario">
          <label>
            Peso (kg):
            <input
              type="number"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              placeholder="Ex: 70"
              className="input"
            />
          </label>
          <br /><br />
          <label>
            Altura (cm):
            <input
              type="number"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              placeholder="Ex: 170"
              className="input"
            />
          </label>
          <br /><br />
          <button onClick={calcularIMC} className="botao">Calcular IMC</button>
  
          <div className="resultado">
            <p>{resultado}</p>
            <p>{classificacao}</p>
          </div>
        </div>
  
        <footer className="footer">
          <p>Desenvolvido por Matheus Alves Storck</p>
        </footer>
      </div>
    );
  }

  

