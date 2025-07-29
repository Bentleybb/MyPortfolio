import config from './config/config.js' 
import app from './server/express.js'
import mongoose from 'mongoose' 
import contactRoutes from './server/routes/contact.routes.js';
import authRoutes from './server/routes/auth.routes.js';
import userRoutes from './server/routes/user.routes.js';
import cors from 'cors';
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, {
//useNewUrlParser: true,
//useCreateIndex: true, 
//useUnifiedTopology: true
 } )
 .then(() => {
     console.log("Connected to the database!");
     })
    
mongoose.connection.on('error', () => {
throw new Error(`unable to connect to database: ${config.mongoUri}`) 
})
app.get("/", (req, res) => {
res.json({ message: "Welcome to My Portfolio application." });
});
app.use('/', contactRoutes);
app.use('/', authRoutes);    
app.use('/', userRoutes); 


app.use(cors({
  origin: 'http://localhost:5173', // allow frontend origin
  credentials: true               // if using cookies
}));
app.listen(config.port, (err) => { 
if (err) {
console.log(err) 
}
console.info('Server started on port %s.', config.port) 
})


