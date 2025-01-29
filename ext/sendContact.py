import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry
import random
import string

def generate_random_string(length):
    letters = string.ascii_lowercase
    return ''.join(random.choice(letters) for i in range(length))

def submit_form(url, data):
    session = requests.Session()
    retry_strategy = Retry(
        total=3,
        backoff_factor=1,
        status_forcelist=[500, 502, 503, 504]
    )
    adapter = HTTPAdapter(max_retries=retry_strategy)
    session.mount('http://', adapter)
    session.mount('https://', adapter)

    response = session.post(url, data=data)
    return response

# Example usage:
url = "https://www.careersit.co.za/?page_id=249"

# Loop for 200 submissions
for _ in range(200):
    random_name = generate_random_string(10)
    random_email = generate_random_string(10) + "@gmail.com"
    random_phone = ''.join(random.choice(string.digits) for _ in range(10))
    random_message = 'Check this: '+ generate_random_string(10)

    form_data = {
        "fname": random_name,
        "lname": random_name,
        "email": random_email,
        "phone": random_phone,
        "message": random_message
    }

    #print(form_data.values())

    response = submit_form(url, form_data)
    if response.status_code == 200:
        print("Form submitted successfully!")
    else:
        print("Form submission failed. Status code:", response.status_code)
        # Add a delay or break the loop to avoid overloading the server
        