const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const app = express();

const authCookieName = 'token';

let users = [];
let stories = [];
// let storiesMap = new Map()

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/auth/create', async (req, res) => {
    if (await findUser('email', req.body.email)) {
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const user = await createUser(req.body.email, req.body.password);
  
      setAuthCookie(res, user.token);
      res.send({ email: user.email });
    }
  });

apiRouter.post('/auth/login', async (req, res) => {
    const user = await findUser('email', req.body.email);
    if (user) {
      if (await bcrypt.compare(req.body.password, user.password)) {
        user.token = uuid.v4();
        setAuthCookie(res, user.token);
        res.send({ email: user.email });
        return;
      }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});

apiRouter.delete('/auth/logout', async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
      delete user.token;
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
});

const verifyAuth = async (req, res, next) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
      next();
    } else {
      res.status(401).send({ msg: 'Unauthorized' });
    }
  };

apiRouter.get('/stories', verifyAuth, async (req, res) => {
    // for (let i = 0; i < stories.length; i++) {
    //   let story = JSON.stringify(stories[i])
    //   localStorage.setItem(story.Title, story)
    // }
    res.send(stories);
});

apiRouter.post('/story/create', verifyAuth, async (req, res) => {
    story = addStory(req.body);
    res.send(story);
}
);

app.get('/api/story/:id', verifyAuth, async (req, res) => {
    const story = stories.find((s) => req.params.id);
    if (story) {
      res.send(story);
    } else {
      res.status(404).send({ msg: 'Story not found' });
    }
  });

app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
  });

app.use((_req, res) => {
res.sendFile('index.html', { root: 'public' });
});
  

function addStory(body) {
    // let title = body.Title
    const story = JSON.stringify(body)
    console.log("Story:" + story);
    stories.push(story);
    // storiesMap.set(title, body)
    console.log(stories);
    // console.log("Map: " + storiesMap)
    return stories;
}

async function createUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        email: email,
        password: passwordHash,
        token: uuid.v4(),
    };
    users.push(user);

    return user;
}

async function findUser(field, value) {
    if (!value) return null;

    return users.find((u) => u[field] === value);
}

function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});