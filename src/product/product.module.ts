import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductsSchema } from './product.model';

@Module({
  imports:[
    MongooseModule.forFeature([{name: `Product`, schema: ProductsSchema}])
  ],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}