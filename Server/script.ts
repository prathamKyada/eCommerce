import express from "express";
// import adminRoute from './Router/admin.route.ts'
const app = express();

app.use(express.json());

const port = process.env.PORT || 4000;

// app.use('/admin')

app.listen(port, () => {
  console.log(`Server is live on ${port}`);
});

