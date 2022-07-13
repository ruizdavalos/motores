import express from "express";
import handlebars from "express-handlebars";
import { productRouter } from "./routers/productRouter.js";

const app = express();

const PORT = 8080;

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "main.hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/productos", productRouter);

app.get("/", (req, res) => {
  res.render("form");
});

app.listen(PORT, () => `Servidor corriendo en el puerto ${PORT}`);
