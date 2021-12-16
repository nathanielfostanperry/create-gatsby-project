import * as React from 'react'
import { Link } from 'gatsby'
import PageLayout from '../layouts/page';
import data from '../../../lib/data';

const HomePageComponents = ({ page, clients }) => {
	return (
		<PageLayout page={page}>
			<section className="diagonal patterned">
				<div className="container halves">
				<div>
					<h3>{page.portfolio_heading}</h3>
					<p dangerouslySetInnerHTML={{
						__html: `${page.portfolio_description_html}`,
						}} />
					<p><Link to={`${data.site.baseurl}/portfolio`}>{page.portfolio_call_to_action} &rarr;</Link></p>
				</div>
				<div>
					<ul className="image-grid">
					{clients.slice(0, 4).map((client, i) => (
						<li  key={i}>
						<Link to={`${data.site.baseurl}clients/${client.slug}`}>
							<img src={client.image_path} alt={client.name}/>
						</Link>
						</li>
					))}
					</ul>
				</div>
				</div>
			</section>
			<section className="diagonal alternate">
				<div className="container halves">
				<div>
					<ul className="image-list">
						<li><img src={`${data.site.baseurl}/images/cloudcannon-logo-blue.svg`} width="250" style={{marginBottom: 40 + 'px'}} alt="CloudCannon Logo"/></li>
						<li><img src={`${data.site.baseurl}/images/jekyll-logo-black-red-transparent.png`} width="300" alt="Jekyll Logo"/></li>
					</ul>
				</div>
				<div>
					<h3 className="text-lg">Latest software, greatest perfomance</h3>
					<p>As a new agency we get reap the benefits of the latest and greatest. We build our websites with the most up to date technology. This ensures your website is fast, efficient and reliable for many years.</p>
				</div>
				</div>
			</section>
		</PageLayout>
	)
}

export default HomePageComponents
