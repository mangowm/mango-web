# MangoWC Web

This website is for **MangoWC**, a lightweight, high-performance Wayland compositor built on dwl. This site provides comprehensive guides, configuration examples, and resources for users and developers.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Bun](https://bun.sh/docs/installation) (recommended) or [Node.js](https://nodejs.org/)

## Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:atheeq-rhxn/mangowc-web.git
   cd mangowc-web
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Set up environment variables (optional):**
   Create a `.env` file in the `apps/web` directory and configure any required variables based on `.env.example`.

## Development

1. **Start the development server:**
   ```bash
   bun run dev
   ```

2. **Open your browser:**
   Navigate to [http://localhost:3001](http://localhost:3001) to view the site.

### Available Scripts

- `bun run dev` - Start the development server
- `bun run build` - Build the application for production
- `bun run check` - Run linting and formatting with Biome
- `bun run check-types` - Run TypeScript type checking

## Project Structure

```
mangowc-web/
├── apps/
│   └── web/                 # Main Next.js application
│       ├── content/docs/    # Documentation content (MDX)
│       ├── src/
│       │   ├── app/         # Next.js app router pages
│       │   ├── components/  # Reusable UI components
│       │   └── lib/         # Utility functions and configurations
│       └── public/          # Static assets
├── packages/                # Shared packages (if any)
└── turbo.json               # Monorepo configuration
```

## Links

- 🌐 **Live Site**: [https://mangowc.vercel.app](https://mangowc.vercel.app)
- 📖 **MangoWC Repository**: [https://github.com/DreamMaoMao/mangowc](https://github.com/DreamMaoMao/mangowc)
- 📚 **Documentation**: [https://mangowc.vercel.app/docs](https://mangowc.vercel.app/docs)
