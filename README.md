# 🚀 OrbiTasks - Task & Project Management Website

A website designed to help students and teams **manage projects, assign tasks, and track progress** in a visual, organized, and completely free way.

This project was developed as part of the **FER202 (Front-End Web Development)** course at **FPT University, Hanoi Campus**.

---

## 🌟 Key Features

- **Authentication & Security:** User registration, standard login, Google Sign-In (OAuth 2.0), password recovery and reset, and Google reCAPTCHA integration to prevent spam and bot attacks.
- **User Profile Management:** Update personal information, change profile pictures (avatars), and change passwords.
- **Project Management:** Create, edit, mark projects as favorites, search, filter, archive, restore, and delete projects.
- **Team Member Management:** Invite or remove project members, assign roles and permissions, and leave projects.
- **Task Management:** Create and assign tasks, drag and drop tasks across Kanban columns, update task progress, request permission to edit tasks (Request to Edit Task), comment on tasks, and attach documents.
- **Label Management:** Create color-coded labels to categorize tasks (Public / Private).
- **Maps & Location Services (OpenStreetMap):** Display office locations on an interactive map, with location search and interactive directions powered by Leaflet and OpenStreetMap.
- **Dashboard & Analytics:** Visualize task statistics and project progress through interactive charts using Recharts.
- **Admin Features:** Manage all system users and projects, and export data reports to Excel files.
- **Advanced Features:** AI-powered voice search for tasks and projects (Voice Search), smart task suggestions, real-time notification system, and bilingual language support (**English - Vietnamese (i18n)**).

---

## 🛠️ Technology Stack

- **Core & Build Tool:** React 19, Vite
- **UI & Styling:** Ant Design (v5), Tailwind CSS (v4), Framer Motion, Lottie React
- **Mock Backend:** JSON Server
- **Maps & Geolocation:** Leaflet, React-Leaflet, OpenStreetMap, Leaflet Routing Machine
- **Security & Authentication:** Google OAuth, Firebase, Google reCAPTCHA
- **Data Management & Utilities:** Axios, Recharts, ExcelJS, FileSaver, i18next, React Speech Recognition

---

## ⚙️ Installation & Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/trantuandev/task-management-website-personal.git
cd task-management-website-personal
```

### 2. Install Dependencies

```bash
npm install --legacy-peer-deps
```

### 3. Configure Environment Variables (.env)

Create a `.env` file in the root directory (or copy the configuration from `.env.example`):

```env
VITE_PORT=5173
VITE_API_URL=http://localhost:9999
```

### 4. Start the Mock Backend (JSON Server)

Open a terminal window and run:

```bash
npx json-server --watch database.json --port 9999
```

The mock API will be available at:

`http://localhost:9999`

### 5. Start the Frontend

Open a second terminal window and run:

```bash
npm run dev
```

Access the website at:

[http://localhost:5173](http://localhost:5173)

---

## 📂 Project Structure

```text
task-management-website/
├── public/                 # Static assets (icons, logos, images)
├── src/
│   ├── assets/             # Images, videos, and Lottie animations
│   ├── banner/             # Banner UI components
│   ├── constants/          # System constants (API URLs, Roles, Routes)
│   ├── context/            # Context API management (Auth, State)
│   ├── layouts/            # Application layouts (PreLoginLayout, PostLoginLayout)
│   ├── locales/            # i18n configuration (English, Vietnamese)
│   ├── mapOSM/             # Interactive Leaflet OpenStreetMap components
│   ├── pages/              # Application pages (Admin, Guest, User)
│   ├── routes/             # React Router configuration
│   ├── security/           # Authentication and security logic
│   └── services/           # API calls and data processing services
├── database.json           # Sample database for JSON Server
├── .env.example            # Environment variable template
└── package.json            # Dependencies and project scripts
```

---

## 👥 Team Members & Contributions

- **Phuong Anh**
- **Tran Tuan:**
  - **Authentication & Onboarding:** Developed the Signup UI and integrated Google Sign-In using Google OAuth.
  - **Task Management:** Developed the Update Task UI and the Request to Edit Task UI, allowing assigned members to request permission to edit tasks.
  - **Dashboard & Reporting:** Developed the Admin User Overview Dashboard and the Task Overview & Task Dashboard within project owners' workspaces.
  - **Advanced Features & AI:** Integrated multilingual support (i18n) for switching between English and Vietnamese, and implemented AI-powered voice search for tasks and projects (Voice Search AI).
- **Hoang**
- **Manh**
- **Phu**
- **Bui Duong**
