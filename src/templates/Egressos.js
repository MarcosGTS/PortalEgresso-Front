import Tabela from "../components/tabela/Tabela";
import Linha from "../components/tabela/Linha";

import './Home.css'
import React from "react";
import EgressoService from "../services/EgressoService";

class Egressos extends React.Component {
    state = {
        egressos:[],
    }

    constructor() {
        super();
        this.service = new EgressoService();
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
    }
    
    render() {
        return (
            <div className="home">
                <div className="hero-segment">
                    <div className="egressos-description">
                        <h1>Egressos</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque risus erat, efficitur et iaculis id, ultricies et ex. In lacus sem, fermentum in enim nec, ornare lobortis nisi. Suspendisse potenti. Maecenas maximus aliquet ligula, ut aliquet sem ornare id. Mauris ante libero, porttitor eget arcu quis, consectetur maximus ante. Phasellus maximus semper nulla id tempus.</p>
                    </div>
                </div>
                
                <div className="depoimento-segment">
                    <h2>Estatisticas</h2>
                </div>

                <Tabela>
                    {
                        this.state.egressos.map(egresso => {
                            {if (egresso.cursoEgressoAssoc.length > 0) {
                                return <Linha
                                nome = {egresso.nome}
                                curso = {egresso.cursoEgressoAssoc[0].curso.nome || "Sem Curso"}
                                nivel = {egresso.cursoEgressoAssoc[0].curso.nivel || "Sem Curso"}
                                data = {egresso.cursoEgressoAssoc[0].data_conclusao || "xx/xx/xx"}
                                />
                            }}
                        })
                    }
                </Tabela>
            </div>
        )
    }
}

export default Egressos;