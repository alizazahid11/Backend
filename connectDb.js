const mongoose=require('mongoose');
const connectToDatabase = async function () {
    try {
        await mongoose.connect('mongodb+srv://aliza1:aliza1@cluster0.gm5wuz6.mongodb.net/');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);}
    }
    module.exports=connectToDatabase;