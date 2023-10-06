const Instalation = () => {
  return (
    <>
      <h3>Dans le terminal</h3>
        <ol>
          <li><pre><code>npm init -y</code></pre></li>
          <li>
            <h4>Installer React</h4>
            <ul>
              <li><pre><code>npm install react react-dom react-scripts</code></pre></li>
              <li><pre><code>npx create-react-app --template typescript nomProjet</code></pre></li>
              <li><pre><code>npx create-next-app@latest</code></pre></li>
              <li><pre><code>npm init gatsby -y</code></pre></li>
            </ul>
          </li>
          <li>
            <h4>Autres package utiles</h4>
            <ul>
              <li><pre><code>npm i sass</code></pre></li>
              <li><pre><code>npm install --save prop-types</code></pre></li>
              <li><pre><code>npm install --save styled-components</code></pre></li>
              <li><pre><code>npm install babel-plugin-macros</code></pre></li>
              <li>
                <h5>Redux</h5> 
                <table>
                  <tr>
                    <th>package</th>
                    <th>commande npm</th>
                  </tr>
                  <tr>
                    <td>redux</td>
                    <td><pre><code>npm install redux</code></pre></td>
                  </tr>
                  <tr>
                    <td>react-redux</td>
                    <td><pre><code>npm install react-redux</code></pre></td>
                  </tr>
                  <tr>
                    <td>redux toolkit</td>
                    <td><pre><code>npm i -s redux react-redux @reduxjs/toolkit @redux-devtools/extension</code></pre></td>
                  </tr>
                  <tr>
                    <td>redux thunk</td>
                    <td><pre><code>npm install redux-thunk</code></pre></td>
                  </tr>
                  <tr>
                    <td>redux devtools</td>
                    <td><pre><code>npm install --save @redux-devtools/extension</code></pre></td>
                  </tr>
                </table>
              </li>
              
              <li><pre><code>npm i -g json-server</code></pre></li>
              <li><pre><code>npm i react-router-dom</code></pre></li>
              <li><pre><code>npm i axios</code></pre></li>
            </ul>
          </li>
          <li><pre><code>npm start</code></pre></li>
        </ol>

      <h3>Dans package.json</h3>
      <ul>
        <li><pre><code>"start": "react-scripts start",</code></pre></li>
        <li><pre><code>"sass": "sass --watch sass/styles.scss:assets/styles/styles.css",</code></pre></li>
      </ul>
    </>
  )
}

export default Instalation