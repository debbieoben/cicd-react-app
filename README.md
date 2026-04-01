# Advanced CI/CD Pipeline - React Application

Complete automated deployment pipeline using AWS CodePipeline, CodeBuild, S3, and CloudFront with staging/production environments.

## 🚀 Features

- **Automated Builds**: Triggers on every Git push
- **Unit Testing**: Automated tests in pipeline
- **Security Scanning**: npm audit for vulnerabilities
- **Staging Environment**: Test before production
- **Manual Approval**: Control production deployments
- **Production Environment**: Automated deployment
- **CloudFront CDN**: Global content delivery
- **Notifications**: SNS email alerts
- **Monitoring**: CloudWatch dashboards

## 📦 Pipeline Flow
```
GitHub → CodePipeline → CodeBuild (test + build) 
  → Staging (S3 + CloudFront) 
  → Manual Approval 
  → Production (S3 + CloudFront)
```

## 🔧 Technology Stack

- React 18
- AWS CodePipeline
- AWS CodeBuild
- Amazon S3
- CloudFront CDN
- CloudWatch
- SNS

## 📊 Project Information

- **Author**: Debbie Oben
- **Project**: AWS DevOps Portfolio - Project 4
- **Repository**: github.com/debbieoben/cicd-react-app
- **Documentation**: Complete technical PDF included

## 🏗️ Local Development
```bash
npm install
npm start    # Run locally
npm test     # Run tests
npm run build # Create production build
```

## 🎯 Architecture

- **Source**: GitHub repository
- **Build**: CodeBuild with Node.js runtime
- **Test**: Jest unit tests
- **Deploy**: S3 static hosting
- **CDN**: CloudFront distribution
- **Monitoring**: CloudWatch metrics

## 📄 License

MIT License - Educational/Portfolio Project