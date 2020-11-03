from flask import Flask, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy
import datetime

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///store/store.db"
db = SQLAlchemy(app)


class Store(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)

    def __str__(self):
        return f'{self.id} {self.content}'


class Blog(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text, nullable=False)
    content = db.Column(db.Text, nullable=False)
    createdAt = db.Column(db.Text, nullable=False)
    modifiedAt = db.Column(db.Text, nullable=False)


def store_serializer(store):
    return {
        'id': store.id,
        'content': store.content
    }


def blog_serializer(post):
    return {
        'id': post.id,
        'title': post.title,
        'content': post.content,
        "createdAt": post.createdAt,
        "modifiedAt": post.modifiedAt
    }


@app.route('/api/item/all', methods=['GET'])
def get_items():
    store = Store.query.all()
    return jsonify([*map(store_serializer, store)])


@app.route('/api/item/add', methods=['POST'])
def create_item():
    request_data = json.loads(request.data)
    store = Store(content=request_data['content'])

    db.session.add(store)
    db.session.commit()

    return {'201': 'Item created'}


@app.route('/api/item/details/<int:id>')
def inspect_item(id):
    store_item = Store.query.filter_by(id=id)
    return jsonify([*map(store_serializer, store_item)])


@app.route('/api/item/delete/<int:id>', methods=['POST'])
def delete_item(id):
    request_data = json.loads(request.data)
    Store.query.filter_by(id=request_data['id']).delete()
    db.session.commit()

    return {'204': 'Deleted succesfully'}


@app.route('/api/post/add', methods=['POST'])
def create_post():
    request_data = json.loads(request.data)
    print(request_data)
    title = request_data['title']
    content = request_data['content']
    new_time = datetime.datetime.now()
    createdAt = f'{new_time.strftime("%X")} - {new_time.strftime("%x")}'
    modifiedAt = f'{new_time.strftime("%X")} - {new_time.strftime("%x")}'
    print(f'Title: {title}')
    print(f'content: {content}')
    post = Blog(title=title, content=content,
                createdAt=createdAt, modifiedAt=modifiedAt)
    db.session.add(post)
    db.session.commit()
    return {'201': 'Post created'}


@app.route('/api/post/all', methods=['GET'])
def get_posts():
    blog = Blog.query.all()
    return jsonify([*map(blog_serializer, blog)])


if __name__ == "__main__":
    app.run(debug=True)
