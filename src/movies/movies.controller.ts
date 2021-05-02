import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { query } from 'express';
import { createMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entities';
import { MoviesService } from './movies.service';

@Controller("movies")
export class MoviesController {
    constructor(private readonly moviesService : MoviesService){}
   
    @Get()
    getAll() : Movie[]{
        return this.moviesService.getAll();
    }

    @Get("search")
    search(@Query("year") srchYear:string){
        return `영화를 찾고있습니더~ ${srchYear}`
    }

    
    @Get("/:id")
    getOne(@Param("id") movieId:string) : Movie{
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData : createMovieDto){
        return this.moviesService.create(movieData);
    }

    @Delete("/:id")
    remove(@Param("id") movieId:string){
        return this.moviesService.deleteOne(movieId);
    }

    @Put("/:id")
    patch(@Param("id") movieId:string, @Body() updateData){
        return this.moviesService.update(movieId, updateData)
    }

}
