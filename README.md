# SpotiDash

SpotiDash is a web application that provides users with a personalized dashboard for exploring their favorite music on Spotify. Leveraging the Spotify API, SpotiDash allows users to view their top tracks, artists, and new releases, all in one place. The application features a sleek and responsive design built with Next.js and styled using Tailwind CSS, ensuring a smooth user experience across devices. With authentication handled by NextAuth.js, users can securely log in and access their music data effortlessly. Enjoy discovering and managing your music preferences with SpotiDash!

The site is deployed and can be found at https://spotidash.vercel.app/. However, the Spotify API is in development mode and only users that I add to the user management can use the deployed site. If you wish to be added to the user managment group for a preview please message me.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Screenshots](#screenshots)

## Technologies Used

- **Next.js**: A React framework for building server-side rendered applications.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Shadcn/ui**: A popular and customizable component library
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
4. Spotify API credentials

    Step 1: Go to the Spotify's developer dashboard and log in with your Spotify credentials
    Step 2: Click on CREATE AN APP button on the applications page. Enter the name and description for the application.
    Step 3: After creating the application, copy the Client ID and Client Secret and paste it into the .env.local file.
    Step 4: In the application page itself, click on Edit Settings button. Under the Redirect URIs section, add the redirect URL in the text field provided as follows:

    http://localhost:3000/api/auth/callback/spotify

5. Add your environment variables
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

## Screenshots

Screenshots to come ...

> Login Page <br/>
![<Login Page>.](https://github.com/user-attachments/assets/c2994ab0-d6d4-4c81-b6c6-ab748b0b2f8f)

> Dashboard <br/>
![<Dashboard>.](https://github.com/user-attachments/assets/6d44daf2-3e92-4296-a50c-08ee1c06b05b)

> Responsive Design <br/>
![<Responsive Design Phone>.](https://github.com/user-attachments/assets/802e9daa-fd90-4849-b24a-4301ee0a3d97)
![<Responsive Design Tablet>.](https://github.com/user-attachments/assets/414bcb0b-6822-4971-928b-25df1d3c4fcf)

> Dark Mode <br/>
![<Dark Mode Login Page>.](https://github.com/user-attachments/assets/f6c12684-d177-4831-b09b-9725367f5d8c)
![<Dark Mode Dashboard>.](https://github.com/user-attachments/assets/35976e79-6802-43c6-a1de-3517455a48f0)
