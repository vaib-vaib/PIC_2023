import React from 'react'

import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'

export default function AboutPage() {
  const styles = {
    text:{
      fontWeight: "bold",
    },
    mitimg: {
        position: "absolute",
        left: "150px",
        top: "5px",
    },
    vaibimg: {
      position: "absolute",
      left: "400px",
      top: "5px",
  },
  dikimg: {
    position: "absolute",
    left: "150px",
    top: "250px",
  },
  sidimg: {
    position: "absolute",
    left: "400px",
    top: "250px",
   },
  }
  return (
    <Layout>
      <Article>
        <ArticleContent title="About Us">
        <h4>Meet our team!</h4>
        <br></br>
          <ul>  
              <li><p style={styles.text}>1. Mitali Deshpande <br></br>Final year IT student, interned at Target and placed at British Petroleum</p></li>  
              <br></br><li><p style={styles.text}>2. Vaibhavi Ambarkar <br></br>Final year IT student, interned and placed at BNY Mellon</p></li>
              <br></br><li><p style={styles.text}>3. Diksha Sharma<br></br>Final year IT student, interned at Volvo Cars and placed at Providence</p></li>  
              <br></br><li><p style={styles.text}>4. Siddhi Bhutada <br></br>Final year IT student, interned and placed at Atlassian</p></li>
          </ul>  
        </ArticleContent>

        <ArticleMedia>
          <div style={styles.mitimg}>
          <img src="../assets/images/mit.jpg" alt="Loading image" />
          </div>
          <div style={styles.vaibimg}>
          <img src="../assets/images/vaib.jpg" alt="Loading image" />
          </div>
          <div style={styles.dikimg}>
          <img src="../assets/images/diksha.jpg" alt="Loading image" />
          </div>
          <div style={styles.sidimg}>
          <img src="../assets/images/siddhi.jpg" alt="Loading image" />
          </div>
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
