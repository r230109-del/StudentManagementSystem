pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps { checkout scm }
        }
        stage('Verify Files') {
            steps { bat 'dir' }
        }
        stage('Docker Build') {
            steps { bat 'docker build -t student-portal .' }
        }
        stage('Deploy') {
            steps {
                bat 'docker rm -f my-portal-container2'
                bat 'docker run -d -p 8081:80 --name my-portal-container2 student-portal'
            }
        }
    }
}
