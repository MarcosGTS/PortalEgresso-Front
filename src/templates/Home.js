import React from "react";
import Carrossel from "../components/carrossel/Carrossel";
import Depoimento from "../components/depoimento/Depoimento";
import DepoimentoService from "../services/DepoimentoService";
import "./Home.css";

class Home extends React.Component{
    state = {
        depoimentos: [],
    }
    
    constructor() {
        super();
        const apiToken = localStorage.getItem("Token");
        this.service = new DepoimentoService(apiToken);
    }
    
    componentDidMount() {
        
        this.service.obterTodosDepoimentos()
            .then(response => {
                const depoimentos = response.data
                this.setState({depoimentos})
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    render() {
        // Apenas depoimentos com depoimentos
        const depoimentos = this.state.depoimentos.filter(depoimento =>  depoimento.egresso.cursoEgressoAssoc)
        const randomDepoimentos = pickRandom(depoimentos, 4);

        return (
            <div className="home">
                <div className="hero-segment"> 
                    <div className="hero-description">
                        <h1>Titulo Chamativo</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a risus placerat, finibus nisl volutpat, porttitor ante. Nunc ut ligula fermentum, interdum nibh in, luctus dui.</p>
                    </div>
    
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gVEHqaDAJNh1FKY4NHruLgHaE8%26pid%3DApi&f=1" alt=""/>
                </div>
    
                <div className="depoimento-segment">
                    <Carrossel>
                        {
                            depoimentos.map(depoimento => {
                                const cursoAssoc = depoimento.egresso.cursoEgressoAssoc
                                return <Depoimento
                                    src={depoimento.egresso.url_foto}
                                    nome={depoimento.egresso.nome}
                                    curso={cursoAssoc[0].curso.nome}
                                    depoimento={depoimento.texto}
                                    href={`/perfil/${depoimento.egresso.id}`}
                                />
                            }  
                        )}
                    </Carrossel>
                    <div className="hero-description">
                        <h2>Titulo Chamativo</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a risus placerat, finibus nisl volutpat, porttitor ante. Nunc ut ligula fermentum, interdum nibh in, luctus dui.</p>
                    </div>
                </div>
            </div>
        )
    }

}

function pickRandom(arr, num = 4) {
    if (arr.length <= num) return arr;
    let clone = [...arr];

    while (clone.length > num) {
        const randomIndex = Math.floor(Math.random() * clone.length);
        clone.splice(randomIndex, 1);
    }

    return clone;
}

export default Home;