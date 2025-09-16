import { Document, Page, PDFDownloadLink, PDFViewer, Text, View } from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";

const PdfViewer = () => {
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState([]);

  async function fetchProducts() {
    const result = await fetch("https://dummyjson.com/products?limit=10&skip=0").then((res) => res.json());
    if (result && result.products.length > 0) {
      setProducts(result.products);
    }
  }
  async function handleClick(id){
    const result= await fetch(`https://dummyjson.com/products/${id}`).then(res=>res.json());
    if(result){
        setProductDetails(result)
    }
  }
  function PdfViewComponent({productDetails}){
   return <Document>
            <Page>
                <View style={{marginLeft:'10px',fontWeight:'bold'}}>
                    <Text>{productDetails?.title}</Text>
                    <Text>{productDetails?.description}</Text>
                    <Text>{productDetails?.category}</Text>
                </View>
            </Page>
   </Document>
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="pdfViewerWrapper" style={{textAlign:'center'}}>
      <h1>PDF Viewer</h1>
      <ul style={{listStyle:'none'}}>
        {products && products.length > 0
          ? products.map((item) => <li onClick={()=>handleClick(item.id)}>{item.title}</li>)
          : null}
      </ul>
      <div className="pdf-viewer">
        <PDFViewer style={{width:"90%", height:'800px'}}>
          <PdfViewComponent productDetails={productDetails}/>
        </PDFViewer>
      </div>
      <PDFDownloadLink fileName="product-details.pdf" document={<PdfViewComponent productDetails={productDetails}/>}>
        <button>Download</button>
      </PDFDownloadLink>
    </div>
  );
};

export default PdfViewer;
