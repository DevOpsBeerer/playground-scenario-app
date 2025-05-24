# =============================================================================
# Alternative Dockerfile using nginx-unprivileged image
# This avoids permission issues by using a pre-configured non-root nginx
# =============================================================================

# -----------------------------------------------------------------------------
# Stage 1: Build the Angular application
# -----------------------------------------------------------------------------
FROM docker.io/node:24-alpine AS builder

# Add metadata labels
LABEL stage=builder
LABEL description="Build stage for Angular application"

# Set working directory
WORKDIR /app

# Copy package files first for better layer caching
COPY package*.json ./

# Install dependencies with clean install for reproducible builds
RUN npm ci --no-audit --no-fund && \
    npm cache clean --force

# Copy source code
COPY . .

# Build the application for production
RUN npm run build

# -----------------------------------------------------------------------------
# Stage 2: Serve with nginx-unprivileged
# -----------------------------------------------------------------------------
FROM docker.io/nginxinc/nginx-unprivileged:1.27-alpine AS runtime

# Add metadata labels
LABEL maintainer="DevopsBeerer Team"
LABEL description="DevopsBeerer Front Office - OAuth2/OIDC Angular SPA"
LABEL version="1.0.0"

# Only override server config
COPY default.conf /etc/nginx/conf.d/default.conf 

# Copy built application from builder stage
COPY --from=builder --chown=nginx:nginx /app/dist/devopsbeerer-frontoffice/browser/ /usr/share/nginx/html/

# The nginx-unprivileged image runs on port 8080 by default
EXPOSE 8080

# Health check to ensure the application is running
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:8080/ || exit 1

# No need to specify user - nginx-unprivileged handles this
# No need to specify CMD - inherited from base image