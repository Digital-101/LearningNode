import requests
import random
from faker import Faker

# Initialize Faker to generate random data
fake = Faker()

# URL to which the form data will be sent
url = 'https://www.careersit.co.za/?p=1'

# Function to generate random form data
def generate_random_data():
    return {
        'name': fake.name(),
        'email': fake.email(),
        'message': fake.text(max_nb_chars=200),
    }

# Send random form data 50 times
for _ in range(50):
    # Generate random form data
    form_data = generate_random_data()

    # Send POST request to the URL with the form data
    response = requests.post(url, data=form_data)

    # Print the status of the response
    if response.status_code == 200:
        print('Form submitted successfully!')
    else:
        print(f'Failed to submit form. Status code: {response.status_code}')
