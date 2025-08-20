const exp=require('express');
const app=exp();
const cors=require('cors');

const{ buyProduct }= require('./controllers/buyProduct');

app.use(cors());
app.use(exp.json());

app.get('/', (req, res) => {
  res.send('Welcome to Ecommerce BE');
});

app.post((err,req,res,next)=>{
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: err.message
  });
});

const PORT=5000;
app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
});