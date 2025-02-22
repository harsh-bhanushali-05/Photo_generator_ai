// this is the backend for the app
import express from "express";
import { packsSchema, generateSchema, generateUsingPacksSchema, generateImageSchema, trainSchema } from "middle";
import { prismaClient } from "db";
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});


 // there are a few entry points for the backend
app.get("/packs", (req, res) => {
    // this is the entry point for the packs (get all the packs which are available)

  res.send("this is the packs entry point");
});

app.post("/generate", (req, res) => {
    // this is the entry point for the generate (generate a img using a prompt)
  res.send("this is the generate entry point");
});

app.get("/generatedImages", (req, res) => {
    // this is the entry point for the generatedImages (get all the generated images)
  res.send("this is the generatedImages entry point");
});

app.post("/generateUsingPacks", (req, res) => {
    // this is the entry point for the generateUsingPacks (generate a img using a pack)
  res.send("this is the generateUsingPacks entry point");
});
app.post("/ai/train", async (req: express.Request, res: express.Response) => {
    // this is the entry point for the train (train a model)
  const parsed = trainSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(411).json({ error: parsed.error.message });
    return;
  }
  await prismaClient.model.create({
    data: { id:req.body.id, 
      name:parsed.data.name, 
      URl:parsed.data.URl, 
      type:parsed.data.type, 
      ethnicity:parsed.data.ethnicity, 
      age:parsed.data.age, 
      bald:parsed.data.bald, 
      eyecolor:parsed.data.eyecolor 
    },
  });
  
  res.send("this is the train entry point");
});



app.listen(PORT, () => {
    console.log("Server is running on port ${PORT}");
  });
  