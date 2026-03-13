import { Module } from '@nestjs/common';
import { FinanzasController } from './finanzas.controller';
import { FinanzasService } from './finanzas.service';
import {HttpModule} from "@nestjs/axios";

@Module({
  imports: [HttpModule],
    controllers: [FinanzasController],
  providers: [FinanzasService]
})
export class FinanzasModule {}
