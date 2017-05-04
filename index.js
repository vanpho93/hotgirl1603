const express = require('express');
const HotGirl = require('./HotGirl');

const app = express();
app.listen(3000, () => console.log('Server started'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => res.render('home'));

app.get('/show/:id', (req, res) => {
    const { id } = req.params;
    const hotGirl = new HotGirl(id);
    hotGirl.getInfo()
    .then(girl => res.render('show', girl))
    .catch(() => res.send('Khong tim thay!'));
});

app.get('/like/:id', (req, res) => {
    const { id } = req.params;
    const hotGirl = new HotGirl(id);
    hotGirl.likeImage()
    .then(() => res.redirect(`/show/${id}`))
    .catch(() => res.send('Khong tim thay!'));
});

app.get('/dislike/:id', (req, res) => {
    const { id } = req.params;
    const hotGirl = new HotGirl(id);
    hotGirl.dislikeImage()
    .then(() => res.redirect(`/show/${id}`))
    .catch(() => res.send('Khong tim thay!'));
});

app.get('/likes/:id', (req, res) => {
    const { id } = req.params;
    const hotGirl = new HotGirl(id);
    hotGirl.likeImage()
    .then(like => res.send(`${like}`))
    .catch(() => res.send('Khong tim thay!'));
});
