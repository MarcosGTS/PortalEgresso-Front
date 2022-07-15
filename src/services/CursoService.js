import ApiService from "./ApiService";

class CursoService extends ApiService {
    constructor(apiToken) {
        super("/api/cursos", apiToken);
    }

    obterCursos() {
        return this.get("/");
    }

}

export default CursoService;