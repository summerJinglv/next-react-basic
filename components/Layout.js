import Header from "./Header"

const layoutStyle={
	margin:20,
	padding:20,
	border:'1px solid #ccc'
}

const Layout=(props)=>(
	<div style={layoutStyle}>
		<Header/>
		{props.children}
		<style jsx global>
			{
				`
				a:hover{
					text-decoration:underline
				}
				`
			}
		</style>
	</div>
)

export default Layout;