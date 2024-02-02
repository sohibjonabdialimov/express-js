import express, { urlencoded } from "express";
import {create} from "express-handlebars";
import AuthRoutes from "./routes/auth.js";
import ProductsRoutes from "./routes/products.js";
const app = express();


const hbs = create({
  defaultLayout: 'main',
  extname: "hbs"
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

app.use(AuthRoutes);
app.use(ProductsRoutes);

const PORT = process.env.PORT || 4100;
app.listen(PORT, () => console.log("Server is running on " + PORT));
// console.log(process.env.PORT);