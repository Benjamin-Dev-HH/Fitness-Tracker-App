FROM python:3.11

# Set the working directory
WORKDIR /fitness_tracker

# Copy requirements and install dependencies
COPY /fitness_tracker/requirements.txt /fitness_tracker/
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire backend directory
COPY . /fitness_tracker

# Expose the Django development server port
EXPOSE 8000

# Set the default command to run the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
