const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(cors());
app.use(express.json());

//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/resume', {
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
const Contact = mongoose.model('Contact', contactSchema);

//Routes
app.get('/projects', async(req,res) => {
    try{
        const projects = await Project.find();
        res.json(projects);
    } catch(err){
        res.status(500).json({message: 'Failed to fetch projects'});
    }
})

app.get('/education', async(req,res) => {
    try{
        const education = await Education.find();
        res.json(education);
    } catch(err){
        res.status(500).json({message: 'Failed to fetch education'});
    }
})

//Adding to databases
app.post('/projects', async (req, res)=> {
    try{
        const {title, description, technologies, GitHubLink, image} = req.body;
        const newProject = new Project({title, description, technologies, GitHubLink, image});
        await newProject.save();
        res.json(newProject);
    } catch(err){
        res.status(500).json({message: 'Failed to save project!'});
    }
});

app.post('/education', async (req, res)=> {
    try{
        const {institution, degree, gradYear, description} = req.body;
        const newEducation = new Education({institution, degree, gradYear, description});
        await newEducation.save();
        res.json(newEducation);
    } catch(err){
        res.status(500).json({message: 'Failed to save education!'});
    }
});

app.post('/skills', async (req, res)=> {
    try{
        const {skill, proficiency, icon} = req.body;
        const newSkill = new Skill({skill, proficiency, icon});
        await newSkill.save();
        res.json(newSkill);
    } catch(err){
        res.status(500).json({message: 'Failed to save skill!'});
    }
});

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