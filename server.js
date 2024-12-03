import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.post("/usuarios", async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age,
      },
    });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});

app.get("/usuarios", async (req, res) => {
  try {
    let users;

    if (Object.keys(req.query).length > 0) {
      users = await prisma.user.findMany({
        where: {
          name: req.query.name,
          email: req.query.email,
          age: req.query.age ? parseInt(req.query.age, 10) : undefined,
        },
      });
    } else {
      users = await prisma.user.findMany();
    }

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

app.put("/usuarios/:id", async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: parseInt(req.params.id, 10),
      },
      data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age,
      },
    });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
});

app.delete("/usuarios/:id", async (req, res) => {
  try {
    await prisma.user.delete({
      where: {
        id: parseInt(req.params.id, 10),
      },
    });

    res.status(200).json({ message: "Usuário deletado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar usuário" });
  }
});
