import Config from '../config';
import RequestPromiseNative from 'request-promise-native';

const options = {
    uri: `${Config.api.url}historical/country/united%20states/indicator/gdp?${Config.api.client}&${Config.api.format}`,
    qs: {
        //access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx'
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};

export const getItems = () => {
		RequestPromiseNative(options)
				.then(function (repos) {
					console.log(repos);
				})
				.catch(function (err) {
					// API call failed...
				});
	};
