"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const handler = (req, res) => {
    const d = new Date();
    res.end(d.toString());
};
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix("api");
    app.enableCors();
    await app.listen(parseInt(process.env.PORT, 10) || 4000);
}
bootstrap();
//# sourceMappingURL=main.js.map