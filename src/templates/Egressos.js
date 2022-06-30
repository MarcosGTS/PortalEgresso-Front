import Tabela from "../components/tabela/Tabela";
import Linha from "../components/tabela/Linha";

import './Home.css'

function Egressos() {
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
                <Linha
                nome = "Marcos"
                curso = "Cs"
                nivel = "Mestrado"
                data = "20/02/2024"
                />
                <Linha
                nome = "Marcos Guilherme Torres Sodre"
                curso = "Cs"
                nivel = "Mestrado"
                data = "20/02/2024"
                />
                <Linha
                nome = "Marcos"
                curso = "Cs"
                nivel = "Mestrado"
                data = "20/02/2024"
                />
            </Tabela>
        </div>
    )
}

export default Egressos;