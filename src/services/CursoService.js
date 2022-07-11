import ApiService from "./ApiService";

class CursoService extends ApiService {
    constructor() {
        super("/api/cursos");
    }

    obterCursos() {
        return this.get("/");
    }

}

export default CursoService;