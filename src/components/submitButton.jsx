import React from 'react'
import { useState, useEffect } from 'react'
import * as tf from '@tensorflow/tfjs';
import { UploadImages } from './upload-form';



export function SubmitButton() {
    const [isModelLoadImg, setIsModelLoading] = useState(false)
    const [model, setModel] = useState(null)

  const loadModel = async () => {
    setIsModelLoading(true)
    try{
      const model = await tf.loadLayersModel("localstorage://localhost:5173/tfjs/vgg16.json")
      setModel(model)
      setIsModelLoading(false)
    }catch(error){
      console.log(error)
      setIsModelLoading(false)
    }
  }
  const basename = import.meta.env.BASE_URL

  useEffect(() => {
    loadModel()
  }, [])

  if (isModelLoadImg){
    
  }
    const styles = {
        sButton: {
            display: "flex",
            position: "absolute",
            top:"150%",
            backgroundColor:"blue",
            color: "white",
            fontSize: "18px",
            justifyContent: "center",
            fontAlign: "center",
            width: "100px",
            height: "35px",
            marginLeft: "170px"
        },
      };
    return (
        <div style={styles.sButton}> <button onClick={ handleSubmit }>Submit</button></div>
    )
}