import './index.html';
import 'babel-polyfill';
import dva from 'dva';
import createLoading from 'dva-loading';
import {browserHistory} from 'dva/router';
import {message} from 'antd';

// 1. Initialize (dva)
const app = dva(
    {
        ...createLoading(
            {
                effects: true
            }
        ),
        history: browserHistory,
        onError(error) {
            message.error(error.message);
        }
    }
);

// 2. Model
app.model(require('./models/app'));

// 3. root Router
app.router(require('./router'));

// 4. Start
app.start('#root');
