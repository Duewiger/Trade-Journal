# Trade Journal - Simple Solution Prototype

This project is a **React.js** application for managing and analyzing stock trades. It allows users to log their trades, view open positions, analyze profit/loss, and save notes. The application is containerized with **Docker** and can be deployed using **AWS ECS**.

## Features
- **Add Trades**: Record stock trades with details like symbol, quantity, price, and notes.
- **View Trade History**: Filter trades by stock symbol.
- **Analyze Trades**: Calculate profit/loss and other key metrics.
- **Save Notes**: Add personal notes for trades.
- **Open Positions**: View current stock holdings and investments.
- **Responsive UI**: Modern, clean, and mobile-friendly interface.

---

## Installation and Setup

Follow these steps to set up the application locally or in a Docker container.

### Prerequisites
1. **Node.js**: Install [Node.js](https://nodejs.org/) (LTS recommended).
2. **Docker**: Install [Docker](https://www.docker.com/).
3. **Git**: Install [Git](https://git-scm.com/).

---

### Local Development

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/trade-journal.git
   cd trade-journal
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm run dev
   ```

4. **Access the Application**:
   Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

### Dockerized Setup

1. **Build the Docker Image**:
   ```bash
   docker build -t trade-journal .
   ```

2. **Run the Docker Container**:
   ```bash
   docker run -d -p 3000:3000 trade-journal
   ```

3. **Access the Application**:
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

### Docker Compose (Recommended)

1. **Run the Application**:
   Use the provided `docker-compose.yml` file to build and run the container.
   ```bash
   docker-compose up --build
   ```

2. **Access the Application**:
   ```
   http://localhost:3000
   ```

---

## Deployment to AWS ECS

### Steps to Deploy
1. **Build and Push Docker Image to ECR**:
   - Authenticate Docker with AWS:
     ```bash
     aws ecr get-login-password --region <your-region> | docker login --username AWS --password-stdin <your-account-id>.dkr.ecr.<your-region>.amazonaws.com
     ```
   - Tag the Docker image:
     ```bash
     docker tag trade-journal:latest <your-ecr-repo-uri>:latest
     ```
   - Push the image:
     ```bash
     docker push <your-ecr-repo-uri>:latest
     ```

2. **Setup ECS Service**:
   - Create an ECS cluster and task definition using the pushed image.
   - Use an **Application Load Balancer (ALB)** to point to the ECS service.

3. **Domain Setup**:
   - Configure your **subdomain** (e.g., `trade.duewiger-projects.com`) in Route 53.
   - Add an A-record to point to the ALB.

4. **Access the Application**:
   ```
   http://trade.duewiger-projects.com
   ```

---

## File Structure

```
trade-journal/
├── src/
│   ├── components/        # Reusable components like TradeForm, DepotChart, etc.
│   ├── pages/             # Application pages (Dashboard, Login, etc.)
│   ├── App.tsx            # Main application file
│   ├── index.tsx          # Entry point
├── public/                # Static assets
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose configuration
├── package.json           # Node.js dependencies and scripts
├── README.md              # Documentation
```

---

## Collaborator Guide

### Steps for Collaborators

1. **Fork and Clone**:
   ```bash
   git clone https://github.com/your-username/trade-journal.git
   cd trade-journal
   ```

2. **Create a New Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit Changes**:
   ```bash
   git add .
   git commit -m "Add your changes"
   ```

4. **Push Changes**:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**:
   Open a PR on GitHub for review and merge.

---

## License

This project is licensed under the [MIT License](LICENSE).
``` 

Feel free to update repository links and AWS details where necessary.