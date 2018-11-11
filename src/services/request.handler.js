import Config from '../config';
import RequestPromiseNative from 'request-promise-native';

const options = {
    uri: '',
    qs: {
        //access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx'
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};

export const getCountryIndicator = (country,indicator) => {
		const uri = `${Config.api.url}historical/country/${country}/indicator/${indicator}?${Config.api.client}&${Config.api.format}`;
		
		options.uri = uri;
	
		return RequestPromiseNative(options);
	};
