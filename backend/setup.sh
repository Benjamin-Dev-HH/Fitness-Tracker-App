python3 -m venv venv
source venv/bin/activate

#Abhängigkeiten installieren
pip install django djangorestframework django-oauth-toolkit mysqlclient django-environ google-auth google-auth-oauthlib google-auth-httplib2 requests

# Django Projekt erstellen
django-admin startproject backend

# Django App erstellen
django-admin startapp fitness

# Umgebungsvariablen für OAuth2 einrichten 
echo "GOOGLE_CLIENT_ID=YOUR_CLIENT_ID='your-client-id.apps.googleusercontent.com'" >> .env
echo "GOOGLE_CLIENT_SECRET='your-client-secret'" >> .env

# Migrationen durchführen
python manage.py makemigrations
python manage.py migrate

# Superuser erstellen
python manage.py createsuperuser

# Server starten
python manage.py runserver