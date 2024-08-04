import openai
from openai import OpenAI
import os

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

client = OpenAI()

completion = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{
        "role":"user", "content":"hey gpt how are you"
    }]
)

print(completion.choices[0].message.content)
