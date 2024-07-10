"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const pacienteRoutes_1 = __importDefault(require("./routes/pacienteRoutes"));
const medicoRoutes_1 = __importDefault(require("./routes/medicoRoutes"));
const servicioRoutes_1 = __importDefault(require("./routes/servicioRoutes"));
const citaRoutes_1 = __importDefault(require("./routes/citaRoutes"));
const categoriaRoutes_1 = __importDefault(require("./routes/categoriaRoutes"));
const pagoRoutes_1 = __importDefault(require("./routes/pagoRoutes"));
const horarioRoutes_1 = __importDefault(require("./routes/horarioRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const perfilRoutes_1 = __importDefault(require("./routes/perfilRoutes"));
const swagger_1 = __importDefault(require("./swagger"));
const app = (0, express_1.default)();
// Midlewares
app.use(express_1.default.json());
// Routes
app.use('/api/v1/paciente', pacienteRoutes_1.default);
app.use('/api/v1/medico', medicoRoutes_1.default);
app.use('/api/v1/servicio', servicioRoutes_1.default);
app.use('/api/v1/cita', citaRoutes_1.default);
app.use('/api/v1/categoria', categoriaRoutes_1.default);
app.use('/api/v1/pago', pagoRoutes_1.default);
app.use('/api/v1/horario', horarioRoutes_1.default);
app.use('/api/v1/usuario', usuarioRoutes_1.default);
app.use('/api/v1/perfil', perfilRoutes_1.default);
// Swagger setup
(0, swagger_1.default)(app);
exports.default = app;
//# sourceMappingURL=app.js.map