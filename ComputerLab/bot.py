from flask import Flask
import requests

app = Flask(__name__)

@app.route('/run-script', methods=['GET'])
def run_script():
    BOT_TOKEN = "7623612943:AAFNAt2Tnsx7_kIs8ipw_Thj4WYkzFLrLD8"
    CHAT_ID = "1008529157"
    MESSAGE = "Your Lab item is low. Please restock"

    def send_telegram_message(token, chat_id, message):
        url = f"https://api.telegram.org/bot{token}/sendMessage"
        payload = {"chat_id": chat_id, "text": message}
        response = requests.post(url, json=payload)
        if response.status_code == 200:
            print("Message sent successfully!")
        else:
            print(f"Failed to send message. Error: {response.status_code}")
            print(response.json())

    # Call the function to send the message
    send_telegram_message(BOT_TOKEN, CHAT_ID, MESSAGE)
    
    return "Python script executed successfully!"

if __name__ == '__main__':
    app.run(port=8000)


