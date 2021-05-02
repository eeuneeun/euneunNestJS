import { Injectable, NotFoundException } from '@nestjs/common';
import { createMovieDto } from './dto/create-movie.dto';
import {Movie} from './entities/movie.entities';

@Injectable()
export class MoviesService {
    private movies : Movie[] = [];

    getAll():Movie []{
        return this.movies;
    }
    
    getOne(id:string) :Movie{
        const movie = this.movies.find(movie => movie.id === parseInt(id))
        if(!movie){
            throw new NotFoundException(`이런 영화 id ${id} 번호가 없어요~`)
        }
        return movie;
    }
    
    deleteOne(id:string){
        this.getOne(id)
        this.movies = this.movies.filter(movie => movie.id !== +id);
    }

    create(movieData: createMovieDto){
        this.movies.push({
            id:this.movies.length+1,
            ...movieData

        })
    }

    update(id:string, updateData){
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({
            ...movie,
            ...updateData
        })
    }
}
