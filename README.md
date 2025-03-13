# SpotiDash

SpotiDash is a web application that provides users with a personalized dashboard for exploring their favorite music on Spotify. Leveraging the Spotify API, SpotiDash allows users to view their top tracks, artists, and new releases, all in one place. The application features a sleek and responsive design built with Next.js and styled using Tailwind CSS, ensuring a smooth user experience across devices. With authentication handled by NextAuth.js, users can securely log in and access their music data effortlessly. Enjoy discovering and managing your music preferences with SpotiDash!

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)

## Technologies Used

- **Next.js**: A React framework for building server-side rendered applications.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Framer Motion**: A library for animations in React applications.
- **Spotify API**: Used to fetch music data for the application.
- **NextAuth.js**: Authentication for Next.js applications.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repo-name
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```
4. Add your environment variables
   ```
   SPOTIFY_CLIENT_ID
   SPOTIFY_CLIENT_SECRET
   NEXTAUTH_URL=http://localhost:3000/api/auth
   AUTH_SECRET # Added by `npx auth`. Read more: https://cli.authjs.devs
   ```

## Usage

To run the development server, use the following command:

```bash
npm run dev
```
or
```bash
yarn dev
```

Open your browser and navigate to `http://localhost:3000` to view the application.