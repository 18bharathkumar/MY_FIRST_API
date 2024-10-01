const express = require('express')
const connectDb = require('./db')
const {ObjectId} = require('mongodb')

const app = express()

app.use(express.json())

app.get('/collge', async (req,res)=>{
    try{
       const db = await connectDb()
       const user = await db.collection('detailes').find().toArray();
       res.status(200).json(user)
       

    }
    catch(err){
        res.status(500).json({mssg:"internal server error"})
    }

})

app.post('/collge',async (req,res)=>{

    const insert_data = req.body;    
    try{
        const db = await connectDb()
       await db.collection('detailes').insertOne(
            insert_data
        )
        res.json({mssg:"successfully add data"})

    }
    catch(err){
        console.error(err);
        res.status(500).json({mssg:"error in adding data",err})
        throw(err);
    }
})

app.delete('/collge/:id', async (req, res) => {
    const collegeId = req.params.id;  // Get the college ID from the route parameters
  
    try {
      const db = await connectDb();
      const result = await db.collection('detailes').deleteOne({ _id: new ObjectId(collegeId) });
  
      if (result.deletedCount === 1) {
        res.status(200).json({ message: "Successfully deleted data" });
      } else {
        res.status(404).json({ message: "No record found to delete" });
      }
    } catch (err) {
      console.error('Error occurred while deleting data:', err);
      res.status(500).json({ message: "Error in deleting data", error: err.message || "Unknown error" });
    }
  });

  app.patch('/collge/:id', async (req, res) => {
    const collegeId = req.params.id;  // Get the college ID from the route parameters
    const updateData = req.body;  // The data to update should come in the request body
  
    try {
      const db = await connectDb();
      const result = await db.collection('detailes').updateOne(
        { _id: new ObjectId(collegeId) },  // Find the document by its `_id`
        { $set: updateData }  // Use `$set` to update only the fields specified
      );
  
      if (result.matchedCount === 1) {
        res.status(200).json({ message: "Successfully updated data" });
      } else {
        res.status(404).json({ message: "No record found to update" });
      }
    } catch (err) {
      console.error('Error occurred while updating data:', err);
      res.status(500).json({ message: "Error in updating data", error: err.message || "Unknown error" });
    }
  });

app.listen(5000,()=>{
    console.log("running on port 5000");
})

