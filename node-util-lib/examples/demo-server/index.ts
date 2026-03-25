/**
 * Demo Express server showcasing node-util-lib usage.
 * Run with: npm run demo (uses tsx)
 */
import express from 'express';
import {
  ConfigLoader,
  NotFoundError,
  ValidationError,
  Validator,
  capitalize,
  slugify,
  HTTP_STATUS,
} from '../../dist/node-util-lib.js';

// Initialize config
const config = new ConfigLoader({
  defaults: { port: 3000, host: 'localhost' },
});
config.load();

// Create Express app
const app = express();
app.use(express.json());

// Demo routes
app.get('/', (_req, res) => {
  res.json({
    message: 'node-util-lib Demo Server',
    endpoints: [
      'GET /health',
      'GET /string/:text',
      'POST /validate-email',
      'GET /error/not-found',
      'GET /error/validation',
    ],
  });
});

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Demo: String helpers
app.get('/string/:text', (req, res) => {
  const { text } = req.params;
  res.json({
    original: text,
    capitalized: capitalize(text),
    slugified: slugify(text),
  });
});

// Demo: Validation
app.post('/validate-email', (req, res) => {
  const { email } = req.body;
  const isValid = Validator.isEmail(email ?? '');
  res.json({ email, isValid });
});

// Demo: Error handling
app.get('/error/not-found', () => {
  throw new NotFoundError('This resource does not exist');
});

app.get('/error/validation', () => {
  throw new ValidationError('Invalid input', {
    email: ['Email is required', 'Must be a valid email'],
    name: ['Name is too short'],
  });
});

// Start server
const port = config.get('port') as number;
app.listen(port, () => {
  console.log(`Demo server running on http://localhost:${port}`);
});
