const query = require('./db');

class HotGirl {
    constructor(id, name, image, like, dislike) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.like = like;
        this.dislike = dislike;
    }
    likeImage() {
        const sql = 'UPDATE public."HotGirl" SET "like"="like" + 1 WHERE id = $1 RETURNING "like"';
        return query(sql, [this.id])
        .then(result => result.rows[0].like);
    }
    dislikeImage() {

    }
    getInfo() {
        const sql = 'SELECT * FROM "HotGirl" WHERE id = $1';
        return query(sql, [this.id])
        .then(result => {
            const { id, name, image, like, dislike } = result.rows[0];
            return new HotGirl(id, name, image, like, dislike);
        });
    }
}

module.exports = HotGirl;
