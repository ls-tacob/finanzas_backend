import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { FinanzasModule } from './finanzas/finanzas.module';

@Module({
  imports: [TasksModule, AuthModule, FinanzasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
