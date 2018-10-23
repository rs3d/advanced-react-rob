import Layout from "../components/Layout";
import { PureComponent } from "react";

interface IProps extends React.Props<null> {
}

interface IState {
}

export default class About extends PureComponent<IProps, IState> {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <Layout>
        <h2>About</h2>
        <p>Hello Next.js</p>
      </Layout>
    );
  }
}

/* 
export default () => (
    <Layout>
        <h2>About</h2>
       <p>Hello Next.js</p>
    </Layout>
)
*/
