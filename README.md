# DevopsBeerer Front Office

A Single Page Application (SPA) demonstrating **OAuth2/OIDC Authorization Code Flow with PKCE** for public clients. This Angular application is part of the **DevopsBeerer playground** - an educational platform designed to help developers understand OAuth2 and OIDC standards through practical, hands-on examples.

## 🍺 About the Project

**DevopsBeerer** is a comprehensive playground that makes OAuth2 and OIDC concepts accessible through a fun beer management scenario. This front office application serves as the **public client** demonstration, showcasing how modern web applications securely authenticate users and access protected APIs.

### Key Concepts Demonstrated

- **Authorization Code Flow with PKCE** - The secure OAuth2 flow for public clients
- **Token Management** - How to handle ID tokens and access tokens
- **Protected API Calls** - Making authenticated requests to backend services
- **Silent Token Renewal** - Maintaining user sessions seamlessly
- **Public Client Security** - Best practices for browser-based applications

## 🏗️ Application Features

The application provides a simple beer management interface to demonstrate real-world OAuth2 scenarios:

- **Authentication Flow**: Login/logout with Keycloak OIDC provider
- **Beer Management**: Create, list, and delete beers (demonstrating different API scopes)
- **Token Inspection**: View and examine JWT tokens in a user-friendly format
- **Protected Routes**: Access control based on authentication status

## 🚀 Development Setup

### Prerequisites

- Node.js (Latest LTS version recommended)
- Angular CLI 19.2.0 or higher
- Access to a Keycloak instance (configured in `public/auth.json`)

### Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure authentication**
   Update `public/auth.json` with your Keycloak settings:

   ```json
   {
     "authority": "http://localhost:8080/realms/your-realm",
     "redirectUrl": "http://localhost:4200/callback",
     "clientId": "your-client-id"
   }
   ```

3. **Configure API endpoints**
   Update `public/config.json` with your backend API:

   ```json
   {
     "devopsbeerUrl": "http://localhost:3000",
     "version": "v1.0.0"
   }
   ```

4. **Start development server**

   ```bash
   ng serve
   ```

   Navigate to `http://localhost:4200/`

### Available Scripts

- `ng serve` - Start development server
- `ng build` - Build for production
- `ng test` - Run unit tests
- `ng generate --help` - View available generators

## 🔧 Development Notes

### Dynamic Configuration

The application loads configuration dynamically at startup, allowing for environment-specific settings without rebuilding the application.

### Authentication Integration

Uses `angular-auth-oidc-client` library for robust OIDC implementation with built-in security best practices.

### API Integration

Demonstrates proper bearer token usage with automatic token attachment to protected API calls.

## 📚 Learning Objectives

By exploring and developing with this application, you'll understand:

- How PKCE protects public clients from authorization code interception
- The difference between ID tokens and access tokens
- How to implement secure token storage in browser applications
- Best practices for handling token expiration and renewal
- Proper scope management for API access control

## 🤝 Contributing

This is an educational project that evolves based on community feedback and OAuth2/OIDC standard updates. The codebase is designed to be readable and educational rather than production-optimized.

---

*Part of the DevopsBeerer playground - Making OAuth2 and OIDC standards accessible through practical examples* 🍻
