import React from "react"
import "./Amazon.css";

export default class Panal extends React.Component {
    
                                                                                                                                  
      render() {
        // Array of products with name, price, and image
        const products = [
            { name: "CPU Processor Chip", price: "₹3000", image: "https://5.imimg.com/data5/KT/IA/MY-40080732/intel-cpu-processor-500x500.png" },
            { name: "CPU Cooling Fan ", price: "₹3,500", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQTUAShZFmxv4QoBmJf3ReuWHGQEMoxW8-EXmKaXZEgsodTSxw5laResKO1VNK51Pzx6jx9MHUuSbj4OveApIAXNn1XBSEI15Vh0s_qDWR-QVB1MaiUZ3fG&usqp=CAE" },
            { name: "MotherBoard", price: "₹11,400", image: "https://4.imimg.com/data4/YX/RP/MY-2297750/cpu-motherboard-500x500.jpg" },
            { name: "Graphic Card", price: "₹25,000", image: "https://serverbazar.in/wp-content/uploads/2022/04/nvidia-t1000-graphic-cards.jpg" },
            { name: "Memory", price: "₹4,559", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqqCUh3FDgflP6WF4WguAUx8HzkdtfcFhk-r9X8go44Q9KQ0F7w6_Nj2HXUYIGIgp588M&usqp=CAU" },
            { name: "SSD", price: "₹7,089", image: "https://m.media-amazon.com/images/I/5169n4UNj5L.jpg" },
            { name: "Power Supply", price: "₹5,375", image: "https://m.media-amazon.com/images/I/718NtyDebGL.jpg" },
            { name: "Cabinet", price: "₹11,500", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh11P_N2s3ondRKVoGgT0E8CE15NB8sQf9GA&s" },
            { name: "Battary ", price: "₹3,599", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR98oue7QVVd3NOskguhctCujI_QxEraIurfZhh_hqmZ6pePs6gXgpMQX46lARVSHnZlX3lCcYRLr_8MKv9UScaartlVEmnqB5TPUkrYlWvLpM6tnmAjtW9vA&usqp=CAE" },
            { name: "Floppy disk drive", price: "₹2,000", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQBnWKiZmj5yfZ3pi-jdmP1TSLmaD3dRUv2mMsgJZdYaB7pHPz3hJ-xR_-EF3O2mOyT4co3FCAA4FZisAyPhruy_VKBsYHsKEoszH4OTypqy9NADVZsFcZG-g&usqp=CAE" },
            { name: "Input/Output processor", price: "₹2,499", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRkPEmBL6HK8dD8_8DpqPgyy9jXmoKBKqz_4FkHq-rgD5NHNp1XqW0bW2IYLAgMHh2BiHiasn_E75gTD72kj_fQh3FKHMv_qP8Wt4hVQul9yzRMrRgntzfJ&usqp=CAE" },
            { name: "Keyboard", price: "₹2,500", image: " https://www.ezpzsolutions.in/wp-content/uploads/2021/02/RZ03-03390100-R3M1-1-300x300.jpg" },
            { name: "Mouse", price: "₹4,639", image: "https://www.ezpzsolutions.in/wp-content/uploads/2020/08/hx_mc002b_1-300x300.jpg" },
            { name: "Ports", price: "₹1,149", image: "https://m.media-amazon.com/images/I/61Q+pBh+4sL._AC._SR360,460.jpg" },
            { name: "HeadPhone", price: "₹4,500", image: "https://www.ezpzsolutions.in/wp-content/uploads/2021/11/Razer-Kraken-for-Console-1-300x300.jpg" },
        ];
        return (
          <div className="main-container">
            <h1 className="heading">CPU Parts</h1>
            <div className="product-container">
              {products.map((product, index) => (
                <div className="product-box" key={index}>
                  <img src={product.image} alt={product.name} className="product-image" />
                  <h3>{product.name}</h3>
                  <p className="product-price">{product.price}</p>
                  <button onClick={this.props.addToCart}>Add to Cart</button> 
                </div>
              ))}
            </div>
          </div>
        );
      }
    }