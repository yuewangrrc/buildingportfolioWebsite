# Step 1: Build the React portfolio application
FROM node:18-alpine AS builder

# Set working directory as specified in requirements
WORKDIR /wang_yue_final_site

# Copy package files
COPY package*.json ./

# Install dependencies (allow postinstall to run so esbuild downloads correct binary)
RUN npm install --legacy-peer-deps

# Copy all source files
COPY . .

# Ensure esbuild native binary matches JS wrapper version for alpine after sources are in place
RUN npm rebuild esbuild && node -e "console.log('esbuild version:', require('esbuild/package.json').version)"

# Build the React application
RUN npm run build

# Step 2: Serve portfolio site with Nginx
FROM nginx:alpine

# Copy built files to nginx directory
COPY --from=builder /wang_yue_final_site/dist /usr/share/nginx/html

# Configure nginx to serve on port 5575
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 5575

CMD ["nginx", "-g", "daemon off;"]
