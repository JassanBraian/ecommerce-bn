const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    description: {
        type: String,
        minlength: 10,
        maxlength: 500,
        required: [true, 'Please input a description']
    },
    isprivate: {
        type: Boolean,
        default: false,
    },
    productId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    },
    userSend: {
        name: {
            type: String,
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        }
    }
}, { timestamps: true });

const Comment = model('Comment', commentSchema);

module.exports = Comment;
