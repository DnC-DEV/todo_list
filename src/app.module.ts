import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Lista } from "./Lista/entities/lista.entity";
import { ListaModule } from "./Lista/lista.module";


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_listtodo',
      entities: [Lista],
      synchronize: true,
    }),
    ListaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
