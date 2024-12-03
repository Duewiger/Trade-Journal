# Trade Journal

A modern web application designed for traders to log, analyze, and optimize their trading performance. This project combines a robust Django backend with a responsive React frontend and leverages AWS for scalable infrastructure.

---

## Features

- **Trade Logging:** Log detailed trade data including dates, instruments, and outcomes.
- **Advanced Analytics:** Gain insights into performance through dynamic charts and KPIs.
- **User Management:** Secure authentication and authorization using JWT.
- **Two-Factor Authentication (2FA):** Planned integration with Twilio for enhanced security.
- **Cloud Integration:** S3 for media and static files, and RDS for database hosting.
- **Responsive Design:** Frontend optimized for desktop and mobile platforms.

---

## Tech Stack

### Backend
- **Django:** Main backend framework.
- **Django REST Framework:** API development.
- **PostgreSQL:** Database for reliable data storage.
- **Simple JWT:** Token-based authentication.
- **Django Allauth:** User authentication and social account integration.
- **Django Axes:** Brute-force attack prevention.
- **Django Recaptcha:** Enhanced security for forms.
- **Django Twilio:** Planned Twilio 2FA integration.
- **AWS Services:**
  - S3 for static and media file storage.
  - RDS for database management.
  - Cloud infrastructure for scalable hosting.

### Frontend
- **React:** Library for building interactive UIs.
- **TypeScript:** Type-safe development.
- **CSS Modules or Styled-Components:** For modular and maintainable styling.

---

## Prerequisites

- **Backend:**
  - Python 3.9+
  - PostgreSQL 12+
  - AWS account with permissions for S3, RDS, and IAM.

- **Frontend:**
  - Node.js 16+
  - npm or yarn for package management.

---

## Getting Started

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/trade-journal.git
   cd trade-journal/backend
   ```

2. Set up a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Configure `.env`:
   Copy `.env.example` to `.env` and populate it with your environment variables:
   ```plaintext
   DJANGO_SECRET_KEY=your-secret-key
   DATABASE_NAME=trade_journal
   DATABASE_USER=your-database-user
   DATABASE_PASSWORD=your-database-password
   ```

5. Run migrations:
   ```bash
   python manage.py migrate
   ```

6. Start the server:
   ```bash
   python manage.py runserver
   ```

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd trade-journal/frontend
   ```

2. Install dependencies:
   ```bash
   npm install  # Or yarn install
   ```

3. Start the development server:
   ```bash
   npm start  # Or yarn start
   ```

---

## Planned Features

- **Integration with Twilio:** Implementing 2FA for enhanced user security.
- **AWS CloudFront:** For faster content delivery.
- **ElasticSearch:** For advanced search functionality.
- **Comprehensive Logging:** Using AWS CloudWatch and Django logging for production-grade monitoring.

---

## Deployment

### Backend
- **AWS Elastic Beanstalk:** For scalable application hosting.
- **AWS RDS:** For PostgreSQL database management.
- **AWS S3:** For static and media file storage.
- **HTTPS:** Ensure secure connections with SSL/TLS.

### Frontend
- Deploy the React application using AWS Amplify, Vercel, or Netlify.

---

## Contribution

Contributions are welcome! Please submit issues or pull requests to improve the project. For major changes, open an issue first to discuss what you'd like to change.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact

For questions or support, please contact:
- **Name:** Kilian Düwiger
- **Email:** [kd@duewiger.com](mailto:kd@duewiger.com)
- **Website:** [duewiger-projects.com](https://duewiger-projects.com)