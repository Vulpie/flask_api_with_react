from flask import Flask, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///store/store.db"
db = SQLAlchemy(app)


class Store(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)

    def __str__(self):
        return f'{self.id} {self.content}'


def store_serializer(store):
    return {
        'id': store.id,
        'content': store.content
    }


@app.route('/api', methods=['GET'])
def index():
    store = Store.query.all()
    return jsonify([*map(store_serializer, store)])


@app.route('/api/create', methods=['POST'])
def create():
    request_data = json.loads(request.data)
    store = Store(content=request_data['content'])

    db.session.add(store)
    db.session.commit()

    return {'201': 'Item created'}


@app.route('/api/<int:id>')
def show(id):
    store_item = Store.query.filter_by(id=id)
    return jsonify([*map(store_serializer, store_item)])


@app.route('/api/<int:id>', methods=['POST'])
def delete(id):
    request_data = json.loads(request.data)
    Store.query.filter_by(id=request_data['id']).delete()
    db.session.commit()

    return {'204': 'Deleted succesfully'}


if __name__ == "__main__":
    app.run(debug=True)
