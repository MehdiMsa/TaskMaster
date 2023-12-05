# TaskMaster Microservices Project

## Overview

TaskMaster is a microservices-based application designed for managing a to-do list. This project demonstrates the implementation of a microservices architecture, utilizing Docker for containerization and Kubernetes for orchestration. Service discovery, load balancing, and API gateway configurations are incorporated to enhance scalability and reliability.

## Project Structure

- **src/:** Contains the source code for the `taskmaster-service` microservice.
- **Dockerfile:** Defines the Docker image for the `taskmaster-service` microservice.
- **kubernetes/:** Includes Kubernetes configuration files for deployment and service exposure.
- **prometheus-config.yml:** Prometheus configuration file.
- **prometheus-deployment.yaml:** Kubernetes deployment for Prometheus.
- **prometheus-service.yaml:** Kubernetes service for exposing Prometheus.
- **grafana-deployment.yaml:** Kubernetes deployment for Grafana.
- **grafana-service.yaml:** Kubernetes service for exposing Grafana.
- **index.html, styles.css, app.js:** Frontend files for the Todo List graphical interface.

## Microservices Architecture

![Microservices Architecture Diagram](./microservices_architecture_diagram.png)

### Components:

1. **TaskMaster Service (`taskmaster-service`):** Core microservice handling task management.
2. **Prometheus:** Responsible for scraping and storing metrics from the `taskmaster-service`.
3. **Grafana:** Provides a visualization dashboard for monitoring metrics.

## Getting Started

### Prerequisites

- Docker
- Kubernetes
- kubectl
- Helm (optional, for simplifying Kubernetes configurations)

### Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/MehdiMsa/TaskMaster
    cd taskmaster
    ```

2. **Build the Docker image:**

    ```bash
    docker build -t taskmaster-service .
    ```

3. **Deploy to Kubernetes:**

    ```bash
    kubectl apply -f kubernetes/taskmaster-deployment.yaml
    kubectl apply -f kubernetes/taskmaster-ingress.yaml
    ```

4. **Set up Prometheus and Grafana:**

    ```bash
    kubectl apply -f prometheus-config.yml
    kubectl apply -f prometheus-deployment.yaml
    kubectl apply -f prometheus-service.yaml
    kubectl apply -f grafana-deployment.yaml
    kubectl apply -f grafana-service.yaml
    ```

5. **Access the application:**

    - Todo List UI: [http://localhost](http://localhost)
    - Prometheus: http://<prometheus-external-ip>
    - Grafana: http://<grafana-external-ip> (admin/admin)

## Monitoring

Prometheus and Grafana are integrated to monitor the TaskMaster microservices.

- **Prometheus:** Access at http://<prometheus-external-ip>.
- **Grafana:** Access at http://<grafana-external-ip> with default credentials (admin/admin). Import the Prometheus dashboard using ID `1860`.

## Contributing

If you'd like to contribute to this project, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

