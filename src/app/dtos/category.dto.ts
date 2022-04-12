// Si lo que estamos importando inicia en minúscula es una
// función, en caso contrario - mayúscula - es un
// decorador

// Con los decoradores agregamos comportamiento extra a nuestras
// propiedades de una manera muy sencilla

import { IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validate, validateOrReject } from 'class-validator';

import { AccessType, Category } from "../models/category.model";

export interface ICreateCategoryDto extends Omit<Category, 'id'> {}

export class CreateCategoryDto implements ICreateCategoryDto {
  // utilizaremos el símbolo "!" para indicarle a TS que lo
  // vamos a inicializar en otro momento

  @IsNotEmpty()
  @Length(4,140)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;

}

(async() => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'algo mejor';
    dto.image = 'https://api.escuelajs.co/api/v1/products';
    await validateOrReject(dto)
  } catch (error) {
    console.log(error);
  }
})();
