import requests

# Replace with your bot token and chat ID
BOT_TOKEN = "7623612943:AAFNAt2Tnsx7_kIs8ipw_Thj4WYkzFLrLD8"
CHAT_ID = "1008529157"
MESSAGE = "This is a test"

def send_telegram_message(token, chat_id, message):
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    payload = {"chat_id": chat_id, "text": message}
    response = requests.post(url, json=payload)
    if response.status_code == 200:
        print("Message sent successfully!")
    else:
        print(f"Failed to send message. Error: {response.status_code}")
        print(response.json())

if __name__ == "__main__":
    send_telegram_message(BOT_TOKEN, CHAT_ID, MESSAGE)
