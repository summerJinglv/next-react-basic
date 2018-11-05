import Link from "next/link"

const linkStyle={
	marginRight:15
}

const Header=()=>(
	<div>
		<Link href="/">
			<a style={linkStyle}>Home</a>
		</Link>
		<Link href="/about">
			<a style={linkStyle}>About</a>
		</Link>
		<style jsx>
		{
			`
				a{color:#444;font-size:20px;line-height:2;text-decoration:none;padding:0 10px;}
			`
		}
		</style>
	</div>
)

export default Header;