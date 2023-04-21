import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const handler = (req, res) => {
  const d = new Date()
  res.end(d.toString())
}

async function bootstrap() {
 const app = await NestFactory.create(AppModule);
 app.setGlobalPrefix("api");
 app.enableCors()
 await app.listen(parseInt(process.env.PORT, 10) || 4000);
}
bootstrap();
