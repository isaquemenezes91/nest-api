import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export async function swagger(app:INestApplication,environment:string) {

    if(environment != 'development' ){
        return ;
    }
    const docOptions = new DocumentBuilder()
    .setTitle('Rents cars API')
    .setVersion("1.0")
    .addBearerAuth()
    .build()
  
    const document = SwaggerModule.createDocument(app, docOptions);
    SwaggerModule.setup('api',app,document);
    
}