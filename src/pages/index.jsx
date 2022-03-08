import React from "react";
import Navegador from "../components/Navegador";

const Home = () => {
    return (
        <div style={{
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height:'100vh',
        }}>
            <Navegador texto="Estiloso" destino="/estiloso"/> 
            <Navegador cor="#da3333" texto="JSX" destino="/jsx"/> 
            <Navegador cor="#6315ac" texto="Exemplo" destino="/exemplo"/>
            <Navegador cor="#78cc24" texto="Navegação" destino="/navegacao"/>  
            <Navegador cor="#974f4f" texto="Navegação Dinâmica" destino="/cliente/sp-7/123"/> 
            <Navegador cor="#D2691E" texto="Integração_1 API" destino="/integracao_1"/> 
        </div>
    );
}

export default Home;
