import { z } from "zod";

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Se requiere un Usuario',
    }),
    email: z.string({
        required_error: 'Se requiere un correo',
    }).email({
        message: 'El correo no es válido',
    }),
    password: z.string({
        required_error: 'Se requiere una contraseña',        
    }).min(6, {
        message: 'La contraseña de tener al menos 6 caracteres',
    })
});

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Se requiere un correo',
    }).email({
        message: 'El correo no es válido',
    }),
    password: z.string({
        required_error: 'Se requiere una contraseña',
    }).min(6, {
        message: 'La contraseña de tener al menos 6 caracteres',
    }),
})