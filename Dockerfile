FROM node:lts-alpine as build

# Set workdir directory in the continer
WORKDIR /app

# Copy package.json and package-lock.json to the container
#COPY package*.json ./
COPY package*.json /app/

# Install project dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build angular App for production
RUN node_modules/.bin/ng build 

# Use smaller, production ready image as the final image
FROM nginx:alpine

#Copy the production-ready Angular app to the Nginx webserver's root directory
COPY --from=build /app/dist/vehicles-fe /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]