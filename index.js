import App from './server/config/express';
import config from './server/config';

const PORT = config.port || 9000;

App.listen(config.port, () => {
    console.log(`App listening on port ${PORT}!`);
});
