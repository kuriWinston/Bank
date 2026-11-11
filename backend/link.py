import os
from pathlib import Path

import mysql.connector
from dotenv import load_dotenv
from flask import jsonify, request
from flask import Flask, jsonify, request

load_dotenv(
    Path(__file__).resolve().parent / ".env",
    override=True,)

def connect_mysql():
    return mysql.connector.connect(
        host=os.environ["MYSQL_HOST"],
        port=int(os.getenv("MYSQL_PORT", "3306")),
        database=os.environ["MYSQL_DATABASE"],
        user=os.environ["MYSQL_USER"],
        password=os.environ["MYSQL_PASSWORD"],
        connection_timeout=5,
    )

app = Flask(__name__)

@app.post("/api/name")
def record_name():
    data = request.get_json(silent=True)

    if not isinstance(data, dict):
        return jsonify(error="Неверный формат запроса"), 400

    if data.get("consent") is not True:
        return jsonify(error="Нужно согласие на сохранение имени"), 400

    name = data.get("name")

    if not isinstance(name, str) or not 1 <= len(name.strip()) <= 80:
        return jsonify(error="Введите имя длиной от 1 до 20 символов"), 400

    last_name = data.get("last_name", "")

    if not isinstance(last_name, str):
        return jsonify(error = "Неверный формать фамилии"), 400

    last_name = last_name.strip()

    if len(last_name) > 20:
        return jsonify(error = "Фамилия: максимум 20 символов"), 400

    email = data.get("email", "")

    if not isinstance(email, str):
        return jsonify(error = "Неверный формат"), 400

    email = email.strip()

    if len(email) > 80:
        return jsonify(erroe = "Почта: максимум 80 символов"), 400

    connection = None
    cursor = None

    try:
        connection = connect_mysql()
        cursor = connection.cursor()

        cursor.execute(
            "INSERT INTO participants (name, last_name, email) VALUES (%s, %s, %s)",
            (name.strip(), last_name or None, email or None),
        )

        connection.commit()
        return jsonify(ok=True)

    except mysql.connector.Error:
        app.logger.exception("Ошибка записи в MySQL")
        return jsonify(error="Не удалось сохранить данные"), 500

    finally:
        if cursor is not None:
            cursor.close()
        if connection is not None:
            connection.close()

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8000, debug=False)