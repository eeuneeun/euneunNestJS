import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { query } from 'express';
import { createMovieDto } from './dto/create-movie.dto';
import { updateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entities';
import { MoviesService } from './movies.service';


// 이 부분이 Entry Point 의 선언과 같음
// 기본적으로 Controller 는 Express 의 Router 와 같음
@Controller("movies")
export class MoviesController {
    constructor(private readonly moviesService : MoviesService){}
   
    @Get()
    getAll() : Movie[]{
        return this.moviesService.getAll();
    }
    
    @Get(":id")
    getOne(@Param("id") movieId:string) : Movie{
        return this.moviesService.getOne(movieId);
    }
    
    @Get("search")
    search(@Query("year") srchYear:string){
        return `영화를 찾고있습니더~ ${srchYear}`
    }


    @Post()
    create(@Body() movieData ){
        return this.moviesService.create(movieData);
    }

    @Delete(":id")
    remove(@Param("id") movieId:string){
        return this.moviesService.deleteOne(movieId);
    }

    @Put(":id")
    patch(@Param("id") movieId:string, @Body() updateData: updateMovieDto){
        return this.moviesService.update(movieId,updateData)
    }

}
