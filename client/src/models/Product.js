import {Schema, model} from 'mongoose'

const productSchema=new Schema({
    name: String,
    category: String,
    price: Number,
    imgUrl: String
}, {
    //Timestamps es para cuando se guarde cada dato valla con su ultima fecha de actualizcion y de creacion.
    timestamps: true, 
    versionKey: false
})

export default model('Product', productSchema);