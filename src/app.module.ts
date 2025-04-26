import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { IncomesModule } from './finance/incomes/incomes.module';


@Module({
  imports: [AuthModule, UsersModule, IncomesModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
