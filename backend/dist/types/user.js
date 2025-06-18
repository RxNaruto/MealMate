"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginTypes = exports.signupTypes = void 0;
const zod_1 = require("zod");
exports.signupTypes = zod_1.z.object({
    phone: zod_1.z.string().min(10),
    name: zod_1.z.string(),
    password: zod_1.z.string().min(6)
});
exports.loginTypes = zod_1.z.object({
    phone: zod_1.z.string().min(10),
    password: zod_1.z.string().min(6)
});
