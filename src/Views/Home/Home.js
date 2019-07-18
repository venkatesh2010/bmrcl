import React, { Component, Fragment } from 'react';
import Head from '../../Components/Head';
import { ContentPusher, Container, Readable } from '../../Components/Layout';
import styles from './Home.css';
const dataEn = require('./data-home-en.md');
const dataDe = require('./data-home-de.md');
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import { t } from '../../Components/Languages';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);

class Home extends Component {
	componentDidMount() {
		const cdx = document.getElementsByTagName('pre');
		if (cdx.length) {
			let i;
			for (i = 0; i < cdx.length; i++) {
				hljs.highlightBlock(cdx[i]);
			}
		}
	}

	render() {
		const { lang } = this.props.match.params;

		return (
				<div className={styles.container} >Home Page</div>
			
			// <Fragment>
			// 	<Head />
			// 	<ContentPusher>
			// 		<Container>
			// 			<Readable>
			// 				{lang === 'en' && (
			// 					<div
			// 						className={styles.content}
			// 						dangerouslySetInnerHTML={{ __html: dataEn.__content }}
			// 					/>
			// 				)}
			// 				{lang === 'de' && (
			// 					<div
			// 						className={styles.content}
			// 						dangerouslySetInnerHTML={{ __html: dataDe.__content }}
			// 					/>
			// 				)}
			// 			</Readable>
			// 		</Container>
			// 	</ContentPusher>
			// </Fragment>
		);
	}
}

export default Home;
