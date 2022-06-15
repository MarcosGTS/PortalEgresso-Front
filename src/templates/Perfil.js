import Depoimento from "../components/depoimento/Depoimento";
import Paginacao from "../components/paginacao/Paginacao";
import "./Perfil.css";

function Perfil() {
    return <div className="home">
        <div className="perfil-informacoes">
            
            <div className="identificacao">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.x7NhF4R9aiHFO9r-i5X_eAHaHa%26pid%3DApi&f=1"/>
                <h2>Marcos Guilherme</h2>
            </div>  
            <Informacoes 
                curso="Ciencia da Computacao"
                email="marcos@gmail.com"
                dataInicio="20/02/2001"
                dataConclusao="20/02/2005"
            />
        </div>
        <div className="perfil-depoimento">
            <Paginacao>
                <div name="Resumo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non venenatis arcu. Duis libero leo, vulputate at dignissim nec, tincidunt quis sem. Quisque accumsan accumsan eleifend. Proin aliquet scelerisque maximus</div>
                <div name="Depoimento">Lorem ipsum dolor sit amet. Cras non venenatis vulputate at dignissim nec, tincidunt quis sem. Quisque accumsan accumsan eleifend. Proin aliquet scelerisque maximus</div>
            </Paginacao>
        </div>
        <div className="perfil-experiencias">
            <h2>Experiencias</h2>
            <div>
                <Depoimento
                    nome="Engenharia da Computacao" 
                    depoimento="Curabitur venenatis ligula faucibus felis porttitor, quis bibendum tellus porta. Donec ac sapien eu neque pellentesque tincidunt. Aliquam vel odio venenatis, suscipit diam ut, posuere urna. Fusce tincidunt quam eget leo tempor, non cursus dui rutrum"    
                />
                <Depoimento
                    nome="Engenharia da Computacao" 
                    depoimento="esse conteudo pertence a descricao"    
                />
                <Depoimento
                    nome="Engenharia da Computacao" 
                    depoimento="Quisque a iaculis nunc. Curabitur bibendum tempor arcu quis volutpat. Curabitur venenatis ligula faucibus felis porttitor, quis bibendum tellus porta. Donec ac sapien eu neque pellentesque tincidunt. Aliquam vel odio venenatis, suscipit diam ut, posuere urna. Fusce tincidunt quam eget leo tempor, non cursus dui rutrum"    
                />
                <Depoimento
                    nome="Engenharia da Computacao" 
                    depoimento="Quisque a iaculis nunc. Curabitur bibendum tempor arcu quis volutpat. Curabitur venenatis ligula faucibus felis porttitor, quis bibendum tellus porta. Donec ac sapien eu neque pellentesque tincidunt"    
                />
                <Depoimento
                    nome="Engenharia da Computacao" 
                    depoimento="esse conteudo pertence a descricao"    
                />
            </div>
        </div>
    </div>
}

function Informacoes(props) {
    return <div className="informacoes">
        <ul>
            <li><div className="highlight">Curso:</div> {props.curso}</li>
            <li><div className="highlight">Email:</div> {props.email}</li>
            <li><div className="highlight">Data Inicio:</div> {props.dataInicio}</li>
            <li><div className="highlight">Data Conclusao:</div> {props.dataConclusao}</li>
        </ul>
    </div>
}

export default Perfil;