import { SearchParams } from "next/dist/server/request/search-params";
import { SearchFormData } from "../types/search.types";

export class SearchService {
    async performSearch(data: SearchFormData) {
        // api
        return {
            success: true,
            data: {
                evento: data.evento,
                fecha: data.fecha,
                pasajeros: data.pasajeros,
            }
        }
    }
}