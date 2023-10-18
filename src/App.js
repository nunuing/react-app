import './App.css';
function Header(props) {
  return (
    <header>
      <h1><a href='/'>{props.title}</a></h1>
    </header>
  );
}
function Nav(props) {
  const lis = []
  for(let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/' + t.id}>{t.title}</a></li>)   //자동으로 생성하는 경우 Unique한 key값을 부여해야함
  }
  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
function App() {
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'js', body: 'js is ...' }
  ]
  return (
    <div>
      <Header title="WEB"></Header>
      <Nav topics={topics}></Nav>
      <Article title="welocome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;
