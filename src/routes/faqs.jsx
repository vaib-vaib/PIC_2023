import React from 'react'

import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'

export default function FaqsPage() {
  const styles = {
    faqimg: {
        position: "absolute",
        left: "150px",
        top: "50px",
        borderRadius : "8px",
    },
    text:{
      fontWeight: "bold",
    },
  };
  return (
    <Layout>
      <Article>
        <ArticleContent title="FAQ's">
          <p style={styles.text}>1. How to use EyeNetram?<br></br></p>
              <p>You can login to EyeNetram using your User ID and Password. You have to upload the
              fundus eye image. If your eye is diseased, it will predict the disease type namely AMD, DR,
              Glaucoma. You can save the results for later reference.</p><br></br>
              <p style={styles.text}>2. What kind of image is expected to upload?</p>
              <p>You are expected to upload image in .jpg format</p><br></br>
              <p style={styles.text}>3. How many Diseases can EyeNetram can predict?</p>
              <p>Currently EyeNetram is designed to predict 3 diseases namely Diabetic Retinopathy,
              Glaucoma and Age-Related Macular Degeneration.</p><br></br>
        </ArticleContent>

        <ArticleMedia>
          <img src="../assets/images/faq.png"  style={styles.faqimg} alt="Image loading" />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
