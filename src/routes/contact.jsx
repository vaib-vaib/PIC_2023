import React from 'react'

import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'

export default function ContactPage() {
  const styles = {
    contactimg: {
        position: "absolute",
        left: "200px",
        top: "30px",
        borderRadius : "8px", 
        width: "25%",
        height: "500px",
    },
    head: {
      verticalAlign: "text-top",
    },
    text:{
        fontWeight: "bold",
      },
  };
  return (
    <Layout>
      <Article>
        <ArticleContent style={styles.head} title="Contact">
          <h2>Feel free to contact the following email ids</h2><br></br>
          <ol>  
              <li> <p style={styles.text}>mitali.deshpande@cumminscollege.in</p></li><br></br>
              <li> <p style={styles.text}>vaibhavi.ambarkar@cumminscollege.in</p></li> <br></br>
              <li> <p style={styles.text}>siddhi.bhutada@cumminscollege.in</p></li><br></br>
              <li> <p style={styles.text}>diksha.sharma@cumminscollege.in</p></li><br></br>
          </ol>  
        </ArticleContent>

        <ArticleMedia>
        <div style={styles.contactimg}>
          <img src="../assets/images/contact.png" alt="Lorem Picsum" />
          </div>
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
