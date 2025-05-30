# Step 1: We build the angular app using the production config
FROM --platform=linux/arm64 node:23-alpine AS build
# Set the working directory
WORKDIR /app
# Copy the package.json and package-lock.json files
COPY package*.json ./
# Run a clean install of the dependencies
RUN npm ci
# Copy all files
COPY . .
#Build the application
RUN npm run build --configuration=production

# Step 2: We use the nginx image to serve the application
FROM --platform=linux/arm64 nginx:latest
# Copy the build output to replace the default nginx contents
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# Copy the build output to replace the default nginx contents
COPY --from=build /app/dist/portfolio-gs/browser /usr/share/nginx/html
# Déclare la variable d'environnement
# ENV BACKEND_URL=https://backend.local.savaryguillaume.fr:3000
# Expose port 80
EXPOSE 80
# Lancement par défaut de Nginx
CMD ["nginx", "-g", "daemon off;"]

# Build: docker buildx build --platform=linux/arm64 -t registry.local.savaryguillaume.fr/portfolio-gs:[VERSION-plateforme] -t registry.local.savaryguillaume.fr/portfolio-gs:latest .
# Run: docker run -d -p 8080:80 portfolio-gs
# Tag registry: docker image tag portfolio-gs registry.local.savaryguillaume.fr/portfolio-gs:[version-plateform]
# Registry: docker push registry.local.savaryguillaume.fr/portfolio-gs:[version-plateform]