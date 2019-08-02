import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel, Image } from 'react-bootstrap';
import axios from 'axios'
class Corsal extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            arrayOfImgs:[]
        }
    }
    
    componentDidMount(){
        this.getImage('fffff730-09fe-4f3c-9564-d711d1b6d0a7')
        // const bc = new BroadcastChannel('regretfully');
        // bc.onmessage = function (ev) { console.log(id) }
    }
    getImage(id){
        axios.get(`http://localhost:3022/pg/${id}`)
        .then((Response)=>{return Response})
        .then((Response)=> this.CreatImgs(Response.data))
        .catch((error)=>console.log(error))
    }
    CreatImgs(imgUrl){
        let imgArray =[]
        for(let i =0;i<5;i++){
            imgArray.push(
            <Carousel.Item>
                <Image className='d-block w-100' src={'http://lorempixel.com/'+(641+i)+'/'+(481 -i)+'/'+imgUrl.slice(30)} fluid />
            </Carousel.Item>)
                    imgArray.push(
                        <Carousel.Item>
                            <Image className='d-block w-100' src={'http://lorempixel.com/'+(634+i)+'/'+(474 -i)+'/'+imgUrl.slice(30)} fluid />
                        </Carousel.Item>)
        }

        console.log(imgUrl)
        this.setState({arrayOfImgs: imgArray})
    }
    render(){
        return(
            <>
                <Carousel>
                    {this.state.arrayOfImgs}
                </Carousel>
            </>
            )
    }
}
ReactDOM.render(<Corsal />,document.getElementById('carousel'))