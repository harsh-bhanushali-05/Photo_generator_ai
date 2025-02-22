import {z} from "zod";
// this is the middle type checker for the backend 

export const packsSchema = z.object({
    // this is the schema for the packs
    id: z.string(),
    name: z.string(),
    description: z.string(),
    prompt: z.array(z.string()),
});
export const generateSchema = z.object({
    prompt: z.string(), 
    model : z.string()
}); 
export const generateUsingPacksSchema = z.object({
    model : z.string(),
    packId: z.string(),
});
export const generateImageSchema = z.object({
    prompt: z.string(),
    model : z.string()
});
export const trainSchema = z.object({
    id: z.string(),
    name: z.string(),
    URl: z.string(), 
    type : z.enum(["Man" , "Woman" ,"Other"]), 
    ethnicity : z.enum(["Asian" , "Black" , "Hispanic" , "Middle Eastern" , "Native American" , "Pacific Islander" , "White" , "Indian" , "Other"]),
    age : z.number(),
    bald : z.boolean(),
    eyecolor : z.enum(["Brown" , "Blue" , "Green" , "Hazel" , "Gray" , "Other"]),    
});







