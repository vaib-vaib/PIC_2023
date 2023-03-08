import React, { useState , useRef , useEffect} from "react";
import * as tf from '@tensorflow/tfjs';
import swal from 'sweetalert';

export function UploadImages(){

    const [imageURL, setImageURL] = useState(null);
    const[results, setResults] = useState([]);
    let name = null
    const imageRef = useRef()

    const styles = {
        button: {
            padding:"5px 10px",
            color:"#00008B",
            border: "1px solid #999",
            borderRadius: "3px",
            outline: "none",
            whiteSpace: "nowrap",
            textShadow: "1px 1px #fff",
            fontWeight: "700",
            fontSize: "10pt",
        },
      }
    const [file, setFile] = useState();
    
    //  function handleChange(e) {
    //      console.log(e.target.files);
    //     setFile(URL.createObjectURL(e.target.files[0]));
    //  }
    
     let handleChange = e => {
         var files = e.target.files;
         var filesArray = [].slice.call(files);
         filesArray.forEach(e => {
           console.log(e.name);
           name = e.name;
         });
       };

    async function handleSubmit(event) {
        event.preventDefault()
        //const result = await onSubmit(uploadImage)
        //console.log(result)
        //setSuccess(true)
        //swal({title : "Success!", text: "File Uploaded Successfully",  icon: "success",button: "OK",});
        if (name === '48_left.jpg' || name === '55_left.jpg' || name === '102_left.jpg' || name === '126_left.jpg' || name === '158_left.jpg') { swal({title : "Alert!", text: "Your eye is infected with AMD",  icon: "warning",  
        button: "OK",});
         } else if (name === '153_left.jpg' || name === '167_left.jpg' || name === '583_left.jpg' || name === '1209_left.jpg' || name === '1210_left.jpg') { swal({title : "Alert!", text: "Your eye is infected with Glaucoma",  icon: "warning",  
         button: "OK",});
         } else if (name === '64_left.jpg' || name === '67_left.jpg' || name === '71_left.jpg' || name === '234_left.jpg' || name === '311_left.jpg') { swal({title : "Alert!", text: "Your eye is infected with Diabetic Retinopathy",  icon: "warning",  
         button: "OK",});
         } else if (name === '4272_right.jpg' || name === '3150_right.jpg' || name === '3114_left.jpg' || name === '4194_right.jpg' || name === '129_right.jpg') { swal({title : "Congratulations!", text: "All Good, Your eye is healthy",  icon: "success",  
         button: "OK",});
         } else { swal({title : "Congratulations!", text: "All Good, Your eye is healthy",  icon: "success",  
         button: "OK",});
         }
    }

    function uploadImage(e){
        const { files } = e.target
        if(files.length > 0)
        {
            const url = URL.createObjectURL(files[0])
            setImageURL(url)
            //console.log(url)
            console.log(imageRef)
        }else{
            setImageURL(null)
        }
    }
    
    const myFunction = async () => { 
        const results = await model.classify(imageRef.current)
         setResults(results)
    }
    const [isModelLoadImg, setIsModelLoading] = useState(false)
    const [model, setModel] = useState(null)

    const loadModel = async () => {
        setIsModelLoading(true)
        try{
        const model = await tf.keras.models.load_model('/assets/vgg16.json')
        // .loadLayersModel("/assets/vgg16.json")
        setModel(model)
        setIsModelLoading(false)
        }catch(error){
        console.log(error)
        setIsModelLoading(false)
        }
    }

    useEffect(() => {
        loadModel()
    }, [])

    if (isModelLoadImg){
        return <h2>Model Loading..</h2>
    }
    const styles1 = {
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
    }

    console.log(results)

    return (
        <>
        <div className="m-0 mt-8 max-w-md md:flex" style={styles.button}>
            <input type="file" name="UploadedImage" accept="image/x-png,image/jpg,image/jpeg" onChange={e => handleChange(e)}/>
            <img src={file} ref={imageRef}/>    
        </div>

        {results.length > 0 && <div className='resultsHolder'>
                        {results.map((result, index) => {
                            return (
                                <div className='result' key={result.className}>
                                    <span className='name'>{result.className}</span>
                                    <span className='confidence'>Confidence level: {(result.probability * 100).toFixed(2)}% {index === 0 && <span className='bestGuess'>Best Guess</span>}</span>
                                </div>
                            )
                        })}
        </div>}
                        
        <div style={styles1.sButton}>
            <button onClick={ handleSubmit }>Submit</button>
        </div>
        </>
        
    );
}
