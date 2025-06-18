import {z} from 'zod';

export const signupTypes=z.object({
    phone: z.string().min(10),
    name: z.string(),
    password: z.string().min(6)

})

export const loginTypes = z.object({
    phone: z.string().min(10),
    password: z.string().min(6)
})

