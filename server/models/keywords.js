const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const keywordSchema = new Schema ({
    keyword: {
        type: String,
        required: true
    },

    wines:[{
        type: Schema.Types.ObjectId,
        ref: 'Wine'
    }]
})

module.exports = mongoose.model('Keyword', keywordSchema);
