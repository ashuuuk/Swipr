# Swipr 🚀
### Connect. Discover. Collaborate.

Swipr is a modern, dark-themed social networking web application designed to help people discover connections, build meaningful profiles, and connect with individuals who share similar interests.

The application focuses on creating a smooth onboarding experience, secure authentication, and a clean, interactive user interface. It is being developed with React and Firebase, with plans to introduce personalized discovery, interest-based connections, and real-time interactions.

---

## 📌 Project Overview

Swipr aims to make discovering like-minded people easier through a simple and engaging experience.

Users can create an account using their email address or Google account, complete their profiles, and eventually explore people based on shared interests.

The project emphasizes:

- A modern and responsive user interface.
- Smooth page transitions and animations.
- Secure authentication using Firebase.
- User-controlled profile customization.
- A scalable component-based architecture.
- Future interest-based discovery and matching.

## ✨ Features

### 1. Authentication System

Swipr uses Firebase Authentication to provide secure account access.

**Implemented:**
- Email and password registration.
- Google Sign-In integration.
- Firebase Authentication integration.
- Email verification flow.
- Login and signup interfaces.
- Password visibility toggles.
- Basic form validation.

### 2. Animated Splash Screen

- Custom animated Swipr logo.
- Smooth entrance animations.
- Letter-by-letter text animation.
- Animated transitions between screens.

### 3. Authentication Landing Page

- Minimalist landing page.
- Custom Swipr branding.
- Google authentication option.
- Login and account creation navigation.
- Dark-themed interface.

### 4. User Registration

Users can create an account using:
- Full name.
- Email address.
- Password.
- Password confirmation.

The registration flow uses Firebase Authentication and sends an email verification link.

### 5. Email Verification

- Firebase email verification.
- Resend verification email option.
- Verification status checking.
- Navigation after successful verification.

### 6. Google Authentication

- Google account selection through Firebase.
- Authentication without manually creating a password.
- Firebase-managed user authentication.

### 7. Complete Profile

The profile completion screen allows users to personalize their identity on Swipr.

**Current UI features:**
- Full name.
- Username.
- Bio.
- College / Company.
- Optional profile picture upload.
- Image preview before continuing.
- Bio character counter.
- Basic required-field validation.

Users are free to upload their own profile picture. Google profile pictures are not automatically used.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| Vite | Development server and build tool |
| JavaScript | Application logic |
| Firebase Authentication | User authentication |
| Cloud Firestore | Planned user profile database |
| Framer Motion | Animations and transitions |
| React Router DOM | Client-side navigation |
| React Icons | Interface icons |
| CSS | Styling and responsive layouts |
| Git & GitHub | Version control |

---

## 🏗️ Project Architecture

Swipr follows a component-based React architecture to keep the application modular, reusable, and maintainable.

### Current Project Structure

```text
swipr/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── SocialButton.jsx
│   │   └── Card.jsx
│   │
│   ├── screens/
│   │   ├── Splash.jsx
│   │   ├── Auth.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── VerifyEmail.jsx
│   │   ├── CompleteProfile.jsx
│   │   └── Home.jsx
│   │
│   ├── services/
│   │   └── authService.js
│   │
│   ├── firebase/
│   │   └── config.js
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── styles/
│   │   ├── variables.css
│   │   └── globals.css
│   │
│   └── App.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

*Note: This represents the current intended organization. Adjust filenames and folders to match the actual repository.*

---

## 🔐 Authentication Workflow

The authentication process is built around Firebase Authentication.

### Email Registration

```text
User opens Swipr
       |
       v
Create Account
       |
       v
Enter registration details
       |
       v
Firebase creates account
       |
       v
Verification email sent
       |
       v
Verify Email
       |
       v
Complete Profile
```

### Google Sign-In

```text
User opens Swipr
       |
       v
Continue with Google
       |
       v
Google Account Selection
       |
       v
Firebase Authentication
       |
       v
Complete Profile / Home
```

*Profile-existence checks and returning-user routing are planned improvements.*

---

## 🎨 Design Philosophy

Swipr follows a minimal, modern dark-themed design language.

### Color Palette

| Element | Color |
|---|---|
| Primary Background | `#09090B` |
| Secondary Background | `#16161B` |
| Primary Accent | `#00E7C1` |
| Secondary Accent | `#00C9A7` |
| Primary Text | `#FFFFFF` |
| Secondary Text | `#8A8A93` |
| Border | `#2A2A30` |

### UI Principles

- Minimalist layouts.
- Consistent spacing and typography.
- Rounded input fields and buttons.
- Subtle gradients and glow effects.
- Smooth animations.
- Responsive design.
- Reusable UI components.

---

## ⚙️ Installation and Setup

Follow these steps to run Swipr locally.

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git
- Visual Studio Code (recommended)

### 1. Clone the Repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the Project

```bash
cd swipr
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Firebase

Create a Firebase project through the Firebase Console:

https://console.firebase.google.com/

Register a Web App and enable:

- Firebase Authentication.
- Email/Password authentication.
- Google authentication.

Create or update:

```text
src/firebase/config.js
```

Example configuration:

```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
```

Create a `.env` file in the project root:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

Make sure `.env` is included in `.gitignore`.

**Important:** Firebase client configuration values are not substitutes for security rules. Protect your database and storage with appropriate Firebase Security Rules.

### 5. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

### 6. Build for Production

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

## 📂 Firebase Services

### Firebase Authentication

Currently used for:
- Email and password authentication.
- Google authentication.
- Email verification.

### Cloud Firestore

Planned for:
- User profile storage.
- Username uniqueness checks.
- User interests.
- Profile information.
- Connection and matching data.

### Firebase Storage

Planned for:
- Profile picture uploads.
- User-uploaded media.
- Profile image storage.

---

## 🗺️ Development Roadmap

Swipr is actively under development.

| Feature | Status |
|---|---|
| Project setup with React and Vite | Completed |
| Animated splash screen | Completed |
| Authentication landing page | Completed |
| Login interface | Completed |
| Signup interface | Completed |
| Firebase Authentication | Implemented |
| Google Sign-In | Implemented |
| Email verification | Implemented |
| Complete Profile interface | Implemented |
| Firestore profile persistence | Planned |
| Username availability validation | Planned |
| Profile picture cloud upload | Planned |
| Interests selection | Planned |
| User discovery system | Planned |
| Swipe-based interactions | Planned |
| Matching system | Planned |
| Real-time messaging | Planned |
| Notifications | Planned |
| Production deployment | Planned |

---

## 🔮 Future Scope

The long-term vision for Swipr goes beyond authentication and profile creation.

Potential upcoming features include:

- **Interest-Based Discovery:** Discover people with similar interests and backgrounds.
- **Swipe-Based Matching:** An interactive discovery experience.
- **Personalized Recommendations:** Suggest connections based on user preferences.
- **Real-Time Messaging:** Enable communication between matched users.
- **User Profiles:** Showcase personal information, interests, and profile details.
- **Notifications:** Keep users informed about new connections and interactions.
- **Privacy Controls:** Give users control over their visibility and profile information.

---

## 🔒 Security Considerations

Security is an important part of the development process.

Planned and recommended practices include:

- Firebase Authentication for identity management.
- Firestore Security Rules for user data access.
- Storage Security Rules for uploaded images.
- Username validation and uniqueness enforcement.
- Input validation on the client and server/data layer.
- Keeping private credentials and service account keys out of source control.

---

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome.

If you would like to contribute:

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes.
4. Commit your changes.

```bash
git commit -m "Add: your feature description"
```

5. Push your branch.

```bash
git push origin feature/your-feature-name
```

6. Open a Pull Request.

---

## 👨‍💻 Developer

**Swipr** is an independent project built with the goal of exploring modern frontend development, authentication systems, UI/UX design, and scalable application architecture.

---

## 📜 License

This project is currently under development. A license can be added before public distribution.

---

<p align="center">
  Built with ❤️ using React, Vite, and Firebase.
  <br />
  <b>Swipr — Connect. Discover. Collaborate.</b>
</p>
