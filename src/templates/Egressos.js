import Tabela from "../components/tabela/Tabela";
import Linha from "../components/tabela/Linha";

import './Home.css'
import React from "react";
import EgressoService from "../services/EgressoService";
import Chart from "react-google-charts";
import CargoService from "../services/CargoService";
import FaixaSalarioService from "../services/FaixaSalarioService";

class Egressos extends React.Component {
    
    constructor() {
        super();

        const apiToken = localStorage.getItem("Token");
        this.service = new EgressoService(apiToken);
        
        this.state = {
            egressos: [],
            cargosData: [],
            faixaSalarioData: [],
        }
    }

    componentDidMount() {
        this.service.obterEgressos()
            .then(response => {
                console.log(response.data)
                this.setState({egressos: response.data})
            })
            .catch(erro => {
                console.log(erro);
            })
        
        const cargoService = new CargoService();
        
        cargoService.obterEstattisticas()
            .then(response => {
                this.setState({cargosData: response.data})
            })
            .catch(erro => {
                alert(erro);
            })
        
        const faixaService = new FaixaSalarioService();

        faixaService.obterEstatisticas()
            .then(response => {
                console.log(response.data)
                this.setState({faixaSalarioData: response.data})
            })
            .catch(erro => {
                console.log(erro)
            })
    
    }
    
    render() {
        const egressos = this.state.egressos.filter(egresso => egresso.cursoEgressoAssoc.length > 0)    

        const {cargosData, faixaSalarioData} = this.state;
        
        const graficoCargo = [["Cargo", "Qtd. Egressos"]];
        for(let cargo of cargosData) {
            graficoCargo.push([cargo.label, cargo.value]);
        }

        const graficoFaixaSalario = [["Faixa Salarial", "Qtd. Egressos"]];
        for(let faixa of faixaSalarioData) {
            graficoFaixaSalario.push([faixa.label, faixa.value]);
        }
        
        return (
            <div className="home">
                <div className="hero-segment">
                    <div className="egressos-description">
                        <h1>Egressos</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque risus erat, efficitur et iaculis id, ultricies et ex. In lacus sem, fermentum in enim nec, ornare lobortis nisi. Suspendisse potenti. Maecenas maximus aliquet ligula, ut aliquet sem ornare id. Mauris ante libero, porttitor eget arcu quis, consectetur maximus ante. Phasellus maximus semper nulla id tempus.</p>
                    </div>
                </div>
                
                <div className="depoimento-segment"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "800px",
                        justifyContent: "space-evenly",
                    }}
                >
                    <h2>Estatisticas</h2>
                    
                    <Chart 
                    chartType="PieChart" 
                    width="600px" 
                    height="300px" 
                    data={graficoFaixaSalario}
                    options={
                        {pieHole: 0.4}
                    }/>
                
                    <Chart 
                    chartType="ColumnChart" 
                    width="600px" 
                    height="300px" 
                    data={graficoCargo}/>
                    
                </div>

                <Tabela>
                    {
                        egressos.map(egresso => {
                            
                            const data = egresso.cursoEgressoAssoc[0].data_conclusao;
                            return <Linha
                                id = {egresso.id}
                                nome = {egresso.nome}
                                curso = {egresso.cursoEgressoAssoc[0].curso.nome}
                                nivel = {egresso.cursoEgressoAssoc[0].curso.nivel}
                                data = {formatDate(data)}
                            />
                        
                        })
                    }
                </Tabela>
            </div>
        )
    }
}

function formatDate(datas) {
    const ano = `${datas[0]}`;
    const mes = `${datas[1]}`.padStart(2, "0");
    const dia = `${datas[2]}`.padStart(2, "0");
    return `${dia}/${mes}/${ano}`;
}

export default Egressos;