# Base Image
FROM node:18-alpine

# Install system dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package.json package-lock.json ./

# Install app dependencies
RUN npm ci

# Copy the rest of your application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
