import {Controller, Get} from '@nestjs/common';
import {FinanzasService} from "./finanzas.service";

@Controller('finanzas')
export class FinanzasController {
    constructor(private readonly finanzasService: FinanzasService) {
    }
    @Get()
    async getSummary(){
        return await this.finanzasService.getSummary();
    }
}
