# Use official Python image
FROM python:3.11

# Set working directory inside container
WORKDIR /backend

# Copy all files to container
COPY . .

# Install dependencies
RUN pip install --upgrade pip && pip install -r requirements.txt

# Expose port 8000
EXPOSE 8000

# Ensure database migrations run before server starts
CMD ["python", "fitness_tracker/manage.py", "migrate"] && \
    ["python", "fitness_tracker/manage.py", "runserver", "0.0.0.0:8000"]
