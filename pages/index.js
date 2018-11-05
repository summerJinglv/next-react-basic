import Link from 'next/link'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
	<Layout>
		<h1>TV show</h1>
		<ul>
			{
				props.shows.map(({show})=>{
					return(
						<li key={show.id}>
							<Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
								<a>{show.name}</a>
							</Link>
						</li>
					)
				})
			}
		</ul>
		<style jsx>
		{
			`
				*{marign:0;padding:0}
				h1{font-size:30px;line-height:2;background:#aaa;color:#fff;text-transform:uppercase;text-align:center}
				ul{margin-top:20px;}
				li{list-style:none;margin:5px 0;}
				a{text-decoration:none;color:#333}

			`
		}
		</style>
	</Layout>
)

Index.getInitialProps =async function(){
	const res=await fetch('https://api.tvmaze.com/search/shows?q=marvel')
	const data=await res.json();
	return {
		shows:data
	}
}

export default Index