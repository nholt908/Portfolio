require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;
const uri = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

//Connect to MongoDB
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log('MongoDB Connected'))
.catch((err)=> console.error('MongoDB error', err));

//MongoDB Schemas
const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    technologies: String,
    GitHubLink: String,
    image: String,
});
const Project = mongoose.model('Project', projectSchema);

const educationSchema = new mongoose.Schema({
    institution: String,
    degree: String,
    gradYear: Number,
    description: String,
});
const Education = mongoose.model('Education', educationSchema);

const skillSchema = new mongoose.Schema({
    skill: String,
    proficiency: String,
    icon: String,
});
const Skill = mongoose.model('Skill', skillSchema);

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
}, {timestamps: true});
const Contact = mongoose.model('Contact', contactSchema, 'contact_messages');

//Routes
app.get('/', async(req,res) => {
    res.send("Home site loaded successfully!");
    console.log("Home site loaded successfully!");
})

app.get('/projects', async(req,res) => {
    try{
        const projects = await Project.find();
        res.json(projects);
        console.log("Projects site loaded successfully!");
    } catch(err){
        res.status(500).json({message: 'Failed to fetch projects'});
    }
})

app.get('/education', async(req,res) => {
    try{
        const education = await Education.find();
        res.json(education);
        console.log("Education site loaded successfully!");
    } catch(err){
        res.status(500).json({message: 'Failed to fetch education'});
    }
})

app.get('/skills', async(req,res) => {
    try{
        const skill = await Skill.find();
        res.json(skill);
        console.log("Skills site loaded successfully!");
    } catch(err){
        res.status(500).json({message: 'Failed to fetch skills'});
    }
})

app.get('/contact', async(req,res) => {
    try{
        const contact = await Contact.find();
        res.json(contact);
        console.log("Contact site loaded successfully!");
    } catch(err){
        res.status(500).json({message: 'Failed to fetch contacts'});
    }
})

//Adding to the database

app.post('/contact', async (req, res)=> {
    try{
        const {name, email, message} = req.body;
        const newContact = new Contact({name, email, message});
        await newContact.save();
        res.json(newContact);
    } catch(err){
        res.status(500).json({message: 'Failed to save contact info!'});
    }
});

//Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});