<p align="center">
  <a href="#-combined-contribution-activity">
    <img src="./assets/tuantv-banner.png" alt="TUAN TV Logo" width="100%" />
  </a>
</p>

<h3 align="center">Hi, I'm Tran Tuan 👋</h3>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&duration=3000&pause=1000&color=36BCF7&center=true&vCenter=true&width=550&lines=Software+engineering+graduate+FPT+University;Practicing+front-end+Programming" alt="Typing SVG" />
</p>

---

# 🚀 OrbiTasks - Task & Project Management Web Application

A modern, intuitive web application designed to help student teams **manage projects, assign tasks, and track progress** effectively, seamlessly, and completely free of charge. Developed as part of the **FER202 (Front-End Web Development)** course at FPT University Hanoi.

---

## 🌟 Key Features

* **Authentication & Security:** User registration, credential login, Google OAuth 2.0 login, forgot/reset password, and Google reCAPTCHA protection against automated bots.
* **User Profile Management:** Update personal profile details, change profile avatar, and update password.
* **Project Management:** Create, edit, star/favorite, search, filter, archive, restore, and delete projects.
* **Team Collaboration:** Invite/remove project members, configure role permissions, and leave projects.
* **Task Management:** Create and assign tasks, interactive Kanban drag-and-drop status board, progress tracking, request to edit tasks for assignees, task comments, and file attachments.
* **Label Management:** Create custom color-coded labels (Public / Private) to organize tasks.
* **Interactive Maps & Navigation (OpenStreetMap):** Display company/office location with real-time address search and interactive route navigation powered by Leaflet & OSM.
* **Dashboard & Analytics:** Visual charts and statistics tracking task completion and project timelines (Recharts).
* **Advanced & AI Capabilities:** Voice-activated search for tasks and projects using Web Speech AI, intelligent task suggestions, real-time notifications, and bilingual support (**English - Vietnamese i18n**).

---

## 🧰 Tech Stack

| Category | Technologies & Tools |
| :--- | :--- |
| 🎨 **Frontend** | ![React](https://img.shields.io/badge/REACT-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/VITE-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![JavaScript](https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![Tailwind CSS](https://img.shields.io/badge/TAILWIND_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Ant Design](https://img.shields.io/badge/ANT_DESIGN-0170FE?style=for-the-badge&logo=antdesign&logoColor=white) ![Bootstrap](https://img.shields.io/badge/BOOTSTRAP-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white) |
| ⚙️ **Backend** | ![Node.js](https://img.shields.io/badge/NODE.JS-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/EXPRESS-000000?style=for-the-badge&logo=express&logoColor=white) ![Java](https://img.shields.io/badge/JAVA-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white) ![Spring Boot](https://img.shields.io/badge/SPRING_BOOT-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white) ![JSON Server](https://img.shields.io/badge/JSON_SERVER-000000?style=for-the-badge&logo=json&logoColor=white) |
| 🗄️ **Databases** | ![MySQL](https://img.shields.io/badge/MYSQL-005C84?style=for-the-badge&logo=mysql&logoColor=white) ![SQL Server](https://img.shields.io/badge/SQL_SERVER-CC292B?style=for-the-badge&logo=microsoft-sql-server&logoColor=white) ![MongoDB](https://img.shields.io/badge/MONGODB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) ![Firebase](https://img.shields.io/badge/FIREBASE-FFCA28?style=for-the-badge&logo=firebase&logoColor=black) |
| 🚀 **DevOps** | ![Linux](https://img.shields.io/badge/LINUX-FCC624?style=for-the-badge&logo=linux&logoColor=black) ![Docker](https://img.shields.io/badge/DOCKER-2496ED?style=for-the-badge&logo=docker&logoColor=white) ![Docker Compose](https://img.shields.io/badge/DOCKER_COMPOSE-2496ED?style=for-the-badge&logo=docker&logoColor=white) ![Nginx](https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=nginx&logoColor=white) ![CI/CD](https://img.shields.io/badge/CI%2FCD-2088FF?style=for-the-badge&logo=github-actions&logoColor=white) |
| 🧪 **Tools** | ![Git](https://img.shields.io/badge/GIT-F05032?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=github&logoColor=white) ![VS Code](https://img.shields.io/badge/VS_CODE-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![Ubuntu Server](https://img.shields.io/badge/UBUNTU_SERVER-E95420?style=for-the-badge&logo=ubuntu&logoColor=white) |

---

## ⚙️ Installation & Getting Started (Local Development)

### 1. Clone the repository
```bash
git clone https://github.com/TranTuan-ops/task-management-website.git
cd task-management-website
```

### 2. Install dependencies
```bash
npm install --legacy-peer-deps
```

### 3. Configure environment variables (.env)
Create a `.env` file in the root directory (or copy from `.env.example`):
```env
VITE_PORT=5173
VITE_API_URL=http://localhost:9999
```

### 4. Start the Mock Backend (JSON Server)
Open a terminal window and run:
```bash
npx json-server --watch database.json --port 9999
```
*The mock API server will run at:* `http://localhost:9999`

### 5. Start the Frontend Development Server
Open a second terminal window and run:
```bash
npm run dev
```
*Access the web application at:* [http://localhost:5173](http://localhost:5173)

---

## 📂 Project Directory Structure

```text
task-management-website/
├── assets/                 # Banner and dashboard graphics for documentation
├── public/                 # Static assets (icons, brand logos, web images)
├── src/
│   ├── assets/             # Media assets, animations, icons
│   ├── banner/             # Promotional and UI banner components
│   ├── constants/          # Application constants (API endpoints, roles, route paths)
│   ├── context/            # Global React Context API providers (Auth, State)
│   ├── layouts/            # Layout wrappers (PreLoginLayout, PostLoginLayout)
│   ├── locales/            # Internationalization dictionaries (en, vi)
│   ├── mapOSM/             # Interactive Leaflet OpenStreetMap components
│   ├── pages/              # View pages (Admin, Guest, User)
│   ├── routes/             # Client-side routing configuration
│   ├── security/           # Access verification & security guards
│   └── services/           # API integration services and business logic
├── database.json           # Mock JSON database for JSON Server
├── .env.example            # Environment variables template
└── package.json            # Project dependencies and executable scripts
```

---

## 👥 Team Members & Contributions

* **Phuong Anh**
* **Tran Tuan:**
  * **Auth & Onboarding:** Designed and coded UI for Signup, integrated Google OAuth 2.0 login.
  * **Task Management:** Coded UI for Update Task, implemented Request to Edit Task feature for assigned members.
  * **Dashboards & Analytics:** Coded UI User Overview Dashboard for Admin, developed Task Overview and Task Analytics Dashboard inside project owner workspace.
  * **Advanced & AI Features:** Integrated bilingual internationalization (i18n English - Vietnamese), developed AI-powered Voice Search for tasks and projects.
* **Hoang**
* **Manh**
* **Phu**
* **Bui Duong**

---

## 📊 Combined Contribution Activity

<div align="center" id="contribution-dashboard">
  <a href="https://github.com/TranTuan-ops">
    <img src="https://raw.githubusercontent.com/TranTuan-ops/TranTuan-ops/main/dashboard.svg?utm_source=chatgpt.com" alt="Contribution Dashboard" width="100%" />
  </a>
  <p><i>Daily activity aggregated from GitHub and GitLab &bull; Automatically updated by GitHub Actions</i></p>
</div>


<h3 align="center">🐍 My GitHub Contributions</h3>

<p align="center">
  <img src="https://raw.githubusercontent.com/TranTuan-ops/TranTuan-ops/main/contributions.svg" alt="GitHub Contribution Snake" />
</p>
