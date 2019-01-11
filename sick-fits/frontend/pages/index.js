//Next.js takes care of importing React for us.
import Link from 'next/link';

const Home = props => (
	<div>
		<p>Hey two!</p>
		<a href="/sell">Anchor to sell</a>
		<br />
		<Link href="/sell">
			<a>Sell</a>
		</Link>
	</div>
)

export default Home;