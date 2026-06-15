pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    def status = bat(
                        script: 'npx playwright test',
                        returnStatus: true
                    )

                    if (status != 0) {
                        echo "Tests failed, but continuing to generate reports..."
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Generating Reports...'

            // HTML Report
            publishHTML(target: [
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report',
                alwaysLinkToLastBuild: true,
                keepAll: true,
                allowMissing: true,
                linkRelative: false
            ])

            // Allure Report
            allure(
                includeProperties: false,
                jdk: '',
                results: [[path: 'allure-results']]
            )
        }
    }
}
<<<<<<< HEAD
//ye use kr lo pipeline je liye
=======
//ye use kr lo pipeline je liye
>>>>>>> 295e2d8814751d70bfe215c446770dc199f9465a
