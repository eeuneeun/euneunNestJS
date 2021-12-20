import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app/app.controller';
import { UserController } from './user/user.controller';

// * module
// 서비스를 만드는 데에 필요한 모든 것들이 들어있음!

@Module({
  imports: [MoviesModule],
  controllers: [AppController, UserController],
  providers: [],
})
export class AppModule {}
