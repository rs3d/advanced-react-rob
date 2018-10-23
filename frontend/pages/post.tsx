import {withRouter} from 'next/router'
import Layout from '../components/Layout.jsx'

interface IProps {
  router?: {
    query: {
      title: string
    }
  }
}

const Content = withRouter<IProps, React.StatelessComponent>( 
  (props) => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
))

const Post = props => (
    <Layout>
       <Content />
    </Layout>
)

export default Post