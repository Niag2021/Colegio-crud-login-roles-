import express from 'express';
import morgan from 'morgan'
import pkg from '../../package.json'

import { createRoles } from './libs/initialSetup.js';

import productsRouter from './routes/products.routes.js'
import authRoutes from './routes/auth.routes.js'

const app = express()
createRoles();

app.set('pkg', pkg)

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    //res.json('Welcome.'):
    res.json({
        name: app.get(`pkg`).name,
        author: app.get(`pkg`).author,
        description: app.get(`pkg`).description,
        version: app.get(`pkg`).version
    })
})

app.use('/api/products',productsRouter);
app.use('/api/auth',authRoutes);

export default app