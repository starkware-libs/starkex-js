pipeline {
    agent any
    options {
       timestamps()
    }
    stages {
        stage('Define docker node.') {
            steps {
                script {
                    nodeImage = docker.image("node:lts")
                }
            }
        }
        stage('run lint') {
            steps {
                script {
                    nodeImage.inside(
                        {
                            sh label: 'install tools', script:
                            '''
                            id
                            npm_config_cache=npm-cache
                            export HOME=.
                            yarn install
                            '''

                            sh label: 'run lint', script:
                            '''
                            yarn run lint
                            yarn run typecheck
                            '''
                        }
                    )
                }
            }
        }
        stage('build') {
            steps {
                script {
                    nodeImage.inside(
                        {
                            sh label: 'build', script: 'yarn run build'
                        }
                    )
                }
            }
        }
        stage('run test') {
            steps {
                script {
                    nodeImage.inside(
                        {
                            sh label: 'run test', script: 'yarn run test'
                        }
                    )
                }
            }
        }
    }
}
