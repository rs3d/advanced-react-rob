import Meta from './Meta';

const style = {
  background: 'gray',
  padding: '2em',
}

const Page:React.StatelessComponent = (props) => (
  <div style={style}>
    <Meta />
    {props.children}
  </div>
)

export default Page;