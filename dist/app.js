"use strict";
/**
 * CONFIGURAR RUTAS Y CONEXION BD, ENTRE OTRAS COSAS DEL SERVICIO
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pacienteRoutes_1 = __importDefault(require("./routes/pacienteRoutes"));
const medicoRoutes_1 = __importDefault(require("./routes/medicoRoutes"));
const servicioRoutes_1 = __importDefault(require("./routes/servicioRoutes"));
const citaRoutes_1 = __importDefault(require("./routes/citaRoutes"));
const categoriaRoutes_1 = __importDefault(require("./routes/categoriaRoutes"));
const pagoRoutes_1 = __importDefault(require("./routes/pagoRoutes"));
// import carreraRoutes from './routes/carreraRoutes';
const app = (0, express_1.default)();
//Database
//Midlewares
app.use(express_1.default.json());
//Routes
app.use('/api/v1/paciente', pacienteRoutes_1.default);
app.use('/api/v1/medico', medicoRoutes_1.default);
app.use('/api/v1/servicio', servicioRoutes_1.default);
app.use('/api/v1/cita', citaRoutes_1.default);
app.use('/api/v1/categoria', categoriaRoutes_1.default);
app.use('/api/v1/pago', pagoRoutes_1.default);
// app.use('/api/v1/carrera',carreraRoutes);
exports.default = app;
//# sourceMappingURL=app.js.map