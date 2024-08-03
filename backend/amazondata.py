import requests
import json

# set up the request parameters
params = {
'api_key': 'BBD66BCC8395450DACBAD9ABB7B0034A',
  'amazon_domain': 'amazon.ca',
  'asin': 'B073JYC4XM',
  'type': 'product'
}

# make the http GET request to Rainforest API
api_result = requests.get('https://api.rainforestapi.com/request', params)

# print the JSON response from Rainforest API
print(json.dumps(api_result.json()))