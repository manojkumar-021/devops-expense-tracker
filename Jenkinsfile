pipeline {  
    agent any  
    stages {  
        stage('Checkout') {  
            steps {  
                checkout scm  
            }  
        }  
        stage('Build') {  
            steps {  
                script {  
                    // Build commands  
                    sh 'make build'  
                }  
            }  
        }  
        stage('Docker') {  
            steps {  
                script {  
                    // Docker commands  
                    sh 'docker build -t expense-tracker:latest .'  
                }  
            }  
        }  
        stage('Kubernetes Deployment') {  
            steps {  
                script {  
                    // Kubernetes deployment commands  
                    sh 'kubectl apply -f k8s/deployment.yaml'  
                }  
            }  
        }  
    }  
}