import React from "react";
import CursoService from "../../services/CursoService";
import EgressoService from "../../services/EgressoService";

class EditarCurso extends React.Component {
    
    state = {
        cursos:[],
    }

    componentDidMount() {
        const {cursoAssoc} = this.props;
        const {data_inicio} = cursoAssoc;
        const {data_conclusao} = cursoAssoc;
        const cursoId = cursoAssoc.curso.id;

        this.setState({prevCursoId: cursoId});
        this.setState({cursoId});
        this.setState({dataInicio: formatDate(data_inicio)});
        this.setState({dataConclusao: formatDate(data_conclusao)});

        const service = new CursoService();

        service.obterCursos()
            .then(response => {
                const cursos = response.data;
                this.setState({cursos});
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    editarCurso() {
        const apiToken = localStorage.getItem("Token");
        const egressoId = localStorage.getItem("Id");
        const service = new EgressoService(apiToken);
        const {prevCursoId} = this.state
        const {cursoId} = this.state
        const obj = {
            dataInicio: this.state.dataInicio,
            dataConclusao: this.state.dataConclusao,
        }

        service.editarCurso(egressoId, cursoId, prevCursoId, obj)
            .then(response => {
                console.log(response.data);
                window.location.reload(false);
            })
            .catch(erro => {
                alert(`${erro}`);
            })
    }

    removerCurso() {
        const egressoId = localStorage.getItem("Id");
        const apiToken = localStorage.getItem("Token");
        const service = new EgressoService(apiToken);
        const prevCursoId = this.state.prevCursoId;

        service.removerCurso(egressoId, prevCursoId)
            .then(response => {
                alert("Removido com sucesso!");
                window.location.reload();
            })
            .catch(erro => {
                alert(`${erro}`);
            })
    }

    render() {
        const {cursos} = this.state;
        const {cursoId} = this.state;
        const {dataInicio} = this.state;
        const {dataConclusao} = this.state;

        return <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    this.editarCurso()
                }}
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <label for="curso-escolhido">Curso: </label>
                <select
                    id="curso-escolhido"
                    onChange={(e) => {
                        this.setState({cursoId: e.target.value})
                    }}
                    value={cursoId}
                >
                    {cursos.map(curso => {
                        return <option value={curso.id}>{curso.nome}</option>
                    })}
                </select>
                <label for="data-inicio">Data Inicio: </label>
                <input 
                    id="data-inicio"
                    type="date" defaultValue={dataInicio}
                    onChange={(e) =>{
                        this.setState({dataInicio: e.target.value})
                    }}
                />
                <label for="data-conclusao">Data Conclusao: </label>
                <input 
                    id="data-conclusao"
                    type="date" defaultValue={dataConclusao}
                    onChange={(e) =>{
                        this.setState({dataConclusao: e.target.value})
                    }}
                />
                <button>Salvar</button>
            </form>
            <button onClick={() => this.removerCurso()}>Deletar</button>
        </>
    }
}

function formatDate(datas) {
    const ano = `${datas[0]}`;
    const mes = `${datas[1]}`.padStart(2, "0");
    const dia = `${datas[2]}`.padStart(2, "0");
    return `${ano}-${mes}-${dia}`;
}

export default EditarCurso;