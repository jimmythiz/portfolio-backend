const jwt = require('jsonwebtoken');

const USERNAME = process.env.ADMIN_USERNAME || 'jimmythiz';
const PASSWORD = process.env.ADMIN_PASSWORD || 'admin';
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

const login = (req, res) => {
  const { username, password } = req.body;

  if (username === USERNAME && password === PASSWORD) {
    // Create token payload (can be minimal)
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });
  }

  res.status(401).json({ message: 'Invalid username or password' });
};

// Middleware to protect routes
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']; // expect "Bearer token"
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Token missing' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });

    req.user = user; // you can access req.user later
    next();
  });
};

module.exports = { login, authenticateToken };
