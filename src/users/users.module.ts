import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
// import { TypeOrmModule } from '@nestjs/typeorm';
import { PrismaModule } from "../../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
