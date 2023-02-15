import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Layout from '../Component/layout';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './App/store';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		import('../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js');
	}, []);
	return (
		<>
			<Provider store={store}>
				<Layout>

					<Component {...pageProps} />
				</Layout>
			</Provider>
		</>
	);
}

export default MyApp;
