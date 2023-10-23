import './App.css';
import { useState } from 'react';     //훅을 사용 -> react에서 제공
function Header(props) {
  return (
    <header>
      <h1><a href='/' onClick={(event)=>{
        event.preventDefault();       //reload 방지
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header>
  );
}

function Nav(props) {
  const lis = []
  for(let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/' + t.id} onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));  //event.target : 이벤트를 유발시킨 태그
      }}>{t.title}</a>
      </li>)   //자동으로 생성하는 경우 Unique한 key값을 부여해야함
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
  const [mode, setMode] = useState('WELCOME');
  const [id, setID] = useState(null);
  
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'js', body: 'js is ...' }
  ]
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="welocome" body="Hello, WEB"></Article>;
  }
  else if (mode === 'READ') {
    let title, body = null;
    for(let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }
  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');
        setID(_id);
      }}></Nav>
      {content}
    </div>
  );
}
export default App;
