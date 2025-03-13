# SpotiDash

SpotiDash is a web application that provides users with a personalized dashboard for exploring their favorite music on Spotify. Leveraging the Spotify API, SpotiDash allows users to view their top tracks, artists, and new releases, all in one place. The application features a sleek and responsive design built with Next.js and styled using Tailwind CSS, ensuring a smooth user experience across devices. With authentication handled by NextAuth.js, users can securely log in and access their music data effortlessly. Enjoy discovering and managing your music preferences with SpotiDash!

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
![<Login Page>.](https://www.dropbox.com/scl/fi/zjn2g71gr28rthlhcy7qc/spotidash1.PNG?rlkey=yquvds7s9gh6wmbfsy3d4jp4a&st=ojka3183&dl=0)

> Dashboard <br/>
![<Dashboard>.](https://www.dropbox.com/scl/fi/bg0w7x3katz0dr4w474r4/spotidash4.PNG?rlkey=7c6heh7a29nok7w2wa023essj&st=onr1chxo&dl=0)

> Responsive Design <br/>
![<Responsive Design Phone>.](https://www.dropbox.com/scl/fi/kr6jhxrelnx1ka2oz56y2/spotidash5.PNG?rlkey=5mu677lhri6w9373innjd5vmp&st=du1ht4we&dl=0)
![<Responsive Design Tablet>.](https://www.dropbox.com/scl/fi/fzlt38ghmjoa215kzce6e/spotidash6.PNG?rlkey=bghteid1obmyzotnlq8xrid75&st=s0a418uw&dl=0)

> Dark Mode <br/>
![<Dark Mode Login Page>.](https://www.dropbox.com/scl/fi/zjn2g71gr28rthlhcy7qc/spotidash1.PNG?rlkey=yquvds7s9gh6wmbfsy3d4jp4a&st=4qc8dzgm&dl=0)
![<Dark Mode Dashboard>.](https://www.dropbox.com/scl/fi/yy6004epo9lkuv024rcxw/spotidash3.PNG?rlkey=7to35vvvyznk0pdbfv5sbiz1g&st=uotygfzu&dl=0)