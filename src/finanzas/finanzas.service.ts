import { Injectable } from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {firstValueFrom} from "rxjs";

@Injectable()
export class FinanzasService {
    constructor(private readonly httpService: HttpService) {
    }
    async getSummary() {
        // 1. Llamada a API de Divisas (Frankfurter)
        const divisaRes = await firstValueFrom(
            this.httpService.get('https://api.frankfurter.app/latest?from=USD&symbols=EUR,GBP,MXN')
        );

        // 2. Llamada a API de Noticias (Saurav News)
        const noticiasRes = await firstValueFrom(
            this.httpService.get('https://saurav.tech/NewsAPI/top-headlines/category/business/us.json')
        );

        // 3. Transformación y Normalización
        return {
            tasas: divisaRes.data.rates,
            primeraNoticia: noticiasRes.data.articles[0],
            fechaConsulta: new Date().toISOString()
        };
    }
}
