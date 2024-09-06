from flask import Flask, jsonify

app = Flask(__name__)


@app.route('/check', methods=['GET'])
def check():
    return 'OK', 200

@app.route('/', methods=['GET'])
def get_json():
  
    data = {
        "Instancia": "Instancia #2 - API #2",
        "Curso": "Seminario de sistemas 1",
        "Seccion": "Seccion A",
        "Periodo": "2do Semestre 2024",
        "Estudiante": "Lesther Kevin Federico López Miculax - 202110897"
    }
    return jsonify(data), 200

if __name__ == '__main__':
    app.run(port=5000)
