import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const PORT = 5500;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
