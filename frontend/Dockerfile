# Basis-Image für Node.js
FROM node:20-alpine AS builder

# Setze das Arbeitsverzeichnis
WORKDIR /app

# Kopiere package.json und package-lock.json, um Abhängigkeiten zu installieren
COPY package.json package-lock.json ./

# Installiere Abhängigkeiten
RUN npm install

# Kopiere den gesamten Code ins Container-Verzeichnis
COPY . .

# Exponiere Port 3000 (für Entwicklungsmodus)
EXPOSE 3000

# Baue die Anwendung für die Produktion
RUN npm run build

# Stage 2: Nginx für die Bereitstellung
FROM nginx:alpine

# Entferne das Standard-Nginx-HTML-Verzeichnis und ersetze es mit dem Build-Output
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponiere Port 80
EXPOSE 80

# Starte den Nginx-Server
CMD ["nginx", "-g", "daemon off;"]