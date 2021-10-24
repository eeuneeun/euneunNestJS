import { IsNumber, IsString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { fromEventPattern } from "rxjs"; 


export class updateMovieDto{
    @IsString()
    readonly title : string;
    @IsNumber()
    readonly year : number;
    readonly genres : string[];
    readonly desc : string;
}