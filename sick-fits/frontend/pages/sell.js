//Next.js takes care of importing React for us.
import Link from 'next/link';

const Sell = props => (
	<div>
		<p>Sell!</p>
		<Link href="/">
			<a>Home</a>
		</Link>
	</div>
)

export default Sell;